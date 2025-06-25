
    // --- Canvas and Three.js Setup ---
    const canvas = document.getElementById("ca-shaderCanvas");
    const container = document.querySelector(".creative-section");

    function resizeCanvas() {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      renderer.setSize(rect.width, rect.height);
      material.uniforms.iResolution.value.set(rect.width, rect.height);
    }

    // Initial canvas size
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvas
    });
    renderer.setSize(canvas.width, canvas.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // --- Shader ---
    let mouseX = 0.0;
    let mouseY = 0.0;
    let irisColor = new THREE.Vector3(0.6, 1.0, 0.6); // Matrix green

    const geometry = new THREE.PlaneGeometry(2, 2);

    // DIGITAL PIXEL MATRIX IRIS SHADER (iris always perfectly circular)
    const fragmentShader = `
    precision mediump float;
    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec2 iMouse;
    uniform vec3 irisColor;

    const vec3 PUPIL_COL = vec3(0.0, 0.0, 0.0);
    const float BASE_SIZE = 0.85; // Prevent cutoff
    const float BASE_PUPIL = BASE_SIZE * 0.3;
    const float NOISE = 20.5;
    const float PIXEL_SIZE = 0.007;

    vec3 hue(vec3 col, float hue) {
        return mix(vec3(dot(vec3(0.333), col)), col, cos(hue)) + cross(vec3(0.577), col) * sin(hue);
    }

    float hash12(vec2 p) {
        vec3 p3 = fract(p.xyx * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
    }
    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f *= f * f * (f * (6.0 * f - 15.0) + 10.0);
        float res = mix(
            mix(hash12(i), hash12(i + vec2(1, 0)), f.x),
            mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1)), f.x), f.y);
        return res;    
    }

    void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        // Always use min(iResolution.x, iResolution.y) for a perfect circle
        float minRes = min(iResolution.x, iResolution.y);
        vec2 uv = (fragCoord - 0.5 * iResolution.xy) / minRes * 2.0;

        // Pixelation for digital effect
        vec2 pixelatedUV = floor(uv / PIXEL_SIZE) * PIXEL_SIZE + PIXEL_SIZE * 0.5;

        float size = BASE_SIZE;
        float pupilSize = BASE_PUPIL * (0.1 * sin(iTime * 2.0) + 0.9);

        float l = length(pixelatedUV);
        float f = length(fwidth(pixelatedUV)) * 5.0;
        if (l > size + f) {
            gl_FragColor = vec4(0,0,0,0);
            return;
        }

        // Mouse offset for pupil movement (keep within circle)
        vec2 pupilOffset = (iMouse - 0.5) * 0.2 * size;
        pixelatedUV -= pupilOffset;

        float nl = max(0.0, l - pupilSize) / (size - pupilSize);
        float bump = (nl * (1.0 - nl));
        float a = atan(pixelatedUV.y, pixelatedUV.x) + bump * 0.3;
        float sl = 0.5 + 0.5 * sqrt(l);
        vec2 nv = vec2(cos(a), sin(a)) * sl;
        float rl = (1.0 - nl * nl * nl);

        float iris_exposure = rl * (noise(nv * NOISE + iTime * 0.5) - 0.5);
        nv = vec2(cos(a + 0.1), sin(a + 0.1)) * sl;
        float iris_brightness = rl * (noise(nv * NOISE - iTime * 0.5) - 0.5);
        nl = max(0.0, l - pupilSize) / (size - pupilSize);

        float iris = smoothstep(size + f, size - f, l);
        float m = 0.1;
        float pupil = smoothstep(pupilSize + m * (0.5 + iris_exposure), pupilSize - m * (0.5 + iris_brightness), l);

        vec3 iris_col = (iris_exposure + 1.0) * irisColor;
        iris_col *= 0.8 + 0.4 * hash12(floor(pixelatedUV * 10.0) + floor(iTime * 2.0));

        vec3 pupil_col = PUPIL_COL;

        iris_brightness = smoothstep(0.0, 1.0, abs(iris_brightness));
        iris_col = mix(iris_col, iris_exposure + vec3(1), iris_brightness * 2.0);
        iris_col += 2.0 * abs(iris_exposure - iris_brightness) * (1.0 - nl) * nl;
        iris_col *= smoothstep(1.3, 0.7, nl);

        float hn = noise(pixelatedUV * 2.5) - 0.5;
        iris_col = hue(iris_col, 0.4 * hn + sin(iTime) * 0.1);

        float gloss = noise(pixelatedUV * (1.0 - nl) * 12.5);
        gloss *= gloss;
        gloss = smoothstep(0.2, 0.8, gloss);
        gloss *= gloss * rl;
        gloss *= (smoothstep(3.1, 1.1, a) * smoothstep(-0.5, 0.9, a) * 0.9 +
                  smoothstep(-3.1, -2.1, a) * smoothstep(0.4, -1.4, a) * 0.5);
        iris_col += gloss * 1.5;

        iris_col += rl * iris_exposure * (1.0 - rl);

        float he = noise(hn * 3.0 - pixelatedUV * 6.0) + noise(hn * 4.0 + pixelatedUV * 12.0) * 0.5;
        he = sqrt(he);
        iris_col = hue(iris_col, he - 0.5);

        vec3 col = mix(iris_col, pupil_col, pupil);
        col *= iris;

        // Digital matrix green "scanlines"
        float scanline = 0.7 + 0.3 * sin(pixelatedUV.y * 120.0 + iTime * 2.0);
        col *= scanline;

        gl_FragColor = vec4(col, iris);
    }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: fragmentShader,
      uniforms: {
        iResolution: { value: new THREE.Vector2(canvas.width, canvas.height) },
        iTime: { value: 0.0 },
        iMouse: { value: new THREE.Vector2(0.0, 0.0) },
        irisColor: { value: irisColor }
      },
      transparent: true
    });

    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    // Mouse movement
    container.addEventListener("mousemove", (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (event.clientY - rect.top) / rect.height;
      material.uniforms.iMouse.value.set(mouseX, mouseY);
    });

    // Click handler to randomize iris color (matrix greenish)
    container.addEventListener("click", () => {
      generateRandomIrisColor();
    });

    // Function to generate random Matrix-style color
    function generateRandomIrisColor() {
      let g = 0.8 + Math.random() * 0.2;
      irisColor = new THREE.Vector3(
        0.2 + Math.random() * 0.2, 
        g, 
        0.2 + Math.random() * 0.2
      );
      material.uniforms.irisColor.value = irisColor;
    }

    // Auto color change every 5 seconds (increased frequency)
    setInterval(() => {
      generateRandomIrisColor();
    }, 5000); // Changed from 15000 to 5000 ms

    // Animation loop
    function animate() {
      material.uniforms.iTime.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Responsive
    window.addEventListener('resize', resizeCanvas);

    // --- Text Animation ---
    const header = document.querySelector('.creative-section header h1');
    const subheader = document.querySelector('.creative-section header p');
    const tenetBlocks = document.querySelectorAll('.ca-tenet-block');
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = scrollY;

      const headerRect = header.getBoundingClientRect();
      // Changed threshold from 0.8 to 0.9 for earlier appearance
      if (headerRect.top < window.innerHeight * 0.9 && headerRect.bottom > 0) {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        subheader.style.opacity = '1';
        subheader.style.transform = 'translateY(0)';
      } else if (scrollDirection === 'up') {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        subheader.style.opacity = '0';
        subheader.style.transform = 'translateY(20px)';
      }

      tenetBlocks.forEach(block => {
        const rect = block.getBoundingClientRect();
        // Changed threshold from 0.8 to 0.9 for earlier appearance
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          block.classList.add('visible');
        } else if (scrollDirection === 'up') {
          block.classList.remove('visible');
        }
      });
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  