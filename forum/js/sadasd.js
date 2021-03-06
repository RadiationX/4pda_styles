! function (e, t) {
    ! function (e, t) {
        var n = "function",
            r = "$4",
            o = .3;
        if (typeof e[r] != n || o > e[r].lib4PDA) {
            var i = {},
                a = function () {
                    return e[r] || this
                },
                s = function (e, t) {
                    return function () {
                        typeof t == n && (!e || e in a ? t(a[e], e) : !i[e] && (i[e] = [t]) || i[e].push(t))
                    }
                };
            a.fn = a.prototype = {
                lib4PDA: o,
                constructor: a,
                addModule: function (e, r) {
                    if (!(e in a)) {
                        a[e] = a.fn[e] = r ? typeof r == n ? r(a) : r : t;
                        for (var o = 0, s = i[e]; s && o < s.length;) s[o++](a[e], e);
                        delete i[e]
                    }
                    return a
                },
                onInit: function (e, t) {
                    for (var n = (e = (e + "").split(" ")).length, r = t; n;) r = new s(e[--n], r);
                    return r(), a
                }
            }, e[r] = e.lib4PDA = a;
            for (r in a.fn) a[r] = a.fn[r]
        }
    }(e),
    function (e, t) {
        function n(e) {
            var t = e.length,
                n = ut.type(e);
            return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = Ct[e] = {};
            return ut.each(e.match(pt) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function o(e, n, r, o) {
            if (ut.acceptData(e)) {
                var i, a, s = ut.expando,
                    l = e.nodeType,
                    c = l ? ut.cache : e,
                    u = l ? e[s] : e[s] && s;
                if (u && c[u] && (o || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[s] = tt.pop() || ut.guid++ : s), c[u] || (c[u] = l ? {} : {
                    toJSON: ut.noop
                }), ("object" == typeof n || "function" == typeof n) && (o ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)), a = c[u], o || (a.data || (a.data = {}), a = a.data), r !== t && (a[ut.camelCase(n)] = r), "string" == typeof n ? (i = a[n], null == i && (i = a[ut.camelCase(n)])) : i = a, i
            }
        }

        function i(e, t, n) {
            if (ut.acceptData(e)) {
                var r, o, i = e.nodeType,
                    a = i ? ut.cache : e,
                    l = i ? e[ut.expando] : ut.expando;
                if (a[l]) {
                    if (t && (r = n ? a[l] : a[l].data)) {
                        ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in r ? t = [t] : (t = ut.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete r[t[o]];
                        if (n ? !s(r) : !ut.isEmptyObject(r)) return
                    }(n || (delete a[l].data, s(a[l]))) && (i ? ut.cleanData([e], !0) : ut.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
                }
            }
        }

        function a(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var o = "data-" + n.replace(Nt, "-$1").toLowerCase();
                if (r = e.getAttribute(o), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ut.parseJSON(r) : r
                    } catch (i) {}
                    ut.data(e, n, r)
                } else r = t
            }
            return r
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return G.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function p(e, t, n) {
            if (ut.isFunction(t)) return ut.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return ut.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Pt.test(t)) return ut.filter(t, e, n);
                t = ut.filter(t, e)
            }
            return ut.grep(e, function (e) {
                return ut.inArray(e, t) >= 0 !== n
            })
        }

        function f(e) {
            var t = Yt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) {
            return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function m(e) {
            return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = on.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ut.hasData(e)) {
                var n, r, o, i = ut._data(e),
                    a = ut._data(t, i),
                    s = i.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, o = s[n].length; o > r; r++) ut.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ut.extend({}, a.data))
            }
        }

        function b(e, t) {
            var n, r, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                    o = ut._data(t);
                    for (r in o.events) ut.removeEvent(t, r, o.handle);
                    t.removeAttribute(ut.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function w(e, n) {
            var r, o, i = 0,
                a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
            if (!a)
                for (a = [], r = e.childNodes || e; null != (o = r[i]); i++) !n || ut.nodeName(o, n) ? a.push(o) : ut.merge(a, w(o, n));
            return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
        }

        function x(e) {
            tn.test(e.type) && (e.defaultChecked = e.checked)
        }

        function T(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = Cn.length; o--;)
                if (t = Cn[o] + n, t in e) return t;
            return r
        }

        function k(e, t) {
            return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
        }

        function S(e, t) {
            for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (i[a] = ut._data(r, "olddisplay", z(r.nodeName)))) : i[a] || (o = k(r), (n && "none" !== n || !o) && ut._data(r, "olddisplay", o ? n : ut.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
            return e
        }

        function C(e, t, n) {
            var r = yn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function E(e, t, n, r, o) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += ut.css(e, n + Sn[i], !0, o)), r ? ("content" === n && (a -= ut.css(e, "padding" + Sn[i], !0, o)), "margin" !== n && (a -= ut.css(e, "border" + Sn[i] + "Width", !0, o))) : (a += ut.css(e, "padding" + Sn[i], !0, o), "padding" !== n && (a += ut.css(e, "border" + Sn[i] + "Width", !0, o)));
            return a
        }

        function N(e, t, n) {
            var r = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = dn(e),
                a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i);
            if (0 >= o || null == o) {
                if (o = pn(e, t, i), (0 > o || null == o) && (o = e.style[t]), bn.test(o)) return o;
                r = a && (ut.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + E(e, t, n || (a ? "border" : "content"), r, i) + "px"
        }

        function z(e) {
            var t = G,
                n = xn[e];
            return n || (n = L(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = L(e, t), un.detach()), xn[e] = n), n
        }

        function L(e, t) {
            var n = ut(t.createElement(e)).appendTo(t.body),
                r = ut.css(n[0], "display");
            return n.remove(), r
        }

        function M(e, t, n, r) {
            var o;
            if (ut.isArray(t)) ut.each(t, function (t, o) {
                n || Nn.test(e) ? r(e, o) : M(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
            });
            else if (n || "object" !== ut.type(t)) r(e, t);
            else
                for (o in t) M(e + "[" + o + "]", t[o], n, r)
        }

        function _(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(pt) || [];
                if (ut.isFunction(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function A(e, t, n, r) {
            function o(s) {
                var l;
                return i[s] = !0, ut.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var i = {},
                a = e === Wn;
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }

        function D(e, n) {
            var r, o, i = ut.ajaxSettings.flatOptions || {};
            for (o in n) n[o] !== t && ((i[o] ? e : r || (r = {}))[o] = n[o]);
            return r && ut.extend(!0, e, r), e
        }

        function j(e, n, r) {
            for (var o, i, a, s, l = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i)
                for (s in l)
                    if (l[s] && l[s].test(i)) {
                        c.unshift(s);
                        break
                    }
            if (c[0] in r) a = c[0];
            else {
                for (s in r) {
                    if (!c[0] || e.converters[s + " " + c[0]]) {
                        a = s;
                        break
                    }
                    o || (o = s)
                }
                a = a || o
            }
            return a ? (a !== c[0] && c.unshift(a), r[a]) : void 0
        }

        function H(e, t, n, r) {
            var o, i, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (i = u.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                    if ("*" === i) i = l;
                    else if ("*" !== l && l !== i) {
                if (a = c[l + " " + i] || c["* " + i], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[o] : c[o] !== !0 && (i = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + i
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function $() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function R() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function q() {
            return setTimeout(function () {
                Jn = t
            }), Jn = ut.now()
        }

        function F(e, t, n) {
            for (var r, o = (ir[t] || []).concat(ir["*"]), i = 0, a = o.length; a > i; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function O(e, t, n) {
            var r, o, i = 0,
                a = or.length,
                s = ut.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var t = Jn || q(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(i);
                    return s.notifyWith(e, [c, i, n]), 1 > i && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: ut.extend({}, t),
                    opts: ut.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Jn || q(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); a > i; i++)
                if (r = or[i].call(c, e, u, c.opts)) return r;
            return ut.map(u, F, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), ut.fx.timer(ut.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (r = ut.camelCase(n), o = t[r], i = e[n], ut.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = ut.cssHooks[r], a && "expand" in a) {
                    i = a.expand(i), delete e[r];
                    for (n in i) n in e || (e[n] = i[n], t[n] = o)
                } else t[r] = o
        }

        function P(e, t, n) {
            var r, o, i, a, s, l, c = this,
                u = {},
                d = e.style,
                p = e.nodeType && k(e),
                f = ut._data(e, "fxshow");
            n.queue || (s = ut._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, ut.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== z(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (o = t[r], tr.exec(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (p ? "hide" : "show")) continue;
                    u[r] = f && f[r] || ut.style(e, r)
                }
            if (!ut.isEmptyObject(u)) {
                f ? "hidden" in f && (p = f.hidden) : f = ut._data(e, "fxshow", {}), i && (f.hidden = !p), p ? ut(e).show() : c.done(function () {
                    ut(e).hide()
                }), c.done(function () {
                    var t;
                    ut._removeData(e, "fxshow");
                    for (t in u) ut.style(e, t, u[t])
                });
                for (r in u) a = F(p ? f[r] : 0, r, c), r in f || (f[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function I(e, t, n, r, o) {
            return new I.prototype.init(e, t, n, r, o)
        }

        function W(e, t) {
            var n, r = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Sn[o], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function X(e) {
            return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Y, U, V = typeof t,
            Z = e.location,
            G = e.document,
            Q = G.documentElement,
            K = e.jQuery,
            J = e.$,
            et = {},
            tt = [],
            nt = "1.10.2",
            rt = tt.concat,
            ot = tt.push,
            it = tt.slice,
            at = tt.indexOf,
            st = et.toString,
            lt = et.hasOwnProperty,
            ct = nt.trim,
            ut = function (e, t) {
                return new ut.fn.init(e, t, U)
            },
            dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pt = /\S+/g,
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            wt = /^-ms-/,
            xt = /-([\da-z])/gi,
            Tt = function (e, t) {
                return t.toUpperCase()
            },
            kt = function (e) {
                (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (St(), ut.ready())
            },
            St = function () {
                G.addEventListener ? (G.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (G.detachEvent("onreadystatechange", kt), e.detachEvent("onload", kt))
            };
        ut.fn = ut.prototype = {
                jquery: nt,
                constructor: ut,
                init: function (e, n, r) {
                    var o, i;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !o || !o[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (o[1]) {
                            if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), mt.test(o[1]) && ut.isPlainObject(n))
                                for (o in n) ut.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if (i = G.getElementById(o[2]), i && i.parentNode) {
                            if (i.id !== o[2]) return r.find(e);
                            this.length = 1, this[0] = i
                        }
                        return this.context = G, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return it.call(this)
                },
                get: function (e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function (e) {
                    var t = ut.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return ut.each(this, e, t)
                },
                ready: function (e) {
                    return ut.ready.promise().done(e), this
                },
                slice: function () {
                    return this.pushStack(it.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function (e) {
                    return this.pushStack(ut.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: ot,
                sort: [].sort,
                splice: [].splice
            }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
                var e, n, r, o, i, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
                    if (null != (i = arguments[l]))
                        for (o in i) e = s[o], r = i[o], s !== r && (u && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[o] = ut.extend(u, a, r)) : r !== t && (s[o] = r));
                return s
            }, ut.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function (t) {
                    return e.$ === ut && (e.$ = J), t && e.jQuery === ut && (e.jQuery = K), ut
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? ut.readyWait++ : ut.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                        if (!G.body) return setTimeout(ut.ready);
                        ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (Y.resolveWith(G, [ut]), ut.fn.trigger && ut(G).trigger("ready").off("ready"))
                    }
                },
                isFunction: function (e) {
                    return "function" === ut.type(e)
                },
                isArray: Array.isArray || function (e) {
                    return "array" === ut.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
                },
                isPlainObject: function (e) {
                    var n;
                    if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (r) {
                        return !1
                    }
                    if (ut.support.ownLast)
                        for (n in e) return lt.call(e, n);
                    for (n in e);
                    return n === t || lt.call(e, n)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseHTML: function (e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || G;
                    var r = mt.exec(e),
                        o = !n && [];
                    return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, o), o && ut(o).remove(), ut.merge([], r.childNodes))
                },
                parseJSON: function (t) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && gt.test(t.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? new Function("return " + t)() : void ut.error("Invalid JSON: " + t)
                },
                parseXML: function (n) {
                    var r, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (o = new DOMParser, r = o.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch (i) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
                },
                noop: function () {},
                globalEval: function (t) {
                    t && ut.trim(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(wt, "ms-").replace(xt, Tt)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, r) {
                    var o, i = 0,
                        a = e.length,
                        s = n(e);
                    if (r) {
                        if (s)
                            for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                        else
                            for (i in e)
                                if (o = t.apply(e[i], r), o === !1) break
                    } else if (s)
                        for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
                    else
                        for (i in e)
                            if (o = t.call(e[i], i, e[i]), o === !1) break; return e
                },
                trim: ct && !ct.call("﻿ ") ? function (e) {
                    return null == e ? "" : ct.call(e)
                } : function (e) {
                    return null == e ? "" : (e + "").replace(ft, "")
                },
                makeArray: function (e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : ot.call(r, e)), r
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (at) return at.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var r = n.length,
                        o = e.length,
                        i = 0;
                    if ("number" == typeof r)
                        for (; r > i; i++) e[o++] = n[i];
                    else
                        for (; n[i] !== t;) e[o++] = n[i++];
                    return e.length = o, e
                },
                grep: function (e, t, n) {
                    var r, o = [],
                        i = 0,
                        a = e.length;
                    for (n = !!n; a > i; i++) r = !!t(e[i], i), n !== r && o.push(e[i]);
                    return o
                },
                map: function (e, t, r) {
                    var o, i = 0,
                        a = e.length,
                        s = n(e),
                        l = [];
                    if (s)
                        for (; a > i; i++) o = t(e[i], i, r), null != o && (l[l.length] = o);
                    else
                        for (i in e) o = t(e[i], i, r), null != o && (l[l.length] = o);
                    return rt.apply([], l)
                },
                guid: 1,
                proxy: function (e, n) {
                    var r, o, i;
                    return "string" == typeof n && (i = e[n], n = e, e = i), ut.isFunction(e) ? (r = it.call(arguments, 2), o = function () {
                        return e.apply(n || this, r.concat(it.call(arguments)))
                    }, o.guid = e.guid = e.guid || ut.guid++, o) : t
                },
                access: function (e, n, r, o, i, a, s) {
                    var l = 0,
                        c = e.length,
                        u = null == r;
                    if ("object" === ut.type(r)) {
                        i = !0;
                        for (l in r) ut.access(e, n, l, r[l], !0, a, s)
                    } else if (o !== t && (i = !0, ut.isFunction(o) || (s = !0), u && (s ? (n.call(e, o), n = null) : (u = n, n = function (e, t, n) {
                            return u.call(ut(e), n)
                        })), n))
                        for (; c > l; l++) n(e[l], r, s ? o : o.call(e[l], l, n(e[l], r)));
                    return i ? e : u ? n.call(e) : c ? n(e[0], r) : a
                },
                now: function () {
                    return (new Date).getTime()
                },
                swap: function (e, t, n, r) {
                    var o, i, a = {};
                    for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                    o = n.apply(e, r || []);
                    for (i in t) e.style[i] = a[i];
                    return o
                }
            }), ut.ready.promise = function (t) {
                if (!Y)
                    if (Y = ut.Deferred(), "complete" === G.readyState) setTimeout(ut.ready);
                    else if (G.addEventListener) G.addEventListener("DOMContentLoaded", kt, !1), e.addEventListener("load", kt, !1);
                else {
                    G.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
                    var n = !1;
                    try {
                        n = null == e.frameElement && G.documentElement
                    } catch (r) {}
                    n && n.doScroll && ! function o() {
                        if (!ut.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            St(), ut.ready()
                        }
                    }()
                }
                return Y.promise(t)
            }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                et["[object " + t + "]"] = t.toLowerCase()
            }), U = ut(G),
            function (e, t) {
                function n(e, t, n, r) {
                    var o, i, a, s, l, c, u, d, h, m;
                    if ((t ? t.ownerDocument || t : O) !== A && _(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (j && !r) {
                        if (o = bt.exec(e))
                            if (a = o[1]) {
                                if (9 === s) {
                                    if (i = t.getElementById(a), !i || !i.parentNode) return n;
                                    if (i.id === a) return n.push(i), n
                                } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && q(t, i) && i.id === a) return n.push(i), n
                            } else {
                                if (o[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = o[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (k.qsa && (!H || !H.test(e))) {
                            if (d = u = F, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = p(e), (u = t.getAttribute("id")) ? d = u.replace(Tt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + f(c[l]);
                                h = ft.test(e) && t.parentNode || t, m = c.join(",")
                            }
                            if (m) try {
                                return et.apply(n, h.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                u || t.removeAttribute("id")
                            }
                        }
                    }
                    return x(e.replace(ct, "$1"), t, n, r)
                }

                function r() {
                    function e(n, r) {
                        return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
                    }
                    var t = [];
                    return e
                }

                function o(e) {
                    return e[F] = !0, e
                }

                function i(e) {
                    var t = A.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return o(function (t) {
                        return t = +t, o(function (n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function d() {}

                function p(e, t) {
                    var r, o, i, a, s, l, c, u = W[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = C.preFilter; s;) {
                        (!r || (o = dt.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = pt.exec(s)) && (r = o.shift(), i.push({
                            value: r,
                            type: o[0].replace(ct, " ")
                        }), s = s.slice(r.length));
                        for (a in C.filter) !(o = vt[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), i.push({
                            value: r,
                            type: a,
                            matches: o
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return t ? s.length : s ? n.error(e) : W(e, l).slice(0)
                }

                function f(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        o = n && "parentNode" === r,
                        i = P++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i)
                    } : function (t, n, a) {
                        var s, l, c, u = B + " " + i;
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if (c = t[F] || (t[F] = {}), (l = c[r]) && l[0] === u) {
                                        if ((s = l[1]) === !0 || s === S) return s === !0
                                    } else if (l = c[r] = [u], l[1] = e(t, n, a) || S, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, r, o) {
                    for (var i, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), c && t.push(s));
                    return a
                }

                function v(e, t, n, r, i, a) {
                    return r && !r[F] && (r = v(r)), i && !i[F] && (i = v(i, a)), o(function (o, a, s, l) {
                        var c, u, d, p = [],
                            f = [],
                            h = a.length,
                            m = o || w(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? m : g(m, p, e, s, l),
                            y = n ? i || (o ? e : h || r) ? [] : a : v;
                        if (n && n(v, y, s, l), r)
                            for (c = g(y, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
                                    i(null, y = [], c, l)
                                }
                                for (u = y.length; u--;)(d = y[u]) && (c = i ? nt.call(o, d) : p[u]) > -1 && (o[c] = !(a[c] = d))
                            }
                        } else y = g(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : et.apply(a, y)
                    })
                }

                function y(e) {
                    for (var t, n, r, o = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, l = h(function (e) {
                            return e === t
                        }, a, !0), c = h(function (e) {
                            return nt.call(t, e) > -1
                        }, a, !0), u = [function (e, n, r) {
                            return !i && (r || n !== L) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                        }]; o > s; s++)
                        if (n = C.relative[e[s].type]) u = [h(m(u), n)];
                        else {
                            if (n = C.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                                for (r = ++s; o > r && !C.relative[e[r].type]; r++);
                                return v(s > 1 && m(u), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ct, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && f(e))
                            }
                            u.push(n)
                        }
                    return m(u)
                }

                function b(e, t) {
                    var r = 0,
                        i = t.length > 0,
                        a = e.length > 0,
                        s = function (o, s, l, c, u) {
                            var d, p, f, h = [],
                                m = 0,
                                v = "0",
                                y = o && [],
                                b = null != u,
                                w = L,
                                x = o || a && C.find.TAG("*", u && s.parentNode || s),
                                T = B += null == w ? 1 : Math.random() || .1;
                            for (b && (L = s !== A && s, S = r); null != (d = x[v]); v++) {
                                if (a && d) {
                                    for (p = 0; f = e[p++];)
                                        if (f(d, s, l)) {
                                            c.push(d);
                                            break
                                        }
                                    b && (B = T, S = ++r)
                                }
                                i && ((d = !f && d) && m--, o && y.push(d))
                            }
                            if (m += v, i && v !== m) {
                                for (p = 0; f = t[p++];) f(y, h, s, l);
                                if (o) {
                                    if (m > 0)
                                        for (; v--;) y[v] || h[v] || (h[v] = K.call(c));
                                    h = g(h)
                                }
                                et.apply(c, h), b && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                            }
                            return b && (B = T, L = w), y
                        };
                    return i ? o(s) : s
                }

                function w(e, t, r) {
                    for (var o = 0, i = t.length; i > o; o++) n(e, t[o], r);
                    return r
                }

                function x(e, t, n, r) {
                    var o, i, a, s, l, c = p(e);
                    if (!r && 1 === c.length) {
                        if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && k.getById && 9 === t.nodeType && j && C.relative[i[1].type]) {
                            if (t = (C.find.ID(a.matches[0].replace(kt, St), t) || [])[0], !t) return n;
                            e = e.slice(i.shift().value.length)
                        }
                        for (o = vt.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !C.relative[s = a.type]);)
                            if ((l = C.find[s]) && (r = l(a.matches[0].replace(kt, St), ft.test(i[0].type) && t.parentNode || t))) {
                                if (i.splice(o, 1), e = r.length && f(i), !e) return et.apply(n, r), n;
                                break
                            }
                    }
                    return z(e, c)(r, t, !j, n, ft.test(e)), n
                }
                var T, k, S, C, E, N, z, L, M, _, A, D, j, H, $, R, q, F = "sizzle" + -new Date,
                    O = e.document,
                    B = 0,
                    P = 0,
                    I = r(),
                    W = r(),
                    X = r(),
                    Y = !1,
                    U = function (e, t) {
                        return e === t ? (Y = !0, 0) : 0
                    },
                    V = typeof t,
                    Z = 1 << 31,
                    G = {}.hasOwnProperty,
                    Q = [],
                    K = Q.pop,
                    J = Q.push,
                    et = Q.push,
                    tt = Q.slice,
                    nt = Q.indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ot = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    at = it.replace("w", "w#"),
                    st = "\\[" + ot + "*(" + it + ")" + ot + "*(?:([*^$|!~]?=)" + ot + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + ot + "*\\]",
                    lt = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
                    ct = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
                    dt = new RegExp("^" + ot + "*," + ot + "*"),
                    pt = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
                    ft = new RegExp(ot + "*[+~]"),
                    ht = new RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
                    mt = new RegExp(lt),
                    gt = new RegExp("^" + at + "$"),
                    vt = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + st),
                        PSEUDO: new RegExp("^" + lt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + rt + ")$", "i"),
                        needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    wt = /^(?:input|select|textarea|button)$/i,
                    xt = /^h\d$/i,
                    Tt = /'|\\/g,
                    kt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
                    St = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    };
                try {
                    et.apply(Q = tt.call(O.childNodes), O.childNodes), Q[O.childNodes.length].nodeType
                } catch (Ct) {
                    et = {
                        apply: Q.length ? function (e, t) {
                            J.apply(e, tt.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                N = n.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, _ = n.setDocument = function (e) {
                    var t = e ? e.ownerDocument || e : O,
                        n = t.defaultView;
                    return t !== A && 9 === t.nodeType && t.documentElement ? (A = t, D = t.documentElement, j = !N(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                        _()
                    }), k.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = i(function (e) {
                        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = i(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = i(function (e) {
                        return D.appendChild(e).id = F, !t.getElementsByName || !t.getElementsByName(F).length
                    }), k.getById ? (C.find.ID = function (e, t) {
                        if (typeof t.getElementById !== V && j) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(kt, St);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(kt, St);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = k.getElementsByTagName ? function (e, t) {
                        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, C.find.CLASS = k.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== V && j ? t.getElementsByClassName(e) : void 0
                    }, $ = [], H = [], (k.qsa = yt.test(t.querySelectorAll)) && (i(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + ot + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
                    }), i(function (e) {
                        var n = t.createElement("input");
                        n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + ot + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                    })), (k.matchesSelector = yt.test(R = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                        k.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), $.push("!=", lt)
                    }), H = H.length && new RegExp(H.join("|")), $ = $.length && new RegExp($.join("|")), q = yt.test(D.contains) || D.compareDocumentPosition ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = D.compareDocumentPosition ? function (e, n) {
                        if (e === n) return Y = !0, 0;
                        var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                        return r ? 1 & r || !k.sortDetached && n.compareDocumentPosition(e) === r ? e === t || q(O, e) ? -1 : n === t || q(O, n) ? 1 : M ? nt.call(M, e) - nt.call(M, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function (e, n) {
                        var r, o = 0,
                            i = e.parentNode,
                            a = n.parentNode,
                            l = [e],
                            c = [n];
                        if (e === n) return Y = !0, 0;
                        if (!i || !a) return e === t ? -1 : n === t ? 1 : i ? -1 : a ? 1 : M ? nt.call(M, e) - nt.call(M, n) : 0;
                        if (i === a) return s(e, n);
                        for (r = e; r = r.parentNode;) l.unshift(r);
                        for (r = n; r = r.parentNode;) c.unshift(r);
                        for (; l[o] === c[o];) o++;
                        return o ? s(l[o], c[o]) : l[o] === O ? -1 : c[o] === O ? 1 : 0
                    }, t) : A
                }, n.matches = function (e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== A && _(e), t = t.replace(ht, "='$1']"), !(!k.matchesSelector || !j || $ && $.test(t) || H && H.test(t))) try {
                        var r = R.call(e, t);
                        if (r || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (o) {}
                    return n(t, A, null, [e]).length > 0
                }, n.contains = function (e, t) {
                    return (e.ownerDocument || e) !== A && _(e), q(e, t)
                }, n.attr = function (e, n) {
                    (e.ownerDocument || e) !== A && _(e);
                    var r = C.attrHandle[n.toLowerCase()],
                        o = r && G.call(C.attrHandle, n.toLowerCase()) ? r(e, n, !j) : t;
                    return o === t ? k.attributes || !j ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
                }, n.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function (e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (Y = !k.detectDuplicates, M = !k.sortStable && e.slice(0), e.sort(U), Y) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return e
                }, E = n.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += E(t);
                    return n
                }, C = n.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: vt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(kt, St), e[3] = (e[4] || e[5] || "").replace(kt, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var n, r = !e[5] && e[2];
                            return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(kt, St).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = I[e + " "];
                            return t || (t = new RegExp("(^|" + ot + ")" + e + "(" + ot + "|$)")) && I(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, r) {
                            return function (o) {
                                var i = n.attr(o, e);
                                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === r : "!=" === t ? i !== r : "^=" === t ? r && 0 === i.indexOf(r) : "*=" === t ? r && i.indexOf(r) > -1 : "$=" === t ? r && i.slice(-r.length) === r : "~=" === t ? (" " + i + " ").indexOf(r) > -1 : "|=" === t ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var c, u, d, p, f, h, m = i !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (i) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[F] || (g[F] = {}), c = u[e] || [], f = c[0] === B && c[1], p = c[0] === B && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                u[e] = [B, f, p];
                                                break
                                            }
                                    } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === B) p = c[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[F] || (d[F] = {}))[e] = [B, p]), d !== t)););
                                    return p -= o, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var r, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return i[F] ? i(t) : i.length > 1 ? (r = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) r = nt.call(e, o[a]), e[r] = !(n[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, r)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: o(function (e) {
                            var t = [],
                                n = [],
                                r = z(e.replace(ct, "$1"));
                            return r[F] ? o(function (e, t, n, o) {
                                for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function (e, o, i) {
                                return t[0] = e, r(t, null, i, n), !n.pop()
                            }
                        }),
                        has: o(function (e) {
                            return function (t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: o(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                            }
                        }),
                        lang: o(function (e) {
                            return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(kt, St).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === D
                        },
                        focus: function (e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !C.pseudos.empty(e)
                        },
                        header: function (e) {
                            return xt.test(e.nodeName)
                        },
                        input: function (e) {
                            return wt.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: u(function () {
                            return [0]
                        }),
                        last: u(function (e, t) {
                            return [t - 1]
                        }),
                        eq: u(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: u(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (T in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) C.pseudos[T] = l(T);
                for (T in {
                        submit: !0,
                        reset: !0
                    }) C.pseudos[T] = c(T);
                d.prototype = C.filters = C.pseudos, C.setFilters = new d, z = n.compile = function (e, t) {
                    var n, r = [],
                        o = [],
                        i = X[e + " "];
                    if (!i) {
                        for (t || (t = p(e)), n = t.length; n--;) i = y(t[n]), i[F] ? r.push(i) : o.push(i);
                        i = X(e, b(o, r))
                    }
                    return i
                }, k.sortStable = F.split("").sort(U).join("") === F, k.detectDuplicates = Y, _(), k.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(A.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), k.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || a(rt, function (e, t, n) {
                    var r;
                    return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
                }), ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains
            }(e);
        var Ct = {};
        ut.Callbacks = function (e) {
            e = "string" == typeof e ? Ct[e] || r(e) : ut.extend({}, e);
            var n, o, i, a, s, l, c = [],
                u = !e.once && [],
                d = function (t) {
                    for (o = e.memory && t, i = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                        if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            o = !1;
                            break
                        }
                    n = !1, c && (u ? u.length && d(u.shift()) : o ? c = [] : p.disable())
                },
                p = {
                    add: function () {
                        if (c) {
                            var t = c.length;
                            ! function r(t) {
                                ut.each(t, function (t, n) {
                                    var o = ut.type(n);
                                    "function" === o ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== o && r(n)
                                })
                            }(arguments), n ? a = c.length : o && (l = t, d(o))
                        }
                        return this
                    },
                    remove: function () {
                        return c && ut.each(arguments, function (e, t) {
                            for (var r;
                                (r = ut.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                        }), this
                    },
                    has: function (e) {
                        return e ? ut.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function () {
                        return c = [], a = 0, this
                    },
                    disable: function () {
                        return c = u = o = t, this
                    },
                    disabled: function () {
                        return !c
                    },
                    lock: function () {
                        return u = t, o || p.disable(), this
                    },
                    locked: function () {
                        return !u
                    },
                    fireWith: function (e, t) {
                        return !c || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : d(t)), this
                    },
                    fire: function () {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return p
        }, ut.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return ut.Deferred(function (n) {
                                ut.each(t, function (t, i) {
                                    var a = i[0],
                                        s = ut.isFunction(e[t]) && e[t];
                                    o[i[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? ut.extend(e, r) : r
                        }
                    },
                    o = {};
                return r.pipe = r.then, ut.each(t, function (e, i) {
                    var a = i[2],
                        s = i[3];
                    r[i[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
                        return o[i[0] + "With"](this === o ? r : this, arguments), this
                    }, o[i[0] + "With"] = a.fireWith
                }), r.promise(o), e && e.call(o, o), o
            },
            when: function (e) {
                var t, n, r, o = 0,
                    i = it.call(arguments),
                    a = i.length,
                    s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : ut.Deferred(),
                    c = function (e, n, r) {
                        return function (o) {
                            n[e] = this, r[e] = arguments.length > 1 ? it.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && ut.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --s;
                return s || l.resolveWith(r, i), l.promise()
            }
        }), ut.support = function (t) {
            var n, r, o, i, a, s, l, c, u, d = G.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
            i = G.createElement("select"), s = i.appendChild(G.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            o = G.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (u in ut(t)) break;
            return t.ownLast = "0" !== u, ut(function () {
                var n, r, o, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = G.getElementsByTagName("body")[0];
                a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function () {
                    t.boxSizing = 4 === d.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, r = d.appendChild(G.createElement("div")), r.style.cssText = d.style.cssText = i, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = o = r = null)
            }), n = i = a = s = r = o = null, t
        }({});
        var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Nt = /([A-Z])/g;
        ut.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
            },
            data: function (e, t, n) {
                return o(e, t, n)
            },
            removeData: function (e, t) {
                return i(e, t)
            },
            _data: function (e, t, n) {
                return o(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return i(e, t, !0)
            },
            acceptData: function (e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ut.fn.extend({
            data: function (e, n) {
                var r, o, i = null,
                    s = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (i = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                        for (r = l.attributes; s < r.length; s++) o = r[s].name, 0 === o.indexOf("data-") && (o = ut.camelCase(o.slice(5)), a(l, o, i[o]));
                        ut._data(l, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ut.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ut.data(this, e, n)
                }) : l ? a(l, e, ut.data(l, e)) : null
            },
            removeData: function (e) {
                return this.each(function () {
                    ut.removeData(this, e)
                })
            }
        }), ut.extend({
            queue: function (e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ut.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = ut._queueHooks(e, t),
                    a = function () {
                        ut.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function () {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
            }
        }), ut.fn.extend({
            queue: function (e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
                    var t = ut.queue(this, e, n);
                    ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    ut.dequeue(this, e)
                })
            },
            delay: function (e, t) {
                return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, n) {
                var r, o = 1,
                    i = ut.Deferred(),
                    a = this,
                    s = this.length,
                    l = function () {
                        --o || i.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ut._data(a[s], e + "queueHooks"), r && r.empty && (o++, r.empty.add(l));
                return l(), i.promise(n)
            }
        });
        var zt, Lt, Mt = /[\t\r\n\f]/g,
            _t = /\r/g,
            At = /^(?:input|select|textarea|button|object)$/i,
            Dt = /^(?:a|area)$/i,
            jt = /^(?:checked|selected)$/i,
            Ht = ut.support.getSetAttribute,
            $t = ut.support.input;
        ut.fn.extend({
            attr: function (e, t) {
                return ut.access(this, ut.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ut.removeAttr(this, e)
                })
            },
            prop: function (e, t) {
                return ut.access(this, ut.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = ut.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function (e) {
                var t, n, r, o, i, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pt) || []; s > a; a++)
                        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : " ")) {
                            for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            n.className = ut.trim(r)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, r, o, i, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pt) || []; s > a; a++)
                        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : "")) {
                            for (i = 0; o = t[i++];)
                                for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                            n.className = e ? ut.trim(r) : ""
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ut.isFunction(e) ? function (n) {
                    ut(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function () {
                    if ("string" === n)
                        for (var t, r = 0, o = ut(this), i = e.match(pt) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === V || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mt, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var n, r, o, i = this[0]; {
                    if (arguments.length) return o = ut.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = o ? e.call(this, n, ut(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ut.isArray(i) && (i = ut.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, i, "value") !== t || (this.value = i))
                    });
                    if (i) return r = ut.valHooks[i.type] || ut.valHooks[i.nodeName.toLowerCase()], r && "get" in r && (n = r.get(i, "value")) !== t ? n : (n = i.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
                }
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ut.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++)
                            if (n = r[l], !(!n.selected && l !== o || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ut(n).val(), i) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, r, o = e.options, i = ut.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = ut.inArray(ut(r).val(), i) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            },
            attr: function (e, n, r) {
                var o, i, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === V ? ut.prop(e, n, r) : (1 === a && ut.isXMLDoc(e) || (n = n.toLowerCase(), o = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? Lt : zt)), r === t ? o && "get" in o && null !== (i = o.get(e, n)) ? i : (i = ut.find.attr(e, n), null == i ? t : i) : null !== r ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : void ut.removeAttr(e, n))
            },
            removeAttr: function (e, t) {
                var n, r, o = 0,
                    i = t && t.match(pt);
                if (i && 1 === e.nodeType)
                    for (; n = i[o++];) r = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? $t && Ht || !jt.test(n) ? e[r] = !1 : e[ut.camelCase("default-" + n)] = e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Ht ? n : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (e, n, r) {
                var o, i, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, i = ut.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ut.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : At.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Lt = {
            set: function (e, t, n) {
                return t === !1 ? ut.removeAttr(e, n) : $t && Ht || !jt.test(n) ? e.setAttribute(!Ht && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function (e, n) {
            var r = ut.expr.attrHandle[n] || ut.find.attr;
            ut.expr.attrHandle[n] = $t && Ht || !jt.test(n) ? function (e, n, o) {
                var i = ut.expr.attrHandle[n],
                    a = o ? t : (ut.expr.attrHandle[n] = t) != r(e, n, o) ? n.toLowerCase() : null;
                return ut.expr.attrHandle[n] = i, a
            } : function (e, n, r) {
                return r ? t : e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), $t && Ht || (ut.attrHooks.value = {
            set: function (e, t, n) {
                return ut.nodeName(e, "input") ? void(e.defaultValue = t) : zt && zt.set(e, t, n)
            }
        }), Ht || (zt = {
            set: function (e, n, r) {
                var o = e.getAttributeNode(r);
                return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(r)), o.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
            }
        }, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function (e, n, r) {
            var o;
            return r ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ut.valHooks.button = {
            get: function (e, n) {
                var r = e.getAttributeNode(n);
                return r && r.specified ? r.value : t
            },
            set: zt.set
        }, ut.attrHooks.contenteditable = {
            set: function (e, t, n) {
                zt.set(e, "" === t ? !1 : t, n)
            }
        }, ut.each(["width", "height"], function (e, t) {
            ut.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ut.support.hrefNormalized || ut.each(["href", "src"], function (e, t) {
            ut.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ut.support.style || (ut.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || t
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), ut.support.optSelected || (ut.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ut.propFix[this.toLowerCase()] = this
        }), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each(["radio", "checkbox"], function () {
            ut.valHooks[this] = {
                set: function (e, t) {
                    return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
                }
            }, ut.support.checkOn || (ut.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Rt = /^(?:input|select|textarea)$/i,
            qt = /^key/,
            Ft = /^(?:mouse|contextmenu)|click/,
            Ot = /^(?:focusinfocus|focusoutblur)$/,
            Bt = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
            global: {},
            add: function (e, n, r, o, i) {
                var a, s, l, c, u, d, p, f, h, m, g, v = ut._data(e);
                if (v) {
                    for (r.handler && (c = r, r = c.handler, i = c.selector), r.guid || (r.guid = ut.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                            return typeof ut === V || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), n = (n || "").match(pt) || [""], l = n.length; l--;) a = Bt.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (u = ut.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = ut.event.special[h] || {}, p = ut.extend({
                        type: h,
                        origType: g,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: i,
                        needsContext: i && ut.expr.match.needsContext.test(i),
                        namespace: m.join(".")
                    }, c), (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, o, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), i ? f.splice(f.delegateCount++, 0, p) : f.push(p), ut.event.global[h] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, o) {
                var i, a, s, l, c, u, d, p, f, h, m, g = ut.hasData(e) && ut._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(pt) || [""], c = t.length; c--;)
                        if (s = Bt.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = ut.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = p.length; i--;) a = p[i], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(i, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ut.removeEvent(e, f, g.handle), delete u[f])
                        } else
                            for (f in u) ut.event.remove(e, f + t[c], n, r, !0);
                    ut.isEmptyObject(u) && (delete g.handle, ut._removeData(e, "events"))
                }
            },
            trigger: function (n, r, o, i) {
                var a, s, l, c, u, d, p, f = [o || G],
                    h = lt.call(n, "type") ? n.type : n,
                    m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = o = o || G, 3 !== o.nodeType && 8 !== o.nodeType && !Ot.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = i ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), r = null == r ? [n] : ut.makeArray(r, [n]), u = ut.event.special[h] || {}, i || !u.trigger || u.trigger.apply(o, r) !== !1)) {
                    if (!i && !u.noBubble && !ut.isWindow(o)) {
                        for (c = u.delegateType || h, Ot.test(c + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                        d === (o.ownerDocument || G) && f.push(d.defaultView || d.parentWindow || e)
                    }
                    for (p = 0;
                        (l = f[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? c : u.bindType || h, a = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ut.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                    if (n.type = h, !i && !n.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), r) === !1) && ut.acceptData(o) && s && o[h] && !ut.isWindow(o)) {
                        d = o[s], d && (o[s] = null), ut.event.triggered = h;
                        try {
                            o[h]()
                        } catch (g) {}
                        ut.event.triggered = t, d && (o[s] = d)
                    }
                    return n.result
                }
            },
            dispatch: function (e) {
                e = ut.event.fix(e);
                var n, r, o, i, a, s = [],
                    l = it.call(arguments),
                    c = (ut._data(this, "events") || {})[e.type] || [],
                    u = ut.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = ut.event.handlers.call(this, e, c), n = 0;
                        (i = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, a = 0;
                            (o = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((ut.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, n) {
                var r, o, i, a, s = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], a = 0; l > a; a++) o = n[a], r = o.selector + " ", i[r] === t && (i[r] = o.needsContext ? ut(r, this).index(c) >= 0 : ut.find(r, this, null, [c]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return l < n.length && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function (e) {
                if (e[ut.expando]) return e;
                var t, n, r, o = e.type,
                    i = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ft.test(o) ? this.mouseHooks : qt.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                return e.target || (e.target = i.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, n) {
                    var r, o, i, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || G, i = o.documentElement, r = o.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== u() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (e) {
                        return ut.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var o = ut.extend(new ut.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? ut.event.trigger(o, null, t) : ut.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ut.removeEvent = G.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
        }, ut.Event = function (e, t) {
            return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), void(this[ut.expando] = !0)) : new ut.Event(e, t)
        }, ut.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ut.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            ut.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return (!o || o !== r && !ut.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ut.support.submitBubbles || (ut.event.special.submit = {
            setup: function () {
                return ut.nodeName(this, "form") ? !1 : void ut.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target,
                        r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                    r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), ut._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return ut.nodeName(this, "form") ? !1 : void ut.event.remove(this, "._submit")
            }
        }), ut.support.changeBubbles || (ut.event.special.change = {
            setup: function () {
                return Rt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ut.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
                })), !1) : void ut.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Rt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                    }), ut._data(t, "changeBubbles", !0))
                })
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return ut.event.remove(this, "._change"), !Rt.test(this.nodeName)
            }
        }), ut.support.focusinBubbles || ut.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0,
                r = function (e) {
                    ut.event.simulate(t, e.target, ut.event.fix(e), !0)
                };
            ut.event.special[t] = {
                setup: function () {
                    0 === n++ && G.addEventListener(e, r, !0)
                },
                teardown: function () {
                    0 === --n && G.removeEventListener(e, r, !0)
                }
            }
        }), ut.fn.extend({
            on: function (e, n, r, o, i) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (a in e) this.on(a, n, r, e[a], i);
                    return this
                }
                if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, r = n, n = t)), o === !1) o = c;
                else if (!o) return this;
                return 1 === i && (s = o, o = function (e) {
                    return ut().off(e), s.apply(this, arguments)
                }, o.guid = s.guid || (s.guid = ut.guid++)), this.each(function () {
                    ut.event.add(this, e, o, r, n)
                })
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, n, r) {
                var o, i;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, ut(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, n, e[i]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function () {
                    ut.event.remove(this, e, r, n)
                })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    ut.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? ut.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Pt = /^.[^:#\[\.,]*$/,
            It = /^(?:parents|prev(?:Until|All))/,
            Wt = ut.expr.match.needsContext,
            Xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.fn.extend({
            find: function (e) {
                var t, n = [],
                    r = this,
                    o = r.length;
                if ("string" != typeof e) return this.pushStack(ut(e).filter(function () {
                    for (t = 0; o > t; t++)
                        if (ut.contains(r[t], this)) return !0
                }));
                for (t = 0; o > t; t++) ut.find(e, r[t], n);
                return n = this.pushStack(o > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function (e) {
                var t, n = ut(e, this),
                    r = n.length;
                return this.filter(function () {
                    for (t = 0; r > t; t++)
                        if (ut.contains(this, n[t])) return !0
                })
            },
            not: function (e) {
                return this.pushStack(p(this, e || [], !0))
            },
            filter: function (e) {
                return this.pushStack(p(this, e || [], !1))
            },
            is: function (e) {
                return !!p(this, "string" == typeof e && Wt.test(e) ? ut(e) : e || [], !1).length
            },
            closest: function (e, t) {
                for (var n, r = 0, o = this.length, i = [], a = Wt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; o > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
                            n = i.push(n);
                            break
                        }
                return this.pushStack(i.length > 1 ? ut.unique(i) : i)
            },
            index: function (e) {
                return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                    r = ut.merge(this.get(), n);
                return this.pushStack(ut.unique(r))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ut.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return ut.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return ut.dir(e, "parentNode", n)
            },
            next: function (e) {
                return d(e, "nextSibling")
            },
            prev: function (e) {
                return d(e, "previousSibling")
            },
            nextAll: function (e) {
                return ut.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return ut.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return ut.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return ut.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ut.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ut.sibling(e.firstChild)
            },
            contents: function (e) {
                return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
            }
        }, function (e, t) {
            ut.fn[e] = function (n, r) {
                var o = ut.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ut.filter(r, o)), this.length > 1 && (Xt[e] || (o = ut.unique(o)), It.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        }), ut.extend({
            filter: function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ut.find.matchesSelector(r, e) ? [r] : [] : ut.find.matches(e, ut.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function (e, n, r) {
                for (var o = [], i = e[n]; i && 9 !== i.nodeType && (r === t || 1 !== i.nodeType || !ut(i).is(r));) 1 === i.nodeType && o.push(i), i = i[n];
                return o
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ut = / jQuery\d+="(?:null|\d+)"/g,
            Vt = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
            Zt = /^\s+/,
            Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Qt = /<([\w:]+)/,
            Kt = /<tbody/i,
            Jt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^$|\/(?:java|ecma)script/i,
            on = /^true\/(.*)/,
            an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            sn = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = f(G),
            cn = ln.appendChild(G.createElement("div"));
        sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
            text: function (e) {
                return ut.access(this, function (e) {
                    return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                for (var n, r = e ? ut.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || ut.cleanData(w(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ut.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ut.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return ut.clone(this, e, t)
                })
            },
            html: function (e) {
                return ut.access(this, function (e) {
                    var n = this[0] || {},
                        r = 0,
                        o = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ut, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Vt.test(e) || !ut.support.leadingWhitespace && Zt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Gt, "<$1></$2>");
                        try {
                            for (; o > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(w(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (i) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = ut.map(this, function (e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function (n) {
                    var r = e[t++],
                        o = e[t++];
                    o && (r && r.parentNode !== o && (r = this.nextSibling), ut(this).remove(), o.insertBefore(n, r))
                }, !0), t ? this : this.remove()
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t, n) {
                e = rt.apply([], e);
                var r, o, i, a, s, l, c = 0,
                    u = this.length,
                    d = this,
                    p = u - 1,
                    f = e[0],
                    h = ut.isFunction(f);
                if (h || !(1 >= u || "string" != typeof f || ut.support.checkClone) && nn.test(f)) return this.each(function (r) {
                    var o = d.eq(r);
                    h && (e[0] = f.call(this, r, o.html())), o.domManip(e, t, n)
                });
                if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                    for (a = ut.map(w(l, "script"), m), i = a.length; u > c; c++) o = l, c !== p && (o = ut.clone(o, !0, !0), i && ut.merge(a, w(o, "script"))), t.call(this[c], o, c);
                    if (i)
                        for (s = a[a.length - 1].ownerDocument, ut.map(a, g), c = 0; i > c; c++) o = a[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(s, o) && (o.src ? ut._evalUrl(o.src) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                    l = r = null
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ut.fn[e] = function (e) {
                for (var n, r = 0, o = [], i = ut(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ut(i[r])[t](n), ot.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ut.extend({
            clone: function (e, t, n) {
                var r, o, i, a, s, l = ut.contains(e.ownerDocument, e);
                if (ut.support.html5Clone || ut.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(i = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))
                    for (r = w(i), s = w(e), a = 0; null != (o = s[a]); ++a) r[a] && b(o, r[a]);
                if (t)
                    if (n)
                        for (s = s || w(e), r = r || w(i), a = 0; null != (o = s[a]); a++) y(o, r[a]);
                    else y(e, i);
                return r = w(i, "script"), r.length > 0 && v(r, !l && w(e, "script")), r = s = o = null, i
            },
            buildFragment: function (e, t, n, r) {
                for (var o, i, a, s, l, c, u, d = e.length, p = f(t), h = [], m = 0; d > m; m++)
                    if (i = e[m], i || 0 === i)
                        if ("object" === ut.type(i)) ut.merge(h, i.nodeType ? [i] : i);
                        else if (Jt.test(i)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Qt.exec(i) || ["", ""])[1].toLowerCase(), u = sn[l] || sn._default, s.innerHTML = u[1] + i.replace(Gt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!ut.support.leadingWhitespace && Zt.test(i) && h.push(t.createTextNode(Zt.exec(i)[0])), !ut.support.tbody)
                        for (i = "table" !== l || Kt.test(i) ? "<table>" !== u[1] || Kt.test(i) ? 0 : s : s.firstChild, o = i && i.childNodes.length; o--;) ut.nodeName(c = i.childNodes[o], "tbody") && !c.childNodes.length && i.removeChild(c);
                    for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else h.push(t.createTextNode(i));
                for (s && p.removeChild(s), ut.support.appendChecked || ut.grep(w(h, "input"), x), m = 0; i = h[m++];)
                    if ((!r || -1 === ut.inArray(i, r)) && (a = ut.contains(i.ownerDocument, i), s = w(p.appendChild(i), "script"), a && v(s), n))
                        for (o = 0; i = s[o++];) rn.test(i.type || "") && n.push(i);
                return s = null, p
            },
            cleanData: function (e, t) {
                for (var n, r, o, i, a = 0, s = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = e[a]); a++)
                    if ((t || ut.acceptData(n)) && (o = n[s], i = o && l[o])) {
                        if (i.events)
                            for (r in i.events) u[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, i.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, tt.push(o))
                    }
            },
            _evalUrl: function (e) {
                return ut.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ut.fn.extend({
            wrapAll: function (e) {
                if (ut.isFunction(e)) return this.each(function (t) {
                    ut(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return this.each(ut.isFunction(e) ? function (t) {
                    ut(this).wrapInner(e.call(this, t))
                } : function () {
                    var t = ut(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ut.isFunction(e);
                return this.each(function (n) {
                    ut(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var un, dn, pn, fn = /alpha\([^)]*\)/i,
            hn = /opacity\s*=\s*([^)]*)/,
            mn = /^(top|right|bottom|left)$/,
            gn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = new RegExp("^(" + dt + ")(.*)$", "i"),
            bn = new RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
            wn = new RegExp("^([+-])=(" + dt + ")", "i"),
            xn = {
                BODY: "block"
            },
            Tn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Sn = ["Top", "Right", "Bottom", "Left"],
            Cn = ["Webkit", "O", "Moz", "ms"];
        ut.fn.extend({
            css: function (e, n) {
                return ut.access(this, function (e, n, r) {
                    var o, i, a = {},
                        s = 0;
                    if (ut.isArray(n)) {
                        for (i = dn(e), o = n.length; o > s; s++) a[n[s]] = ut.css(e, n[s], !1, i);
                        return a
                    }
                    return r !== t ? ut.style(e, n, r) : ut.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function () {
                return S(this, !0)
            },
            hide: function () {
                return S(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    k(this) ? ut(this).show() : ut(this).hide()
                })
            }
        }), ut.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = pn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, r, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, a, s, l = ut.camelCase(n),
                        c = e.style;
                    if (n = ut.cssProps[l] || (ut.cssProps[l] = T(c, l)), s = ut.cssHooks[n] || ut.cssHooks[l], r === t) return s && "get" in s && (i = s.get(e, !1, o)) !== t ? i : c[n];
                    if (a = typeof r, "string" === a && (i = wn.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[l] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, o)) === t))) try {
                        c[n] = r
                    } catch (u) {}
                }
            },
            css: function (e, n, r, o) {
                var i, a, s, l = ut.camelCase(n);
                return n = ut.cssProps[l] || (ut.cssProps[l] = T(e.style, l)), s = ut.cssHooks[n] || ut.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, o)), "normal" === a && n in kn && (a = kn[n]), "" === r || r ? (i = parseFloat(a), r === !0 || ut.isNumeric(i) ? i || 0 : a) : a
            }
        }), e.getComputedStyle ? (dn = function (t) {
            return e.getComputedStyle(t, null)
        }, pn = function (e, n, r) {
            var o, i, a, s = r || dn(e),
                l = s ? s.getPropertyValue(n) || s[n] : t,
                c = e.style;
            return s && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), bn.test(l) && vn.test(n) && (o = c.width, i = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = i, c.maxWidth = a)), l
        }) : G.documentElement.currentStyle && (dn = function (e) {
            return e.currentStyle
        }, pn = function (e, n, r) {
            var o, i, a, s = r || dn(e),
                l = s ? s[n] : t,
                c = e.style;
            return null == l && c && c[n] && (l = c[n]), bn.test(l) && !mn.test(n) && (o = c.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (i.left = a)), "" === l ? "auto" : l
        }), ut.each(["height", "width"], function (e, t) {
            ut.cssHooks[t] = {
                get: function (e, n, r) {
                    return n ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function () {
                        return N(e, t, r)
                    }) : N(e, t, r) : void 0
                },
                set: function (e, n, r) {
                    var o = r && dn(e);
                    return C(e, n, r ? E(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ut.support.opacity || (ut.cssHooks.opacity = {
            get: function (e, t) {
                return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    o = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    i = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(i.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(i) ? i.replace(fn, o) : i + " " + o)
            }
        }), ut(function () {
            ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
                get: function (e, t) {
                    return t ? ut.swap(e, {
                        display: "inline-block"
                    }, pn, [e, "marginRight"]) : void 0
                }
            }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, t) {
                ut.cssHooks[t] = {
                    get: function (e, n) {
                        return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                    }
                }
            })
        }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
        }, ut.expr.filters.visible = function (e) {
            return !ut.expr.filters.hidden(e)
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ut.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Sn[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, vn.test(e) || (ut.cssHooks[e + t].set = C)
        });
        var En = /%20/g,
            Nn = /\[\]$/,
            zn = /\r?\n/g,
            Ln = /^(?:submit|button|image|reset|file)$/i,
            Mn = /^(?:input|select|textarea|keygen)/i;
        ut.fn.extend({
            serialize: function () {
                return ut.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ut.prop(this, "elements");
                    return e ? ut.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ut(this).is(":disabled") && Mn.test(this.nodeName) && !Ln.test(e) && (this.checked || !tn.test(e))
                }).map(function (e, t) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(zn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(zn, "\r\n")
                    }
                }).get()
            }
        }), ut.param = function (e, n) {
            var r, o = [],
                i = function (e, t) {
                    t = ut.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (r in e) M(r, e[r], n, i);
            return o.join("&").replace(En, "+")
        }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ut.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ut.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var _n, An, Dn = ut.now(),
            jn = /\?/,
            Hn = /#.*$/,
            $n = /([?&])_=[^&]*/,
            Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Fn = /^(?:GET|HEAD)$/,
            On = /^\/\//,
            Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pn = ut.fn.load,
            In = {},
            Wn = {},
            Xn = "*/".concat("*");
        try {
            An = Z.href
        } catch (Yn) {
            An = G.createElement("a"), An.href = "", An = An.href
        }
        _n = Bn.exec(An.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
            if ("string" != typeof e && Pn) return Pn.apply(this, arguments);
            var o, i, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function (e) {
                i = arguments, s.html(o ? ut("<div>").append(ut.parseHTML(e)).find(o) : e)
            }).complete(r && function (e, t) {
                s.each(r, i || [e.responseText, t, e])
            }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ut.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: An,
                type: "GET",
                isLocal: qn.test(_n[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? D(D(e, ut.ajaxSettings), t) : D(ut.ajaxSettings, e)
            },
            ajaxPrefilter: _(In),
            ajaxTransport: _(Wn),
            ajax: function (e, n) {
                function r(e, n, r, o) {
                    var i, d, y, b, x, k = n;
                    2 !== w && (w = 2, l && clearTimeout(l), u = t, s = o || "", T.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, r && (b = j(p, T, r)), b = H(p, b, T, i), i ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ut.lastModified[a] = x), x = T.getResponseHeader("etag"), x && (ut.etag[a] = x)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, y = b.error, i = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || k) + "", i ? m.resolveWith(f, [d, k, T]) : m.rejectWith(f, [T, k, y]), T.statusCode(v), v = t, c && h.trigger(i ? "ajaxSuccess" : "ajaxError", [T, p, i ? d : y]), g.fireWith(f, [T, k]), c && (h.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var o, i, a, s, l, c, u, d, p = ut.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? ut(f) : ut.event,
                    m = ut.Deferred(),
                    g = ut.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; t = Rn.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return w || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return w || (p.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > w)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || x;
                            return u && u.abort(t), r(0, t), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || An) + "").replace(Hn, "").replace(On, _n[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (o = Bn.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === _n[1] && o[2] === _n[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), A(In, p, n, T), 2 === w) return T;
                c = p.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Fn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (jn.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = $n.test(a) ? a.replace($n, "$1_=" + Dn++) : a + (jn.test(a) ? "&" : "?") + "_=" + Dn++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : p.accepts["*"]);
                for (i in p.headers) T.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[i](p[i]);
                if (u = A(Wn, p, n, T)) {
                    T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, u.send(y, r)
                    } catch (k) {
                        if (!(2 > w)) throw k;
                        r(-1, k)
                    }
                } else r(-1, "No Transport");
                return T
            },
            getJSON: function (e, t, n) {
                return ut.get(e, t, n, "json")
            },
            getScript: function (e, n) {
                return ut.get(e, t, n, "script")
            }
        }), ut.each(["get", "post"], function (e, n) {
            ut[n] = function (e, r, o, i) {
                return ut.isFunction(r) && (i = i || o, o = r, r = t), ut.ajax({
                    url: e,
                    type: n,
                    dataType: i,
                    data: r,
                    success: o
                })
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return ut.globalEval(e), e
                }
            }
        }), ut.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ut.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, r = G.head || ut("head")[0] || G.documentElement;
                return {
                    send: function (t, o) {
                        n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function () {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Un = [],
            Vn = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Un.pop() || ut.expando + "_" + Dn++;
                return this[e] = !0, e
            }
        }), ut.ajaxPrefilter("json jsonp", function (n, r, o) {
            var i, a, s, l = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vn, "$1" + i) : n.jsonp !== !1 && (n.url += (jn.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function () {
                return s || ut.error(i + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[i], e[i] = function () {
                s = arguments
            }, o.always(function () {
                e[i] = a, n[i] && (n.jsonpCallback = r.jsonpCallback, Un.push(i)), s && ut.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        });
        var Zn, Gn, Qn = 0,
            Kn = e.ActiveXObject && function () {
                var e;
                for (e in Zn) Zn[e](t, !0)
            };
        ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && $() || R()
        } : $, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !!Gn && "withCredentials" in Gn, Gn = ut.support.ajax = !!Gn, Gn && ut.ajaxTransport(function (n) {
            if (!n.crossDomain || ut.support.cors) {
                var r;
                return {
                    send: function (o, i) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in o) l.setRequestHeader(s, o[s])
                        } catch (c) {}
                        l.send(n.hasContent && n.data || null), r = function (e, o) {
                            var s, c, u, d;
                            try {
                                if (r && (o || 4 === l.readyState))
                                    if (r = t, a && (l.onreadystatechange = ut.noop, Kn && delete Zn[a]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch (p) {
                                            u = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                o || i(-1, f)
                            }
                            d && i(s, u, d, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Zn || (Zn = {}, ut(e).unload(Kn)), Zn[a] = r), l.onreadystatechange = r) : r()
                    },
                    abort: function () {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Jn, er, tr = /^(?:toggle|show|hide)$/,
            nr = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
            rr = /queueHooks$/,
            or = [P],
            ir = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        o = nr.exec(t),
                        i = o && o[3] || (ut.cssNumber[e] ? "" : "px"),
                        a = (ut.cssNumber[e] || "px" !== i && +r) && nr.exec(ut.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== i) {
                        i = i || a[3], o = o || [], a = +r || 1;
                        do s = s || ".5", a /= s, ut.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ut.Animation = ut.extend(O, {
            tweener: function (e, t) {
                ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], ir[n] = ir[n] || [], ir[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? or.unshift(e) : or.push(e)
            }
        }), ut.Tween = I, I.prototype = {
            constructor: I,
            init: function (e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = I.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ut.each(["toggle", "show", "hide"], function (e, t) {
            var n = ut.fn[t];
            ut.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, o)
            }
        }), ut.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(k).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var o = ut.isEmptyObject(e),
                    i = ut.speed(t, n, r),
                    a = function () {
                        var t = O(this, ut.extend({}, e), i);
                        (o || ut._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function (e, n, r) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        i = ut.timers,
                        a = ut._data(this);
                    if (n) a[n] && a[n].stop && o(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && rr.test(n) && o(a[n]);
                    for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), t = !1, i.splice(n, 1));
                    (t || !r) && ut.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ut._data(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = ut.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ut.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            ut.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ut.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ut.extend({}, e) : {
                complete: n || !n && t || ut.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ut.isFunction(t) && t
            };
            return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
            }, r
        }, ut.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ut.timers = [], ut.fx = I.prototype.init, ut.fx.tick = function () {
            var e, n = ut.timers,
                r = 0;
            for (Jn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
            n.length || ut.fx.stop(), Jn = t
        }, ut.fx.timer = function (e) {
            e() && ut.timers.push(e) && ut.fx.start()
        }, ut.fx.interval = 13, ut.fx.start = function () {
            er || (er = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function () {
            clearInterval(er), er = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
            return ut.grep(ut.timers, function (t) {
                return e === t.elem
            }).length
        }), ut.fn.offset = function (e) {
            if (arguments.length) return e === t ? this : this.each(function (t) {
                ut.offset.setOffset(this, e, t)
            });
            var n, r, o = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                a = i && i.ownerDocument;
            if (a) return n = a.documentElement, ut.contains(n, i) ? (typeof i.getBoundingClientRect !== V && (o = i.getBoundingClientRect()), r = X(a), {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }, ut.offset = {
            setOffset: function (e, t, n) {
                var r = ut.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var o, i, a = ut(e),
                    s = a.offset(),
                    l = ut.css(e, "top"),
                    c = ut.css(e, "left"),
                    u = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [l, c]) > -1,
                    d = {},
                    p = {};
                u ? (p = a.position(), o = p.top, i = p.left) : (o = parseFloat(l) || 0, i = parseFloat(c) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : a.css(d)
            }
        }, ut.fn.extend({
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ut.css(r, "marginTop", !0),
                        left: t.left - n.left - ut.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Q; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                    return e || Q
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, n) {
            var r = /Y/.test(n);
            ut.fn[e] = function (o) {
                return ut.access(this, function (e, o, i) {
                    var a = X(e);
                    return i === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : void(a ? a.scrollTo(r ? ut(a).scrollLeft() : i, r ? i : ut(a).scrollTop()) : e[o] = i)
                }, e, o, arguments.length, null)
            }
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function (e, n) {
            ut.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function (r, o) {
                ut.fn[o] = function (o, i) {
                    var a = arguments.length && (r || "boolean" != typeof o),
                        s = r || (o === !0 || i === !0 ? "margin" : "border");
                    return ut.access(this, function (n, r, o) {
                        var i;
                        return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? ut.css(n, r, s) : ut.style(n, r, o, s)
                    }, n, a ? o : t, a, null)
                }
            })
        }), ut.fn.size = function () {
            return this.length
        }, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ut
        }))
    }(e),
    function (n) {
        function r() {
            var e = t.getElementsByTagName("script"),
                n = e[e.length - 1].src.split("?")[0];
            return n.split("/").length > 0 ? n.split("/").slice(0, -1).join("/") + "/" : ""
        }

        function o(e, t, n) {
            for (var r = 0; r < t.length; r++) n(e, t[r])
        }
        var i = !1,
            s = !1,
            l = 5e3,
            c = 2e3,
            u = 0,
            d = n,
            p = r();
        Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
            for (var n = 0, r = this.length; r > n; ++n) e.call(t, this[n], n, this)
        });
        var f = ["ms", "moz", "webkit", "o"],
            h = e.requestAnimationFrame || !1,
            m = e.cancelAnimationFrame || !1;
        f.forEach(function (t) {
            h || (h = e[t + "RequestAnimationFrame"]), m || (m = e[t + "CancelAnimationFrame"] || e[t + "CancelRequestAnimationFrame"])
        });
        var g = e.MutationObserver || e.WebKitMutationObserver || !1,
            v = {
                zindex: "auto",
                cursoropacitymin: 0,
                cursoropacitymax: 1,
                cursorcolor: "#424242",
                cursorwidth: "5px",
                cursorborder: "1px solid #fff",
                cursorborderradius: "5px",
                scrollspeed: 60,
                mousescrollstep: 24,
                touchbehavior: !1,
                hwacceleration: !0,
                usetransition: !0,
                boxzoom: !1,
                dblclickzoom: !0,
                gesturezoom: !0,
                grabcursorenabled: !0,
                autohidemode: !0,
                background: "",
                iframeautoresize: !0,
                cursorminheight: 32,
                preservenativescrolling: !0,
                railoffset: !1,
                bouncescroll: !0,
                spacebarenabled: !0,
                railpadding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                disableoutline: !0,
                horizrailenabled: !0,
                railalign: "right",
                railvalign: "bottom",
                enabletranslate3d: !0,
                enablemousewheel: !0,
                enablekeyboard: !0,
                smoothscroll: !0,
                sensitiverail: !0,
                enablemouselockapi: !0,
                cursorfixedheight: !1,
                directionlockdeadzone: 6,
                hidecursordelay: 400,
                nativeparentscrolling: !0,
                enablescrollonselection: !0,
                overflowx: !0,
                overflowy: !0,
                cursordragspeed: .3,
                rtlmode: !1,
                cursordragontouch: !1
            },
            y = !1,
            b = function () {
                function n() {
                    var e = ["-moz-grab", "-webkit-grab", "grab"];
                    (o.ischrome && !o.ischrome22 || o.isie) && (e = []);
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (r.style.cursor = n, r.style.cursor == n) return n
                    }
                    return "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
                }
                if (y) return y;
                var r = t.createElement("DIV"),
                    o = {};
                o.haspointerlock = "pointerLockElement" in t || "mozPointerLockElement" in t || "webkitPointerLockElement" in t, o.isopera = "opera" in e, o.isopera12 = o.isopera && "getUserMedia" in navigator, o.isie = "all" in t && "attachEvent" in r && !o.isopera, o.isieold = o.isie && !("msInterpolationMode" in r.style), o.isie7 = !(!o.isie || o.isieold || "documentMode" in t && 7 != t.documentMode), o.isie8 = o.isie && "documentMode" in t && 8 == t.documentMode, o.isie9 = o.isie && "performance" in e && t.documentMode >= 9, o.isie10 = o.isie && "performance" in e && t.documentMode >= 10, o.isie9mobile = /iemobile.9/i.test(navigator.userAgent), o.isie9mobile && (o.isie9 = !1), o.isie7mobile = !o.isie9mobile && o.isie7 && /iemobile/i.test(navigator.userAgent), o.ismozilla = "MozAppearance" in r.style, o.iswebkit = "WebkitAppearance" in r.style, o.ischrome = "chrome" in e, o.ischrome22 = o.ischrome && o.haspointerlock, o.ischrome26 = o.ischrome && "transition" in r.style, o.cantouch = "ontouchstart" in t.documentElement || "ontouchstart" in e, o.hasmstouch = e.navigator.msPointerEnabled || !1, o.ismac = /^mac$/i.test(navigator.platform), o.isios = o.cantouch && /iphone|ipad|ipod/i.test(navigator.platform), o.isios4 = o.isios && !("seal" in Object), o.isandroid = /android/i.test(navigator.userAgent), o.trstyle = !1, o.hastransform = !1, o.hastranslate3d = !1, o.transitionstyle = !1, o.hastransition = !1, o.transitionend = !1;
                for (var i = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], a = 0; a < i.length; a++)
                    if ("undefined" != typeof r.style[i[a]]) {
                        o.trstyle = i[a];
                        break
                    }
                o.hastransform = 0 != o.trstyle, o.hastransform && (r.style[o.trstyle] = "translate3d(1px,2px,3px)", o.hastranslate3d = /translate3d/.test(r.style[o.trstyle])), o.transitionstyle = !1, o.prefixstyle = "", o.transitionend = !1;
                for (var i = ["transition", "webkitTransition", "MozTransition", "OTransition", "OTransition", "msTransition", "KhtmlTransition"], s = ["", "-webkit-", "-moz-", "-o-", "-o", "-ms-", "-khtml-"], l = ["transitionend", "webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "msTransitionEnd", "KhtmlTransitionEnd"], a = 0; a < i.length; a++)
                    if (i[a] in r.style) {
                        o.transitionstyle = i[a], o.prefixstyle = s[a], o.transitionend = l[a];
                        break
                    }
                return o.ischrome26 && (o.prefixstyle = s[1]), o.hastransition = o.transitionstyle, o.cursorgrabvalue = n(), o.hasmousecapture = "setCapture" in r, o.hasMutationObserver = g !== !1, r = null, y = o, o
            },
            w = function (n, r) {
                function o() {
                    var e = T.doc.css(S.trstyle);
                    return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                }

                function a() {
                    var e = T.win;
                    if ("zIndex" in e) return e.zIndex();
                    for (; e.length > 0;) {
                        if (9 == e[0].nodeType) return !1;
                        var t = e.css("zIndex");
                        if (!isNaN(t) && 0 != t) return parseInt(t);
                        e = e.parent()
                    }
                    return !1
                }

                function f(e, t, n) {
                    var r = e.css(t),
                        o = parseFloat(r);
                    if (isNaN(o)) {
                        o = C[r] || 0;
                        var i = 3 == o ? n ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                        return T.isie8 && o && (o += 1), i ? o : 0
                    }
                    return o
                }

                function y(t, n, r, o) {
                    T._bind(t, n, function (o) {
                        var o = o ? o : e.event,
                            i = {
                                original: o,
                                target: o.target || o.srcElement,
                                type: "wheel",
                                deltaMode: "MozMousePixelScroll" == o.type ? 0 : 1,
                                deltaX: 0,
                                deltaZ: 0,
                                preventDefault: function () {
                                    return o.preventDefault ? o.preventDefault() : o.returnValue = !1, !1
                                },
                                stopImmediatePropagation: function () {
                                    o.stopImmediatePropagation ? o.stopImmediatePropagation() : o.cancelBubble = !0
                                }
                            };
                        return "mousewheel" == n ? (i.deltaY = -1 / 40 * o.wheelDelta, o.wheelDeltaX && (i.deltaX = -1 / 40 * o.wheelDeltaX)) : i.deltaY = o.detail, r.call(t, i)
                    }, o)
                }

                function w(e, t, n) {
                    var r, o, i = !1;
                    if (0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (T.opt.mousescrollstep / 54)), o = -Math.floor(e.deltaY * (T.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * T.opt.mousescrollstep), o = -Math.floor(e.deltaY * T.opt.mousescrollstep)), t && 0 == r && o && (r = o, o = 0), r && (T.scrollmom && T.scrollmom.stop(), console.log(T.page), !T.scroll.x && r > 0 || T.scroll.x >= T.scrollvaluemaxw && 0 > r ? i = !0 : (T.lastdeltax += r, T.debounced("mousewheelx", function () {
                            var e = T.lastdeltax;
                            T.lastdeltax = 0, T.rail.drag || T.doScrollLeftBy(e)
                        }, 120))), o) {
                        if (T.opt.nativeparentscrolling && n && !T.ispage && !T.zoomactive)
                            if (0 > o) {
                                if (T.getScrollTop() >= T.page.maxh) return !0
                            } else if (T.getScrollTop() <= 0) return !0;
                        T.scrollmom && T.scrollmom.stop(), T.lastdeltay += o, T.debounced("mousewheely", function () {
                            var e = T.lastdeltay;
                            T.lastdeltay = 0, T.rail.drag || T.doScrollBy(e)
                        }, 120)
                    }
                    return i || (e.stopImmediatePropagation(), i = e.preventDefault()), i
                }
                var T = this;
                if (T.version = "3.4.0", T.name = "nicescroll", T.me = r, T.opt = {
                        doc: d("body"),
                        win: !1
                    }, d.extend(T.opt, v), T.opt.snapbackspeed = 80, n)
                    for (var k in T.opt) "undefined" != typeof n[k] && (T.opt[k] = n[k]);
                T.doc = T.opt.doc, T.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", T.ispage = /BODY|HTML/.test(T.opt.win ? T.opt.win[0].nodeName : this.doc[0].nodeName), T.haswrapper = T.opt.win !== !1, T.win = T.opt.win || (this.ispage ? d(e) : this.doc), T.docscroll = this.ispage && !this.haswrapper ? d(e) : this.win, T.body = d("body"), T.viewport = !1, T.isfixed = !1, T.iframe = !1, T.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, T.istextarea = "TEXTAREA" == this.win[0].nodeName, T.forcescreen = !1, T.canshowonmouseevent = "scroll" != T.opt.autohidemode, T.onmousedown = !1, T.onmouseup = !1, T.onmousemove = !1, T.onmousewheel = !1, T.onkeypress = !1, T.ongesturezoom = !1, T.onclick = !1, T.onscrollstart = !1, T.onscrollend = !1, T.onscrollcancel = !1, T.onzoomin = !1, T.onzoomout = !1, T.view = !1, T.page = !1, T.scroll = {
                    x: 0,
                    y: 0
                }, T.scrollratio = {
                    x: 0,
                    y: 0
                }, T.cursorheight = 20, T.scrollvaluemax = 0, T.checkrtlmode = !1, T.scrollrunning = !1, T.scrollmom = !1, T.observer = !1, T.observerremover = !1;
                do T.id = "ascrail" + c++; while (t.getElementById(T.id));
                T.rail = !1, T.cursor = !1, T.cursorfreezed = !1, T.selectiondrag = !1, T.zoom = !1, T.zoomactive = !1, T.hasfocus = !1, T.hasmousefocus = !1, T.visibility = !0, T.locked = !1, T.hidden = !1, T.cursoractive = !0, T.overflowx = T.opt.overflowx, T.overflowy = T.opt.overflowy, T.nativescrollingarea = !1, T.checkarea = 0, T.events = [], T.saved = {}, T.delaylist = {}, T.synclist = {}, T.lastdeltax = 0, T.lastdeltay = 0, T.detected = b();
                var S = d.extend({}, T.detected);
                T.canhwscroll = S.hastransform && T.opt.hwacceleration, T.ishwscroll = T.canhwscroll && T.haswrapper, T.istouchcapable = !1, S.cantouch && S.ischrome && !S.isios && !S.isandroid && (T.istouchcapable = !0, S.cantouch = !1), S.cantouch && S.ismozilla && !S.isios && (T.istouchcapable = !0, S.cantouch = !1), T.opt.enablemouselockapi || (S.hasmousecapture = !1, S.haspointerlock = !1), T.delayed = function (e, t, n, r) {
                    var o = T.delaylist[e],
                        i = (new Date).getTime();
                    return !r && o && o.tt ? !1 : (o && o.tt && clearTimeout(o.tt), void(o && o.last + n > i && !o.tt ? T.delaylist[e] = {
                        last: i + n,
                        tt: setTimeout(function () {
                            T.delaylist[e].tt = 0, t.call()
                        }, n)
                    } : o && o.tt || (T.delaylist[e] = {
                        last: i,
                        tt: 0
                    }, setTimeout(function () {
                        t.call()
                    }, 0))))
                }, T.debounced = function (e, t, n) {
                    {
                        var r = T.delaylist[e];
                        (new Date).getTime()
                    }
                    T.delaylist[e] = t, r || setTimeout(function () {
                        var t = T.delaylist[e];
                        T.delaylist[e] = !1, t.call()
                    }, n)
                }, T.synched = function (e, t) {
                    function n() {
                        T.onsync || (h(function () {
                            T.onsync = !1;
                            for (e in T.synclist) {
                                var t = T.synclist[e];
                                t && t.call(T), T.synclist[e] = !1
                            }
                        }), T.onsync = !0)
                    }
                    return T.synclist[e] = t, n(), e
                }, T.unsynched = function (e) {
                    T.synclist[e] && (T.synclist[e] = !1)
                }, T.css = function (e, t) {
                    for (var n in t) T.saved.css.push([e, n, e.css(n)]), e.css(n, t[n])
                }, T.scrollTop = function (e) {
                    return "undefined" == typeof e ? T.getScrollTop() : T.setScrollTop(e)
                }, T.scrollLeft = function (e) {
                    return "undefined" == typeof e ? T.getScrollLeft() : T.setScrollLeft(e)
                }, BezierClass = function (e, t, n, r, o, i, a) {
                    var s = this;
                    s.st = e, s.ed = t, s.spd = n, s.p1 = r || 0, s.p2 = o || 1, s.p3 = i || 0, s.p4 = a || 1, s.ts = (new Date).getTime(), s.df = s.ed - s.st
                }, BezierClass.prototype = {
                    B2: function (e) {
                        return 3 * e * e * (1 - e)
                    },
                    B3: function (e) {
                        return 3 * e * (1 - e) * (1 - e)
                    },
                    B4: function (e) {
                        return (1 - e) * (1 - e) * (1 - e)
                    },
                    getNow: function () {
                        var e = (new Date).getTime(),
                            t = 1 - (e - this.ts) / this.spd,
                            n = this.B2(t) + this.B3(t) + this.B4(t);
                        return 0 > t ? this.ed : this.st + Math.round(this.df * n)
                    },
                    update: function (e, t) {
                        var n = this;
                        return n.st = n.getNow(), n.ed = e, n.spd = t, n.ts = (new Date).getTime(), n.df = n.ed - n.st, n
                    }
                }, T.ishwscroll ? (T.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, S.hastranslate3d && S.isios && T.doc.css("-webkit-backface-visibility", "hidden"), T.getScrollTop = function (e) {
                    if (!e) {
                        var t = o();
                        if (t) return 16 == t.length ? -t[13] : -t[5];
                        if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
                    }
                    return T.doc.translate.y
                }, T.getScrollLeft = function (e) {
                    if (!e) {
                        var t = o();
                        if (t) return 16 == t.length ? -t[12] : -t[4];
                        if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
                    }
                    return T.doc.translate.x
                }, T.notifyScrollEvent = t.createEvent ? function (n) {
                    var r = t.createEvent("UIEvents");
                    r.initUIEvent("scroll", !1, !0, e, 1), n.dispatchEvent(r)
                } : t.fireEvent ? function (e) {
                    var n = t.createEventObject();
                    e.fireEvent("onscroll"), n.cancelBubble = !0
                } : function () {}, S.hastranslate3d && T.opt.enabletranslate3d ? (T.setScrollTop = function (e, t) {
                    T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(S.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0px)"), t || T.notifyScrollEvent(T.win[0])
                }, T.setScrollLeft = function (e, t) {
                    T.doc.translate.x = e, T.doc.translate.tx = -1 * e + "px", T.doc.css(S.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0px)"), t || T.notifyScrollEvent(T.win[0])
                }) : (T.setScrollTop = function (e, t) {
                    T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(S.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), t || T.notifyScrollEvent(T.win[0])
                }, T.setScrollLeft = function (e, t) {
                    T.doc.translate.x = e, T.doc.translate.tx = -1 * e + "px", T.doc.css(S.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), t || T.notifyScrollEvent(T.win[0])
                })) : (T.getScrollTop = function () {
                    return T.docscroll.scrollTop()
                }, T.setScrollTop = function (e) {
                    return T.docscroll.scrollTop(e)
                }, T.getScrollLeft = function () {
                    return T.docscroll.scrollLeft()
                }, T.setScrollLeft = function (e) {
                    return T.docscroll.scrollLeft(e)
                }), T.getTarget = function (e) {
                    return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
                }, T.hasParent = function (e, t) {
                    if (!e) return !1;
                    for (var n = e.target || e.srcElement || e || !1; n && n.id != t;) n = n.parentNode || !1;
                    return n !== !1
                };
                var C = {
                    thin: 1,
                    medium: 3,
                    thick: 5
                };
                T.getOffset = function () {
                    if (T.isfixed) return {
                        top: parseFloat(T.win.css("top")),
                        left: parseFloat(T.win.css("left"))
                    };
                    if (!T.viewport) return T.win.offset();
                    var e = T.win.offset(),
                        t = T.viewport.offset();
                    return {
                        top: e.top - t.top + T.viewport.scrollTop(),
                        left: e.left - t.left + T.viewport.scrollLeft()
                    }
                }, T.updateScrollBar = function (e) {
                    if (T.ishwscroll) T.rail.css({
                        height: T.win.innerHeight()
                    }), T.railh && T.railh.css({
                        width: T.win.innerWidth()
                    });
                    else {
                        var t = T.getOffset(),
                            n = {
                                top: t.top,
                                left: t.left
                            };
                        n.top += f(T.win, "border-top-width", !0); {
                            (T.win.outerWidth() - T.win.innerWidth()) / 2
                        }
                        n.left += T.rail.align ? T.win.outerWidth() - f(T.win, "border-right-width") - T.rail.width : f(T.win, "border-left-width");
                        var r = T.opt.railoffset;
                        if (r && (r.top && (n.top += r.top), T.rail.align && r.left && (n.left += r.left)), T.locked || T.rail.css({
                                top: n.top,
                                left: n.left,
                                height: e ? e.h : T.win.innerHeight()
                            }), T.zoom && T.zoom.css({
                                top: n.top + 1,
                                left: 1 == T.rail.align ? n.left - 20 : n.left + T.rail.width + 4
                            }), T.railh && !T.locked) {
                            var n = {
                                    top: t.top,
                                    left: t.left
                                },
                                o = T.railh.align ? n.top + f(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : n.top + f(T.win, "border-top-width", !0),
                                i = n.left + f(T.win, "border-left-width");
                            T.railh.css({
                                top: o,
                                left: i,
                                width: T.railh.width
                            })
                        }
                    }
                }, T.doRailClick = function (e, t, n) {
                    var r, o, i, a;
                    T.locked || (T.cancelEvent(e), t ? (r = n ? T.doScrollLeft : T.doScrollTop, i = n ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, r(i)) : (r = n ? T.doScrollLeftBy : T.doScrollBy, i = n ? T.scroll.x : T.scroll.y, a = n ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, o = n ? T.view.w : T.view.h, r(i >= a ? o : -o)))
                }, T.hasanimationframe = h, T.hascancelanimationframe = m, T.hasanimationframe ? T.hascancelanimationframe || (m = function () {
                    T.cancelAnimationFrame = !0
                }) : (h = function (e) {
                    return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
                }, m = clearInterval), T.init = function () {
                    function n(e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var t = T.win.outerHeight(),
                                    r = e.pageY - T.selectiondrag.top;
                                r > 0 && t > r && (r = 0), r >= t && (r -= t), T.selectiondrag.df = r
                            }
                            if (0 != T.selectiondrag.df) {
                                var o = 2 * -Math.floor(T.selectiondrag.df / 6);
                                T.doScrollBy(o), T.debounced("doselectionscroll", function () {
                                    n()
                                }, 50)
                            }
                        }
                    }

                    function r() {
                        T.iframexd = !1;
                        try {
                            {
                                var t = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                                t.domain
                            }
                        } catch (n) {
                            T.iframexd = !0, t = !1
                        }
                        if (T.iframexd) return "console" in e && console.log("NiceScroll error: policy restriced iframe"), !0;
                        if (T.forcescreen = !0, T.isiframe && (T.iframe = {
                                doc: d(t),
                                html: T.doc.contents().find("html")[0],
                                body: T.doc.contents().find("body")[0]
                            }, T.getContentSize = function () {
                                return {
                                    w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                                    h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                                }
                            }, T.docscroll = d(T.iframe.body)), !S.isios && T.opt.iframeautoresize && !T.isiframe) {
                            T.win.scrollTop(0), T.doc.height("");
                            var r = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                            T.doc.height(r)
                        }
                        T.lazyResize(30), S.isie7 && T.css(d(T.iframe.html), {
                            "overflow-y": "hidden"
                        }), T.css(d(T.iframe.body), {
                            "overflow-y": "hidden"
                        }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(t, "scroll", T.onscroll), T.opt.enablemousewheel && T.bind(t, "mousewheel", T.onmousewheel), T.opt.enablekeyboard && T.bind(t, S.isopera ? "keypress" : "keydown", T.onkeypress), (S.cantouch || T.opt.touchbehavior) && (T.bind(t, "mousedown", T.onmousedown), T.bind(t, "mousemove", function (e) {
                            T.onmousemove(e, !0)
                        }), T.opt.grabcursorenabled && S.cursorgrabvalue && T.css(d(t.body), {
                            cursor: S.cursorgrabvalue
                        })), T.bind(t, "mouseup", T.onmouseup), T.zoom && (T.opt.dblclickzoom && T.bind(t, "dblclick", T.doZoom), T.ongesturezoom && T.bind(t, "gestureend", T.ongesturezoom))
                    }
                    if (T.saved.css = [], S.isie7mobile) return !0;
                    if (S.hasmstouch && T.css(T.ispage ? d("html") : T.win, {
                            "-ms-touch-action": "none"
                        }), T.zindex = "auto", T.zindex = T.ispage || "auto" != T.opt.zindex ? T.opt.zindex : a() || "auto", T.ispage || "auto" == T.zindex || T.zindex > u && (u = T.zindex), T.isie && 0 == T.zindex && "auto" == T.opt.zindex && (T.zindex = "auto"), !T.ispage || !S.cantouch && !S.isieold && !S.isie9mobile) {
                        var o = T.docscroll;
                        T.ispage && (o = T.haswrapper ? T.win : T.doc), S.isie9mobile || T.css(o, {
                            "overflow-y": "hidden"
                        }), T.ispage && S.isie7 && ("BODY" == T.doc[0].nodeName ? T.css(d("html"), {
                            "overflow-y": "hidden"
                        }) : "HTML" == T.doc[0].nodeName && T.css(d("body"), {
                            "overflow-y": "hidden"
                        })), !S.isios || T.ispage || T.haswrapper || T.css(d("body"), {
                            "-webkit-overflow-scrolling": "touch"
                        });
                        var c = d(t.createElement("div"));
                        c.css({
                            position: "relative",
                            top: 0,
                            "float": "right",
                            width: T.opt.cursorwidth,
                            height: "0px",
                            "background-color": T.opt.cursorcolor,
                            border: T.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": T.opt.cursorborderradius,
                            "-moz-border-radius": T.opt.cursorborderradius,
                            "border-radius": T.opt.cursorborderradius
                        }), c.hborder = parseFloat(c.outerHeight() - c.innerHeight()), T.cursor = c;
                        var f = d(t.createElement("div"));
                        f.attr("id", T.id), f.addClass("nicescroll-rails");
                        var h, m, v = ["left", "right"];
                        for (var y in v) m = v[y], h = T.opt.railpadding[m], h ? f.css("padding-" + m, h + "px") : T.opt.railpadding[m] = 0;
                        f.append(c), f.width = Math.max(parseFloat(T.opt.cursorwidth), c.outerWidth()) + T.opt.railpadding.left + T.opt.railpadding.right, f.css({
                            width: f.width + "px",
                            zIndex: T.zindex,
                            background: T.opt.background,
                            cursor: "default"
                        }), f.visibility = !0, f.scrollable = !0, f.align = "left" == T.opt.railalign ? 0 : 1, T.rail = f, T.rail.drag = !1;
                        var b = !1;
                        if (!T.opt.boxzoom || T.ispage || S.isieold || (b = t.createElement("div"), T.bind(b, "click", T.doZoom), T.zoom = d(b), T.zoom.css({
                                cursor: "pointer",
                                "z-index": T.zindex,
                                backgroundImage: "url(" + p + "zoomico.png)",
                                height: 18,
                                width: 18,
                                backgroundPosition: "0px 0px"
                            }), T.opt.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), S.cantouch && T.opt.gesturezoom && (T.ongesturezoom = function (e) {
                                return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
                            }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1, T.opt.horizrailenabled) {
                            T.css(o, {
                                "overflow-x": "hidden"
                            });
                            var c = d(t.createElement("div"));
                            c.css({
                                position: "relative",
                                top: 0,
                                height: T.opt.cursorwidth,
                                width: "0px",
                                "background-color": T.opt.cursorcolor,
                                border: T.opt.cursorborder,
                                "background-clip": "padding-box",
                                "-webkit-border-radius": T.opt.cursorborderradius,
                                "-moz-border-radius": T.opt.cursorborderradius,
                                "border-radius": T.opt.cursorborderradius
                            }), c.wborder = parseFloat(c.outerWidth() - c.innerWidth()), T.cursorh = c;
                            var w = d(t.createElement("div"));
                            w.attr("id", T.id + "-hr"), w.addClass("nicescroll-rails"), w.height = Math.max(parseFloat(T.opt.cursorwidth), c.outerHeight()), w.css({
                                height: w.height + "px",
                                zIndex: T.zindex,
                                background: T.opt.background
                            }), w.append(c), w.visibility = !0, w.scrollable = !0, w.align = "top" == T.opt.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1
                        }
                        if (T.ispage) f.css({
                            position: "fixed",
                            top: "0px",
                            height: "100%"
                        }), f.css(f.align ? {
                            right: "0px"
                        } : {
                            left: "0px"
                        }), T.body.append(f), T.railh && (w.css({
                            position: "fixed",
                            left: "0px",
                            width: "100%"
                        }), w.css(w.align ? {
                            bottom: "0px"
                        } : {
                            top: "0px"
                        }), T.body.append(w));
                        else {
                            if (T.ishwscroll) {
                                "static" == T.win.css("position") && T.css(T.win, {
                                    position: "relative"
                                });
                                var k = "HTML" == T.win[0].nodeName ? T.body : T.win;
                                T.zoom && (T.zoom.css({
                                    position: "absolute",
                                    top: 1,
                                    right: 0,
                                    "margin-right": f.width + 4
                                }), k.append(T.zoom)), f.css({
                                    position: "absolute",
                                    top: 0
                                }), f.css(f.align ? {
                                    right: 0
                                } : {
                                    left: 0
                                }), k.append(f), w && (w.css({
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }), w.css(w.align ? {
                                    bottom: 0
                                } : {
                                    top: 0
                                }), k.append(w))
                            } else {
                                T.isfixed = "fixed" == T.win.css("position");
                                var C = T.isfixed ? "fixed" : "absolute";
                                T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, 0 == /relative|absolute/.test(T.viewport.css("position")) && T.css(T.viewport, {
                                    position: "relative"
                                })), f.css({
                                    position: C
                                }), T.zoom && T.zoom.css({
                                    position: C
                                }), T.updateScrollBar(), T.body.append(f), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
                                    position: C
                                }), T.body.append(w))
                            }
                            S.isios && T.css(T.win, {
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                "-webkit-touch-callout": "none"
                            }), S.isie && T.opt.disableoutline && T.win.attr("hideFocus", "true"), S.iswebkit && T.opt.disableoutline && T.win.css({
                                outline: "none"
                            })
                        }
                        if (T.opt.autohidemode === !1 ? (T.autohidedom = !1, T.rail.css({
                                opacity: T.opt.cursoropacitymax
                            }), T.railh && T.railh.css({
                                opacity: T.opt.cursoropacitymax
                            })) : T.opt.autohidemode === !0 ? (T.autohidedom = d().add(T.rail), S.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && S.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == T.opt.autohidemode ? (T.autohidedom = d().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == T.opt.autohidemode ? (T.autohidedom = d().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == T.opt.autohidemode && (T.autohidedom = !1, T.hide(), T.locked = !1), S.isie9mobile) {
                            T.scrollmom = new x(T), T.onmangotouch = function () {
                                var e = T.getScrollTop(),
                                    t = T.getScrollLeft();
                                if (e == T.scrollmom.lastscrolly && t == T.scrollmom.lastscrollx) return !0;
                                var n = e - T.mangotouch.sy,
                                    r = t - T.mangotouch.sx,
                                    o = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)));
                                if (0 != o) {
                                    var i = 0 > n ? -1 : 1,
                                        a = 0 > r ? -1 : 1,
                                        s = +new Date;
                                    if (T.mangotouch.lazy && clearTimeout(T.mangotouch.lazy), s - T.mangotouch.tm > 80 || T.mangotouch.dry != i || T.mangotouch.drx != a) T.scrollmom.stop(), T.scrollmom.reset(t, e), T.mangotouch.sy = e, T.mangotouch.ly = e, T.mangotouch.sx = t, T.mangotouch.lx = t, T.mangotouch.dry = i, T.mangotouch.drx = a, T.mangotouch.tm = s;
                                    else {
                                        T.scrollmom.stop(), T.scrollmom.update(T.mangotouch.sx - r, T.mangotouch.sy - n); {
                                            s - T.mangotouch.tm
                                        }
                                        T.mangotouch.tm = s;
                                        var l = Math.max(Math.abs(T.mangotouch.ly - e), Math.abs(T.mangotouch.lx - t));
                                        T.mangotouch.ly = e, T.mangotouch.lx = t, l > 2 && (T.mangotouch.lazy = setTimeout(function () {
                                            T.mangotouch.lazy = !1, T.mangotouch.dry = 0, T.mangotouch.drx = 0, T.mangotouch.tm = 0, T.scrollmom.doMomentum(30)
                                        }, 100))
                                    }
                                }
                            };
                            var E = T.getScrollTop(),
                                N = T.getScrollLeft();
                            T.mangotouch = {
                                sy: E,
                                ly: E,
                                dry: 0,
                                sx: N,
                                lx: N,
                                drx: 0,
                                lazy: !1,
                                tm: 0
                            }, T.bind(T.docscroll, "scroll", T.onmangotouch)
                        } else {
                            if (S.cantouch || T.istouchcapable || T.opt.touchbehavior || S.hasmstouch) {
                                T.scrollmom = new x(T), T.ontouchstart = function (n) {
                                    if (n.pointerType && 2 != n.pointerType) return !1;
                                    if (!T.locked) {
                                        if (S.hasmstouch)
                                            for (var r = n.target ? n.target : !1; r;) {
                                                var o = d(r).getNiceScroll();
                                                if (o.length > 0 && o[0].me == T.me) break;
                                                if (o.length > 0) return !1;
                                                if ("DIV" == r.nodeName && r.id == T.id) break;
                                                r = r.parentNode ? r.parentNode : !1
                                            }
                                        T.cancelScroll();
                                        var r = T.getTarget(n);
                                        if (r) {
                                            var i = /INPUT/i.test(r.nodeName) && /range/i.test(r.type);
                                            if (i) return T.stopPropagation(n)
                                        }
                                        if (!("clientX" in n) && "changedTouches" in n && (n.clientX = n.changedTouches[0].clientX, n.clientY = n.changedTouches[0].clientY), T.forcescreen) {
                                            var a = n,
                                                n = {
                                                    original: n.original ? n.original : n
                                                };
                                            n.clientX = a.screenX, n.clientY = a.screenY
                                        }
                                        if (T.rail.drag = {
                                                x: n.clientX,
                                                y: n.clientY,
                                                sx: T.scroll.x,
                                                sy: T.scroll.y,
                                                st: T.getScrollTop(),
                                                sl: T.getScrollLeft(),
                                                pt: 2,
                                                dl: !1
                                            }, T.ispage || !T.opt.directionlockdeadzone) T.rail.drag.dl = "f";
                                        else {
                                            var s = {
                                                    w: d(e).width(),
                                                    h: d(e).height()
                                                },
                                                l = {
                                                    w: Math.max(t.body.scrollWidth, t.documentElement.scrollWidth),
                                                    h: Math.max(t.body.scrollHeight, t.documentElement.scrollHeight)
                                                },
                                                c = Math.max(0, l.h - s.h),
                                                u = Math.max(0, l.w - s.w);
                                            T.rail.drag.ck = !T.rail.scrollable && T.railh.scrollable ? c > 0 ? "v" : !1 : T.rail.scrollable && !T.railh.scrollable && u > 0 ? "h" : !1, T.rail.drag.ck || (T.rail.drag.dl = "f")
                                        }
                                        if (T.opt.touchbehavior && T.isiframe && S.isie) {
                                            var p = T.win.position();
                                            T.rail.drag.x += p.left, T.rail.drag.y += p.top
                                        }
                                        if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(n.clientX, n.clientY), !S.cantouch && !this.istouchcapable && !S.hasmstouch) {
                                            var f = r ? /INPUT|SELECT|TEXTAREA/i.test(r.nodeName) : !1;
                                            if (!f) return !T.ispage && S.hasmousecapture && r.setCapture(), T.cancelEvent(n);
                                            /SUBMIT|CANCEL|BUTTON/i.test(d(r).attr("type")) && (pc = {
                                                tg: r,
                                                click: !1
                                            }, T.preventclick = pc)
                                        }
                                    }
                                }, T.ontouchend = function (e) {
                                    return e.pointerType && 2 != e.pointerType ? !1 : T.rail.drag && 2 == T.rail.drag.pt && (T.scrollmom.doMomentum(), T.rail.drag = !1, T.hasmoving && (T.hasmoving = !1, T.lastmouseup = !0, T.hideCursor(), S.hasmousecapture && t.releaseCapture(), !S.cantouch)) ? T.cancelEvent(e) : void 0
                                };
                                var z = T.opt.touchbehavior && T.isiframe && !S.hasmousecapture;
                                T.ontouchmove = function (e, n) {
                                    if (e.pointerType && 2 != e.pointerType) return !1;
                                    if (T.rail.drag && 2 == T.rail.drag.pt) {
                                        if (S.cantouch && "undefined" == typeof e.original) return !0;
                                        T.hasmoving = !0, T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick);
                                        var r = d.extend({
                                            original: e
                                        }, e);
                                        if (e = r, "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                                            var o = e,
                                                e = {
                                                    original: e.original ? e.original : e
                                                };
                                            e.clientX = o.screenX, e.clientY = o.screenY
                                        }
                                        var i = ofy = 0;
                                        if (z && !n) {
                                            var a = T.win.position();
                                            i = -a.left, ofy = -a.top
                                        }
                                        var s = e.clientY + ofy,
                                            l = s - T.rail.drag.y,
                                            c = e.clientX + i,
                                            u = c - T.rail.drag.x,
                                            p = T.rail.drag.st - l;
                                        if (T.ishwscroll && T.opt.bouncescroll ? 0 > p ? p = Math.round(p / 2) : p > T.page.maxh && (p = T.page.maxh + Math.round((p - T.page.maxh) / 2)) : (0 > p && (p = 0, s = 0), p > T.page.maxh && (p = T.page.maxh, s = 0)), T.railh && T.railh.scrollable) {
                                            var f = T.rail.drag.sl - u;
                                            T.ishwscroll && T.opt.bouncescroll ? 0 > f ? f = Math.round(f / 2) : f > T.page.maxw && (f = T.page.maxw + Math.round((f - T.page.maxw) / 2)) : (0 > f && (f = 0, c = 0), f > T.page.maxw && (f = T.page.maxw, c = 0))
                                        }
                                        var h = !1;
                                        if (T.rail.drag.dl) h = !0, "v" == T.rail.drag.dl ? f = T.rail.drag.sl : "h" == T.rail.drag.dl && (p = T.rail.drag.st);
                                        else {
                                            var m = Math.abs(l),
                                                g = Math.abs(u),
                                                v = T.opt.directionlockdeadzone;
                                            if ("v" == T.rail.drag.ck) {
                                                if (m > v && .3 * m >= g) return T.rail.drag = !1, !0;
                                                g > v && (T.rail.drag.dl = "f", d("body").scrollTop(d("body").scrollTop()))
                                            } else if ("h" == T.rail.drag.ck) {
                                                if (g > v && .3 * az >= m) return T.rail.drag = !1, !0;
                                                m > v && (T.rail.drag.dl = "f", d("body").scrollLeft(d("body").scrollLeft()))
                                            }
                                        }
                                        if (T.synched("touchmove", function () {
                                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.prepareTransition(0), T.rail.scrollable && T.setScrollTop(p), T.scrollmom.update(c, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(f), T.showCursor(p, f)) : T.showCursor(p), S.isie10 && t.selection.clear())
                                            }), S.ischrome && T.istouchcapable && (h = !1), h) return T.cancelEvent(e)
                                    }
                                }
                            }
                            T.onmousedown = function (e, t) {
                                if (!T.rail.drag || 1 == T.rail.drag.pt) {
                                    if (T.locked) return T.cancelEvent(e);
                                    T.cancelScroll(), T.rail.drag = {
                                        x: e.clientX,
                                        y: e.clientY,
                                        sx: T.scroll.x,
                                        sy: T.scroll.y,
                                        pt: 1,
                                        hr: !!t
                                    };
                                    var n = T.getTarget(e);
                                    return !T.ispage && S.hasmousecapture && n.setCapture(), T.isiframe && !S.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                                        "pointer-events": "none"
                                    })), T.cancelEvent(e)
                                }
                            }, T.onmouseup = function (e) {
                                if (T.rail.drag) {
                                    if (S.hasmousecapture && t.releaseCapture(), T.isiframe && !S.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 1 != T.rail.drag.pt) return;
                                    return T.rail.drag = !1, T.cancelEvent(e)
                                }
                            }, T.onmousemove = function (e) {
                                if (T.rail.drag) {
                                    if (1 != T.rail.drag.pt) return;
                                    if (S.ischrome && 0 == e.which) return T.onmouseup(e);
                                    if (T.cursorfreezed = !0, T.rail.drag.hr) {
                                        T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                        var t = T.scrollvaluemaxw;
                                        T.scroll.x > t && (T.scroll.x = t)
                                    } else {
                                        T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                        var n = T.scrollvaluemax;
                                        T.scroll.y > n && (T.scroll.y = n)
                                    }
                                    return T.synched("mousemove", function () {
                                        T.rail.drag && 1 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), T.opt.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), T.opt.cursordragspeed))
                                    }), T.cancelEvent(e)
                                }
                            }, S.cantouch || T.opt.touchbehavior ? (T.onpreventclick = function (e) {
                                return T.preventclick ? (T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)) : void 0
                            }, T.bind(T.win, "mousedown", T.ontouchstart), T.onclick = S.isios ? !1 : function (e) {
                                return T.lastmouseup ? (T.lastmouseup = !1, T.cancelEvent(e)) : !0
                            }, T.opt.grabcursorenabled && S.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
                                cursor: S.cursorgrabvalue
                            }), T.css(T.rail, {
                                cursor: S.cursorgrabvalue
                            }))) : (T.hasTextSelected = "getSelection" in t ? function () {
                                return t.getSelection().rangeCount > 0
                            } : "selection" in t ? function () {
                                return "None" != t.selection.type
                            } : function () {
                                return !1
                            }, T.onselectionstart = function () {
                                T.ispage || (T.selectiondrag = T.win.offset())
                            }, T.onselectionend = function () {
                                T.selectiondrag = !1
                            }, T.onselectiondrag = function (e) {
                                T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                                    n(e)
                                }, 250)
                            }), S.hasmstouch && (T.css(T.rail, {
                                "-ms-touch-action": "none"
                            }), T.css(T.cursor, {
                                "-ms-touch-action": "none"
                            }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(t, "MSPointerUp", T.ontouchend), T.bind(t, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
                                e.preventDefault()
                            }), T.bind(T.cursor, "contextmenu", function (e) {
                                e.preventDefault()
                            })), this.istouchcapable && (T.bind(T.win, "touchstart", T.ontouchstart), T.bind(t, "touchend", T.ontouchend), T.bind(t, "touchcancel", T.ontouchend), T.bind(t, "touchmove", T.ontouchmove)), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
                                T.onmousedown(e, !0)
                            }), T.bind(T.cursorh, "mouseup", function (e) {
                                return T.rail.drag && 2 == T.rail.drag.pt ? void 0 : (T.rail.drag = !1, T.hasmoving = !1, T.hideCursor(), S.hasmousecapture && t.releaseCapture(), T.cancelEvent(e))
                            })), (T.opt.cursordragontouch || !S.cantouch && !T.opt.touchbehavior) && (T.rail.css({
                                cursor: "default"
                            }), T.railh && T.railh.css({
                                cursor: "default"
                            }), T.jqbind(T.rail, "mouseenter", function () {
                                T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                            }), T.jqbind(T.rail, "mouseleave", function () {
                                T.rail.active = !1, T.rail.drag || T.hideCursor()
                            }), T.opt.sensitiverail && (T.bind(T.rail, "click", function (e) {
                                T.doRailClick(e, !1, !1)
                            }), T.bind(T.rail, "dblclick", function (e) {
                                T.doRailClick(e, !0, !1)
                            }), T.bind(T.cursor, "click", function (e) {
                                T.cancelEvent(e)
                            }), T.bind(T.cursor, "dblclick", function (e) {
                                T.cancelEvent(e)
                            })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
                                T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                            }), T.jqbind(T.railh, "mouseleave", function () {
                                T.rail.active = !1, T.rail.drag || T.hideCursor()
                            }), T.opt.sensitiverail && (T.bind(T.railh, "click", function (e) {
                                T.doRailClick(e, !1, !0)
                            }), T.bind(T.railh, "dblclick", function (e) {
                                T.doRailClick(e, !0, !0)
                            }), T.bind(T.cursorh, "click", function (e) {
                                T.cancelEvent(e)
                            }), T.bind(T.cursorh, "dblclick", function (e) {
                                T.cancelEvent(e)
                            })))), S.cantouch || T.opt.touchbehavior ? (T.bind(S.hasmousecapture ? T.win : t, "mouseup", T.ontouchend), T.bind(t, "mousemove", T.ontouchmove), T.onclick && T.bind(t, "click", T.onclick), T.opt.cursordragontouch && (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mousemove", T.onmousemove), T.cursorh && T.bind(T.cursorh, "mousedown", T.onmousedown), T.cursorh && T.bind(T.cursorh, "mousemove", T.onmousemove))) : (T.bind(S.hasmousecapture ? T.win : t, "mouseup", T.onmouseup), T.bind(t, "mousemove", T.onmousemove), T.onclick && T.bind(t, "click", T.onclick), !T.ispage && T.opt.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(t, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(t, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
                                T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                            }), T.jqbind(T.zoom, "mouseleave", function () {
                                T.rail.active = !1, T.rail.drag || T.hideCursor()
                            }))), T.opt.enablemousewheel && (T.isiframe || T.bind(S.isie && T.ispage ? t : T.docscroll, "mousewheel", T.onmousewheel), T.bind(T.rail, "mousewheel", T.onmousewheel), T.railh && T.bind(T.railh, "mousewheel", T.onmousewheelhr)), T.ispage || S.cantouch || /HTML|BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
                                tabindex: l++
                            }), T.jqbind(T.win, "focus", function (e) {
                                i = T.getTarget(e).id || !0, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
                            }), T.jqbind(T.win, "blur", function () {
                                i = !1, T.hasfocus = !1
                            }), T.jqbind(T.win, "mouseenter", function (e) {
                                s = T.getTarget(e).id || !0, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
                            }), T.jqbind(T.win, "mouseleave", function () {
                                s = !1, T.hasmousefocus = !1
                            }))
                        }
                        if (T.onkeypress = function (t) {
                                if (T.locked && 0 == T.page.maxh) return !0;
                                t = t ? t : e.e;
                                var n = T.getTarget(t);
                                if (n && /INPUT|TEXTAREA|SELECT|OPTION/.test(n.nodeName)) {
                                    var r = n.getAttribute("type") || n.type || !1;
                                    if (!r || !/submit|button|cancel/i.tp) return !0
                                }
                                if (T.hasfocus || T.hasmousefocus && !i || T.ispage && !i && !s) {
                                    var o = t.keyCode;
                                    if (T.locked && 27 != o) return T.cancelEvent(t);
                                    var a = t.ctrlKey || !1,
                                        l = t.shiftKey || !1,
                                        c = !1;
                                    switch (o) {
                                    case 38:
                                    case 63233:
                                        T.doScrollBy(72), c = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        T.doScrollBy(-72), c = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        T.railh && (a ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        T.railh && (a ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        T.doScrollBy(T.view.h), c = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        T.doScrollBy(-T.view.h), c = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        T.railh && a ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        T.railh && a ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                                        break;
                                    case 32:
                                        T.opt.spacebarenabled && (T.doScrollBy(l ? T.view.h : -T.view.h), c = !0);
                                        break;
                                    case 27:
                                        T.zoomactive && (T.doZoom(), c = !0)
                                    }
                                    if (c) return T.cancelEvent(t)
                                }
                            }, T.opt.enablekeyboard && T.bind(t, S.isopera && !S.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(e, "resize", T.lazyResize), T.bind(e, "orientationchange", T.lazyResize), T.bind(e, "load", T.lazyResize), S.ischrome && !T.ispage && !T.haswrapper) {
                            var L = T.win.attr("style"),
                                M = parseFloat(T.win.css("width")) + 1;
                            T.win.css("width", M), T.synched("chromefix", function () {
                                T.win.attr("style", L)
                            })
                        }
                        T.onAttributeChange = function () {
                            T.lazyResize(250)
                        }, T.ispage || T.haswrapper || (g !== !1 ? (T.observer = new g(function (e) {
                            e.forEach(T.onAttributeChange)
                        }), T.observer.observe(T.win[0], {
                            childList: !0,
                            characterData: !1,
                            attributes: !0,
                            subtree: !1
                        }), T.observerremover = new g(function (e) {
                            e.forEach(function (e) {
                                if (e.removedNodes.length > 0)
                                    for (var t in e.removedNodes)
                                        if (e.removedNodes[t] == T.win[0]) return T.remove()
                            })
                        }), T.observerremover.observe(T.win[0].parentNode, {
                            childList: !0,
                            characterData: !1,
                            attributes: !1,
                            subtree: !1
                        })) : (T.bind(T.win, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), S.isie9 && T.win[0].attachEvent("onpropertychange", T.onAttributeChange), T.bind(T.win, "DOMNodeRemoved", function (e) {
                            e.target == T.win[0] && T.remove()
                        }))), !T.ispage && T.opt.boxzoom && T.bind(e, "resize", T.resizeZoom), T.istextarea && T.bind(T.win, "mouseup", T.lazyResize), T.checkrtlmode = !0, T.lazyResize(30)
                    }
                    "IFRAME" == this.doc[0].nodeName && (this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                        r.call(T.doc[0], !1)
                    }, 500), T.bind(this.doc, "load", r))
                }, T.showCursor = function (e, t) {
                    T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail && (T.autohidedom && (T.autohidedom.stop().css({
                        opacity: T.opt.cursoropacitymax
                    }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || ("undefined" != typeof e && e !== !1 && (T.scroll.y = Math.round(1 * e / T.scrollratio.y)), "undefined" != typeof t && (T.scroll.x = Math.round(1 * t / T.scrollratio.x))), T.cursor.css({
                        height: T.cursorheight,
                        top: T.scroll.y
                    }), T.cursorh && (T.cursorh.css(!T.rail.align && T.rail.visibility ? {
                        width: T.cursorwidth,
                        left: T.scroll.x + T.rail.width
                    } : {
                        width: T.cursorwidth,
                        left: T.scroll.x
                    }), T.cursoractive = !0), T.zoom && T.zoom.stop().css({
                        opacity: T.opt.cursoropacitymax
                    }))
                }, T.hideCursor = function (e) {
                    T.cursortimeout || T.rail && T.autohidedom && (T.cursortimeout = setTimeout(function () {
                        T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
                            opacity: T.opt.cursoropacitymin
                        }), T.zoom && T.zoom.stop().animate({
                            opacity: T.opt.cursoropacitymin
                        }), T.cursoractive = !1), T.cursortimeout = 0
                    }, e || T.opt.hidecursordelay))
                }, T.noticeCursor = function (e, t, n) {
                    T.showCursor(t, n), T.rail.active || T.hideCursor(e)
                }, T.getContentSize = T.ispage ? function () {
                    return {
                        w: Math.max(t.body.scrollWidth, t.documentElement.scrollWidth),
                        h: Math.max(t.body.scrollHeight, t.documentElement.scrollHeight)
                    }
                } : T.haswrapper ? function () {
                    return {
                        w: T.doc.outerWidth() + parseInt(T.win.css("paddingLeft")) + parseInt(T.win.css("paddingRight")),
                        h: T.doc.outerHeight() + parseInt(T.win.css("paddingTop")) + parseInt(T.win.css("paddingBottom"))
                    }
                } : function () {
                    return {
                        w: T.docscroll[0].scrollWidth,
                        h: T.docscroll[0].scrollHeight
                    }
                }, T.onResize = function (e, t) {
                    if (!T.win) return !1;
                    if (!T.haswrapper && !T.ispage) {
                        if ("none" == T.win.css("display")) return T.visibility && T.hideRail().hideRailHr(), !1;
                        T.hidden || T.visibility || T.showRail().showRailHr()
                    }
                    var n = T.page.maxh,
                        r = T.page.maxw,
                        o = {
                            h: T.view.h,
                            w: T.view.w
                        };
                    if (T.view = {
                            w: T.ispage ? T.win.width() : parseInt(T.win[0].clientWidth),
                            h: T.ispage ? T.win.height() : parseInt(T.win[0].clientHeight)
                        }, T.page = t ? t : T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == n && T.page.maxw == r && T.view.w == o.w) {
                        if (T.ispage) return T;
                        var i = T.win.offset();
                        if (T.lastposition) {
                            var a = T.lastposition;
                            if (a.top == i.top && a.left == i.left) return T
                        }
                        T.lastposition = i
                    }
                    if (0 == T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail.scrollable = !1) : T.rail.scrollable = !0, 0 == T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh.scrollable = !1) : T.railh.scrollable = !0, T.locked = 0 == T.page.maxh && 0 == T.page.maxw, T.locked) return T.ispage || T.updateScrollBar(T.view), !1;
                    T.hidden || T.visibility ? T.hidden || T.railh.visibility || T.showRailHr() : T.showRail().showRailHr(), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = T.opt.cursorfixedheight ? T.opt.cursorfixedheight : Math.max(T.opt.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = T.opt.cursorfixedheight ? T.opt.cursorfixedheight : Math.max(T.opt.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - T.cursor.hborder, T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - T.cursorh.wborder), T.checkrtlmode && T.railh && (T.checkrtlmode = !1, T.opt.rtlmode && 0 == T.scroll.x && T.setScrollLeft(T.page.maxw)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
                        x: T.page.maxw / T.scrollvaluemaxw,
                        y: T.page.maxh / T.scrollvaluemax
                    };
                    var s = T.getScrollTop();
                    return s > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.scroll.x = Math.round(T.getScrollLeft() * (1 / T.scrollratio.x)), T.cursoractive && T.noticeCursor()), T.scroll.y && 0 == T.getScrollTop() && T.doScrollTo(Math.floor(T.scroll.y * T.scrollratio.y)), T
                }, T.resize = T.onResize, T.lazyResize = function (e) {
                    return e = isNaN(e) ? 30 : e, T.delayed("resize", T.resize, e), T
                }, T._bind = function (e, t, n, r) {
                    T.events.push({
                        e: e,
                        n: t,
                        f: n,
                        b: r,
                        q: !1
                    }), e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
                }, T.jqbind = function (e, t, n) {
                    T.events.push({
                        e: e,
                        n: t,
                        f: n,
                        q: !0
                    }), d(e).bind(t, n)
                }, T.bind = function (n, r, o, i) {
                    var a = "jquery" in n ? n[0] : n;
                    if ("mousewheel" == r)
                        if ("onwheel" in T.win) T._bind(a, "wheel", o, i || !1);
                        else {
                            var s = "undefined" != typeof t.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                            y(a, s, o, i || !1), "DOMMouseScroll" == s && y(a, "MozMousePixelScroll", o, i || !1)
                        } else if (a.addEventListener) {
                        if (S.cantouch && /mouseup|mousedown|mousemove/.test(r)) {
                            var l = "mousedown" == r ? "touchstart" : "mouseup" == r ? "touchend" : "touchmove";
                            T._bind(a, l, function (e) {
                                if (e.touches) {
                                    if (e.touches.length < 2) {
                                        var t = e.touches.length ? e.touches[0] : e;
                                        t.original = e, o.call(this, t)
                                    }
                                } else if (e.changedTouches) {
                                    var t = e.changedTouches[0];
                                    t.original = e, o.call(this, t)
                                }
                            }, i || !1)
                        }
                        T._bind(a, r, o, i || !1), S.cantouch && "mouseup" == r && T._bind(a, "touchcancel", o, i || !1)
                    } else T._bind(a, r, function (n) {
                        return n = n || e.event || !1, n && n.srcElement && (n.target = n.srcElement), "pageY" in n || (n.pageX = n.clientX + t.documentElement.scrollLeft, n.pageY = n.clientY + t.documentElement.scrollTop), o.call(a, n) === !1 || i === !1 ? T.cancelEvent(n) : !0
                    })
                }, T._unbind = function (e, t, n, r) {
                    e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = !1
                }, T.unbindAll = function () {
                    for (var e = 0; e < T.events.length; e++) {
                        var t = T.events[e];
                        t.q ? t.e.unbind(t.n, t.f) : T._unbind(t.e, t.n, t.f, t.b)
                    }
                }, T.cancelEvent = function (t) {
                    var t = t.original ? t.original : t ? t : e.event || !1;
                    return t ? (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.preventManipulation && t.preventManipulation(), t.cancelBubble = !0, t.cancel = !0, t.returnValue = !1, !1) : !1
                }, T.stopPropagation = function (t) {
                    var t = t.original ? t.original : t ? t : e.event || !1;
                    return t ? t.stopPropagation ? t.stopPropagation() : (t.cancelBubble && (t.cancelBubble = !0), !1) : !1
                }, T.showRail = function () {
                    return 0 == T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.visibility = !0, T.rail.visibility = !0, T.rail.css("display", "block")), T
                }, T.showRailHr = function () {
                    return T.railh ? (0 == T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block")), T) : T
                }, T.hideRail = function () {
                    return T.visibility = !1, T.rail.visibility = !1, T.rail.css("display", "none"), T
                }, T.hideRailHr = function () {
                    return T.railh ? (T.railh.visibility = !1, T.railh.css("display", "none"), T) : T
                }, T.show = function () {
                    return T.hidden = !1, T.locked = !1, T.showRail().showRailHr()
                }, T.hide = function () {
                    return T.hidden = !0, T.locked = !0, T.hideRail().hideRailHr()
                }, T.toggle = function () {
                    return T.hidden ? T.show() : T.hide()
                }, T.remove = function () {
                    T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout), T.doZoomOut(), T.unbindAll(), T.observer !== !1 && T.observer.disconnect(), T.observerremover !== !1 && T.observerremover.disconnect(), T.events = [], T.cursor && (T.cursor.remove(), T.cursor = null), T.cursorh && (T.cursorh.remove(), T.cursorh = null), T.rail && (T.rail.remove(), T.rail = null), T.railh && (T.railh.remove(), T.railh = null), T.zoom && (T.zoom.remove(), T.zoom = null);
                    for (var e = 0; e < T.saved.css.length; e++) {
                        var t = T.saved.css[e];
                        t[0].css(t[1], "undefined" == typeof t[2] ? "" : t[2])
                    }
                    return T.saved = !1, T.me.data("__nicescroll", ""), T.me = null, T.doc = null, T.docscroll = null, T.win = null, T
                }, T.scrollstart = function (e) {
                    return this.onscrollstart = e, T
                }, T.scrollend = function (e) {
                    return this.onscrollend = e, T
                }, T.scrollcancel = function (e) {
                    return this.onscrollcancel = e, T
                }, T.zoomin = function (e) {
                    return this.onzoomin = e, T
                }, T.zoomout = function (e) {
                    return this.onzoomout = e, T
                }, T.isScrollable = function (e) {
                    var t = e.target ? e.target : e;
                    if ("OPTION" == t.nodeName) return !0;
                    for (; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                        var n = d(t),
                            r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                        if (/scroll|auto/.test(r)) return t.clientHeight != t.scrollHeight;
                        t = t.parentNode ? t.parentNode : !1
                    }
                    return !1
                }, T.getViewport = function (e) {
                    for (var t = e && e.parentNode ? e.parentNode : !1; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                        var n = d(t),
                            r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                        if (/scroll|auto/.test(r) && t.clientHeight != t.scrollHeight) return n;
                        if (n.getNiceScroll().length > 0) return n;
                        t = t.parentNode ? t.parentNode : !1
                    }
                    return !1
                }, T.onmousewheel = function (e) {
                    if (T.locked) return !0;
                    if (T.rail.drag) return T.cancelEvent(e);
                    if (!T.rail.scrollable) return T.railh && T.railh.scrollable ? T.onmousewheelhr(e) : !0;
                    var t = +new Date,
                        n = !1;
                    if (T.opt.preservenativescrolling && T.checkarea + 600 < t && (T.nativescrollingarea = T.isScrollable(e), n = !0), T.checkarea = t, T.nativescrollingarea) return !0;
                    var r = w(e, !1, n);
                    return r && (T.checkarea = 0), r
                }, T.onmousewheelhr = function (e) {
                    if (T.locked || !T.railh.scrollable) return !0;
                    if (T.rail.drag) return T.cancelEvent(e);
                    var t = +new Date,
                        n = !1;
                    return T.opt.preservenativescrolling && T.checkarea + 600 < t && (T.nativescrollingarea = T.isScrollable(e), n = !0), T.checkarea = t, T.nativescrollingarea ? !0 : T.locked ? T.cancelEvent(e) : w(e, !0, n)
                }, T.stop = function () {
                    return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
                }, T.getTransitionSpeed = function (e) {
                    var t = Math.round(10 * T.opt.scrollspeed),
                        n = Math.min(t, Math.round(e / 20 * T.opt.scrollspeed));
                    return n > 20 ? n : 0
                }, T.opt.smoothscroll ? T.ishwscroll && S.hastransition && T.opt.usetransition ? (T.prepareTransition = function (e, t) {
                    var n = t ? e > 20 ? e : 0 : T.getTransitionSpeed(e),
                        r = n ? S.prefixstyle + "transform " + n + "ms ease-out" : "";
                    return T.lasttransitionstyle && T.lasttransitionstyle == r || (T.lasttransitionstyle = r, T.doc.css(S.transitionstyle, r)), n
                }, T.doScrollLeft = function (e, t) {
                    var n = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, n, t)
                }, T.doScrollTop = function (e, t) {
                    var n = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(n, e, t)
                }, T.doScrollPos = function (e, t, n) {
                    var r = T.getScrollTop(),
                        o = T.getScrollLeft();
                    return ((T.newscrolly - r) * (t - r) < 0 || (T.newscrollx - o) * (e - o) < 0) && T.cancelScroll(), 0 == T.opt.bouncescroll && (0 > t ? t = 0 : t > T.page.maxh && (t = T.page.maxh), 0 > e ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && t == T.newscrolly ? !1 : (T.newscrolly = t, T.newscrollx = e, T.newscrollspeed = n || !1, T.timer ? !1 : void(T.timer = setTimeout(function () {
                        var n = T.getScrollTop(),
                            r = T.getScrollLeft(),
                            o = {};
                        o.x = e - r, o.y = t - n, o.px = r, o.py = n;
                        var i = Math.round(Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2))),
                            a = T.newscrollspeed && T.newscrollspeed > 1 ? T.newscrollspeed : T.getTransitionSpeed(i);
                        if (T.newscrollspeed && T.newscrollspeed <= 1 && (a *= T.newscrollspeed), T.prepareTransition(a, !0), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), a > 0) {
                            if (!T.scrollrunning && T.onscrollstart) {
                                var s = {
                                    type: "scrollstart",
                                    current: {
                                        x: r,
                                        y: n
                                    },
                                    request: {
                                        x: e,
                                        y: t
                                    },
                                    end: {
                                        x: T.newscrollx,
                                        y: T.newscrolly
                                    },
                                    speed: a
                                };
                                T.onscrollstart.call(T, s)
                            }
                            S.transitionend ? T.scrollendtrapped || (T.scrollendtrapped = !0, T.bind(T.doc, S.transitionend, T.onScrollEnd, !1)) : (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollEnd, a));
                            var l = n,
                                c = r;
                            T.timerscroll = {
                                bz: new BezierClass(l, T.newscrolly, a, 0, 0, .58, 1),
                                bh: new BezierClass(c, T.newscrollx, a, 0, 0, .58, 1)
                            }, T.cursorfreezed || (T.timerscroll.tm = setInterval(function () {
                                T.showCursor(T.getScrollTop(), T.getScrollLeft())
                            }, 60))
                        }
                        T.synched("doScroll-set", function () {
                            T.timer = 0, T.scrollendtrapped && (T.scrollrunning = !0), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx), T.scrollendtrapped || T.onScrollEnd()
                        })
                    }, 50)))
                }, T.cancelScroll = function () {
                    if (!T.scrollendtrapped) return !0;
                    var e = T.getScrollTop(),
                        t = T.getScrollLeft();
                    return T.scrollrunning = !1, S.transitionend || clearTimeout(S.transitionend), T.scrollendtrapped = !1, T._unbind(T.doc, S.transitionend, T.onScrollEnd), T.prepareTransition(0), T.setScrollTop(e), T.railh && T.setScrollLeft(t), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.showCursor(e, t), T
                }, T.onScrollEnd = function () {
                    T.scrollendtrapped && T._unbind(T.doc, S.transitionend, T.onScrollEnd), T.scrollendtrapped = !1, T.prepareTransition(0), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1;
                    var e = T.getScrollTop(),
                        t = T.getScrollLeft();
                    if (T.setScrollTop(e), T.railh && T.setScrollLeft(t), T.noticeCursor(!1, e, t), T.cursorfreezed = !1, 0 > e ? e = 0 : e > T.page.maxh && (e = T.page.maxh), 0 > t ? t = 0 : t > T.page.maxw && (t = T.page.maxw), e != T.newscrolly || t != T.newscrollx) return T.doScrollPos(t, e, T.opt.snapbackspeed);
                    if (T.onscrollend && T.scrollrunning) {
                        var n = {
                            type: "scrollend",
                            current: {
                                x: t,
                                y: e
                            },
                            end: {
                                x: T.newscrollx,
                                y: T.newscrolly
                            }
                        };
                        T.onscrollend.call(T, n)
                    }
                    T.scrollrunning = !1
                }) : (T.doScrollLeft = function (e, t) {
                    var n = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, n, t)
                }, T.doScrollTop = function (e, t) {
                    var n = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(n, e, t)
                }, T.doScrollPos = function (e, t, n) {
                    function r() {
                        if (T.cancelAnimationFrame) return !0;
                        if (T.scrollrunning = !0, u = 1 - u) return T.timer = h(r) || 1;
                        var e = 0,
                            t = sy = T.getScrollTop();
                        if (T.dst.ay) {
                            t = T.bzscroll ? T.dst.py + T.bzscroll.getNow() * T.dst.ay : T.newscrolly;
                            var n = t - sy;
                            (0 > n && t < T.newscrolly || n > 0 && t > T.newscrolly) && (t = T.newscrolly), T.setScrollTop(t), t == T.newscrolly && (e = 1)
                        } else e = 1;
                        var o = sx = T.getScrollLeft();
                        if (T.dst.ax) {
                            o = T.bzscroll ? T.dst.px + T.bzscroll.getNow() * T.dst.ax : T.newscrollx;
                            var n = o - sx;
                            (0 > n && o < T.newscrollx || n > 0 && o > T.newscrollx) && (o = T.newscrollx), T.setScrollLeft(o), o == T.newscrollx && (e += 1)
                        } else e += 1;
                        if (2 == e) {
                            if (T.timer = 0, T.cursorfreezed = !1, T.bzscroll = !1, T.scrollrunning = !1, 0 > t ? t = 0 : t > T.page.maxh && (t = T.page.maxh), 0 > o ? o = 0 : o > T.page.maxw && (o = T.page.maxw), o != T.newscrollx || t != T.newscrolly) T.doScrollPos(o, t);
                            else if (T.onscrollend) {
                                var i = {
                                    type: "scrollend",
                                    current: {
                                        x: sx,
                                        y: sy
                                    },
                                    end: {
                                        x: T.newscrollx,
                                        y: T.newscrolly
                                    }
                                };
                                T.onscrollend.call(T, i)
                            }
                        } else T.timer = h(r) || 1
                    }
                    var t = "undefined" == typeof t || t === !1 ? T.getScrollTop(!0) : t;
                    if (T.timer && T.newscrolly == t && T.newscrollx == e) return !0;
                    T.timer && m(T.timer), T.timer = 0;
                    var o = T.getScrollTop(),
                        i = T.getScrollLeft();
                    ((T.newscrolly - o) * (t - o) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), T.newscrolly = t, T.newscrollx = e, T.bouncescroll && T.rail.visibility || (T.newscrolly < 0 ? T.newscrolly = 0 : T.newscrolly > T.page.maxh && (T.newscrolly = T.page.maxh)), T.bouncescroll && T.railh.visibility || (T.newscrollx < 0 ? T.newscrollx = 0 : T.newscrollx > T.page.maxw && (T.newscrollx = T.page.maxw)), T.dst = {}, T.dst.x = e - i, T.dst.y = t - o, T.dst.px = i, T.dst.py = o;
                    var a = Math.round(Math.sqrt(Math.pow(T.dst.x, 2) + Math.pow(T.dst.y, 2)));
                    T.dst.ax = T.dst.x / a, T.dst.ay = T.dst.y / a;
                    var s = 0,
                        l = a;
                    0 == T.dst.x ? (s = o, l = t, T.dst.ay = 1, T.dst.py = 0) : 0 == T.dst.y && (s = i, l = e, T.dst.ax = 1, T.dst.px = 0);
                    var c = T.getTransitionSpeed(a);
                    if (n && 1 >= n && (c *= n), T.bzscroll = c > 0 ? T.bzscroll ? T.bzscroll.update(l, c) : new BezierClass(s, l, c, 0, 1, 0, 1) : !1, !T.timer) {
                        (o == T.page.maxh && t >= T.page.maxh || i == T.page.maxw && e >= T.page.maxw) && T.checkContentSize();
                        var u = 1;
                        if (T.cancelAnimationFrame = !1, T.timer = 1, T.onscrollstart && !T.scrollrunning) {
                            var d = {
                                type: "scrollstart",
                                current: {
                                    x: i,
                                    y: o
                                },
                                request: {
                                    x: e,
                                    y: t
                                },
                                end: {
                                    x: T.newscrollx,
                                    y: T.newscrolly
                                },
                                speed: c
                            };
                            T.onscrollstart.call(T, d)
                        }
                        r(), (o == T.page.maxh && t >= o || i == T.page.maxw && e >= i) && T.checkContentSize(), T.noticeCursor()
                    }
                }, T.cancelScroll = function () {
                    return T.timer && m(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
                }) : (T.doScrollLeft = function (e, t) {
                    var n = T.getScrollTop();
                    T.doScrollPos(e, n, t)
                }, T.doScrollTop = function (e, t) {
                    var n = T.getScrollLeft();
                    T.doScrollPos(n, e, t)
                }, T.doScrollPos = function (e, t) {
                    var n = e > T.page.maxw ? T.page.maxw : e;
                    0 > n && (n = 0);
                    var r = t > T.page.maxh ? T.page.maxh : t;
                    0 > r && (r = 0), T.synched("scroll", function () {
                        T.setScrollTop(r), T.setScrollLeft(n)
                    })
                }, T.cancelScroll = function () {}), T.doScrollBy = function (e, t) {
                    var n = 0;
                    if (t) n = Math.floor((T.scroll.y - e) * T.scrollratio.y);
                    else {
                        var r = T.timer ? T.newscrolly : T.getScrollTop(!0);
                        n = r - e
                    }
                    if (T.bouncescroll) {
                        var o = Math.round(T.view.h / 2); - o > n ? n = -o : n > T.page.maxh + o && (n = T.page.maxh + o)
                    }
                    return T.cursorfreezed = !1, py = T.getScrollTop(!0), 0 > n && 0 >= py ? T.noticeCursor() : n > T.page.maxh && py >= T.page.maxh ? (T.checkContentSize(), T.noticeCursor()) : void T.doScrollTop(n)
                }, T.doScrollLeftBy = function (e, t) {
                    var n = 0;
                    if (t) n = Math.floor((T.scroll.x - e) * T.scrollratio.x);
                    else {
                        var r = T.timer ? T.newscrollx : T.getScrollLeft(!0);
                        n = r - e
                    }
                    if (T.bouncescroll) {
                        var o = Math.round(T.view.w / 2); - o > n ? n = -o : n > T.page.maxw + o && (n = T.page.maxw + o)
                    }
                    return T.cursorfreezed = !1, px = T.getScrollLeft(!0), 0 > n && 0 >= px ? T.noticeCursor() : n > T.page.maxw && px >= T.page.maxw ? T.noticeCursor() : void T.doScrollLeft(n)
                }, T.doScrollTo = function (e, t) {
                    var n = t ? Math.round(e * T.scrollratio.y) : e;
                    0 > n ? n = 0 : n > T.page.maxh && (n = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
                }, T.checkContentSize = function () {
                    var e = T.getContentSize();
                    (e.h != T.page.h || e.w != T.page.w) && T.resize(!1, e)
                }, T.onscroll = function () {
                    T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
                        T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() * (1 / T.scrollratio.x))), T.noticeCursor()
                    })
                }, T.bind(T.docscroll, "scroll", T.onscroll), T.doZoomIn = function (t) {
                    if (!T.zoomactive) {
                        T.zoomactive = !0, T.zoomrestore = {
                            style: {}
                        };
                        var n = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                            r = T.win[0].style;
                        for (var o in n) {
                            var i = n[o];
                            T.zoomrestore.style[i] = "undefined" != typeof r[i] ? r[i] : ""
                        }
                        T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
                            w: T.win.outerWidth() - T.win.width(),
                            h: T.win.outerHeight() - T.win.height()
                        }, S.isios4 && (T.zoomrestore.scrollTop = d(e).scrollTop(), d(e).scrollTop(0)), T.win.css({
                            position: S.isios4 ? "absolute" : "fixed",
                            top: 0,
                            left: 0,
                            "z-index": u + 100,
                            margin: "0px"
                        });
                        var a = T.win.css("backgroundColor");
                        return ("" == a || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(a)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
                            "z-index": u + 101
                        }), T.zoom.css({
                            "z-index": u + 102
                        }), T.zoom.css("backgroundPosition", "0px -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(t)
                    }
                }, T.doZoomOut = function (t) {
                    return T.zoomactive ? (T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), S.isios4 && d(e).scrollTop(T.zoomrestore.scrollTop), T.rail.css({
                        "z-index": T.zindex
                    }), T.zoom.css({
                        "z-index": T.zindex
                    }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0px 0px"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(t)) : void 0
                }, T.doZoom = function (e) {
                    return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
                }, T.resizeZoom = function () {
                    if (T.zoomactive) {
                        var t = T.getScrollTop();
                        T.win.css({
                            width: d(e).width() - T.zoomrestore.padding.w + "px",
                            height: d(e).height() - T.zoomrestore.padding.h + "px"
                        }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, t))
                    }
                }, T.init(), d.nicescroll.push(T)
            },
            x = function (e) {
                var t = this;
                t.nc = e, t.lastx = 0, t.lasty = 0, t.speedx = 0, t.speedy = 0, t.lasttime = 0, t.steptime = 0, t.snapx = !1, t.snapy = !1, t.demulx = 0, t.demuly = 0, t.lastscrollx = -1, t.lastscrolly = -1, t.chkx = 0, t.chky = 0, t.timer = 0, t.time = function () {
                    return +new Date
                }, t.reset = function (e, n) {
                    t.stop();
                    var r = t.time();
                    t.steptime = 0, t.lasttime = r, t.speedx = 0, t.speedy = 0, t.lastx = e, t.lasty = n, t.lastscrollx = -1, t.lastscrolly = -1
                }, t.update = function (e, n) {
                    var r = t.time();
                    t.steptime = r - t.lasttime, t.lasttime = r;
                    var o = n - t.lasty,
                        i = e - t.lastx,
                        a = t.nc.getScrollTop(),
                        s = t.nc.getScrollLeft(),
                        l = a + o,
                        c = s + i;
                    t.snapx = 0 > c || c > t.nc.page.maxw, t.snapy = 0 > l || l > t.nc.page.maxh, t.speedx = i, t.speedy = o, t.lastx = e, t.lasty = n
                }, t.stop = function () {
                    t.nc.unsynched("domomentum2d"), t.timer && clearTimeout(t.timer), t.timer = 0, t.lastscrollx = -1, t.lastscrolly = -1
                }, t.doSnapy = function (e, n) {
                    var r = !1;
                    0 > n ? (n = 0, r = !0) : n > t.nc.page.maxh && (n = t.nc.page.maxh, r = !0), 0 > e ? (e = 0, r = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw, r = !0), r && t.nc.doScrollPos(e, n, t.nc.opt.snapbackspeed)
                }, t.doMomentum = function (e) {
                    var n = t.time(),
                        r = e ? n + e : t.lasttime,
                        o = t.nc.getScrollLeft(),
                        i = t.nc.getScrollTop(),
                        a = t.nc.page.maxh,
                        s = t.nc.page.maxw;
                    t.speedx = s > 0 ? Math.min(60, t.speedx) : 0, t.speedy = a > 0 ? Math.min(60, t.speedy) : 0;
                    var l = r && 50 >= n - r;
                    (0 > i || i > a || 0 > o || o > s) && (l = !1);
                    var c = t.speedy && l ? t.speedy : !1,
                        u = t.speedx && l ? t.speedx : !1;
                    if (c || u) {
                        var d = Math.max(16, t.steptime);
                        if (d > 50) {
                            var p = d / 50;
                            t.speedx *= p, t.speedy *= p, d = 50
                        }
                        t.demulxy = 0, t.lastscrollx = t.nc.getScrollLeft(), t.chkx = t.lastscrollx, t.lastscrolly = t.nc.getScrollTop(), t.chky = t.lastscrolly;
                        var f = t.lastscrollx,
                            h = t.lastscrolly,
                            m = function () {
                                var e = t.time() - n > 600 ? .04 : .02;
                                t.speedx && (f = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)), t.lastscrollx = f, (0 > f || f > s) && (e = .1)), t.speedy && (h = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)), t.lastscrolly = h, (0 > h || h > a) && (e = .1)), t.demulxy = Math.min(1, t.demulxy + e), t.nc.synched("domomentum2d", function () {
                                    if (t.speedx) {
                                        var e = t.nc.getScrollLeft();
                                        e != t.chkx && t.stop(), t.chkx = f, t.nc.setScrollLeft(f)
                                    }
                                    if (t.speedy) {
                                        var n = t.nc.getScrollTop();
                                        n != t.chky && t.stop(), t.chky = h, t.nc.setScrollTop(h)
                                    }
                                    t.timer || (t.nc.hideCursor(), t.doSnapy(f, h))
                                }), t.demulxy < 1 ? t.timer = setTimeout(m, d) : (t.stop(), t.nc.hideCursor(), t.doSnapy(f, h))
                            };
                        m()
                    } else t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
                }
            },
            T = n.fn.scrollTop;
        n.cssHooks.pageYOffset = {
            get: function (e) {
                var t = d.data(e, "__nicescroll") || !1;
                return t && t.ishwscroll ? t.getScrollTop() : T.call(e)
            },
            set: function (e, t) {
                var n = d.data(e, "__nicescroll") || !1;
                return n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : T.call(e, t), this
            }
        }, n.fn.scrollTop = function (e) {
            if ("undefined" == typeof e) {
                var t = this[0] ? d.data(this[0], "__nicescroll") || !1 : !1;
                return t && t.ishwscroll ? t.getScrollTop() : T.call(this)
            }
            return this.each(function () {
                var t = d.data(this, "__nicescroll") || !1;
                t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : T.call(d(this), e)
            })
        };
        var k = n.fn.scrollLeft;
        d.cssHooks.pageXOffset = {
            get: function (e) {
                var t = d.data(e, "__nicescroll") || !1;
                return t && t.ishwscroll ? t.getScrollLeft() : k.call(e)
            },
            set: function (e, t) {
                var n = d.data(e, "__nicescroll") || !1;
                return n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : k.call(e, t), this
            }
        }, n.fn.scrollLeft = function (e) {
            if ("undefined" == typeof e) {
                var t = this[0] ? d.data(this[0], "__nicescroll") || !1 : !1;
                return t && t.ishwscroll ? t.getScrollLeft() : k.call(this)
            }
            return this.each(function () {
                var t = d.data(this, "__nicescroll") || !1;
                t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : k.call(d(this), e)
            })
        };
        var S = function (e) {
            var t = this;
            if (t.length = 0, t.name = "nicescrollarray", t.each = function (e) {
                    for (var n = 0; n < t.length; n++) e.call(t[n]);
                    return t
                }, t.push = function (e) {
                    t[t.length] = e, t.length++
                }, t.eq = function (e) {
                    return t[e]
                }, e)
                for (a = 0; a < e.length; a++) {
                    var n = d.data(e[a], "__nicescroll") || !1;
                    n && (t[t.length] = n, t.length++)
                }
            return t
        };
        o(S.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, t) {
            e[t] = function () {
                var e = arguments;
                return this.each(function () {
                    this[t].apply(this, e)
                })
            }
        }), n.fn.getNiceScroll = function (e) {
            if ("undefined" == typeof e) return new S(this);
            var t = d.data(this[e], "__nicescroll") || !1;
            return t
        }, n.extend(n.expr[":"], {
            nicescroll: function (e) {
                return d.data(e, "__nicescroll") ? !0 : !1
            }
        }), d.fn.niceScroll = function (e, t) {
            "undefined" == typeof t && ("object" != typeof e || "jquery" in e || (t = e, e = !1));
            var n = new S;
            "undefined" == typeof t && (t = {}), e && (t.doc = d(e), t.win = d(this));
            var r = !("doc" in t);
            return r || "win" in t || (t.win = d(this)), this.each(function () {
                var e = d(this).data("__nicescroll") || !1;
                e || (t.doc = r ? d(this) : t.doc, e = new w(t, d(this)), d(this).data("__nicescroll", e)), n.push(e)
            }), 1 == n.length ? n[0] : n
        }, e.NiceScroll = {
            getjQuery: function () {
                return n
            }
        }, d.nicescroll || (d.nicescroll = new S, d.nicescroll.options = v)
    }(jQuery), $4.onInit("jQuery", function () {
        var e = {},
            t = function (e) {
                return $("<div/>").text(e + "").html().replace('"', "&quot;").replace("'", "&#039;")
            },
            n = function (e, t) {
                return (e + "").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (t || "") + "-]", "g"), "\\$&")
            },
            r = function (n) {
                var r = {},
                    o = 0;
                if (!(n in e)) {
                    if ($('script[type="text/template"][data-name="' + t(n) + '"]').each(function (e, t) {
                            var n = $(t),
                                i = n.data("part") || e;
                            r[i] = n.html().replace(/(^(\s+)?\<\!\-\-\/\*(\s+)?|(\s+)?\*\/\/\/\-\-\>(\s+)?$)/g, ""), o++
                        }), o || (r = ""), 1 == o)
                        for (o in r) {
                            r = r[o];
                            break
                        }
                    e[n] = r
                }
                return e[n]
            },
            o = function (e, r, i) {
                text = e + "", i = (i || "") + "";
                for (var a in r)
                    if ("object" == typeof r[a]) text = o(text, r[a], a + ".");
                    else {
                        var s = n(i + a);
                        text = text.replace(new RegExp("(\\<\\!\\-\\-\\{" + s + "\\}\\-\\-\\>|\\#\\#__" + s + "__\\#\\#)", "g"), r[a]).replace(new RegExp("##\\{" + s + "\\}##", "g"), t(r[a]))
                    }
                return text = text.replace(/(\<\!\-\-\{[^}]+\}\-\-\>|##\{[^}]+\}##)/g, "")
            },
            i = function (e, t) {
                return o(r(e), t)
            };
        $4.addModule("textTemplate", function () {
            return {
                templates: e,
                tmpLoad: r,
                tmpCompile: o,
                tmpLoadAndCompile: i
            }
        })
    });
    try {
        $4.addModule("jQuery", $), $4.addModule("NiceScroll", NiceScroll)
    } catch (n) {}
}(window, document);
//# sourceMappingURL=jqp.min.js.map