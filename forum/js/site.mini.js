! function (window, document, undefined) {
    var mod_onready = [],
        mod_callfn = {};
    try {
        if (navigator.userAgent.indexOf("Opera Mini") > -1) {
            var mod_opera_mini_lnk = document.createElement("link");
            mod_opera_mini_lnk.setAttribute("rel", "stylesheet"), mod_opera_mini_lnk.setAttribute("href", "http://s.4pda.to/css/site.operamini.css?" + 99999999 * Math.random()), document.getElementsByTagName("head")[0].appendChild(mod_opera_mini_lnk)
        }
    } catch (e) {}
    var mod_wait_load_jquery;
    mod_wait_load_jquery = window.setInterval(function () {
        if ("undefined" != typeof jQuery && "undefined" != jQuery) {
            window.clearInterval(mod_wait_load_jquery);
            var $ = jQuery;
            try {
                "SVGSVGElement" in window && $("html").removeClass("no-svg")
            } catch (e) {}! function () {
                var init = 0;
                mod_onready.push(function () {
                    function collapse(t, a) {
                        a && $("#comment-" + a).addClass("collapse")
                    }

                    function expand(t, a) {
                        a && $("#comment-" + a).removeClass("collapse")
                    }

                    function is_collapse(t, a) {
                        var e = !1;
                        return a && (e = $("#comment-" + a).hasClass("collapse")), e
                    }

                    function draw_karma(t, a, e, n) {
                        var r = $('[data-karma="' + t + "-" + a + '"]'),
                            i = "",
                            o = r.data("karma-addon");
                        if (r.size() && $.isArray(e) && !(4 > e.length)) {
                            (o == undefined || "undefined" == o) && r.data("karma-addon", o = r.html() + ""), !n && (-1 == e[0] || 0 == e[0] && e[1]) && collapse(t, a), 0 !== e[0] && r.attr("data-karma-vote", e[0]);
                            var s = t + "-" + a;
                            karma > -10 && (i += o, i += e[2] && 11 > karma ? "" : '<b class="icon-karma-up" title="Мне нравится" data-karma-act="1-' + s + '"></b>'), i += '<b href="#comment' + a + '" class="icon-hide-comment" title="' + (is_collapse(t, a) ? "Развернуть" : "Свернуть") + '" data-karma-act="0-' + s + '"></b>';
                            var c = karma > 10 ? ' data-karma-act="3-' + s + '" title="История репутации"' : "";
                            i += '<span class="num-wrap"><span class="num"' + c + ' title="Понравилось">' + e[3] + "</span>" + (karma > 10 ? '|<span class="num"' + c + ">" + e[4] + "</span>" : "") + "</span>", r.html(i)
                        }
                    }

                    function karma_do_request(t, a, e) {
                        $.get("/wp-content/plugins/karma/ajax.php?p=" + t + "&c=" + a + "&v=" + e)
                    }

                    function karma_change(ev) {
                        var _this = this,
                            $this = $(_this),
                            data = ($this.data("karma-act") + "").split("-"),
                            act = data.shift() || "",
                            pid = data.shift() || "",
                            cid = data.shift() || "",
                            cdata = karma_data[pid][cid] || "";
                        if ($.isNumeric(act) && $.isNumeric(pid) && $.isNumeric(cid) && $.isArray(cdata) && $.isNumeric(cdata[0])) {
                            if (0 == act) is_collapse(pid, cid) ? expand(pid, cid) : (11 > karma && collapse(pid, cid), 0 == cdata[0] && (cdata[0] = -1, cdata.length > 4 && (cdata[4] += 1), karma_do_request(pid, cid, -1)), draw_karma(pid, cid, cdata, 1));
                            else if (1 == act)(0 == cdata[0] || karma > 10) && (cdata[0] = 1, cdata[3] += 1, karma_do_request(pid, cid, 1)), draw_karma(pid, cid, cdata);
                            else if (2 == act) try {
                                var addon = $this.data("karma-addon");
                                if (!addon || !$.isFunction(addon = eval(addon))) return;
                                addon(pid, cid, cdata), draw_karma(pid, cid, cdata)
                            } catch (e) {
                                return
                            } else {
                                if (3 != act) return;
                                window.open("/wp-content/plugins/karma/ajax.php?p=" + pid + "&c=" + cid + "&v=0")
                            }
                            return karma_data[pid][cid] = cdata, !1
                        }
                    }
                    if (!init) {
                        init = 1;
                        var karma = -10,
                            karma_data = {};
                        window.ModKarma = function (t, a) {
                            karma = a, karma_data = t, $.isPlainObject(karma_data) && $("[data-karma]").each(function (t, a) {
                                var e = $(a),
                                    n = (e.data("karma") + "").split("-"),
                                    r = n[0] || 0,
                                    i = n[1] || 0;
                                if (r && i && karma_data[r] && karma_data[r][i]) {
                                    var o = karma_data[r][i],
                                        s = e.data("karma-addon"),
                                        c = "";
                                    if ($.isArray(o) && !(4 > o.length)) {
                                        (s == undefined || "undefined" == s) && e.data("karma-addon", s = e.html() + ""), (-1 == o[0] || 0 == o[0] && o[1]) && collapse(r, i), 0 !== o[0] && e.attr("data-karma-vote", o[0]);
                                        var d = r + "-" + i;
                                        karma > -10 && (c += s, c += o[2] && 11 > karma ? "" : '<b class="icon-karma-up" title="Мне нравится" data-karma-act="1-' + d + '"></b>'), c += '<b href="#comment' + i + '" class="icon-hide-comment" title="' + (is_collapse(r, i) ? "Развернуть" : "Свернуть") + '" data-karma-act="0-' + d + '"></b>';
                                        var l = karma > 10 ? ' data-karma-act="3-' + d + '" title="История репутации"' : "";
                                        c += '<span class="num-wrap"><span class="num"' + l + ' title="Понравилось">' + o[3] + "</span>" + (karma > 10 ? '|<span class="num"' + l + ">" + o[4] + "</span>" : "") + "</span>", e.html(c)
                                    }
                                }
                            })
                        }, $(document).on("click", "[data-karma-act]", karma_change)
                    }
                })
            }(),
            function () {
                var t = 0;
                mod_onready.push(function () {
                    function a(t) {
                        var a = $(this),
                            e = a.data("popup"),
                            n = a.attr("target"),
                            r = a.attr("href");
                        e && !$.isArray(e) && (e = [e]), $.isArray(e) && e[0] && (t.preventDefault(), window.open(a.attr(e[0]) || e[0], e[1] || n || "", e[2] || ""), r && (a.removeAttr("href"), setTimeout(function () {
                            a.attr("href", r)
                        })))
                    }
                    t || (t = 1, $(document).on("click", "[data-popup]", a))
                })
            }(),
            function () {
                var t = 0;
                mod_onready.push(function () {
                    function a(t) {
                        if (!t.isDefaultPrevented()) {
                            var a = this,
                                e = $(a),
                                n = window.devicePixelRatio || 1,
                                r = (e.data("edit") + "").split("|"),
                                i = r[0] || e.attr("href"),
                                o = r[1],
                                s = parseInt(r[2]),
                                c = parseInt(r[3]);
                            i && (s = isNaN(s) ? undefined : n * s, c = isNaN(c) ? undefined : n * c, window.Lightbox.popupFrame(i, o, s, c), t.preventDefault())
                        }
                    }
                    t || (t = 1, $(document).on("click", "[data-edit]", a))
                })
            }(),
            function () {
                var t = 0;
                mod_onready.push(function () {
                    function a(t) {
                        var a = $(this),
                            e = a.data("ajax"),
                            n = $(e),
                            r = a.attr("href") || a.attr("action"),
                            i = function () {
                                for (var t = '<div style="text-align:center;"><div class="comml">', a = 1; 9 > a; a++) t += '<div class="commlG circG' + a + '"></div>';
                                return t + "</div></div>"
                            }(),
                            o = "<div>Ошибка: неверный ответ сервера</div>";
                        r && n.size() && ("submit" === t.type || "FORM" != (t.currentTarget.nodeName + "").toUpperCase()) && ($.ajax({
                            async: !0,
                            cache: !1,
                            contentType: a.attr("enctype") || "application/x-www-form-urlencoded",
                            data: a.serialize() || null,
                            type: a.attr("method") || "GET",
                            scriptCharset: a.attr("accept-charset") || "",
                            url: r,
                            error: function () {
                                n.html(o)
                            },
                            success: function (t) {
                                var a = $("<div>").append($.parseHTML(t)).find(e);
                                n.html(a.size() ? a.html() : o)
                            }
                        }), n.html(i), t.preventDefault())
                    }
                    t || (t = 1, $(document).on("click submit", "[data-ajax]", a))
                })
            }(),
            function () {
                function t() {
                    return A || (A = p(g)), A
                }

                function a(a, e) {
                    if (A = t(), p(v).addClass(h + (e ? " by-tap" : "")), D !== a.data(h)) {
                        D = a.data(h), p("." + _ + C).removeClass(_), p("[" + k + '="' + D + '"]').addClass(_), A.find("[" + b + "]").removeClass("visible");
                        var n = A.find("[" + b + '="' + D + '"]');
                        n.find("img[data-src]").each(function (t, a, e) {
                            var n, r = "src";
                            e = p(this), e.attr(r) != (n = e.data(r)) && e.attr(r, n)
                        }), n.addClass("visible")
                    }
                }

                function e() {
                    p(v).removeClass(h + " by-tap"), A = t(), D = !1, p(C).removeClass(_)
                }

                function n() {
                    clearTimeout(N);
                    var t = p(this);
                    p(v).hasClass(h) ? a(t) : N = setTimeout(function () {
                        a(t)
                    }, 500)
                }

                function r() {
                    clearTimeout(N)
                }

                function i() {
                    clearTimeout(N), N = setTimeout(function () {
                        e()
                    }, z)
                }

                function o(t) {
                    var n = p(this),
                        r = (new Date).getTime(),
                        i = n.data("detect-doubletap") || 0;
                    i + R > r || (n.data("detect-doubletap", r), p(this).hasClass(_) ? e() : a(n, 1), t.preventDefault())
                }

                function s(t, a, e) {
                    return a = (a + "").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/-]", "g"), "\\$&"), (t + "").replace(new RegExp("\\{\\{" + a + "\\}\\}", "g"), e + "")
                }

                function c(t, a) {
                    var e, n = t + "";
                    for (e in a) n = s(n, e, a[e]);
                    return n
                }

                function d() {
                    return S && S.size() || (S = p("#header .h-frame")), S
                }

                function l() {
                    return E && E.size() || (E = p("#top-adbox")), E
                }

                function u() {
                    return H && H.size() || (H = p("#header")), H
                }

                function m() {
                    p(window).scrollTop() > l().height() ? d().addClass("fixed-menu") : d().removeClass("fixed-menu")
                }

                function f(t) {
                    u().attr("class", u().hasClass("fixed-menu") ? "fixed-menu " + t : t), p("#header .btn-search1").removeClass("select")
                }
                var p = jQuery,
                    h = "slider",
                    v = "#header",
                    g = "#" + h,
                    $ = "-content",
                    y = h + $,
                    w = "." + y,
                    _ = h + "-active",
                    k = "data-" + h,
                    b = k + $,
                    C = "[" + k + "]",
                    x = ".4pda." + h,
                    T = "mouseenter" + x,
                    F = "mouseleave" + x,
                    j = "touchstart" + x,
                    N = 0,
                    z = 100,
                    A = !1,
                    D = !1,
                    R = 1e3;
                p(document).on(F, C + "," + g + " " + w, i).on(T, C, n).on(T, g + " " + w, r).on(j, C, o);
                var E = 0,
                    H = 0,
                    S = 0;
                p(window).on("scroll hashchange load", m), p(document).ready(function () {
                    m(), p("#header .title").click(function () {
                        f(u().hasClass("hover") ? "" : "hover")
                    }), p("#header .btn-search1").click(function () {
                        var t = p(this),
                            a = "select";
                        u().hasClass(a) ? (f(""), t.removeClass(a)) : (f(a), t.addClass(a))
                    });
                    var t = /^(\s+)?<\!--\/\*|\*\/\/\/-->$/g,
                        a = (p('[type="text/template"][data-name="' + y + '"]').html() + "").replace(t, ""),
                        e = (p('[type="text/template"][data-name="' + y + '-item"]').html() + "").replace(t, ""),
                        n = (p('[type="text/template"][data-name="' + y + '-meta"]').html() + "").replace(t, "");
                    p("[" + b + "-data]").each(function () {
                        var t, r, i, o, s, d, l, u, m = p(this),
                            f = m.data(y + "-data"),
                            h = "";
                        for (var v in f)
                            if (t = f[v], p.isArray(t) && t.length > 1) {
                                for (i = "", d = [], l = 0; l < t[0].length; l++) r = t[0][l], p.isArray(r) && r.length > 2 && (d.push(r[0]), r.length < 4 && (r[3] = Math.floor(r[0] / 1e3) + "/phband-" + r[0] + ".jpg"), i += c(e, r));
                                if (o = "", s = 0, t.length > 2)
                                    for (l = 0; l < t[2].length; l++) r = t[2][l], p.isArray(r) && r.length > 1 && (r.length < 3 ? r.push("") : r[2] = "color:" + r[2] + ";background:" + r[2], u = "/" != (r[0] + "").substr(0, 1), u && (r[0] = "/" + v + "/tag/" + r[0] + "/"), (u && (window.location + "").indexOf("/" + v + "/tag/" + r[1] + "/") > -1 || !u && (window.location + "").indexOf(r[0]) > -1) && (r.push("active"), s++), o += c(n, r));
                                !s && (window.location + "").indexOf("/" + v + "/") > -1 && (s = "active"), h += c(a, {
                                    key: v,
                                    content: i,
                                    meta_suffix: (t[1] + "").toLowerCase(),
                                    meta: o,
                                    meta_active_all: s,
                                    item_ids: d
                                })
                            }
                        m.html(h)
                    })
                })
            }(),
            function () {
                var t = 1;
                mod_onready.push(function () {
                    var a = !1,
                        e = 0;
                    try {
                        a = (window.location.hash + "").replace(/^#?([^#]+)(#.*)?/, "$1")
                    } catch (n) {}
                    a && "#" != a.substr(0, 1) && (a = "#" + a), t && $(document).on("click", "[data-tab]", function (t) {
                        var a = $(this),
                            n = a.attr("data-tab"),
                            r = a.parent().parent();
                        if (r.is(".tabset")) {
                            t.preventDefault(), $(">.tab-control>", r).removeClass("active"), $(">.tab", r).removeClass("active"), $('[data-tab="' + n + '"]').addClass("active"), $("#" + n + ".tab").addClass("active").trigger("tab-activate");
                            try {
                                e && history.replaceState(null, window.title, "#" + n)
                            } catch (i) {}
                            return !1
                        }
                    }).on("click", "a.tab-nav", function (t) {
                        var a = $(this).attr("href") + "";
                        return e && "#" == a.substr(0, 1) && (a = $('[data-tab="' + a.replace(/^#/, "") + '"]')).size() ? (a.click(), t.preventDefault(), !1) : void 0
                    }) && (t = 0), $(".tabset").each(function () {
                        var t = $(this),
                            n = $(">.tab-control", t),
                            r = $(">.tab", t),
                            i = 0,
                            o = 0;
                        n.size() && r.size() && ($(">*", n).removeClass("active"), r.each(function (t) {
                            for (var e = $(this), r = e.attr("id"); !r;) r = "xxxxxxxx-xxx".replace(/x/gi, function () {
                                return String.fromCharCode(Math.ceil(25 * Math.random()) + 97)
                            }), $("#" + r).size() && (r = 0);
                            e.hasClass("active") && (o = r, e.removeClass("active")), e.attr("id", r), n.find(">:nth-child(" + (t + 1) + ")").attr("data-tab", r), $(this).is(a) && (i = r)
                        }), !i && (i = $(r[0]).attr("id")), console.log(i), o != i ? $('[data-tab="' + i + '"]').click() : $('[data-tab="' + i + '"],#' + i).addClass("active"), e = 1)
                    })
                })
            }(),
            function () {
                var t = 1;
                mod_onready.push(function () {
                    t && $(document).on("click", "[data-toggle]", function (t) {
                        var a = $(this),
                            e = a.data("toggle"),
                            n = a.data("class") || "toggle";
                        if (e && (e = $(e)).size()) return t.preventDefault(), e.toggleClass(n), !1
                    }) && (t = 0)
                })
            }(), $(document).on("change", 'input[type="file"]', function () {
                    var t = $(this),
                        a = t.parent(),
                        e = a.children(".field"),
                        n = this.files ? this.files : this.value ? [{
                            name: (this.value + "").replace("C:\\fakepath\\", "")
                        }] : [],
                        r = [];
                    if (this.files)
                        for (i = 0; i < n.length; i++) r.push('"' + n[i].name + '"');
                    a.hasClass("input-file") && (a.attr("data-defbtn-text") || a.attr("data-defbtn-text", e.text()), e.text(r.length ? r.join(", ") : a.attr("data-defbtn-text")))
                }),
                function () {
                    var restore_scripts = [];
                    ! function (t) {
                        function a(t) {
                            f += t
                        }

                        function e() {
                            f = "", document.write = a, document.write = a, l.t2 = setTimeout(n, 100)
                        }

                        function n() {
                            if (l.t2 && clearTimeout(l.t2), l.t2 = 0, document.write = u, document.writeln = m, cur_script) {
                                var t = cur_script,
                                    a = document.createElement("div");
                                a.innerHTML = f, restore_scripts.enumScripts(a, 1), a.childNodes.length ? s(t.span, a.childNodes) : r(t.span), f = "", cur_script = null, l.t1 = setTimeout(d, 1)
                            }
                        }

                        function r(t) {
                            for (var a, e = ("length" in t ? Array.prototype.slice.call(t) : [t]); e.length;) a = e.shift(), a && a.parentNode && a.parentNode.removeChild(a);
                            return t
                        }

                        function i(t) {
                            var a = document.getElementsByTagName("head");
                            return a.length && a[0].insertBefore(t, a[0].firstChild || a[0].firstElementChild), t
                        }

                        function o(t, a) {
                            var e, n, r = "length" in t ? Array.prototype.slice.call(t) : [t];
                            if (a && (e = a.parentNode)) {
                                for (; r.length;) n = r.shift(), e.insertBefore(n, a);
                                return t
                            }
                        }

                        function s(t, a) {
                            return t && t.nodeType ? (o(a, t), t.parentNode.removeChild(t), a) : void 0
                        }

                        function c(t) {
                            var a = document.createElement("span");
                            return a.style.display = "none !important", o(a, t), a
                        }

                        function d() {
                            var t;
                            if (clearTimeout(l.t1), restore_scripts.length) {
                                cur_script = restore_scripts.shift();
                                var a = cur_script,
                                    r = document.createElement("script");
                                a.src && (r.onload = r.onreadystatechange = new function (t, a, e) {
                                    return function () {
                                        (!t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t = undefined, e.t2 && clearTimeout(e.t2), e.t2 = setTimeout(a, 1))
                                    }
                                }(r, n, l)), r.onerror = r.onabort = new function (t, a) {
                                    return function () {
                                        a.t2 && clearTimeout(a.t2), a.t2 = setTimeout(t, 1)
                                    }
                                }(n, l), e();
                                for (t in a.attrs) r.setAttribute(t, a.attrs[t]);
                                a.src || r.appendChild(document.createTextNode(a.content)), i(r), a.src || (l.t2 && clearTimeout(l.t2), l.t2 = setTimeout(n, 1))
                            } else
                                for (l.t1 = 0; restore_scripts.fnOnDone.length;) t = restore_scripts.fnOnDone.shift(), $.isFunction(t) && t()
                        }
                        var l = {
                                t1: 0,
                                t2: 0
                            },
                            u = document.write,
                            m = document.writeln,
                            f = "";
                        t.enumScripts = function (t, a) {
                            if (t && t.getElementsByTagName) {
                                for (var e, n = Array.prototype.slice.call(t.getElementsByTagName("script")); n.length;) e = n.shift(), restore_scripts[a ? "unshift" : "push"]({
                                    src: e.src,
                                    attrs: function () {
                                        for (var t = {}, a = 0, n = e.attributes; a < n.length; a++) t[n[a].name] = n[a].value;
                                        return t
                                    }(),
                                    content: e.innerHTML,
                                    span: c(e)
                                }), r(e);
                                l.t1 || (l.t1 = setTimeout(d, 1))
                            }
                        }, t.fnOnDone = []
                    }(restore_scripts), mod_callfn.async = function (ev) {
                        if (!ev.isDefaultPrevented()) {
                            var $t = $(this),
                                target = $t.data("target") || "#wrapper",
                                $target = $(target),
                                fadeFn = function () {
                                    $target.fadeTo("fast", .33)
                                },
                                unfadeFn = function () {
                                    $target.fadeTo("fast", 1)
                                },
                                saveLoc = $t.data("saveloc") || 0,
                                doneFn = $t.data("done-fn"),
                                url = $t.data("href") || $t.data("url") || $t.attr("href"),
                                statusCode = $t.data("statusCode"),
                                settings = {
                                    async: $t.data("async") || !0,
                                    beforeSend: fadeFn,
                                    cache: $t.data("cache") || !0,
                                    contentType: $t.data("enctype") || $t.attr("enctype") || "application/x-www-form-urlencoded",
                                    dataType: $t.data("data-type") || "text",
                                    type: $t.data("method") || $t.attr("method") || "GET",
                                    url: url.replace(/#.*/, ""),
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest"
                                    }
                                };
                            if (statusCode) try {
                                statusCode = settings.statusCode = eval("(" + statusCode + ")")
                            } catch (e) {
                                console.log("status-code", e)
                            }
                            if (doneFn && !$.isFunction(doneFn)) try {
                                doneFn = eval("(" + doneFn + ")")
                            } catch (e) {
                                console.log(e), doneFn = !1
                            }
                            $target.size() && settings.url && (ev.preventDefault(), $.ajax(settings).done(function (t) {
                                var a = $("<div/>").html(t),
                                    e = a.find(target);
                                if (e.size()) {
                                    unfadeFn(), $target.each(function (t) {
                                        var a = document.createElement("div"),
                                            n = e.get(t);
                                        a.appendChild(n), restore_scripts.enumScripts(n), $(this).replaceWith(n)
                                    });
                                    try {
                                        console.log(history.state), !saveLoc && history.replaceState(history.state, a.find("title:first-child").text(), url)
                                    } catch (n) {
                                        console.log(n)
                                    }
                                    $.isFunction(doneFn) && restore_scripts.fnOnDone.push(doneFn);
                                    try {
                                        window["--init-onready-mods"]()
                                    } catch (n) {
                                        console.log(n)
                                    }
                                } else window.location = url
                            }).fail(function (t, a, e) {
                                unfadeFn(), "status" in t && $.isPlainObject(statusCode) && t.status in statusCode || (console.log(arguments), console.log(e), window.location = url)
                            }))
                        }
                    }
                }(), window["--init-onready-mods"] = function () {
                    console.log("mod_onready", mod_onready), $(mod_onready).each(function (t, a) {
                        $.isFunction(a) && a()
                    })
                }, $(document).ready(function () {
                    window["--init-onready-mods"](), console.log("mod_callfn", mod_callfn), $(document).on("click", "[data-callfn]", function (t, a) {
                        t.isDefaultPrevented() || (a = $(this).data("callfn"), a in mod_callfn && $.isFunction(mod_callfn[a]) && mod_callfn[a].call(this, t))
                    })
                }), window.XHR = function (t) {
                    var a = {
                        crossDomain: t,
                        type: "GET",
                        url: "",
                        responseText: "",
                        responseXML: "",
                        readyState: 0,
                        status: 0,
                        onreadystatechange: !1,
                        headers: {},
                        jqXHR: !1,
                        setRequestHeader: function (t, a) {
                            this.headers[t] = a
                        },
                        overrideMimeType: function (t) {
                            this.mimeType = t
                        },
                        open: function () {
                            for (var t = "type url async username password".split(" "), a = 0, e = arguments; a < e.length; a++) this[t[a]] = e[a]
                        },
                        send: function (t) {
                            var a = this;
                            a.data = t, a.jqXHR = $.ajax(a).done(function (t) {
                                a.responseText = t, a.readyState = 4, a.status = 200, $.isFunction(a.onload) && a.onload()
                            }).fail(function () {
                                a.readyState = 2, a.status = 404, a.onerror && a.onerror(), console.log("fail", arguments)
                            }).always(function () {
                                $.isFunction(a.onreadystatechange) && a.onreadystatechange()
                            })
                        },
                        getAllResponseHeaders: function () {
                            return this.getAllResponseHeaders()
                        },
                        getResponseHeader: function (t) {
                            return this.getResponseHeader(t)
                        },
                        abort: function () {
                            jqXHR && jqXHR.abort()
                        }
                    };
                    return a
                }, window.XHRwrap = function (t, a, e) {
                    return t.onload = a, t.onerror = e, t
                }
        }
    }, 100), mod_onready.push(function () {
        setTimeout(function () {
            var t = window.location ? window.location.hash : (window.location + "").replace(/[^#]+/, "");
            if (t) {
                var a, e = t.replace(/^#/, "").split("#"),
                    n = 0,
                    r = function (t) {
                        $("html,body").animate({
                            scrollTop: t.offset().top
                        }, 100)
                    };
                if (!(e.length < 2))
                    for (; n < e.length; n++) e[n] && ((a = $('a[name="' + e[n] + '"]')).size() ? r(a) : (a = $("#" + e[n])).size() && r(a), (a = $('[href="#' + e[n] + '"]')).size() && a.click(), (a = $(e[n])).size() && (r(a), a.click()))
            }
        }, 500)
    })
}(window, document);