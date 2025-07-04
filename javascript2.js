(() => {
    function mt(o) {
        if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return o;
    }
    function er(o, t) {
        (o.prototype = Object.create(t.prototype)), (o.prototype.constructor = o), (o.__proto__ = t);
    }
    var it = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        Qt = { duration: 0.5, overwrite: !1, delay: 0 },
        hi,
        j,
        U,
        ot = 1e8,
        M = 1 / ot,
        Je = Math.PI * 2,
        pn = Je / 4,
        mn = 0,
        ir = Math.sqrt,
        gn = Math.cos,
        yn = Math.sin,
        $ = function (t) {
            return typeof t == "string";
        },
        z = function (t) {
            return typeof t == "function";
        },
        yt = function (t) {
            return typeof t == "number";
        },
        Fe = function (t) {
            return typeof t > "u";
        },
        ct = function (t) {
            return typeof t == "object";
        },
        et = function (t) {
            return t !== !1;
        },
        rr = function () {
            return typeof window < "u";
        },
        Se = function (t) {
            return z(t) || $(t);
        },
        nr = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
        G = Array.isArray,
        ti = /(?:-?\.?\d|\.)+/gi,
        li = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        It = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        qe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ci = /[+-]=-?[.\d]+/,
        sr = /[^,'"\[\]\s]+/gi,
        xn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        R,
        st,
        ei,
        _i,
        rt = {},
        ke = {},
        or,
        ar = function (t) {
            return (ke = Bt(t, rt)) && Q;
        },
        Le = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        },
        Ee = function (t, e) {
            return !e && console.warn(t);
        },
        ur = function (t, e) {
            return (t && (rt[t] = e) && ke && (ke[t] = e)) || rt;
        },
        pe = function () {
            return 0;
        },
        vn = { suppressEvents: !0, isStart: !0, kill: !1 },
        Ce = { suppressEvents: !0, kill: !1 },
        Tn = { suppressEvents: !0 },
        di = {},
        Ct = [],
        ii = {},
        fr,
        J = {},
        je = {},
        Gi = 30,
        Pe = [],
        pi = "",
        mi = function (t) {
            var e = t[0],
                i,
                r;
            if ((ct(e) || z(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
                for (r = Pe.length; r-- && !Pe[r].targetTest(e); );
                i = Pe[r];
            }
            for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new xi(t[r], i)))) || t.splice(r, 1);
            return t;
        },
        Pt = function (t) {
            return t._gsap || mi(at(t))[0]._gsap;
        },
        gi = function (t, e, i) {
            return (i = t[e]) && z(i) ? t[e]() : (Fe(i) && t.getAttribute && t.getAttribute(e)) || i;
        },
        K = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
        },
        N = function (t) {
            return Math.round(t * 1e5) / 1e5 || 0;
        },
        Y = function (t) {
            return Math.round(t * 1e7) / 1e7 || 0;
        },
        Vt = function (t, e) {
            var i = e.charAt(0),
                r = parseFloat(e.substr(2));
            return (t = parseFloat(t)), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
        },
        wn = function (t, e) {
            for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
            return r < i;
        },
        Me = function () {
            var t = Ct.length,
                e = Ct.slice(0),
                i,
                r;
            for (ii = {}, Ct.length = 0, i = 0; i < t; i++) (r = e[i]), r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
        },
        hr = function (t, e, i, r) {
            Ct.length && !j && Me(), t.render(e, i, r || (j && e < 0 && (t._initted || t._startAt))), Ct.length && !j && Me();
        },
        lr = function (t) {
            var e = parseFloat(t);
            return (e || e === 0) && (t + "").match(sr).length < 2 ? e : $(t) ? t.trim() : t;
        },
        cr = function (t) {
            return t;
        },
        ft = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
        },
        bn = function (t) {
            return function (e, i) {
                for (var r in i) r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
            };
        },
        Bt = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        Hi = function o(t, e) {
            for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ct(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
            return t;
        },
        De = function (t, e) {
            var i = {},
                r;
            for (r in t) r in e || (i[r] = t[r]);
            return i;
        },
        ce = function (t) {
            var e = t.parent || R,
                i = t.keyframes ? bn(G(t.keyframes)) : ft;
            if (et(t.inherit)) for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
        },
        Sn = function (t, e) {
            for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
            return i < 0;
        },
        _r = function (t, e, i, r, n) {
            i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
            var s = t[r],
                a;
            if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
            return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = s), (e.parent = e._dp = t), e;
        },
        ze = function (t, e, i, r) {
            i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
            var n = e._prev,
                s = e._next;
            n ? (n._next = s) : t[i] === e && (t[i] = s), s ? (s._prev = n) : t[r] === e && (t[r] = n), (e._next = e._prev = e.parent = null);
        },
        Ot = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
        },
        zt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
            return t;
        },
        Cn = function (t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
        },
        ri = function (t, e, i, r) {
            return t._startAt && (j ? t._startAt.revert(Ce) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, r));
        },
        Pn = function o(t) {
            return !t || (t._ts && o(t.parent));
        },
        Qi = function (t) {
            return t._repeat ? Kt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
        },
        Kt = function (t, e) {
            var i = Math.floor((t /= e));
            return t && i === t ? i - 1 : i;
        },
        Ae = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        },
        Ne = function (t) {
            return (t._end = Y(t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0)));
        },
        Be = function (t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && ((t._start = Y(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Ne(t), i._dirty || zt(i, t)), t;
        },
        dr = function (t, e) {
            var i;
            if (((e._time || (e._initted && !e._dur)) && ((i = Ae(t.rawTime(), e)), (!e._dur || ge(0, e.totalDuration(), i) - e._tTime > M) && e.render(i, !0)), zt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                if (t._dur < t.duration()) for (i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
                t._zTime = -M;
            }
        },
        lt = function (t, e, i, r) {
            return (
                e.parent && Ot(e),
                (e._start = Y((yt(i) ? i : i || t !== R ? nt(t, i, e) : t._time) + e._delay)),
                (e._end = Y(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                _r(t, e, "_first", "_last", t._sort ? "_start" : 0),
                ni(e) || (t._recent = e),
                r || dr(t, e),
                t._ts < 0 && Be(t, t._tTime),
                t
            );
        },
        pr = function (t, e) {
            return (rt.ScrollTrigger || Le("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t);
        },
        mr = function (t, e, i, r, n) {
            if ((wi(t, e, n), !t._initted)) return 1;
            if (!i && t._pt && !j && ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) && fr !== tt.frame) return Ct.push(t), (t._lazy = [n, r]), 1;
        },
        On = function o(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
        },
        ni = function (t) {
            var e = t.data;
            return e === "isFromStart" || e === "isStart";
        },
        kn = function (t, e, i, r) {
            var n = t.ratio,
                s = e < 0 || (!e && ((!t._start && On(t) && !(!t._initted && ni(t))) || ((t._ts < 0 || t._dp._ts < 0) && !ni(t)))) ? 0 : 1,
                a = t._rDelay,
                u = 0,
                f,
                h,
                c;
            if (
                (a && t._repeat && ((u = ge(0, t._tDur, e)), (h = Kt(u, a)), t._yoyo && h & 1 && (s = 1 - s), h !== Kt(t._tTime, a) && ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
                s !== n || j || r || t._zTime === M || (!e && t._zTime))
            ) {
                if (!t._initted && mr(t, e, r, i, u)) return;
                for (c = t._zTime, t._zTime = e || (i ? M : 0), i || (i = e && !c), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; ) f.r(s, f.d), (f = f._next);
                e < 0 && ri(t, e, i, !0),
                    t._onUpdate && !i && ut(t, "onUpdate"),
                    u && t._repeat && !i && t.parent && ut(t, "onRepeat"),
                    (e >= t._tDur || e < 0) && t.ratio === s && (s && Ot(t, 1), !i && !j && (ut(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
        },
        En = function (t, e, i) {
            var r;
            if (i > e)
                for (r = t._first; r && r._start <= i; ) {
                    if (r.data === "isPause" && r._start > e) return r;
                    r = r._next;
                }
            else
                for (r = t._last; r && r._start >= i; ) {
                    if (r.data === "isPause" && r._start < e) return r;
                    r = r._prev;
                }
        },
        Zt = function (t, e, i, r) {
            var n = t._repeat,
                s = Y(e) || 0,
                a = t._tTime / t._tDur;
            return a && !r && (t._time *= s / t._dur), (t._dur = s), (t._tDur = n ? (n < 0 ? 1e10 : Y(s * (n + 1) + t._rDelay * n)) : s), a > 0 && !r && Be(t, (t._tTime = t._tDur * a)), t.parent && Ne(t), i || zt(t.parent, t), t;
        },
        Ki = function (t) {
            return t instanceof q ? zt(t) : Zt(t, t._dur);
        },
        Mn = { _start: 0, endTime: pe, totalDuration: pe },
        nt = function o(t, e, i) {
            var r = t.labels,
                n = t._recent || Mn,
                s = t.duration() >= ot ? n.endTime(!1) : t._dur,
                a,
                u,
                f;
            return $(e) && (isNaN(e) || e in r)
                ? ((u = e.charAt(0)),
                  (f = e.substr(-1) === "%"),
                  (a = e.indexOf("=")),
                  u === "<" || u === ">"
                      ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1))
                      : a < 0
                      ? (e in r || (r[e] = s), r[e])
                      : ((u = parseFloat(e.charAt(a - 1) + e.substr(a + 1))), f && i && (u = (u / 100) * (G(i) ? i[0] : i).totalDuration()), a > 1 ? o(t, e.substr(0, a - 1), i) + u : s + u))
                : e == null
                ? s
                : +e;
        },
        _e = function (t, e, i) {
            var r = yt(e[1]),
                n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
                s = e[n],
                a,
                u;
            if ((r && (s.duration = e[1]), (s.parent = i), t)) {
                for (a = s, u = i; u && !("immediateRender" in a); ) (a = u.vars.defaults || {}), (u = et(u.vars.inherit) && u.parent);
                (s.immediateRender = et(a.immediateRender)), t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
            }
            return new V(e[0], s, e[n + 1]);
        },
        kt = function (t, e) {
            return t || t === 0 ? e(t) : e;
        },
        ge = function (t, e, i) {
            return i < t ? t : i > e ? e : i;
        },
        X = function (t, e) {
            return !$(t) || !(e = xn.exec(t)) ? "" : e[1];
        },
        Dn = function (t, e, i) {
            return kt(i, function (r) {
                return ge(t, e, r);
            });
        },
        si = [].slice,
        gr = function (t, e) {
            return t && ct(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && ct(t[0]))) && !t.nodeType && t !== st;
        },
        An = function (t, e, i) {
            return (
                i === void 0 && (i = []),
                t.forEach(function (r) {
                    var n;
                    return ($(r) && !e) || gr(r, 1) ? (n = i).push.apply(n, at(r)) : i.push(r);
                }) || i
            );
        },
        at = function (t, e, i) {
            return U && !e && U.selector ? U.selector(t) : $(t) && !i && (ei || !Jt()) ? si.call((e || _i).querySelectorAll(t), 0) : G(t) ? An(t, i) : gr(t) ? si.call(t, 0) : t ? [t] : [];
        },
        oi = function (t) {
            return (
                (t = at(t)[0] || Ee("Invalid scope") || {}),
                function (e) {
                    var i = t.current || t.nativeElement || t;
                    return at(e, i.querySelectorAll ? i : i === t ? Ee("Invalid scope") || _i.createElement("div") : t);
                }
            );
        },
        yr = function (t) {
            return t.sort(function () {
                return 0.5 - Math.random();
            });
        },
        xr = function (t) {
            if (z(t)) return t;
            var e = ct(t) ? t : { each: t },
                i = Nt(e.ease),
                r = e.from || 0,
                n = parseFloat(e.base) || 0,
                s = {},
                a = r > 0 && r < 1,
                u = isNaN(r) || a,
                f = e.axis,
                h = r,
                c = r;
            return (
                $(r) ? (h = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !a && u && ((h = r[0]), (c = r[1])),
                function (_, d, p) {
                    var l = (p || e).length,
                        m = s[l],
                        x,
                        v,
                        T,
                        y,
                        g,
                        S,
                        C,
                        b,
                        w;
                    if (!m) {
                        if (((w = e.grid === "auto" ? 0 : (e.grid || [1, ot])[1]), !w)) {
                            for (C = -ot; C < (C = p[w++].getBoundingClientRect().left) && w < l; );
                            w--;
                        }
                        for (m = s[l] = [], x = u ? Math.min(w, l) * h - 0.5 : r % w, v = w === ot ? 0 : u ? (l * c) / w - 0.5 : (r / w) | 0, C = 0, b = ot, S = 0; S < l; S++)
                            (T = (S % w) - x), (y = v - ((S / w) | 0)), (m[S] = g = f ? Math.abs(f === "y" ? y : T) : ir(T * T + y * y)), g > C && (C = g), g < b && (b = g);
                        r === "random" && yr(m),
                            (m.max = C - b),
                            (m.min = b),
                            (m.v = l = (parseFloat(e.amount) || parseFloat(e.each) * (w > l ? l - 1 : f ? (f === "y" ? l / w : w) : Math.max(w, l / w)) || 0) * (r === "edges" ? -1 : 1)),
                            (m.b = l < 0 ? n - l : n),
                            (m.u = X(e.amount || e.each) || 0),
                            (i = i && l < 0 ? Pr(i) : i);
                    }
                    return (l = (m[_] - m.min) / m.max || 0), Y(m.b + (i ? i(l) : l) * m.v) + m.u;
                }
            );
        },
        ai = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (i) {
                var r = Y(Math.round(parseFloat(i) / t) * t * e);
                return (r - (r % 1)) / e + (yt(i) ? 0 : X(i));
            };
        },
        vr = function (t, e) {
            var i = G(t),
                r,
                n;
            return (
                !i && ct(t) && ((r = i = t.radius || ot), t.values ? ((t = at(t.values)), (n = !yt(t[0])) && (r *= r)) : (t = ai(t.increment))),
                kt(
                    e,
                    i
                        ? z(t)
                            ? function (s) {
                                  return (n = t(s)), Math.abs(n - s) <= r ? n : s;
                              }
                            : function (s) {
                                  for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = ot, h = 0, c = t.length, _, d; c--; )
                                      n ? ((_ = t[c].x - a), (d = t[c].y - u), (_ = _ * _ + d * d)) : (_ = Math.abs(t[c] - a)), _ < f && ((f = _), (h = c));
                                  return (h = !r || f <= r ? t[h] : s), n || h === s || yt(s) ? h : h + X(s);
                              }
                        : ai(t)
                )
            );
        },
        Tr = function (t, e, i, r) {
            return kt(G(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
                return G(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
            });
        },
        Rn = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return function (r) {
                return e.reduce(function (n, s) {
                    return s(n);
                }, r);
            };
        },
        Fn = function (t, e) {
            return function (i) {
                return t(parseFloat(i)) + (e || X(i));
            };
        },
        Ln = function (t, e, i) {
            return br(t, e, 0, 1, i);
        },
        wr = function (t, e, i) {
            return kt(i, function (r) {
                return t[~~e(r)];
            });
        },
        zn = function o(t, e, i) {
            var r = e - t;
            return G(t)
                ? wr(t, o(0, t.length), e)
                : kt(i, function (n) {
                      return ((r + ((n - t) % r)) % r) + t;
                  });
        },
        Nn = function o(t, e, i) {
            var r = e - t,
                n = r * 2;
            return G(t)
                ? wr(t, o(0, t.length - 1), e)
                : kt(i, function (s) {
                      return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
                  });
        },
        ie = function (t) {
            for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
                (s = t.indexOf(")", r)), (a = t.charAt(r + 7) === "["), (n = t.substr(r + 7, s - r - 7).match(a ? sr : ti)), (i += t.substr(e, r - e) + Tr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)), (e = s + 1);
            return i + t.substr(e, t.length - e);
        },
        br = function (t, e, i, r, n) {
            var s = e - t,
                a = r - i;
            return kt(n, function (u) {
                return i + (((u - t) / s) * a || 0);
            });
        },
        Bn = function o(t, e, i, r) {
            var n = isNaN(t + e)
                ? 0
                : function (d) {
                      return (1 - d) * t + d * e;
                  };
            if (!n) {
                var s = $(t),
                    a = {},
                    u,
                    f,
                    h,
                    c,
                    _;
                if ((i === !0 && (r = 1) && (i = null), s)) (t = { p: t }), (e = { p: e });
                else if (G(t) && !G(e)) {
                    for (h = [], c = t.length, _ = c - 2, f = 1; f < c; f++) h.push(o(t[f - 1], t[f]));
                    c--,
                        (n = function (p) {
                            p *= c;
                            var l = Math.min(_, ~~p);
                            return h[l](p - l);
                        }),
                        (i = e);
                } else r || (t = Bt(G(t) ? [] : {}, t));
                if (!h) {
                    for (u in e) vi.call(a, t, u, "get", e[u]);
                    n = function (p) {
                        return Ci(p, a) || (s ? t.p : t);
                    };
                }
            }
            return kt(i, n);
        },
        Zi = function (t, e, i) {
            var r = t.labels,
                n = ot,
                s,
                a,
                u;
            for (s in r) (a = r[s] - e), a < 0 == !!i && a && n > (a = Math.abs(a)) && ((u = s), (n = a));
            return u;
        },
        ut = function (t, e, i) {
            var r = t.vars,
                n = r[e],
                s = U,
                a = t._ctx,
                u,
                f,
                h;
            if (n) return (u = r[e + "Params"]), (f = r.callbackScope || t), i && Ct.length && Me(), a && (U = a), (h = u ? n.apply(f, u) : n.call(f)), (U = s), h;
        },
        he = function (t) {
            return Ot(t), t.scrollTrigger && t.scrollTrigger.kill(!!j), t.progress() < 1 && ut(t, "onInterrupt"), t;
        },
        Ht,
        In = function (t) {
            t = (!t.name && t.default) || t;
            var e = t.name,
                i = z(t),
                r =
                    e && !i && t.init
                        ? function () {
                              this._props = [];
                          }
                        : t,
                n = { init: pe, render: Ci, add: vi, kill: es, modifier: ts, rawVars: 0 },
                s = { targetTest: 0, get: 0, getSetter: Ie, aliases: {}, register: 0 };
            if ((Jt(), t !== r)) {
                if (J[e]) return;
                ft(r, ft(De(t, n), s)), Bt(r.prototype, Bt(n, De(t, s))), (J[(r.prop = e)] = r), t.targetTest && (Pe.push(r), (di[e] = 1)), (e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            ur(e, r), t.register && t.register(Q, r, Z);
        },
        E = 255,
        le = {
            aqua: [0, E, E],
            lime: [0, E, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, E],
            navy: [0, 0, 128],
            white: [E, E, E],
            olive: [128, 128, 0],
            yellow: [E, E, 0],
            orange: [E, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [E, 0, 0],
            pink: [E, 192, 203],
            cyan: [0, E, E],
            transparent: [E, E, E, 0],
        },
        Ge = function (t, e, i) {
            return (t += t < 0 ? 1 : t > 1 ? -1 : 0), ((t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * E + 0.5) | 0;
        },
        Sr = function (t, e, i) {
            var r = t ? (yt(t) ? [t >> 16, (t >> 8) & E, t & E] : 0) : le.black,
                n,
                s,
                a,
                u,
                f,
                h,
                c,
                _,
                d,
                p;
            if (!r) {
                if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), le[t])) r = le[t];
                else if (t.charAt(0) === "#") {
                    if ((t.length < 6 && ((n = t.charAt(1)), (s = t.charAt(2)), (a = t.charAt(3)), (t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))), t.length === 9))
                        return (r = parseInt(t.substr(1, 6), 16)), [r >> 16, (r >> 8) & E, r & E, parseInt(t.substr(7), 16) / 255];
                    (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & E, t & E]);
                } else if (t.substr(0, 3) === "hsl") {
                    if (((r = p = t.match(ti)), !e))
                        (u = (+r[0] % 360) / 360),
                            (f = +r[1] / 100),
                            (h = +r[2] / 100),
                            (s = h <= 0.5 ? h * (f + 1) : h + f - h * f),
                            (n = h * 2 - s),
                            r.length > 3 && (r[3] *= 1),
                            (r[0] = Ge(u + 1 / 3, n, s)),
                            (r[1] = Ge(u, n, s)),
                            (r[2] = Ge(u - 1 / 3, n, s));
                    else if (~t.indexOf("=")) return (r = t.match(li)), i && r.length < 4 && (r[3] = 1), r;
                } else r = t.match(ti) || le.transparent;
                r = r.map(Number);
            }
            return (
                e &&
                    !p &&
                    ((n = r[0] / E),
                    (s = r[1] / E),
                    (a = r[2] / E),
                    (c = Math.max(n, s, a)),
                    (_ = Math.min(n, s, a)),
                    (h = (c + _) / 2),
                    c === _ ? (u = f = 0) : ((d = c - _), (f = h > 0.5 ? d / (2 - c - _) : d / (c + _)), (u = c === n ? (s - a) / d + (s < a ? 6 : 0) : c === s ? (a - n) / d + 2 : (n - s) / d + 4), (u *= 60)),
                    (r[0] = ~~(u + 0.5)),
                    (r[1] = ~~(f * 100 + 0.5)),
                    (r[2] = ~~(h * 100 + 0.5))),
                i && r.length < 4 && (r[3] = 1),
                r
            );
        },
        Cr = function (t) {
            var e = [],
                i = [],
                r = -1;
            return (
                t.split(gt).forEach(function (n) {
                    var s = n.match(It) || [];
                    e.push.apply(e, s), i.push((r += s.length + 1));
                }),
                (e.c = i),
                e
            );
        },
        Ji = function (t, e, i) {
            var r = "",
                n = (t + r).match(gt),
                s = e ? "hsla(" : "rgba(",
                a = 0,
                u,
                f,
                h,
                c;
            if (!n) return t;
            if (
                ((n = n.map(function (_) {
                    return (_ = Sr(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
                })),
                i && ((h = Cr(t)), (u = i.c), u.join(r) !== h.c.join(r)))
            )
                for (f = t.replace(gt, "1").split(It), c = f.length - 1; a < c; a++) r += f[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
            if (!f) for (f = t.split(gt), c = f.length - 1; a < c; a++) r += f[a] + n[a];
            return r + f[c];
        },
        gt = (function () {
            var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                t;
            for (t in le) o += "|" + t + "\\b";
            return new RegExp(o + ")", "gi");
        })(),
        Vn = /hsl[a]?\(/,
        yi = function (t) {
            var e = t.join(" "),
                i;
            if (((gt.lastIndex = 0), gt.test(e))) return (i = Vn.test(e)), (t[1] = Ji(t[1], i)), (t[0] = Ji(t[0], i, Cr(t[1]))), !0;
        },
        me,
        tt = (function () {
            var o = Date.now,
                t = 500,
                e = 33,
                i = o(),
                r = i,
                n = 1e3 / 240,
                s = n,
                a = [],
                u,
                f,
                h,
                c,
                _,
                d,
                p = function l(m) {
                    var x = o() - r,
                        v = m === !0,
                        T,
                        y,
                        g,
                        S;
                    if ((x > t && (i += x - e), (r += x), (g = r - i), (T = g - s), (T > 0 || v) && ((S = ++c.frame), (_ = g - c.time * 1e3), (c.time = g = g / 1e3), (s += T + (T >= n ? 4 : n - T)), (y = 1)), v || (u = f(l)), y))
                        for (d = 0; d < a.length; d++) a[d](g, _, S, m);
                };
            return (
                (c = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        p(!0);
                    },
                    deltaRatio: function (m) {
                        return _ / (1e3 / (m || 60));
                    },
                    wake: function () {
                        or &&
                            (!ei &&
                                rr() &&
                                ((st = ei = window),
                                (_i = st.document || {}),
                                (rt.gsap = Q),
                                (st.gsapVersions || (st.gsapVersions = [])).push(Q.version),
                                ar(ke || st.GreenSockGlobals || (!st.gsap && st) || {}),
                                (h = st.requestAnimationFrame)),
                            u && c.sleep(),
                            (f =
                                h ||
                                function (m) {
                                    return setTimeout(m, (s - c.time * 1e3 + 1) | 0);
                                }),
                            (me = 1),
                            p(2));
                    },
                    sleep: function () {
                        (h ? st.cancelAnimationFrame : clearTimeout)(u), (me = 0), (f = pe);
                    },
                    lagSmoothing: function (m, x) {
                        (t = m || 1 / 0), (e = Math.min(x || 33, t));
                    },
                    fps: function (m) {
                        (n = 1e3 / (m || 240)), (s = c.time * 1e3 + n);
                    },
                    add: function (m, x, v) {
                        var T = x
                            ? function (y, g, S, C) {
                                  m(y, g, S, C), c.remove(T);
                              }
                            : m;
                        return c.remove(m), a[v ? "unshift" : "push"](T), Jt(), T;
                    },
                    remove: function (m, x) {
                        ~(x = a.indexOf(m)) && a.splice(x, 1) && d >= x && d--;
                    },
                    _listeners: a,
                }),
                c
            );
        })(),
        Jt = function () {
            return !me && tt.wake();
        },
        k = {},
        Un = /^[\d.\-M][\d.\-,\s]/,
        Wn = /["']/g,
        $n = function (t) {
            for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, u, f; n < s; n++)
                (u = i[n]), (a = n !== s - 1 ? u.lastIndexOf(",") : u.length), (f = u.substr(0, a)), (e[r] = isNaN(f) ? f.replace(Wn, "").trim() : +f), (r = u.substr(a + 1).trim());
            return e;
        },
        Yn = function (t) {
            var e = t.indexOf("(") + 1,
                i = t.indexOf(")"),
                r = t.indexOf("(", e);
            return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
        },
        Xn = function (t) {
            var e = (t + "").split("("),
                i = k[e[0]];
            return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [$n(e[1])] : Yn(t).split(",").map(lr)) : k._CE && Un.test(t) ? k._CE("", t) : i;
        },
        Pr = function (t) {
            return function (e) {
                return 1 - t(1 - e);
            };
        },
        Or = function o(t, e) {
            for (var i = t._first, r; i; )
                i instanceof q ? o(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = e))), (i = i._next);
        },
        Nt = function (t, e) {
            return (t && (z(t) ? t : k[t] || Xn(t))) || e;
        },
        Ut = function (t, e, i, r) {
            i === void 0 &&
                (i = function (u) {
                    return 1 - e(1 - u);
                }),
                r === void 0 &&
                    (r = function (u) {
                        return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
                    });
            var n = { easeIn: e, easeOut: i, easeInOut: r },
                s;
            return (
                K(t, function (a) {
                    (k[a] = rt[a] = n), (k[(s = a.toLowerCase())] = i);
                    for (var u in n) k[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = k[a + "." + u] = n[u];
                }),
                n
            );
        },
        kr = function (t) {
            return function (e) {
                return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
            };
        },
        He = function o(t, e, i) {
            var r = e >= 1 ? e : 1,
                n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
                s = (n / Je) * (Math.asin(1 / r) || 0),
                a = function (h) {
                    return h === 1 ? 1 : r * Math.pow(2, -10 * h) * yn((h - s) * n) + 1;
                },
                u =
                    t === "out"
                        ? a
                        : t === "in"
                        ? function (f) {
                              return 1 - a(1 - f);
                          }
                        : kr(a);
            return (
                (n = Je / n),
                (u.config = function (f, h) {
                    return o(t, f, h);
                }),
                u
            );
        },
        Qe = function o(t, e) {
            e === void 0 && (e = 1.70158);
            var i = function (s) {
                    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
                },
                r =
                    t === "out"
                        ? i
                        : t === "in"
                        ? function (n) {
                              return 1 - i(1 - n);
                          }
                        : kr(i);
            return (
                (r.config = function (n) {
                    return o(t, n);
                }),
                r
            );
        };
    K("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, t) {
        var e = t < 5 ? t + 1 : t;
        Ut(
            o + ",Power" + (e - 1),
            t
                ? function (i) {
                      return Math.pow(i, e);
                  }
                : function (i) {
                      return i;
                  },
            function (i) {
                return 1 - Math.pow(1 - i, e);
            },
            function (i) {
                return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
            }
        );
    });
    k.Linear.easeNone = k.none = k.Linear.easeIn;
    Ut("Elastic", He("in"), He("out"), He());
    (function (o, t) {
        var e = 1 / t,
            i = 2 * e,
            r = 2.5 * e,
            n = function (a) {
                return a < e ? o * a * a : a < i ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
            };
        Ut(
            "Bounce",
            function (s) {
                return 1 - n(1 - s);
            },
            n
        );
    })(7.5625, 2.75);
    Ut("Expo", function (o) {
        return o ? Math.pow(2, 10 * (o - 1)) : 0;
    });
    Ut("Circ", function (o) {
        return -(ir(1 - o * o) - 1);
    });
    Ut("Sine", function (o) {
        return o === 1 ? 1 : -gn(o * pn) + 1;
    });
    Ut("Back", Qe("in"), Qe("out"), Qe());
    k.SteppedEase = k.steps = rt.SteppedEase = {
        config: function (t, e) {
            t === void 0 && (t = 1);
            var i = 1 / t,
                r = t + (e ? 0 : 1),
                n = e ? 1 : 0,
                s = 1 - M;
            return function (a) {
                return (((r * ge(0, s, a)) | 0) + n) * i;
            };
        },
    };
    Qt.ease = k["quad.out"];
    K("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (o) {
        return (pi += o + "," + o + "Params,");
    });
    var xi = function (t, e) {
            (this.id = mn++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : gi), (this.set = e ? e.getSetter : Ie);
        },
        te = (function () {
            function o(e) {
                (this.vars = e),
                    (this._delay = +e.delay || 0),
                    (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
                    (this._ts = 1),
                    Zt(this, +e.duration, 1, 1),
                    (this.data = e.data),
                    U && ((this._ctx = U), U.data.push(this)),
                    me || tt.wake();
            }
            var t = o.prototype;
            return (
                (t.delay = function (i) {
                    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), (this._delay = i), this) : this._delay;
                }),
                (t.duration = function (i) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
                }),
                (t.totalDuration = function (i) {
                    return arguments.length ? ((this._dirty = 0), Zt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                }),
                (t.totalTime = function (i, r) {
                    if ((Jt(), !arguments.length)) return this._tTime;
                    var n = this._dp;
                    if (n && n.smoothChildTiming && this._ts) {
                        for (Be(this, i), !n._dp || n.parent || dr(n, this); n && n.parent; )
                            n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                        !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && i < this._tDur) || (this._ts < 0 && i > 0) || (!this._tDur && !i)) && lt(this._dp, this, this._start - this._delay);
                    }
                    return (this._tTime !== i || (!this._dur && !r) || (this._initted && Math.abs(this._zTime) === M) || (!i && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = i), hr(this, i, r)), this;
                }),
                (t.time = function (i, r) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Qi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
                }),
                (t.totalProgress = function (i, r) {
                    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                }),
                (t.progress = function (i, r) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Qi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                }),
                (t.iteration = function (i, r) {
                    var n = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Kt(this._tTime, n) + 1 : 1;
                }),
                (t.timeScale = function (i) {
                    if (!arguments.length) return this._rts === -M ? 0 : this._rts;
                    if (this._rts === i) return this;
                    var r = this.parent && this._ts ? Ae(this.parent._time, this) : this._tTime;
                    return (this._rts = +i || 0), (this._ts = this._ps || i === -M ? 0 : this._rts), this.totalTime(ge(-this._delay, this._tDur, r), !0), Ne(this), Cn(this);
                }),
                (t.paused = function (i) {
                    return arguments.length
                        ? (this._ps !== i &&
                              ((this._ps = i),
                              i
                                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                  : (Jt(),
                                    (this._ts = this._rts),
                                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))),
                          this)
                        : this._ps;
                }),
                (t.startTime = function (i) {
                    if (arguments.length) {
                        this._start = i;
                        var r = this.parent || this._dp;
                        return r && (r._sort || !this.parent) && lt(r, this, i - this._delay), this;
                    }
                    return this._start;
                }),
                (t.endTime = function (i) {
                    return this._start + (et(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                }),
                (t.rawTime = function (i) {
                    var r = this.parent || this._dp;
                    return r ? (i && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ae(r.rawTime(i), this) : this._tTime) : this._tTime;
                }),
                (t.revert = function (i) {
                    i === void 0 && (i = Tn);
                    var r = j;
                    return (j = i), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), (j = r), this;
                }),
                (t.globalTime = function (i) {
                    for (var r = this, n = arguments.length ? i : r.rawTime(); r; ) (n = r._start + n / (r._ts || 1)), (r = r._dp);
                    return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i)) : n;
                }),
                (t.repeat = function (i) {
                    return arguments.length ? ((this._repeat = i === 1 / 0 ? -2 : i), Ki(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
                }),
                (t.repeatDelay = function (i) {
                    if (arguments.length) {
                        var r = this._time;
                        return (this._rDelay = i), Ki(this), r ? this.time(r) : this;
                    }
                    return this._rDelay;
                }),
                (t.yoyo = function (i) {
                    return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
                }),
                (t.seek = function (i, r) {
                    return this.totalTime(nt(this, i), et(r));
                }),
                (t.restart = function (i, r) {
                    return this.play().totalTime(i ? -this._delay : 0, et(r));
                }),
                (t.play = function (i, r) {
                    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
                }),
                (t.reverse = function (i, r) {
                    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
                }),
                (t.pause = function (i, r) {
                    return i != null && this.seek(i, r), this.paused(!0);
                }),
                (t.resume = function () {
                    return this.paused(!1);
                }),
                (t.reversed = function (i) {
                    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -M : 0)), this) : this._rts < 0;
                }),
                (t.invalidate = function () {
                    return (this._initted = this._act = 0), (this._zTime = -M), this;
                }),
                (t.isActive = function () {
                    var i = this.parent || this._dp,
                        r = this._start,
                        n;
                    return !!(!i || (this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - M));
                }),
                (t.eventCallback = function (i, r, n) {
                    var s = this.vars;
                    return arguments.length > 1 ? (r ? ((s[i] = r), n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
                }),
                (t.then = function (i) {
                    var r = this;
                    return new Promise(function (n) {
                        var s = z(i) ? i : cr,
                            a = function () {
                                var f = r.then;
                                (r.then = null), z(s) && (s = s(r)) && (s.then || s === r) && (r.then = f), n(s), (r.then = f);
                            };
                        (r._initted && r.totalProgress() === 1 && r._ts >= 0) || (!r._tTime && r._ts < 0) ? a() : (r._prom = a);
                    });
                }),
                (t.kill = function () {
                    he(this);
                }),
                o
            );
        })();
    ft(te.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -M, _prom: 0, _ps: !1, _rts: 1 });
    var q = (function (o) {
        er(t, o);
        function t(i, r) {
            var n;
            return (
                i === void 0 && (i = {}),
                (n = o.call(this, i) || this),
                (n.labels = {}),
                (n.smoothChildTiming = !!i.smoothChildTiming),
                (n.autoRemoveChildren = !!i.autoRemoveChildren),
                (n._sort = et(i.sortChildren)),
                R && lt(i.parent || R, mt(n), r),
                i.reversed && n.reverse(),
                i.paused && n.paused(!0),
                i.scrollTrigger && pr(mt(n), i.scrollTrigger),
                n
            );
        }
        var e = t.prototype;
        return (
            (e.to = function (r, n, s) {
                return _e(0, arguments, this), this;
            }),
            (e.from = function (r, n, s) {
                return _e(1, arguments, this), this;
            }),
            (e.fromTo = function (r, n, s, a) {
                return _e(2, arguments, this), this;
            }),
            (e.set = function (r, n, s) {
                return (n.duration = 0), (n.parent = this), ce(n).repeatDelay || (n.repeat = 0), (n.immediateRender = !!n.immediateRender), new V(r, n, nt(this, s), 1), this;
            }),
            (e.call = function (r, n, s) {
                return lt(this, V.delayedCall(0, r, n), s);
            }),
            (e.staggerTo = function (r, n, s, a, u, f, h) {
                return (s.duration = n), (s.stagger = s.stagger || a), (s.onComplete = f), (s.onCompleteParams = h), (s.parent = this), new V(r, s, nt(this, u)), this;
            }),
            (e.staggerFrom = function (r, n, s, a, u, f, h) {
                return (s.runBackwards = 1), (ce(s).immediateRender = et(s.immediateRender)), this.staggerTo(r, n, s, a, u, f, h);
            }),
            (e.staggerFromTo = function (r, n, s, a, u, f, h, c) {
                return (a.startAt = s), (ce(a).immediateRender = et(a.immediateRender)), this.staggerTo(r, n, a, u, f, h, c);
            }),
            (e.render = function (r, n, s) {
                var a = this._time,
                    u = this._dirty ? this.totalDuration() : this._tDur,
                    f = this._dur,
                    h = r <= 0 ? 0 : Y(r),
                    c = this._zTime < 0 != r < 0 && (this._initted || !f),
                    _,
                    d,
                    p,
                    l,
                    m,
                    x,
                    v,
                    T,
                    y,
                    g,
                    S,
                    C;
                if ((this !== R && h > u && r >= 0 && (h = u), h !== this._tTime || s || c)) {
                    if ((a !== this._time && f && ((h += this._time - a), (r += this._time - a)), (_ = h), (y = this._start), (T = this._ts), (x = !T), c && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat)) {
                        if (((S = this._yoyo), (m = f + this._rDelay), this._repeat < -1 && r < 0)) return this.totalTime(m * 100 + r, n, s);
                        if (
                            ((_ = Y(h % m)),
                            h === u ? ((l = this._repeat), (_ = f)) : ((l = ~~(h / m)), l && l === h / m && ((_ = f), l--), _ > f && (_ = f)),
                            (g = Kt(this._tTime, m)),
                            !a && this._tTime && g !== l && (g = l),
                            S && l & 1 && ((_ = f - _), (C = 1)),
                            l !== g && !this._lock)
                        ) {
                            var b = S && g & 1,
                                w = b === (S && l & 1);
                            if (
                                (l < g && (b = !b),
                                (a = b ? 0 : f),
                                (this._lock = 1),
                                (this.render(a || (C ? 0 : Y(l * m)), n, !f)._lock = 0),
                                (this._tTime = h),
                                !n && this.parent && ut(this, "onRepeat"),
                                this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
                                (a && a !== this._time) || x !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                            )
                                return this;
                            if (((f = this._dur), (u = this._tDur), w && ((this._lock = 2), (a = b ? f : -1e-4), this.render(a, !0), this.vars.repeatRefresh && !C && this.invalidate()), (this._lock = 0), !this._ts && !x)) return this;
                            Or(this, C);
                        }
                    }
                    if (
                        (this._hasPause && !this._forcing && this._lock < 2 && ((v = En(this, Y(a), Y(_))), v && (h -= _ - (_ = v._start))),
                        (this._tTime = h),
                        (this._time = _),
                        (this._act = !T),
                        this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = r), (a = 0)),
                        !a && _ && !n && (ut(this, "onStart"), this._tTime !== h))
                    )
                        return this;
                    if (_ >= a && r >= 0)
                        for (d = this._first; d; ) {
                            if (((p = d._next), (d._act || _ >= d._start) && d._ts && v !== d)) {
                                if (d.parent !== this) return this.render(r, n, s);
                                if ((d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s), _ !== this._time || (!this._ts && !x))) {
                                    (v = 0), p && (h += this._zTime = -M);
                                    break;
                                }
                            }
                            d = p;
                        }
                    else {
                        d = this._last;
                        for (var P = r < 0 ? r : _; d; ) {
                            if (((p = d._prev), (d._act || P <= d._end) && d._ts && v !== d)) {
                                if (d.parent !== this) return this.render(r, n, s);
                                if ((d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, n, s || (j && (d._initted || d._startAt))), _ !== this._time || (!this._ts && !x))) {
                                    (v = 0), p && (h += this._zTime = P ? -M : M);
                                    break;
                                }
                            }
                            d = p;
                        }
                    }
                    if (v && !n && (this.pause(), (v.render(_ >= a ? 0 : -M)._zTime = _ >= a ? 1 : -1), this._ts)) return (this._start = y), Ne(this), this.render(r, n, s);
                    this._onUpdate && !n && ut(this, "onUpdate", !0),
                        ((h === u && this._tTime >= this.totalDuration()) || (!h && a)) &&
                            (y === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
                            (this._lock ||
                                ((r || !f) && ((h === u && this._ts > 0) || (!h && this._ts < 0)) && Ot(this, 1),
                                !n && !(r < 0 && !a) && (h || a || !u) && (ut(this, h === u && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < u && this.timeScale() > 0) && this._prom())));
                }
                return this;
            }),
            (e.add = function (r, n) {
                var s = this;
                if ((yt(n) || (n = nt(this, n, r)), !(r instanceof te))) {
                    if (G(r))
                        return (
                            r.forEach(function (a) {
                                return s.add(a, n);
                            }),
                            this
                        );
                    if ($(r)) return this.addLabel(r, n);
                    if (z(r)) r = V.delayedCall(0, r);
                    else return this;
                }
                return this !== r ? lt(this, r, n) : this;
            }),
            (e.getChildren = function (r, n, s, a) {
                r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -ot);
                for (var u = [], f = this._first; f; ) f._start >= a && (f instanceof V ? n && u.push(f) : (s && u.push(f), r && u.push.apply(u, f.getChildren(!0, n, s)))), (f = f._next);
                return u;
            }),
            (e.getById = function (r) {
                for (var n = this.getChildren(1, 1, 1), s = n.length; s--; ) if (n[s].vars.id === r) return n[s];
            }),
            (e.remove = function (r) {
                return $(r) ? this.removeLabel(r) : z(r) ? this.killTweensOf(r) : (ze(this, r), r === this._recent && (this._recent = this._last), zt(this));
            }),
            (e.totalTime = function (r, n) {
                return arguments.length
                    ? ((this._forcing = 1), !this._dp && this._ts && (this._start = Y(tt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), o.prototype.totalTime.call(this, r, n), (this._forcing = 0), this)
                    : this._tTime;
            }),
            (e.addLabel = function (r, n) {
                return (this.labels[r] = nt(this, n)), this;
            }),
            (e.removeLabel = function (r) {
                return delete this.labels[r], this;
            }),
            (e.addPause = function (r, n, s) {
                var a = V.delayedCall(0, n || pe, s);
                return (a.data = "isPause"), (this._hasPause = 1), lt(this, a, nt(this, r));
            }),
            (e.removePause = function (r) {
                var n = this._first;
                for (r = nt(this, r); n; ) n._start === r && n.data === "isPause" && Ot(n), (n = n._next);
            }),
            (e.killTweensOf = function (r, n, s) {
                for (var a = this.getTweensOf(r, s), u = a.length; u--; ) St !== a[u] && a[u].kill(r, n);
                return this;
            }),
            (e.getTweensOf = function (r, n) {
                for (var s = [], a = at(r), u = this._first, f = yt(n), h; u; )
                    u instanceof V
                        ? wn(u._targets, a) && (f ? (!St || (u._initted && u._ts)) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u)
                        : (h = u.getTweensOf(a, n)).length && s.push.apply(s, h),
                        (u = u._next);
                return s;
            }),
            (e.tweenTo = function (r, n) {
                n = n || {};
                var s = this,
                    a = nt(s, r),
                    u = n,
                    f = u.startAt,
                    h = u.onStart,
                    c = u.onStartParams,
                    _ = u.immediateRender,
                    d,
                    p = V.to(
                        s,
                        ft(
                            {
                                ease: n.ease || "none",
                                lazy: !1,
                                immediateRender: !1,
                                time: a,
                                overwrite: "auto",
                                duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || M,
                                onStart: function () {
                                    if ((s.pause(), !d)) {
                                        var m = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
                                        p._dur !== m && Zt(p, m, 0, 1).render(p._time, !0, !0), (d = 1);
                                    }
                                    h && h.apply(p, c || []);
                                },
                            },
                            n
                        )
                    );
                return _ ? p.render(0) : p;
            }),
            (e.tweenFromTo = function (r, n, s) {
                return this.tweenTo(n, ft({ startAt: { time: nt(this, r) } }, s));
            }),
            (e.recent = function () {
                return this._recent;
            }),
            (e.nextLabel = function (r) {
                return r === void 0 && (r = this._time), Zi(this, nt(this, r));
            }),
            (e.previousLabel = function (r) {
                return r === void 0 && (r = this._time), Zi(this, nt(this, r), 1);
            }),
            (e.currentLabel = function (r) {
                return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + M);
            }),
            (e.shiftChildren = function (r, n, s) {
                s === void 0 && (s = 0);
                for (var a = this._first, u = this.labels, f; a; ) a._start >= s && ((a._start += r), (a._end += r)), (a = a._next);
                if (n) for (f in u) u[f] >= s && (u[f] += r);
                return zt(this);
            }),
            (e.invalidate = function (r) {
                var n = this._first;
                for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
                return o.prototype.invalidate.call(this, r);
            }),
            (e.clear = function (r) {
                r === void 0 && (r = !0);
                for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
                return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), zt(this);
            }),
            (e.totalDuration = function (r) {
                var n = 0,
                    s = this,
                    a = s._last,
                    u = ot,
                    f,
                    h,
                    c;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
                if (s._dirty) {
                    for (c = s.parent; a; )
                        (f = a._prev),
                            a._dirty && a.totalDuration(),
                            (h = a._start),
                            h > u && s._sort && a._ts && !s._lock ? ((s._lock = 1), (lt(s, a, h - a._delay, 1)._lock = 0)) : (u = h),
                            h < 0 && a._ts && ((n -= h), ((!c && !s._dp) || (c && c.smoothChildTiming)) && ((s._start += h / s._ts), (s._time -= h), (s._tTime -= h)), s.shiftChildren(-h, !1, -1 / 0), (u = 0)),
                            a._end > n && a._ts && (n = a._end),
                            (a = f);
                    Zt(s, s === R && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
                }
                return s._tDur;
            }),
            (t.updateRoot = function (r) {
                if ((R._ts && (hr(R, Ae(r, R)), (fr = tt.frame)), tt.frame >= Gi)) {
                    Gi += it.autoSleep || 120;
                    var n = R._first;
                    if ((!n || !n._ts) && it.autoSleep && tt._listeners.length < 2) {
                        for (; n && !n._ts; ) n = n._next;
                        n || tt.sleep();
                    }
                }
            }),
            t
        );
    })(te);
    ft(q.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var qn = function (t, e, i, r, n, s, a) {
            var u = new Z(this._pt, t, e, 0, 1, Si, null, n),
                f = 0,
                h = 0,
                c,
                _,
                d,
                p,
                l,
                m,
                x,
                v;
            for (u.b = i, u.e = r, i += "", r += "", (x = ~r.indexOf("random(")) && (r = ie(r)), s && ((v = [i, r]), s(v, t, e), (i = v[0]), (r = v[1])), _ = i.match(qe) || []; (c = qe.exec(r)); )
                (p = c[0]),
                    (l = r.substring(f, c.index)),
                    d ? (d = (d + 1) % 5) : l.substr(-5) === "rgba(" && (d = 1),
                    p !== _[h++] &&
                        ((m = parseFloat(_[h - 1]) || 0), (u._pt = { _next: u._pt, p: l || h === 1 ? l : ",", s: m, c: p.charAt(1) === "=" ? Vt(m, p) - m : parseFloat(p) - m, m: d && d < 4 ? Math.round : 0 }), (f = qe.lastIndex));
            return (u.c = f < r.length ? r.substring(f, r.length) : ""), (u.fp = a), (ci.test(r) || x) && (u.e = 0), (this._pt = u), u;
        },
        vi = function (t, e, i, r, n, s, a, u, f, h) {
            z(r) && (r = r(n || 0, t, s));
            var c = t[e],
                _ = i !== "get" ? i : z(c) ? (f ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]()) : c,
                d = z(c) ? (f ? Kn : Dr) : bi,
                p;
            if (($(r) && (~r.indexOf("random(") && (r = ie(r)), r.charAt(1) === "=" && ((p = Vt(_, r) + (X(_) || 0)), (p || p === 0) && (r = p))), !h || _ !== r || ui))
                return !isNaN(_ * r) && r !== ""
                    ? ((p = new Z(this._pt, t, e, +_ || 0, r - (_ || 0), typeof c == "boolean" ? Jn : Ar, 0, d)), f && (p.fp = f), a && p.modifier(a, this, t), (this._pt = p))
                    : (!c && !(e in t) && Le(e, r), qn.call(this, t, e, _, r, d, u || it.stringFilter, f));
        },
        jn = function (t, e, i, r, n) {
            if ((z(t) && (t = de(t, n, e, i, r)), !ct(t) || (t.style && t.nodeType) || G(t) || nr(t))) return $(t) ? de(t, n, e, i, r) : t;
            var s = {},
                a;
            for (a in t) s[a] = de(t[a], n, e, i, r);
            return s;
        },
        Ti = function (t, e, i, r, n, s) {
            var a, u, f, h;
            if (J[t] && (a = new J[t]()).init(n, a.rawVars ? e[t] : jn(e[t], r, n, s, i), i, r, s) !== !1 && ((i._pt = u = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)), i !== Ht))
                for (f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; ) f[a._props[h]] = u;
            return a;
        },
        St,
        ui,
        wi = function o(t, e, i) {
            var r = t.vars,
                n = r.ease,
                s = r.startAt,
                a = r.immediateRender,
                u = r.lazy,
                f = r.onUpdate,
                h = r.onUpdateParams,
                c = r.callbackScope,
                _ = r.runBackwards,
                d = r.yoyoEase,
                p = r.keyframes,
                l = r.autoRevert,
                m = t._dur,
                x = t._startAt,
                v = t._targets,
                T = t.parent,
                y = T && T.data === "nested" ? T.vars.targets : v,
                g = t._overwrite === "auto" && !hi,
                S = t.timeline,
                C,
                b,
                w,
                P,
                O,
                D,
                L,
                B,
                A,
                W,
                I,
                H,
                At;
            if (
                (S && (!p || !n) && (n = "none"),
                (t._ease = Nt(n, Qt.ease)),
                (t._yEase = d ? Pr(Nt(d === !0 ? n : d, Qt.ease)) : 0),
                d && t._yoyo && !t._repeat && ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
                (t._from = !S && !!r.runBackwards),
                !S || (p && !r.stagger))
            ) {
                if (((B = v[0] ? Pt(v[0]).harness : 0), (H = B && r[B.prop]), (C = De(r, di)), x && (x._zTime < 0 && x.progress(1), e < 0 && _ && a && !l ? x.render(-1, !0) : x.revert(_ && m ? Ce : vn), (x._lazy = 0)), s)) {
                    if (
                        (Ot((t._startAt = V.set(v, ft({ data: "isStart", overwrite: !1, parent: T, immediateRender: !0, lazy: !x && et(u), startAt: null, delay: 0, onUpdate: f, onUpdateParams: h, callbackScope: c, stagger: 0 }, s)))),
                        (t._startAt._dp = 0),
                        (t._startAt._sat = t),
                        e < 0 && (j || (!a && !l)) && t._startAt.revert(Ce),
                        a && m && e <= 0 && i <= 0)
                    ) {
                        e && (t._zTime = e);
                        return;
                    }
                } else if (_ && m && !x) {
                    if (
                        (e && (a = !1),
                        (w = ft({ overwrite: !1, data: "isFromStart", lazy: a && !x && et(u), immediateRender: a, stagger: 0, parent: T }, C)),
                        H && (w[B.prop] = H),
                        Ot((t._startAt = V.set(v, w))),
                        (t._startAt._dp = 0),
                        (t._startAt._sat = t),
                        e < 0 && (j ? t._startAt.revert(Ce) : t._startAt.render(-1, !0)),
                        (t._zTime = e),
                        !a)
                    )
                        o(t._startAt, M, M);
                    else if (!e) return;
                }
                for (t._pt = t._ptCache = 0, u = (m && et(u)) || (u && !m), b = 0; b < v.length; b++) {
                    if (
                        ((O = v[b]),
                        (L = O._gsap || mi(v)[b]._gsap),
                        (t._ptLookup[b] = W = {}),
                        ii[L.id] && Ct.length && Me(),
                        (I = y === v ? b : y.indexOf(O)),
                        B &&
                            (A = new B()).init(O, H || C, t, I, y) !== !1 &&
                            ((t._pt = P = new Z(t._pt, O, A.name, 0, 1, A.render, A, 0, A.priority)),
                            A._props.forEach(function (Rt) {
                                W[Rt] = P;
                            }),
                            A.priority && (D = 1)),
                        !B || H)
                    )
                        for (w in C) J[w] && (A = Ti(w, C, t, I, O, y)) ? A.priority && (D = 1) : (W[w] = P = vi.call(t, O, w, "get", C[w], I, y, 0, r.stringFilter));
                    t._op && t._op[b] && t.kill(O, t._op[b]), g && t._pt && ((St = t), R.killTweensOf(O, W, t.globalTime(e)), (At = !t.parent), (St = 0)), t._pt && u && (ii[L.id] = 1);
                }
                D && Pi(t), t._onInit && t._onInit(t);
            }
            (t._onUpdate = f), (t._initted = (!t._op || t._pt) && !At), p && e <= 0 && S.render(ot, !0, !0);
        },
        Gn = function (t, e, i, r, n, s, a) {
            var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
                f,
                h,
                c,
                _;
            if (!u)
                for (u = t._ptCache[e] = [], c = t._ptLookup, _ = t._targets.length; _--; ) {
                    if (((f = c[_][e]), f && f.d && f.d._pt)) for (f = f.d._pt; f && f.p !== e && f.fp !== e; ) f = f._next;
                    if (!f) return (ui = 1), (t.vars[e] = "+=0"), wi(t, a), (ui = 0), 1;
                    u.push(f);
                }
            for (_ = u.length; _--; ) (h = u[_]), (f = h._pt || h), (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c), (f.c = i - f.s), h.e && (h.e = N(i) + X(h.e)), h.b && (h.b = f.s + X(h.b));
        },
        Hn = function (t, e) {
            var i = t[0] ? Pt(t[0]).harness : 0,
                r = i && i.aliases,
                n,
                s,
                a,
                u;
            if (!r) return e;
            n = Bt({}, e);
            for (s in r) if (s in n) for (u = r[s].split(","), a = u.length; a--; ) n[u[a]] = n[s];
            return n;
        },
        Qn = function (t, e, i, r) {
            var n = e.ease || r || "power1.inOut",
                s,
                a;
            if (G(e))
                (a = i[t] || (i[t] = [])),
                    e.forEach(function (u, f) {
                        return a.push({ t: (f / (e.length - 1)) * 100, v: u, e: n });
                    });
            else for (s in e) (a = i[s] || (i[s] = [])), s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
        },
        de = function (t, e, i, r, n) {
            return z(t) ? t.call(e, i, r, n) : $(t) && ~t.indexOf("random(") ? ie(t) : t;
        },
        Er = pi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Mr = {};
    K(Er + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
        return (Mr[o] = 1);
    });
    var V = (function (o) {
        er(t, o);
        function t(i, r, n, s) {
            var a;
            typeof r == "number" && ((n.duration = r), (r = n), (n = null)), (a = o.call(this, s ? r : ce(r)) || this);
            var u = a.vars,
                f = u.duration,
                h = u.delay,
                c = u.immediateRender,
                _ = u.stagger,
                d = u.overwrite,
                p = u.keyframes,
                l = u.defaults,
                m = u.scrollTrigger,
                x = u.yoyoEase,
                v = r.parent || R,
                T = (G(i) || nr(i) ? yt(i[0]) : "length" in r) ? [i] : at(i),
                y,
                g,
                S,
                C,
                b,
                w,
                P,
                O;
            if (((a._targets = T.length ? mi(T) : Ee("GSAP target " + i + " not found. https://greensock.com", !it.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = d), p || _ || Se(f) || Se(h))) {
                if (((r = a.vars), (y = a.timeline = new q({ data: "nested", defaults: l || {}, targets: v && v.data === "nested" ? v.vars.targets : T })), y.kill(), (y.parent = y._dp = mt(a)), (y._start = 0), _ || Se(f) || Se(h))) {
                    if (((C = T.length), (P = _ && xr(_)), ct(_))) for (b in _) ~Er.indexOf(b) && (O || (O = {}), (O[b] = _[b]));
                    for (g = 0; g < C; g++)
                        (S = De(r, Mr)),
                            (S.stagger = 0),
                            x && (S.yoyoEase = x),
                            O && Bt(S, O),
                            (w = T[g]),
                            (S.duration = +de(f, mt(a), g, w, T)),
                            (S.delay = (+de(h, mt(a), g, w, T) || 0) - a._delay),
                            !_ && C === 1 && S.delay && ((a._delay = h = S.delay), (a._start += h), (S.delay = 0)),
                            y.to(w, S, P ? P(g, w, T) : 0),
                            (y._ease = k.none);
                    y.duration() ? (f = h = 0) : (a.timeline = 0);
                } else if (p) {
                    ce(ft(y.vars.defaults, { ease: "none" })), (y._ease = Nt(p.ease || r.ease || "none"));
                    var D = 0,
                        L,
                        B,
                        A;
                    if (G(p))
                        p.forEach(function (W) {
                            return y.to(T, W, ">");
                        }),
                            y.duration();
                    else {
                        S = {};
                        for (b in p) b === "ease" || b === "easeEach" || Qn(b, p[b], S, p.easeEach);
                        for (b in S)
                            for (
                                L = S[b].sort(function (W, I) {
                                    return W.t - I.t;
                                }),
                                    D = 0,
                                    g = 0;
                                g < L.length;
                                g++
                            )
                                (B = L[g]), (A = { ease: B.e, duration: ((B.t - (g ? L[g - 1].t : 0)) / 100) * f }), (A[b] = B.v), y.to(T, A, D), (D += A.duration);
                        y.duration() < f && y.to({}, { duration: f - y.duration() });
                    }
                }
                f || a.duration((f = y.duration()));
            } else a.timeline = 0;
            return (
                d === !0 && !hi && ((St = mt(a)), R.killTweensOf(T), (St = 0)),
                lt(v, mt(a), n),
                r.reversed && a.reverse(),
                r.paused && a.paused(!0),
                (c || (!f && !p && a._start === Y(v._time) && et(c) && Pn(mt(a)) && v.data !== "nested")) && ((a._tTime = -M), a.render(Math.max(0, -h) || 0)),
                m && pr(mt(a), m),
                a
            );
        }
        var e = t.prototype;
        return (
            (e.render = function (r, n, s) {
                var a = this._time,
                    u = this._tDur,
                    f = this._dur,
                    h = r < 0,
                    c = r > u - M && !h ? u : r < M ? 0 : r,
                    _,
                    d,
                    p,
                    l,
                    m,
                    x,
                    v,
                    T,
                    y;
                if (!f) kn(this, r, n, s);
                else if (c !== this._tTime || !r || s || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== h)) {
                    if (((_ = c), (T = this.timeline), this._repeat)) {
                        if (((l = f + this._rDelay), this._repeat < -1 && h)) return this.totalTime(l * 100 + r, n, s);
                        if (
                            ((_ = Y(c % l)),
                            c === u ? ((p = this._repeat), (_ = f)) : ((p = ~~(c / l)), p && p === c / l && ((_ = f), p--), _ > f && (_ = f)),
                            (x = this._yoyo && p & 1),
                            x && ((y = this._yEase), (_ = f - _)),
                            (m = Kt(this._tTime, l)),
                            _ === a && !s && this._initted)
                        )
                            return (this._tTime = c), this;
                        p !== m && (T && this._yEase && Or(T, x), this.vars.repeatRefresh && !x && !this._lock && ((this._lock = s = 1), (this.render(Y(l * p), !0).invalidate()._lock = 0)));
                    }
                    if (!this._initted) {
                        if (mr(this, h ? r : _, s, n, c)) return (this._tTime = 0), this;
                        if (a !== this._time) return this;
                        if (f !== this._dur) return this.render(r, n, s);
                    }
                    if (
                        ((this._tTime = c),
                        (this._time = _),
                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                        (this.ratio = v = (y || this._ease)(_ / f)),
                        this._from && (this.ratio = v = 1 - v),
                        _ && !a && !n && (ut(this, "onStart"), this._tTime !== c))
                    )
                        return this;
                    for (d = this._pt; d; ) d.r(v, d.d), (d = d._next);
                    (T && T.render(r < 0 ? r : !_ && x ? -M : T._dur * T._ease(_ / this._dur), n, s)) || (this._startAt && (this._zTime = r)),
                        this._onUpdate && !n && (h && ri(this, r, n, s), ut(this, "onUpdate")),
                        this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"),
                        (c === this._tDur || !c) &&
                            this._tTime === c &&
                            (h && !this._onUpdate && ri(this, r, !0, !0),
                            (r || !f) && ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) && Ot(this, 1),
                            !n && !(h && !a) && (c || a || x) && (ut(this, c === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom()));
                }
                return this;
            }),
            (e.targets = function () {
                return this._targets;
            }),
            (e.invalidate = function (r) {
                return (
                    (!r || !this.vars.runBackwards) && (this._startAt = 0),
                    (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                    (this._ptLookup = []),
                    this.timeline && this.timeline.invalidate(r),
                    o.prototype.invalidate.call(this, r)
                );
            }),
            (e.resetTo = function (r, n, s, a) {
                me || tt.wake(), this._ts || this.play();
                var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                    f;
                return (
                    this._initted || wi(this, u),
                    (f = this._ease(u / this._dur)),
                    Gn(this, r, n, s, a, f, u) ? this.resetTo(r, n, s, a) : (Be(this, 0), this.parent || _r(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                );
            }),
            (e.kill = function (r, n) {
                if ((n === void 0 && (n = "all"), !r && (!n || n === "all"))) return (this._lazy = this._pt = 0), this.parent ? he(this) : this;
                if (this.timeline) {
                    var s = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(r, n, St && St.vars.overwrite !== !0)._first || he(this), this.parent && s !== this.timeline.totalDuration() && Zt(this, (this._dur * this.timeline._tDur) / s, 0, 1), this;
                }
                var a = this._targets,
                    u = r ? at(r) : a,
                    f = this._ptLookup,
                    h = this._pt,
                    c,
                    _,
                    d,
                    p,
                    l,
                    m,
                    x;
                if ((!n || n === "all") && Sn(a, u)) return n === "all" && (this._pt = 0), he(this);
                for (
                    c = this._op = this._op || [],
                        n !== "all" &&
                            ($(n) &&
                                ((l = {}),
                                K(n, function (v) {
                                    return (l[v] = 1);
                                }),
                                (n = l)),
                            (n = Hn(a, n))),
                        x = a.length;
                    x--;

                )
                    if (~u.indexOf(a[x])) {
                        (_ = f[x]), n === "all" ? ((c[x] = n), (p = _), (d = {})) : ((d = c[x] = c[x] || {}), (p = n));
                        for (l in p) (m = _ && _[l]), m && ((!("kill" in m.d) || m.d.kill(l) === !0) && ze(this, m, "_pt"), delete _[l]), d !== "all" && (d[l] = 1);
                    }
                return this._initted && !this._pt && h && he(this), this;
            }),
            (t.to = function (r, n) {
                return new t(r, n, arguments[2]);
            }),
            (t.from = function (r, n) {
                return _e(1, arguments);
            }),
            (t.delayedCall = function (r, n, s, a) {
                return new t(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: r, onComplete: n, onReverseComplete: n, onCompleteParams: s, onReverseCompleteParams: s, callbackScope: a });
            }),
            (t.fromTo = function (r, n, s) {
                return _e(2, arguments);
            }),
            (t.set = function (r, n) {
                return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
            }),
            (t.killTweensOf = function (r, n, s) {
                return R.killTweensOf(r, n, s);
            }),
            t
        );
    })(te);
    ft(V.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
    K("staggerTo,staggerFrom,staggerFromTo", function (o) {
        V[o] = function () {
            var t = new q(),
                e = si.call(arguments, 0);
            return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
        };
    });
    var bi = function (t, e, i) {
            return (t[e] = i);
        },
        Dr = function (t, e, i) {
            return t[e](i);
        },
        Kn = function (t, e, i, r) {
            return t[e](r.fp, i);
        },
        Zn = function (t, e, i) {
            return t.setAttribute(e, i);
        },
        Ie = function (t, e) {
            return z(t[e]) ? Dr : Fe(t[e]) && t.setAttribute ? Zn : bi;
        },
        Ar = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
        },
        Jn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Si = function (t, e) {
            var i = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (t === 1 && e.e) r = e.e;
            else {
                for (; i; ) (r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r), (i = i._next);
                r += e.c;
            }
            e.set(e.t, e.p, r, e);
        },
        Ci = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
        },
        ts = function (t, e, i, r) {
            for (var n = this._pt, s; n; ) (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
        },
        es = function (t) {
            for (var e = this._pt, i, r; e; ) (r = e._next), (e.p === t && !e.op) || e.op === t ? ze(this, e, "_pt") : e.dep || (i = 1), (e = r);
            return !i;
        },
        is = function (t, e, i, r) {
            r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
        },
        Pi = function (t) {
            for (var e = t._pt, i, r, n, s; e; ) {
                for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
                (e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e), (e._next = r) ? (r._prev = e) : (s = e), (e = i);
            }
            t._pt = n;
        },
        Z = (function () {
            function o(e, i, r, n, s, a, u, f, h) {
                (this.t = i), (this.s = n), (this.c = s), (this.p = r), (this.r = a || Ar), (this.d = u || this), (this.set = f || bi), (this.pr = h || 0), (this._next = e), e && (e._prev = this);
            }
            var t = o.prototype;
            return (
                (t.modifier = function (i, r, n) {
                    (this.mSet = this.mSet || this.set), (this.set = is), (this.m = i), (this.mt = n), (this.tween = r);
                }),
                o
            );
        })();
    K(
        pi +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (o) {
            return (di[o] = 1);
        }
    );
    rt.TweenMax = rt.TweenLite = V;
    rt.TimelineLite = rt.TimelineMax = q;
    R = new q({ sortChildren: !1, defaults: Qt, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
    it.stringFilter = yi;
    var ee = [],
        Oe = {},
        rs = [],
        tr = 0,
        Ke = function (t) {
            return (Oe[t] || rs).map(function (e) {
                return e();
            });
        },
        fi = function () {
            var t = Date.now(),
                e = [];
            t - tr > 2 &&
                (Ke("matchMediaInit"),
                ee.forEach(function (i) {
                    var r = i.queries,
                        n = i.conditions,
                        s,
                        a,
                        u,
                        f;
                    for (a in r) (s = st.matchMedia(r[a]).matches), s && (u = 1), s !== n[a] && ((n[a] = s), (f = 1));
                    f && (i.revert(), u && e.push(i));
                }),
                Ke("matchMediaRevert"),
                e.forEach(function (i) {
                    return i.onMatch(i);
                }),
                (tr = t),
                Ke("matchMedia"));
        },
        Rr = (function () {
            function o(e, i) {
                (this.selector = i && oi(i)), (this.data = []), (this._r = []), (this.isReverted = !1), e && this.add(e);
            }
            var t = o.prototype;
            return (
                (t.add = function (i, r, n) {
                    z(i) && ((n = r), (r = i), (i = z));
                    var s = this,
                        a = function () {
                            var f = U,
                                h = s.selector,
                                c;
                            return f && f !== s && f.data.push(s), n && (s.selector = oi(n)), (U = s), (c = r.apply(s, arguments)), z(c) && s._r.push(c), (U = f), (s.selector = h), (s.isReverted = !1), c;
                        };
                    return (s.last = a), i === z ? a(s) : i ? (s[i] = a) : a;
                }),
                (t.ignore = function (i) {
                    var r = U;
                    (U = null), i(this), (U = r);
                }),
                (t.getTweens = function () {
                    var i = [];
                    return (
                        this.data.forEach(function (r) {
                            return r instanceof o ? i.push.apply(i, r.getTweens()) : r instanceof V && !(r.parent && r.parent.data === "nested") && i.push(r);
                        }),
                        i
                    );
                }),
                (t.clear = function () {
                    this._r.length = this.data.length = 0;
                }),
                (t.kill = function (i, r) {
                    var n = this;
                    if (i) {
                        var s = this.getTweens();
                        this.data.forEach(function (u) {
                            u.data === "isFlip" &&
                                (u.revert(),
                                u.getChildren(!0, !0, !1).forEach(function (f) {
                                    return s.splice(s.indexOf(f), 1);
                                }));
                        }),
                            s
                                .map(function (u) {
                                    return { g: u.globalTime(0), t: u };
                                })
                                .sort(function (u, f) {
                                    return f.g - u.g || -1;
                                })
                                .forEach(function (u) {
                                    return u.t.revert(i);
                                }),
                            this.data.forEach(function (u) {
                                return !(u instanceof te) && u.revert && u.revert(i);
                            }),
                            this._r.forEach(function (u) {
                                return u(i, n);
                            }),
                            (this.isReverted = !0);
                    } else
                        this.data.forEach(function (u) {
                            return u.kill && u.kill();
                        });
                    if ((this.clear(), r)) {
                        var a = ee.indexOf(this);
                        ~a && ee.splice(a, 1);
                    }
                }),
                (t.revert = function (i) {
                    this.kill(i || {});
                }),
                o
            );
        })(),
        ns = (function () {
            function o(e) {
                (this.contexts = []), (this.scope = e);
            }
            var t = o.prototype;
            return (
                (t.add = function (i, r, n) {
                    ct(i) || (i = { matches: i });
                    var s = new Rr(0, n || this.scope),
                        a = (s.conditions = {}),
                        u,
                        f,
                        h;
                    this.contexts.push(s), (r = s.add("onMatch", r)), (s.queries = i);
                    for (f in i) f === "all" ? (h = 1) : ((u = st.matchMedia(i[f])), u && (ee.indexOf(s) < 0 && ee.push(s), (a[f] = u.matches) && (h = 1), u.addListener ? u.addListener(fi) : u.addEventListener("change", fi)));
                    return h && r(s), this;
                }),
                (t.revert = function (i) {
                    this.kill(i || {});
                }),
                (t.kill = function (i) {
                    this.contexts.forEach(function (r) {
                        return r.kill(i, !0);
                    });
                }),
                o
            );
        })(),
        Re = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach(function (r) {
                    return In(r);
                });
            },
            timeline: function (t) {
                return new q(t);
            },
            getTweensOf: function (t, e) {
                return R.getTweensOf(t, e);
            },
            getProperty: function (t, e, i, r) {
                $(t) && (t = at(t)[0]);
                var n = Pt(t || {}).get,
                    s = i ? cr : lr;
                return (
                    i === "native" && (i = ""),
                    t &&
                        (e
                            ? s(((J[e] && J[e].get) || n)(t, e, i, r))
                            : function (a, u, f) {
                                  return s(((J[a] && J[a].get) || n)(t, a, u, f));
                              })
                );
            },
            quickSetter: function (t, e, i) {
                if (((t = at(t)), t.length > 1)) {
                    var r = t.map(function (h) {
                            return Q.quickSetter(h, e, i);
                        }),
                        n = r.length;
                    return function (h) {
                        for (var c = n; c--; ) r[c](h);
                    };
                }
                t = t[0] || {};
                var s = J[e],
                    a = Pt(t),
                    u = (a.harness && (a.harness.aliases || {})[e]) || e,
                    f = s
                        ? function (h) {
                              var c = new s();
                              (Ht._pt = 0), c.init(t, i ? h + i : h, Ht, 0, [t]), c.render(1, c), Ht._pt && Ci(1, Ht);
                          }
                        : a.set(t, u);
                return s
                    ? f
                    : function (h) {
                          return f(t, u, i ? h + i : h, a, 1);
                      };
            },
            quickTo: function (t, e, i) {
                var r,
                    n = Q.to(t, Bt(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})),
                    s = function (u, f, h) {
                        return n.resetTo(e, u, f, h);
                    };
                return (s.tween = n), s;
            },
            isTweening: function (t) {
                return R.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = Nt(t.ease, Qt.ease)), Hi(Qt, t || {});
            },
            config: function (t) {
                return Hi(it, t || {});
            },
            registerEffect: function (t) {
                var e = t.name,
                    i = t.effect,
                    r = t.plugins,
                    n = t.defaults,
                    s = t.extendTimeline;
                (r || "").split(",").forEach(function (a) {
                    return a && !J[a] && !rt[a] && Ee(e + " effect requires " + a + " plugin.");
                }),
                    (je[e] = function (a, u, f) {
                        return i(at(a), ft(u || {}, n), f);
                    }),
                    s &&
                        (q.prototype[e] = function (a, u, f) {
                            return this.add(je[e](a, ct(u) ? u : (f = u) && {}, this), f);
                        });
            },
            registerEase: function (t, e) {
                k[t] = Nt(e);
            },
            parseEase: function (t, e) {
                return arguments.length ? Nt(t, e) : k;
            },
            getById: function (t) {
                return R.getById(t);
            },
            exportRoot: function (t, e) {
                t === void 0 && (t = {});
                var i = new q(t),
                    r,
                    n;
                for (i.smoothChildTiming = et(t.smoothChildTiming), R.remove(i), i._dp = 0, i._time = i._tTime = R._time, r = R._first; r; )
                    (n = r._next), (e || !(!r._dur && r instanceof V && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay), (r = n);
                return lt(R, i, 0), i;
            },
            context: function (t, e) {
                return t ? new Rr(t, e) : U;
            },
            matchMedia: function (t) {
                return new ns(t);
            },
            matchMediaRefresh: function () {
                return (
                    ee.forEach(function (t) {
                        var e = t.conditions,
                            i,
                            r;
                        for (r in e) e[r] && ((e[r] = !1), (i = 1));
                        i && t.revert();
                    }) || fi()
                );
            },
            addEventListener: function (t, e) {
                var i = Oe[t] || (Oe[t] = []);
                ~i.indexOf(e) || i.push(e);
            },
            removeEventListener: function (t, e) {
                var i = Oe[t],
                    r = i && i.indexOf(e);
                r >= 0 && i.splice(r, 1);
            },
            utils: { wrap: zn, wrapYoyo: Nn, distribute: xr, random: Tr, snap: vr, normalize: Ln, getUnit: X, clamp: Dn, splitColor: Sr, toArray: at, selector: oi, mapRange: br, pipe: Rn, unitize: Fn, interpolate: Bn, shuffle: yr },
            install: ar,
            effects: je,
            ticker: tt,
            updateRoot: q.updateRoot,
            plugins: J,
            globalTimeline: R,
            core: {
                PropTween: Z,
                globals: ur,
                Tween: V,
                Timeline: q,
                Animation: te,
                getCache: Pt,
                _removeLinkedListItem: ze,
                reverting: function () {
                    return j;
                },
                context: function (t) {
                    return t && U && (U.data.push(t), (t._ctx = U)), U;
                },
                suppressOverwrites: function (t) {
                    return (hi = t);
                },
            },
        };
    K("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
        return (Re[o] = V[o]);
    });
    tt.add(q.updateRoot);
    Ht = Re.to({}, { duration: 0 });
    var ss = function (t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
            return i;
        },
        os = function (t, e) {
            var i = t._targets,
                r,
                n,
                s;
            for (r in e) for (n = i.length; n--; ) (s = t._ptLookup[n][r]), s && (s = s.d) && (s._pt && (s = ss(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
        },
        Ze = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (r, n, s) {
                    s._onInit = function (a) {
                        var u, f;
                        if (
                            ($(n) &&
                                ((u = {}),
                                K(n, function (h) {
                                    return (u[h] = 1);
                                }),
                                (n = u)),
                            e)
                        ) {
                            u = {};
                            for (f in n) u[f] = e(n[f]);
                            n = u;
                        }
                        os(a, n);
                    };
                },
            };
        },
        Q =
            Re.registerPlugin(
                {
                    name: "attr",
                    init: function (t, e, i, r, n) {
                        var s, a, u;
                        this.tween = i;
                        for (s in e) (u = t.getAttribute(s) || ""), (a = this.add(t, "setAttribute", (u || 0) + "", e[s], r, n, 0, 0, s)), (a.op = s), (a.b = u), this._props.push(s);
                    },
                    render: function (t, e) {
                        for (var i = e._pt; i; ) j ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
                    },
                },
                {
                    name: "endArray",
                    init: function (t, e) {
                        for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                    },
                },
                Ze("roundProps", ai),
                Ze("modifiers"),
                Ze("snap", vr)
            ) || Re;
    V.version = q.version = Q.version = "3.11.4";
    or = 1;
    rr() && Jt();
    var as = k.Power0,
        us = k.Power1,
        fs = k.Power2,
        hs = k.Power3,
        ls = k.Power4,
        cs = k.Linear,
        _s = k.Quad,
        ds = k.Cubic,
        ps = k.Quart,
        ms = k.Quint,
        gs = k.Strong,
        ys = k.Elastic,
        xs = k.Back,
        vs = k.SteppedEase,
        Ts = k.Bounce,
        ws = k.Sine,
        bs = k.Expo,
        Ss = k.Circ;
    var Fr,
        Et,
        ne,
        Ri,
        Xt,
        Cs,
        Lr,
        Fi,
        Ps = function () {
            return typeof window < "u";
        },
        Tt = {},
        Yt = 180 / Math.PI,
        se = Math.PI / 180,
        re = Math.atan2,
        zr = 1e8,
        Li = /([A-Z])/g,
        Os = /(left|right|width|margin|padding|x)/i,
        ks = /[\s,\(]\S/,
        vt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Ei = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
        },
        Es = function (t, e) {
            return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
        },
        Ms = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
        },
        Ds = function (t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        $r = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Yr = function (t, e) {
            return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
        },
        As = function (t, e, i) {
            return (t.style[e] = i);
        },
        Rs = function (t, e, i) {
            return t.style.setProperty(e, i);
        },
        Fs = function (t, e, i) {
            return (t._gsap[e] = i);
        },
        Ls = function (t, e, i) {
            return (t._gsap.scaleX = t._gsap.scaleY = i);
        },
        zs = function (t, e, i, r, n) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
        },
        Ns = function (t, e, i, r, n) {
            var s = t._gsap;
            (s[e] = i), s.renderTransform(n, s);
        },
        F = "transform",
        ht = F + "Origin",
        Bs = function (t, e) {
            var i = this,
                r = this.target,
                n = r.style;
            if (t in Tt) {
                if (
                    ((this.tfm = this.tfm || {}),
                    t !== "transform" &&
                        ((t = vt[t] || t),
                        ~t.indexOf(",")
                            ? t.split(",").forEach(function (s) {
                                  return (i.tfm[s] = xt(r, s));
                              })
                            : (this.tfm[t] = r._gsap.x ? r._gsap[t] : xt(r, t))),
                    this.props.indexOf(F) >= 0)
                )
                    return;
                r._gsap.svg && ((this.svgo = r.getAttribute("data-svg-origin")), this.props.push(ht, e, "")), (t = F);
            }
            (n || e) && this.props.push(t, e, n[t]);
        },
        Xr = function (t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
        },
        Is = function () {
            var t = this.props,
                e = this.target,
                i = e.style,
                r = e._gsap,
                n,
                s;
            for (n = 0; n < t.length; n += 3) t[n + 1] ? (e[t[n]] = t[n + 2]) : t[n + 2] ? (i[t[n]] = t[n + 2]) : i.removeProperty(t[n].replace(Li, "-$1").toLowerCase());
            if (this.tfm) {
                for (s in this.tfm) r[s] = this.tfm[s];
                r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), (n = Fi()), n && !n.isStart && !i[F] && (Xr(i), (r.uncache = 1));
            }
        },
        qr = function (t, e) {
            var i = { target: t, props: [], revert: Is, save: Bs };
            return (
                e &&
                    e.split(",").forEach(function (r) {
                        return i.save(r);
                    }),
                i
            );
        },
        jr,
        Mi = function (t, e) {
            var i = Et.createElementNS ? Et.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Et.createElement(t);
            return i.style ? i : Et.createElement(t);
        },
        _t = function o(t, e, i) {
            var r = getComputedStyle(t);
            return r[e] || r.getPropertyValue(e.replace(Li, "-$1").toLowerCase()) || r.getPropertyValue(e) || (!i && o(t, oe(e) || e, 1)) || "";
        },
        Nr = "O,Moz,ms,Ms,Webkit".split(","),
        oe = function (t, e, i) {
            var r = e || Xt,
                n = r.style,
                s = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Nr[s] + t in n); );
            return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Nr[s] : "") + t;
        },
        Di = function () {
            Ps() &&
                window.document &&
                ((Fr = window),
                (Et = Fr.document),
                (ne = Et.documentElement),
                (Xt = Mi("div") || { style: {} }),
                (Cs = Mi("div")),
                (F = oe(F)),
                (ht = F + "Origin"),
                (Xt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                (jr = !!oe("perspective")),
                (Fi = Q.core.reverting),
                (Ri = 1));
        },
        Oi = function o(t) {
            var e = Mi("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                r = this.nextSibling,
                n = this.style.cssText,
                s;
            if ((ne.appendChild(e), e.appendChild(this), (this.style.display = "block"), t))
                try {
                    (s = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = o);
                } catch {}
            else this._gsapBBox && (s = this._gsapBBox());
            return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), ne.removeChild(e), (this.style.cssText = n), s;
        },
        Br = function (t, e) {
            for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        },
        Gr = function (t) {
            var e;
            try {
                e = t.getBBox();
            } catch {
                e = Oi.call(t, !0);
            }
            return (e && (e.width || e.height)) || t.getBBox === Oi || (e = Oi.call(t, !0)), e && !e.width && !e.x && !e.y ? { x: +Br(t, ["x", "cx", "x1"]) || 0, y: +Br(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e;
        },
        Hr = function (t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Gr(t));
        },
        xe = function (t, e) {
            if (e) {
                var i = t.style;
                e in Tt && e !== ht && (e = F), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(Li, "-$1").toLowerCase())) : i.removeAttribute(e);
            }
        },
        Mt = function (t, e, i, r, n, s) {
            var a = new Z(t._pt, e, i, 0, 1, s ? Yr : $r);
            return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
        },
        Ir = { deg: 1, rad: 1, turn: 1 },
        Vs = { grid: 1, flex: 1 },
        Dt = function o(t, e, i, r) {
            var n = parseFloat(i) || 0,
                s = (i + "").trim().substr((n + "").length) || "px",
                a = Xt.style,
                u = Os.test(e),
                f = t.tagName.toLowerCase() === "svg",
                h = (f ? "client" : "offset") + (u ? "Width" : "Height"),
                c = 100,
                _ = r === "px",
                d = r === "%",
                p,
                l,
                m,
                x;
            return r === s || !n || Ir[r] || Ir[s]
                ? n
                : (s !== "px" && !_ && (n = o(t, e, i, "px")),
                  (x = t.getCTM && Hr(t)),
                  (d || s === "%") && (Tt[e] || ~e.indexOf("adius"))
                      ? ((p = x ? t.getBBox()[u ? "width" : "height"] : t[h]), N(d ? (n / p) * c : (n / 100) * p))
                      : ((a[u ? "width" : "height"] = c + (_ ? s : r)),
                        (l = ~e.indexOf("adius") || (r === "em" && t.appendChild && !f) ? t : t.parentNode),
                        x && (l = (t.ownerSVGElement || {}).parentNode),
                        (!l || l === Et || !l.appendChild) && (l = Et.body),
                        (m = l._gsap),
                        m && d && m.width && u && m.time === tt.time && !m.uncache
                            ? N((n / m.width) * c)
                            : ((d || s === "%") && !Vs[_t(l, "display")] && (a.position = _t(t, "position")),
                              l === t && (a.position = "static"),
                              l.appendChild(Xt),
                              (p = Xt[h]),
                              l.removeChild(Xt),
                              (a.position = "absolute"),
                              u && d && ((m = Pt(l)), (m.time = tt.time), (m.width = l[h])),
                              N(_ ? (p * n) / c : p && n ? (c / p) * n : 0))));
        },
        xt = function (t, e, i, r) {
            var n;
            return (
                Ri || Di(),
                e in vt && e !== "transform" && ((e = vt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
                Tt[e] && e !== "transform"
                    ? ((n = Te(t, r)), (n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ue(_t(t, ht)) + " " + n.zOrigin + "px"))
                    : ((n = t.style[e]), (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = (Ve[e] && Ve[e](t, e, i)) || _t(t, e) || gi(t, e) || (e === "opacity" ? 1 : 0))),
                i && !~(n + "").trim().indexOf(" ") ? Dt(t, e, n, i) + i : n
            );
        },
        Us = function (t, e, i, r) {
            if (!i || i === "none") {
                var n = oe(e, t, 1),
                    s = n && _t(t, n, 1);
                s && s !== i ? ((e = n), (i = s)) : e === "borderColor" && (i = _t(t, "borderTopColor"));
            }
            var a = new Z(this._pt, t.style, e, 0, 1, Si),
                u = 0,
                f = 0,
                h,
                c,
                _,
                d,
                p,
                l,
                m,
                x,
                v,
                T,
                y,
                g;
            if (
                ((a.b = i), (a.e = r), (i += ""), (r += ""), r === "auto" && ((t.style[e] = r), (r = _t(t, e) || r), (t.style[e] = i)), (h = [i, r]), yi(h), (i = h[0]), (r = h[1]), (_ = i.match(It) || []), (g = r.match(It) || []), g.length)
            ) {
                for (; (c = It.exec(r)); )
                    (m = c[0]),
                        (v = r.substring(u, c.index)),
                        p ? (p = (p + 1) % 5) : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1),
                        m !== (l = _[f++] || "") &&
                            ((d = parseFloat(l) || 0),
                            (y = l.substr((d + "").length)),
                            m.charAt(1) === "=" && (m = Vt(d, m) + y),
                            (x = parseFloat(m)),
                            (T = m.substr((x + "").length)),
                            (u = It.lastIndex - T.length),
                            T || ((T = T || it.units[e] || y), u === r.length && ((r += T), (a.e += T))),
                            y !== T && (d = Dt(t, e, l, T) || 0),
                            (a._pt = { _next: a._pt, p: v || f === 1 ? v : ",", s: d, c: x - d, m: (p && p < 4) || e === "zIndex" ? Math.round : 0 }));
                a.c = u < r.length ? r.substring(u, r.length) : "";
            } else a.r = e === "display" && r === "none" ? Yr : $r;
            return ci.test(r) && (a.e = 0), (this._pt = a), a;
        },
        Vr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        Ws = function (t) {
            var e = t.split(" "),
                i = e[0],
                r = e[1] || "50%";
            return (i === "top" || i === "bottom" || r === "left" || r === "right") && ((t = i), (i = r), (r = t)), (e[0] = Vr[i] || i), (e[1] = Vr[r] || r), e.join(" ");
        },
        $s = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i = e.t,
                    r = i.style,
                    n = e.u,
                    s = i._gsap,
                    a,
                    u,
                    f;
                if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
                else for (n = n.split(","), f = n.length; --f > -1; ) (a = n[f]), Tt[a] && ((u = 1), (a = a === "transformOrigin" ? ht : F)), xe(i, a);
                u && (xe(i, F), s && (s.svg && i.removeAttribute("transform"), Te(i, 1), (s.uncache = 1), Xr(r)));
            }
        },
        Ve = {
            clearProps: function (t, e, i, r, n) {
                if (n.data !== "isFromStart") {
                    var s = (t._pt = new Z(t._pt, e, i, 0, 0, $s));
                    return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
                }
            },
        },
        ve = [1, 0, 0, 1, 0, 0],
        Qr = {},
        Kr = function (t) {
            return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
        },
        Ur = function (t) {
            var e = _t(t, F);
            return Kr(e) ? ve : e.substr(7).match(li).map(N);
        },
        zi = function (t, e) {
            var i = t._gsap || Pt(t),
                r = t.style,
                n = Ur(t),
                s,
                a,
                u,
                f;
            return i.svg && t.getAttribute("transform")
                ? ((u = t.transform.baseVal.consolidate().matrix), (n = [u.a, u.b, u.c, u.d, u.e, u.f]), n.join(",") === "1,0,0,1,0,0" ? ve : n)
                : (n === ve &&
                      !t.offsetParent &&
                      t !== ne &&
                      !i.svg &&
                      ((u = r.display),
                      (r.display = "block"),
                      (s = t.parentNode),
                      (!s || !t.offsetParent) && ((f = 1), (a = t.nextElementSibling), ne.appendChild(t)),
                      (n = Ur(t)),
                      u ? (r.display = u) : xe(t, "display"),
                      f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : ne.removeChild(t))),
                  e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
        },
        Ai = function (t, e, i, r, n, s) {
            var a = t._gsap,
                u = n || zi(t, !0),
                f = a.xOrigin || 0,
                h = a.yOrigin || 0,
                c = a.xOffset || 0,
                _ = a.yOffset || 0,
                d = u[0],
                p = u[1],
                l = u[2],
                m = u[3],
                x = u[4],
                v = u[5],
                T = e.split(" "),
                y = parseFloat(T[0]) || 0,
                g = parseFloat(T[1]) || 0,
                S,
                C,
                b,
                w;
            i
                ? u !== ve && (C = d * m - p * l) && ((b = y * (m / C) + g * (-l / C) + (l * v - m * x) / C), (w = y * (-p / C) + g * (d / C) - (d * v - p * x) / C), (y = b), (g = w))
                : ((S = Gr(t)), (y = S.x + (~T[0].indexOf("%") ? (y / 100) * S.width : y)), (g = S.y + (~(T[1] || T[0]).indexOf("%") ? (g / 100) * S.height : g))),
                r || (r !== !1 && a.smooth) ? ((x = y - f), (v = g - h), (a.xOffset = c + (x * d + v * l) - x), (a.yOffset = _ + (x * p + v * m) - v)) : (a.xOffset = a.yOffset = 0),
                (a.xOrigin = y),
                (a.yOrigin = g),
                (a.smooth = !!r),
                (a.origin = e),
                (a.originIsAbsolute = !!i),
                (t.style[ht] = "0px 0px"),
                s && (Mt(s, a, "xOrigin", f, y), Mt(s, a, "yOrigin", h, g), Mt(s, a, "xOffset", c, a.xOffset), Mt(s, a, "yOffset", _, a.yOffset)),
                t.setAttribute("data-svg-origin", y + " " + g);
        },
        Te = function (t, e) {
            var i = t._gsap || new xi(t);
            if ("x" in i && !e && !i.uncache) return i;
            var r = t.style,
                n = i.scaleX < 0,
                s = "px",
                a = "deg",
                u = getComputedStyle(t),
                f = _t(t, ht) || "0",
                h,
                c,
                _,
                d,
                p,
                l,
                m,
                x,
                v,
                T,
                y,
                g,
                S,
                C,
                b,
                w,
                P,
                O,
                D,
                L,
                B,
                A,
                W,
                I,
                H,
                At,
                Rt,
                fe,
                Ft,
                ji,
                pt,
                Lt;
            return (
                (h = c = _ = l = m = x = v = T = y = 0),
                (d = p = 1),
                (i.svg = !!(t.getCTM && Hr(t))),
                u.translate &&
                    ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") &&
                        (r[F] =
                            (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
                            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
                            (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") +
                            (u[F] !== "none" ? u[F] : "")),
                    (r.scale = r.rotate = r.translate = "none")),
                (C = zi(t, i.svg)),
                i.svg && (i.uncache ? ((H = t.getBBox()), (f = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px"), (I = "")) : (I = !e && t.getAttribute("data-svg-origin")), Ai(t, I || f, !!I || i.originIsAbsolute, i.smooth !== !1, C)),
                (g = i.xOrigin || 0),
                (S = i.yOrigin || 0),
                C !== ve &&
                    ((O = C[0]),
                    (D = C[1]),
                    (L = C[2]),
                    (B = C[3]),
                    (h = A = C[4]),
                    (c = W = C[5]),
                    C.length === 6
                        ? ((d = Math.sqrt(O * O + D * D)),
                          (p = Math.sqrt(B * B + L * L)),
                          (l = O || D ? re(D, O) * Yt : 0),
                          (v = L || B ? re(L, B) * Yt + l : 0),
                          v && (p *= Math.abs(Math.cos(v * se))),
                          i.svg && ((h -= g - (g * O + S * L)), (c -= S - (g * D + S * B))))
                        : ((Lt = C[6]),
                          (ji = C[7]),
                          (Rt = C[8]),
                          (fe = C[9]),
                          (Ft = C[10]),
                          (pt = C[11]),
                          (h = C[12]),
                          (c = C[13]),
                          (_ = C[14]),
                          (b = re(Lt, Ft)),
                          (m = b * Yt),
                          b &&
                              ((w = Math.cos(-b)),
                              (P = Math.sin(-b)),
                              (I = A * w + Rt * P),
                              (H = W * w + fe * P),
                              (At = Lt * w + Ft * P),
                              (Rt = A * -P + Rt * w),
                              (fe = W * -P + fe * w),
                              (Ft = Lt * -P + Ft * w),
                              (pt = ji * -P + pt * w),
                              (A = I),
                              (W = H),
                              (Lt = At)),
                          (b = re(-L, Ft)),
                          (x = b * Yt),
                          b && ((w = Math.cos(-b)), (P = Math.sin(-b)), (I = O * w - Rt * P), (H = D * w - fe * P), (At = L * w - Ft * P), (pt = B * P + pt * w), (O = I), (D = H), (L = At)),
                          (b = re(D, O)),
                          (l = b * Yt),
                          b && ((w = Math.cos(b)), (P = Math.sin(b)), (I = O * w + D * P), (H = A * w + W * P), (D = D * w - O * P), (W = W * w - A * P), (O = I), (A = H)),
                          m && Math.abs(m) + Math.abs(l) > 359.9 && ((m = l = 0), (x = 180 - x)),
                          (d = N(Math.sqrt(O * O + D * D + L * L))),
                          (p = N(Math.sqrt(W * W + Lt * Lt))),
                          (b = re(A, W)),
                          (v = Math.abs(b) > 2e-4 ? b * Yt : 0),
                          (y = pt ? 1 / (pt < 0 ? -pt : pt) : 0)),
                    i.svg && ((I = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !Kr(_t(t, F))), I && t.setAttribute("transform", I))),
                Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? ((d *= -1), (v += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((p *= -1), (v += v <= 0 ? 180 : -180))),
                (e = e || i.uncache),
                (i.x = h - ((i.xPercent = h && ((!e && i.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? (t.offsetWidth * i.xPercent) / 100 : 0) + s),
                (i.y = c - ((i.yPercent = c && ((!e && i.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? (t.offsetHeight * i.yPercent) / 100 : 0) + s),
                (i.z = _ + s),
                (i.scaleX = N(d)),
                (i.scaleY = N(p)),
                (i.rotation = N(l) + a),
                (i.rotationX = N(m) + a),
                (i.rotationY = N(x) + a),
                (i.skewX = v + a),
                (i.skewY = T + a),
                (i.transformPerspective = y + s),
                (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (r[ht] = Ue(f)),
                (i.xOffset = i.yOffset = 0),
                (i.force3D = it.force3D),
                (i.renderTransform = i.svg ? Xs : jr ? Zr : Ys),
                (i.uncache = 0),
                i
            );
        },
        Ue = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
        },
        ki = function (t, e, i) {
            var r = X(e);
            return N(parseFloat(e) + parseFloat(Dt(t, "x", i + "px", r))) + r;
        },
        Ys = function (t, e) {
            (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Zr(t, e);
        },
        Wt = "0deg",
        ye = "0px",
        $t = ") ",
        Zr = function (t, e) {
            var i = e || this,
                r = i.xPercent,
                n = i.yPercent,
                s = i.x,
                a = i.y,
                u = i.z,
                f = i.rotation,
                h = i.rotationY,
                c = i.rotationX,
                _ = i.skewX,
                d = i.skewY,
                p = i.scaleX,
                l = i.scaleY,
                m = i.transformPerspective,
                x = i.force3D,
                v = i.target,
                T = i.zOrigin,
                y = "",
                g = (x === "auto" && t && t !== 1) || x === !0;
            if (T && (c !== Wt || h !== Wt)) {
                var S = parseFloat(h) * se,
                    C = Math.sin(S),
                    b = Math.cos(S),
                    w;
                (S = parseFloat(c) * se), (w = Math.cos(S)), (s = ki(v, s, C * w * -T)), (a = ki(v, a, -Math.sin(S) * -T)), (u = ki(v, u, b * w * -T + T));
            }
            m !== ye && (y += "perspective(" + m + $t),
                (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
                (g || s !== ye || a !== ye || u !== ye) && (y += u !== ye || g ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + $t),
                f !== Wt && (y += "rotate(" + f + $t),
                h !== Wt && (y += "rotateY(" + h + $t),
                c !== Wt && (y += "rotateX(" + c + $t),
                (_ !== Wt || d !== Wt) && (y += "skew(" + _ + ", " + d + $t),
                (p !== 1 || l !== 1) && (y += "scale(" + p + ", " + l + $t),
                (v.style[F] = y || "translate(0, 0)");
        },
        Xs = function (t, e) {
            var i = e || this,
                r = i.xPercent,
                n = i.yPercent,
                s = i.x,
                a = i.y,
                u = i.rotation,
                f = i.skewX,
                h = i.skewY,
                c = i.scaleX,
                _ = i.scaleY,
                d = i.target,
                p = i.xOrigin,
                l = i.yOrigin,
                m = i.xOffset,
                x = i.yOffset,
                v = i.forceCSS,
                T = parseFloat(s),
                y = parseFloat(a),
                g,
                S,
                C,
                b,
                w;
            (u = parseFloat(u)),
                (f = parseFloat(f)),
                (h = parseFloat(h)),
                h && ((h = parseFloat(h)), (f += h), (u += h)),
                u || f
                    ? ((u *= se),
                      (f *= se),
                      (g = Math.cos(u) * c),
                      (S = Math.sin(u) * c),
                      (C = Math.sin(u - f) * -_),
                      (b = Math.cos(u - f) * _),
                      f && ((h *= se), (w = Math.tan(f - h)), (w = Math.sqrt(1 + w * w)), (C *= w), (b *= w), h && ((w = Math.tan(h)), (w = Math.sqrt(1 + w * w)), (g *= w), (S *= w))),
                      (g = N(g)),
                      (S = N(S)),
                      (C = N(C)),
                      (b = N(b)))
                    : ((g = c), (b = _), (S = C = 0)),
                ((T && !~(s + "").indexOf("px")) || (y && !~(a + "").indexOf("px"))) && ((T = Dt(d, "x", s, "px")), (y = Dt(d, "y", a, "px"))),
                (p || l || m || x) && ((T = N(T + p - (p * g + l * C) + m)), (y = N(y + l - (p * S + l * b) + x))),
                (r || n) && ((w = d.getBBox()), (T = N(T + (r / 100) * w.width)), (y = N(y + (n / 100) * w.height))),
                (w = "matrix(" + g + "," + S + "," + C + "," + b + "," + T + "," + y + ")"),
                d.setAttribute("transform", w),
                v && (d.style[F] = w);
        },
        qs = function (t, e, i, r, n) {
            var s = 360,
                a = $(n),
                u = parseFloat(n) * (a && ~n.indexOf("rad") ? Yt : 1),
                f = u - r,
                h = r + f + "deg",
                c,
                _;
            return (
                a &&
                    ((c = n.split("_")[1]),
                    c === "short" && ((f %= s), f !== f % (s / 2) && (f += f < 0 ? s : -s)),
                    c === "cw" && f < 0 ? (f = ((f + s * zr) % s) - ~~(f / s) * s) : c === "ccw" && f > 0 && (f = ((f - s * zr) % s) - ~~(f / s) * s)),
                (t._pt = _ = new Z(t._pt, e, i, r, f, Es)),
                (_.e = h),
                (_.u = "deg"),
                t._props.push(i),
                _
            );
        },
        Wr = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        js = function (t, e, i) {
            var r = Wr({}, i._gsap),
                n = "perspective,force3D,transformOrigin,svgOrigin",
                s = i.style,
                a,
                u,
                f,
                h,
                c,
                _,
                d,
                p;
            r.svg ? ((f = i.getAttribute("transform")), i.setAttribute("transform", ""), (s[F] = e), (a = Te(i, 1)), xe(i, F), i.setAttribute("transform", f)) : ((f = getComputedStyle(i)[F]), (s[F] = e), (a = Te(i, 1)), (s[F] = f));
            for (u in Tt)
                (f = r[u]),
                    (h = a[u]),
                    f !== h && n.indexOf(u) < 0 && ((d = X(f)), (p = X(h)), (c = d !== p ? Dt(i, u, f, p) : parseFloat(f)), (_ = parseFloat(h)), (t._pt = new Z(t._pt, a, u, c, _ - c, Ei)), (t._pt.u = p || 0), t._props.push(u));
            Wr(a, r);
        };
    K("padding,margin,Width,Radius", function (o, t) {
        var e = "Top",
            i = "Right",
            r = "Bottom",
            n = "Left",
            s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (a) {
                return t < 2 ? o + a : "border" + a + o;
            });
        Ve[t > 1 ? "border" + o : o] = function (a, u, f, h, c) {
            var _, d;
            if (arguments.length < 4)
                return (
                    (_ = s.map(function (p) {
                        return xt(a, p, f);
                    })),
                    (d = _.join(" ")),
                    d.split(_[0]).length === 5 ? _[0] : d
                );
            (_ = (h + "").split(" ")),
                (d = {}),
                s.forEach(function (p, l) {
                    return (d[p] = _[l] = _[l] || _[((l - 1) / 2) | 0]);
                }),
                a.init(u, d, c);
        };
    });
    var Ni = {
        name: "css",
        register: Di,
        targetTest: function (t) {
            return t.style && t.nodeType;
        },
        init: function (t, e, i, r, n) {
            var s = this._props,
                a = t.style,
                u = i.vars.startAt,
                f,
                h,
                c,
                _,
                d,
                p,
                l,
                m,
                x,
                v,
                T,
                y,
                g,
                S,
                C,
                b;
            Ri || Di(), (this.styles = this.styles || qr(t)), (b = this.styles.props), (this.tween = i);
            for (l in e)
                if (l !== "autoRound" && ((h = e[l]), !(J[l] && Ti(l, e, i, r, t, n)))) {
                    if (((d = typeof h), (p = Ve[l]), d === "function" && ((h = h.call(i, r, t, n)), (d = typeof h)), d === "string" && ~h.indexOf("random(") && (h = ie(h)), p)) p(this, t, l, h, i) && (C = 1);
                    else if (l.substr(0, 2) === "--")
                        (f = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
                            (h += ""),
                            (gt.lastIndex = 0),
                            gt.test(f) || ((m = X(f)), (x = X(h))),
                            x ? m !== x && (f = Dt(t, l, f, x) + x) : m && (h += m),
                            this.add(a, "setProperty", f, h, r, n, 0, 0, l),
                            s.push(l),
                            b.push(l, 0, a[l]);
                    else if (d !== "undefined") {
                        if (
                            (u && l in u
                                ? ((f = typeof u[l] == "function" ? u[l].call(i, r, t, n) : u[l]),
                                  $(f) && ~f.indexOf("random(") && (f = ie(f)),
                                  X(f + "") || (f += it.units[l] || X(xt(t, l)) || ""),
                                  (f + "").charAt(1) === "=" && (f = xt(t, l)))
                                : (f = xt(t, l)),
                            (_ = parseFloat(f)),
                            (v = d === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
                            v && (h = h.substr(2)),
                            (c = parseFloat(h)),
                            l in vt &&
                                (l === "autoAlpha" && (_ === 1 && xt(t, "visibility") === "hidden" && c && (_ = 0), b.push("visibility", 0, a.visibility), Mt(this, a, "visibility", _ ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                                l !== "scale" && l !== "transform" && ((l = vt[l]), ~l.indexOf(",") && (l = l.split(",")[0]))),
                            (T = l in Tt),
                            T)
                        ) {
                            if (
                                (this.styles.save(l),
                                y ||
                                    ((g = t._gsap),
                                    (g.renderTransform && !e.parseTransform) || Te(t, e.parseTransform),
                                    (S = e.smoothOrigin !== !1 && g.smooth),
                                    (y = this._pt = new Z(this._pt, a, F, 0, 1, g.renderTransform, g, 0, -1)),
                                    (y.dep = 1)),
                                l === "scale")
                            )
                                (this._pt = new Z(this._pt, g, "scaleY", g.scaleY, (v ? Vt(g.scaleY, v + c) : c) - g.scaleY || 0, Ei)), (this._pt.u = 0), s.push("scaleY", l), (l += "X");
                            else if (l === "transformOrigin") {
                                b.push(ht, 0, a[ht]), (h = Ws(h)), g.svg ? Ai(t, h, 0, S, 0, this) : ((x = parseFloat(h.split(" ")[2]) || 0), x !== g.zOrigin && Mt(this, g, "zOrigin", g.zOrigin, x), Mt(this, a, l, Ue(f), Ue(h)));
                                continue;
                            } else if (l === "svgOrigin") {
                                Ai(t, h, 1, S, 0, this);
                                continue;
                            } else if (l in Qr) {
                                qs(this, g, l, _, v ? Vt(_, v + h) : h);
                                continue;
                            } else if (l === "smoothOrigin") {
                                Mt(this, g, "smooth", g.smooth, h);
                                continue;
                            } else if (l === "force3D") {
                                g[l] = h;
                                continue;
                            } else if (l === "transform") {
                                js(this, h, t);
                                continue;
                            }
                        } else l in a || (l = oe(l) || l);
                        if (T || ((c || c === 0) && (_ || _ === 0) && !ks.test(h) && l in a))
                            (m = (f + "").substr((_ + "").length)),
                                c || (c = 0),
                                (x = X(h) || (l in it.units ? it.units[l] : m)),
                                m !== x && (_ = Dt(t, l, f, x)),
                                (this._pt = new Z(this._pt, T ? g : a, l, _, (v ? Vt(_, v + c) : c) - _, !T && (x === "px" || l === "zIndex") && e.autoRound !== !1 ? Ds : Ei)),
                                (this._pt.u = x || 0),
                                m !== x && x !== "%" && ((this._pt.b = f), (this._pt.r = Ms));
                        else if (l in a) Us.call(this, t, l, f, v ? v + h : h);
                        else if (l in t) this.add(t, l, f || t[l], v ? v + h : h, r, n);
                        else if (l !== "parseTransform") {
                            Le(l, h);
                            continue;
                        }
                        T || (l in a ? b.push(l, 0, a[l]) : b.push(l, 1, f || t[l])), s.push(l);
                    }
                }
            C && Pi(this);
        },
        render: function (t, e) {
            if (e.tween._time || !Fi()) for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
            else e.styles.revert();
        },
        get: xt,
        aliases: vt,
        getSetter: function (t, e, i) {
            var r = vt[e];
            return (
                r && r.indexOf(",") < 0 && (e = r),
                e in Tt && e !== ht && (t._gsap.x || xt(t, "x")) ? (i && Lr === i ? (e === "scale" ? Ls : Fs) : (Lr = i || {}) && (e === "scale" ? zs : Ns)) : t.style && !Fe(t.style[e]) ? As : ~e.indexOf("-") ? Rs : Ie(t, e)
            );
        },
        core: { _removeProperty: xe, _getMatrix: zi },
    };
    Q.utils.checkPrefix = oe;
    Q.core.getStyleSaver = qr;
    (function (o, t, e, i) {
        var r = K(o + "," + t + "," + e, function (n) {
            Tt[n] = 1;
        });
        K(t, function (n) {
            (it.units[n] = "deg"), (Qr[n] = 1);
        }),
            (vt[r[13]] = o + "," + t),
            K(i, function (n) {
                var s = n.split(":");
                vt[s[1]] = r[s[0]];
            });
    })(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
        "rotation,rotationX,rotationY,skewX,skewY",
        "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    );
    K("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (o) {
        it.units[o] = "px";
    });
    Q.registerPlugin(Ni);
    var we = Q.registerPlugin(Ni) || Q,
        ko = we.core.Tween;
    (() => {
        function o(...i) {
            let r = i.length;
            for (let n = 0; n < r; n++) {
                let s = i[n];
                s.nodeType === 1 || s.nodeType === 11 ? this.appendChild(s) : this.appendChild(document.createTextNode(String(s)));
            }
        }
        function t(...i) {
            for (; this.lastChild; ) this.removeChild(this.lastChild);
            i.length && this.append(...i);
        }
        function e(...i) {
            let r = this.parentNode,
                n = i.length;
            if (r)
                for (n || r.removeChild(this); n--; ) {
                    let s = i[n];
                    typeof s != "object" ? (s = this.ownerDocument.createTextNode(s)) : s.parentNode && s.parentNode.removeChild(s), n ? r.insertBefore(this.previousSibling, s) : r.replaceChild(s, this);
                }
        }
        typeof Element < "u" &&
            (Element.prototype.append || ((Element.prototype.append = o), (DocumentFragment.prototype.append = o)),
            Element.prototype.replaceChildren || ((Element.prototype.replaceChildren = t), (DocumentFragment.prototype.replaceChildren = t)),
            Element.prototype.replaceWith || ((Element.prototype.replaceWith = e), (DocumentFragment.prototype.replaceWith = e)));
    })();
    function qt(o, t) {
        return Object.getOwnPropertyNames(Object(o)).reduce((e, i) => {
            let r = Object.getOwnPropertyDescriptor(Object(o), i),
                n = Object.getOwnPropertyDescriptor(Object(t), i);
            return Object.defineProperty(e, i, n || r);
        }, {});
    }
    function be(o) {
        return typeof o == "string";
    }
    function Ui(o) {
        return Array.isArray(o);
    }
    function We(o = {}) {
        let t = qt(o),
            e;
        return (
            t.types !== void 0 ? (e = t.types) : t.split !== void 0 && (e = t.split),
            e !== void 0 &&
                (t.types = (be(e) || Ui(e) ? String(e) : "")
                    .split(",")
                    .map((i) => String(i).trim())
                    .filter((i) => /((line)|(word)|(char))/i.test(i))),
            (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(o.position)),
            t
        );
    }
    function Wi(o) {
        let t = be(o) || Ui(o) ? String(o) : "";
        return { none: !t, lines: /line/i.test(t), words: /word/i.test(t), chars: /char/i.test(t) };
    }
    function Ye(o) {
        return o !== null && typeof o == "object";
    }
    function Gs(o) {
        return Ye(o) && /^(1|3|11)$/.test(o.nodeType);
    }
    function Hs(o) {
        return typeof o == "number" && o > -1 && o % 1 === 0;
    }
    function Qs(o) {
        return Ye(o) && Hs(o.length);
    }
    function Gt(o) {
        return Ui(o) ? o : o == null ? [] : Qs(o) ? Array.prototype.slice.call(o) : [o];
    }
    function Jr(o) {
        let t = o;
        return be(o) && (/^(#[a-z]\w+)$/.test(o.trim()) ? (t = document.getElementById(o.trim().slice(1))) : (t = document.querySelectorAll(o))), Gt(t).reduce((e, i) => [...e, ...Gt(i).filter(Gs)], []);
    }
    var { entries: Ks, keys: Mo, values: Do } = Object,
        $e = "_splittype",
        wt = {},
        Zs = 0;
    function dt(o, t, e) {
        if (!Ye(o)) return console.warn("[data.set] owner is not an object"), null;
        let i = o[$e] || (o[$e] = ++Zs),
            r = wt[i] || (wt[i] = {});
        return e === void 0 ? t && Object.getPrototypeOf(t) === Object.prototype && (wt[i] = { ...r, ...t }) : t !== void 0 && (r[t] = e), e;
    }
    function jt(o, t) {
        let e = Ye(o) ? o[$e] : null,
            i = (e && wt[e]) || {};
        return t === void 0 ? i : i[t];
    }
    function tn(o) {
        let t = o && o[$e];
        t && (delete o[t], delete wt[t]);
    }
    function Js() {
        Ks(wt).forEach(([o, { isRoot: t, isSplit: e }]) => {
            (!t || !e) && ((wt[o] = null), delete wt[o]);
        });
    }
    function to(o, t = " ") {
        return (o ? String(o) : "").trim().replace(/\s+/g, " ").split(t);
    }
    var $i = "\\ud800-\\udfff",
        en = "\\u0300-\\u036f\\ufe20-\\ufe23",
        rn = "\\u20d0-\\u20f0",
        nn = "\\ufe0e\\ufe0f",
        eo = `[${$i}]`,
        Bi = `[${en}${rn}]`,
        Ii = "\\ud83c[\\udffb-\\udfff]",
        io = `(?:${Bi}|${Ii})`,
        sn = `[^${$i}]`,
        on = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        an = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        un = "\\u200d",
        fn = `${io}?`,
        hn = `[${nn}]?`,
        ro = "(?:" + un + "(?:" + [sn, on, an].join("|") + ")" + hn + fn + ")*",
        no = hn + fn + ro,
        so = `(?:${[`${sn}${Bi}?`, Bi, on, an, eo].join("|")}
)`,
        oo = RegExp(`${Ii}(?=${Ii})|${so}${no}`, "g"),
        ao = [un, $i, en, rn, nn],
        uo = RegExp(`[${ao.join("")}]`);
    function fo(o) {
        return o.split("");
    }
    function ln(o) {
        return uo.test(o);
    }
    function ho(o) {
        return o.match(oo) || [];
    }
    function lo(o) {
        return ln(o) ? ho(o) : fo(o);
    }
    function co(o) {
        return o == null ? "" : String(o);
    }
    function _o(o, t = "") {
        return (o = co(o)), o && be(o) && !t && ln(o) ? lo(o) : o.split(t);
    }
    function Vi(o, t) {
        let e = document.createElement(o);
        return (
            t &&
                Object.keys(t).forEach((i) => {
                    let r = t[i],
                        n = be(r) ? r.trim() : r;
                    n === null || n === "" || (i === "children" ? e.append(...Gt(n)) : e.setAttribute(i, n));
                }),
            e
        );
    }
    var Yi = { splitClass: "", lineClass: "line", wordClass: "word", charClass: "char", types: ["lines", "words", "chars"], absolute: !1, tagName: "div" };
    function po(o, t) {
        t = qt(Yi, t);
        let e = Wi(t.types),
            i = t.tagName,
            r = o.nodeValue,
            n = document.createDocumentFragment(),
            s = [],
            a = [];
        return (
            /^\s/.test(r) && n.append(" "),
            (s = to(r).reduce((u, f, h, c) => {
                let _, d;
                return (
                    e.chars &&
                        (d = _o(f).map((p) => {
                            let l = Vi(i, { class: `${t.splitClass} ${t.charClass}`, style: "display: inline-block;", children: p });
                            return dt(l, "isChar", !0), (a = [...a, l]), l;
                        })),
                    e.words || e.lines
                        ? ((_ = Vi(i, { class: `${t.wordClass} ${t.splitClass}`, style: `display: inline-block; ${e.words && t.absolute ? "position: relative;" : ""}`, children: e.chars ? d : f })),
                          dt(_, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
                          n.appendChild(_))
                        : d.forEach((p) => {
                              n.appendChild(p);
                          }),
                    h < c.length - 1 && n.append(" "),
                    e.words ? u.concat(_) : u
                );
            }, [])),
            /\s$/.test(r) && n.append(" "),
            o.replaceWith(n),
            { words: s, chars: a }
        );
    }
    function cn(o, t) {
        let e = o.nodeType,
            i = { words: [], chars: [] };
        if (!/(1|3|11)/.test(e)) return i;
        if (e === 3 && /\S/.test(o.nodeValue)) return po(o, t);
        let r = Gt(o.childNodes);
        if (r.length && (dt(o, "isSplit", !0), !jt(o).isRoot)) {
            (o.style.display = "inline-block"), (o.style.position = "relative");
            let n = o.nextSibling,
                s = o.previousSibling,
                a = o.textContent || "",
                u = n ? n.textContent : " ",
                f = s ? s.textContent : " ";
            dt(o, { isWordEnd: /\s$/.test(a) || /^\s/.test(u), isWordStart: /^\s/.test(a) || /\s$/.test(f) });
        }
        return r.reduce((n, s) => {
            let { words: a, chars: u } = cn(s, t);
            return { words: [...n.words, ...a], chars: [...n.chars, ...u] };
        }, i);
    }
    function mo(o, t, e, i) {
        if (!e.absolute) return { top: t ? o.offsetTop : null };
        let r = o.offsetParent,
            [n, s] = i,
            a = 0,
            u = 0;
        if (r && r !== document.body) {
            let l = r.getBoundingClientRect();
            (a = l.x + n), (u = l.y + s);
        }
        let { width: f, height: h, x: c, y: _ } = o.getBoundingClientRect(),
            d = _ + s - u,
            p = c + n - a;
        return { width: f, height: h, top: d, left: p };
    }
    function _n(o) {
        jt(o).isWord ? (tn(o), o.replaceWith(...o.childNodes)) : Gt(o.children).forEach((t) => _n(t));
    }
    var go = () => document.createDocumentFragment();
    function yo(o, t, e) {
        let i = Wi(t.types),
            r = t.tagName,
            n = o.getElementsByTagName("*"),
            s = [],
            a = [],
            u = null,
            f,
            h,
            c,
            _ = [],
            d = o.parentElement,
            p = o.nextElementSibling,
            l = go(),
            m = window.getComputedStyle(o),
            x = m.textAlign,
            T = parseFloat(m.fontSize) * 0.2;
        return (
            t.absolute && ((c = { left: o.offsetLeft, top: o.offsetTop, width: o.offsetWidth }), (h = o.offsetWidth), (f = o.offsetHeight), dt(o, { cssWidth: o.style.width, cssHeight: o.style.height })),
            Gt(n).forEach((y) => {
                let g = y.parentElement === o,
                    { width: S, height: C, top: b, left: w } = mo(y, g, t, e);
                /^br$/i.test(y.nodeName) || (i.lines && g && ((u === null || b - u >= T) && ((u = b), s.push((a = []))), a.push(y)), t.absolute && dt(y, { top: b, left: w, width: S, height: C }));
            }),
            d && d.removeChild(o),
            i.lines &&
                ((_ = s.map((y) => {
                    let g = Vi(r, { class: `${t.splitClass} ${t.lineClass}`, style: `display: block; text-align: ${x}; width: 100%;` });
                    dt(g, "isLine", !0);
                    let S = { height: 0, top: 1e4 };
                    return (
                        l.appendChild(g),
                        y.forEach((C, b, w) => {
                            let { isWordEnd: P, top: O, height: D } = jt(C),
                                L = w[b + 1];
                            (S.height = Math.max(S.height, D)), (S.top = Math.min(S.top, O)), g.appendChild(C), P && jt(L).isWordStart && g.append(" ");
                        }),
                        t.absolute && dt(g, { height: S.height, top: S.top }),
                        g
                    );
                })),
                i.words || _n(l),
                o.replaceChildren(l)),
            t.absolute &&
                ((o.style.width = `${o.style.width || h}px`),
                (o.style.height = `${f}px`),
                Gt(n).forEach((y) => {
                    let { isLine: g, top: S, left: C, width: b, height: w } = jt(y),
                        P = jt(y.parentElement),
                        O = !g && P.isLine;
                    (y.style.top = `${O ? S - P.top : S}px`), (y.style.left = g ? `${c.left}px` : `${C - (O ? c.left : 0)}px`), (y.style.height = `${w}px`), (y.style.width = g ? `${c.width}px` : `${b}px`), (y.style.position = "absolute");
                })),
            d && (p ? d.insertBefore(o, p) : d.appendChild(o)),
            _
        );
    }
    var ae = qt(Yi, {}),
        bt = class {
            static get data() {
                return wt;
            }
            static get defaults() {
                return ae;
            }
            static set defaults(t) {
                ae = qt(ae, We(t));
            }
            static setDefaults(t) {
                return (ae = qt(ae, We(t))), Yi;
            }
            static revert(t) {
                Jr(t).forEach((e) => {
                    let { isSplit: i, html: r, cssWidth: n, cssHeight: s } = jt(e);
                    i && ((e.innerHTML = r), (e.style.width = n || ""), (e.style.height = s || ""), tn(e));
                });
            }
            static create(t, e) {
                return new bt(t, e);
            }
            constructor(t, e) {
                (this.isSplit = !1), (this.settings = qt(ae, We(e))), (this.elements = Jr(t)), this.split();
            }
            split(t) {
                this.revert(),
                    this.elements.forEach((r) => {
                        dt(r, "html", r.innerHTML);
                    }),
                    (this.lines = []),
                    (this.words = []),
                    (this.chars = []);
                let e = [window.pageXOffset, window.pageYOffset];
                t !== void 0 && (this.settings = qt(this.settings, We(t)));
                let i = Wi(this.settings.types);
                i.none ||
                    (this.elements.forEach((r) => {
                        dt(r, "isRoot", !0);
                        let { words: n, chars: s } = cn(r, this.settings);
                        (this.words = [...this.words, ...n]), (this.chars = [...this.chars, ...s]);
                    }),
                    this.elements.forEach((r) => {
                        if (i.lines || this.settings.absolute) {
                            let n = yo(r, this.settings, e);
                            this.lines = [...this.lines, ...n];
                        }
                    }),
                    (this.isSplit = !0),
                    window.scrollTo(e[0], e[1]),
                    Js());
            }
            revert() {
                this.isSplit && ((this.lines = null), (this.words = null), (this.chars = null), (this.isSplit = !1)), bt.revert(this.elements);
            }
        };
    var Xe = class {
        constructor({ element: t, config: e, addClass: i }) {
            (this.element = t), (this.config = { root: null, margin: e?.margin || "10px", threshold: e?.threshold || 0, once: e.once }), i !== void 0 && (this.addClass = i), this.init(), this.start();
        }
        init() {
            (this.in = new IntersectionObserver(
                (t) => {
                    t.forEach((e) => {
                        e.isIntersecting && this.isIn();
                    });
                },
                { rootMargin: this.config.margin, threshold: this.config.threshold }
            )),
                (this.out = new IntersectionObserver(
                    (t) => {
                        t.forEach((e) => {
                            e.isIntersecting || this.isOut();
                        });
                    },
                    { rootMargin: "000px", threshold: 0 }
                ));
        }
        start() {
            this.in.observe(this.element), this.out.observe(this.element);
        }
        stop() {
            this.in.unobserve(this.element), this.out.unobserve(this.element);
        }
        isIn() {
            this.addClass && this.element.classList.add(this.addClass), this.config.once && this.stop(), this.animateIn();
        }
        isOut() {
            this.addClass && this.element.classList.remove(this.addClass), this.animateOut();
        }
    };
    var Xi = class extends Xe {
            constructor(t) {
                let e = {
                    margin: t.dataset.obsM || "10px",
                    threshold: +t.dataset.obsT || 0,
                    once: t.dataset.obsOnce === "true",
                    aSplit: t.dataset.aSplit || "word",
                    aDuration: t.dataset.aDuration ?? 1.9,
                    aEach: t.dataset.aEach ?? 0.05,
                    aDelay: t.dataset.aDelay ?? 0,
                    aEase: t.dataset.aEase ?? "expo.out",
                    aFrom: t.dataset.aFrom ?? "start",
                };
                super({ element: t, config: e }), (this.config = e), (this.item = t), (this.animated = xo(t)), (this.a = { y: "120%", x: "0%" }), we.set(this.animated, { y: this.a.y });
            }
            animateIn() {
                this.animation?.kill(),
                    (this.animation = we.to(this.animated, { y: "0%", delay: this.config.aDelay, duration: this.config.aDuration, stagger: { each: this.config.aEach, from: this.config.aFrom }, ease: this.config.aEase }));
            }
            animateOut() {
                this.animation?.kill(), (this.animation = we.set(this.animated, { y: this.a.y }));
            }
        },
        qi = class {
            constructor(t) {
                (this.selector = t), (this.reference = [...document.querySelectorAll(`[${t}]`)]), this.reference && (this.injectCss(), this.init());
            }
            init() {
                this.animations = this.reference.map((t) => new Xi(t));
            }
            injectCss() {
                let t = document.createElement("style"),
                    e = `
       [${this.selector}] > div {
        overflow: hidden;
      }
    `;
                (t.textContent = e), document.head.append(t);
            }
        };
    window.staggerText = new qi("data-a-split");
    function xo(o) {
        switch (o.dataset.aSplit) {
            case "char":
                return vo(ue(o));
            case "word":
                return ue(ue(o));
            case "line":
                return dn(dn(o));
            default:
                return ue(ue(o));
        }
    }
    function vo(o) {
        return new bt(o, { types: "chars" }).chars;
    }
    function ue(o) {
        return new bt(o, { types: "words" }).words;
    }
    function dn(o) {
        return new bt(o, { types: "lines" }).lines;
    }
})();
