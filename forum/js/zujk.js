(function (window, document, undefined) {;
    (function (window) {

        var
            c_jsEvent = 'jsEvent',
            c_isFixed = 'isFixed',
            c_preventDefault = 'preventDefault',
            c_stopPropagation = 'stopPropagation',
            c_isDefaultPrevented = 'isDefaultPrevented',
            c_isPropagationStopped = 'isPropagationStopped',
            c_addEventListener = 'addEventListener',
            c_attachEvent = 'attachEvent',
            c_removeEventListener = 'removeEventListener',
            c_detachEvent = 'detachEvent'

        , guid = 0;

        if (!Array.prototype['indexOf']) {
            Array.prototype['indexOf'] = function (el, index) {
                if (!index) {
                    index = 0;
                }
                for (var i = index; i < this.length; i++) {
                    if (this[i] == el) {
                        return i;
                    }
                }
                return -1;
            };
        }

        if (window[c_jsEvent]) {
            return;
        }

        function returnFalse() {
            return false;
        }

        function returnTrue() {
            return true;
        }

        function fixEvent(event) {
            event || window.event;
            if (event[c_isFixed]) {
                return event;
            }
            event[c_isFixed] = 1;
            event[c_isFixed + c_preventDefault] = event[c_preventDefault];
            event[c_isFixed + c_stopPropagation] = event[c_stopPropagation];
            event[c_isDefaultPrevented] = returnFalse;
            event[c_isPropagationStopped] = returnFalse;

            event[c_preventDefault] = function () {
                var t = this;
                t[c_isDefaultPrevented] = returnTrue;
                if (t[c_isFixed + c_preventDefault]) {
                    t[c_isFixed + c_preventDefault]();
                } else {
                    t.returnValue = false;
                }
            };
            event[c_stopPropagation] = function () {
                var t = this;
                t[c_isPropagationStopped] = returnTrue;
                if (t[c_isFixed + c_stopPropagation]) {
                    t[c_isFixed + c_stopPropagation]();
                } else {
                    t.cancelBubble = true;
                }
            };

            // Support: IE<9
            // Fix target property (#1925)
            if (!event.target) {
                event.target = event.srcElement || document;
            }

            // Support: Chrome 23+, Safari?
            // Target should not be a text node (#504, #13143)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }

            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            // event.metaKey = !!event.metaKey;
            return event;
        }

        var Event = window[c_jsEvent] = {
            add: function (elem, type, handler) {
                if (elem.setInterval && elem != window && !elem.frameElement) {
                    elem = window;
                }
                if (!handler.guid) {
                    handler.guid = ++guid;
                }
                if (!elem.events) {
                    elem.events = {};
                    elem.handle = function (event) {
                        fixEvent(event);
                        for (var g in elem.events[event.type]) {
                            if (elem.events[event.type][g].call(elem, event) === false) {
                                event[c_preventDefault]();
                                event[c_stopPropagation]();
                            }
                        }
                    };
                }

                if (!elem.events[type]) {
                    elem.events[type] = {};
                    if (elem[c_addEventListener]) {
                        elem[c_addEventListener](type, elem.handle, false);
                    } else if (elem[c_attachEvent]) {
                        elem[c_attachEvent]("on" + type, elem.handle);
                    } else {
                        elem["on" + type] = elem.handle;
                    }
                }
                elem.events[type][handler.guid] = handler;
                return Event;
            },
            remove: function (elem, type, handler) {
                var handlers = elem.events && elem.events[type],
                    any;
                if (handlers) {
                    delete handlers[handler.guid];
                    for (any in handlers) {
                        return Event;
                    }
                    if (elem[c_removeEventListener]) {
                        elem[c_removeEventListener](type, elem.handle, false);
                    } else if (elem[c_detachEvent]) {
                        elem[c_detachEvent]("on" + type, elem.handle);
                    } else {
                        elem["on" + type] = returnTrue;
                    }
                    delete elem.events[type];
                    for (any in elem.events) {
                        return Event;
                    }
                    try {
                        delete elem.handle;
                        delete elem.events;
                    } catch (e) {
                        elem.removeAttribute("handle");
                        elem.removeAttribute("events");
                    }
                }
                return Event;
            }
        };
    })(window);


    ;
    var
        querySelectorAll = function (q, el) {
            if (!el || !el.querySelectorAll) {
                el = document;
            }
            return el.querySelectorAll(q);
        },
        querySelector = function (q, el) {
            el = querySelectorAll(q, el);
            return (!el || !el.length) ? undefined : el[0];
        },
        addEvent = function (el, ev, c) {
            jsEvent.add(el, ev, c);
            return el;
        },
        removeEvent = function (el, ev, c) {
            jsEvent.remove(el, ev, c);
            return el;
        },
        toggleClass = function (el, c) {
            var
                cl = el.className,
                re = new RegExp('\\b' + c + '\\b', 'gi');
            if (!cl) {
                return;
            }
            if (re.test(cl)) {
                el.className = cl.replace(re, '');
            } else {
                el.className = cl + ' ' + c;
            }
            return el;
        };


    ;
    /*
     *	target: qrcode
     *	mdescr: show qrcode image on links
     */
    (function (window, document) {
        var
            showStyle = "position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-flex;display:-ms-flex:display:none;background:rgba(0,0,0,.5);-ms-flex-align:center;-webkit-align-items:center;align-items:center;z-index:65533",
            hideStyle = "display:none;",
            c_style = "style",
            c_clicktoclose = "Нажмите для закрытия",
            p0m0 = function (p, m) {
                return "padding:" + p + ";margin:" + m + ";";
            },
            c_baseId = "qrPopupWindow",
            getPopupObjects = function () {
                var
                    bg = querySelector("#" + c_baseId + "Background"),
                    content = querySelector("#" + c_baseId + "Content");;
                if (!bg) {
                    bg = document.createElement('div');
                    bg.id = c_baseId + "Background"
                    bg.setAttribute(c_style, hideStyle);
                    bg.onclick = function () {
                        this.style.display = "none"
                        return false;
                    };
                    bg.title = c_clicktoclose;
                    document.body.appendChild(bg);
                }
                if (!content) {
                    content = document.createElement('div');
                    content.id = c_baseId + "Content";
                    var border_radius = "border-radius:8px;",
                        box_shadow = "box-shadow:0 0 10px 0 #000;";
                    content.setAttribute(c_style, "width:auto;" + p0m0("8px", "0 auto") + "background:#FFF;z-index:65534;-webkit-" + border_radius + border_radius + "-webkit-" + box_shadow + box_shadow);
                    bg.appendChild(content);
                }
                return [bg, content];
            },
            showPopup = function () {
                getPopupObjects()[0].setAttribute(c_style, showStyle);
            },
            hidePopup = function () {
                getPopupObjects()[0].setAttribute(c_style, hideStyle);
            },
            imgHtml = function (src) {
                return '<img src="' + src + '" border="0" style="' + p0m0(0, 0) + '" align="middle">';
            },
            showQr = function (txt) {
                var o = getPopupObjects()[1];
                o.innerHTML = imgHtml("http://s.4pda.ru/forum/style_images/1/qr_code.gif");
                o.innerHTML = imgHtml("http://qrfree.kaywa.com/?l=1&s=8&d=" + encodeURIComponent(txt));
                showPopup();
            },
            jsParseQrForum = function () {
                var links = querySelectorAll(".borderwrap .postcolor a"),
                    i = 0,
                    l, href, img, proto;
                for (; i < links.length; i++) {
                    href = (l = links[i]).getAttribute("href");
                    if (!href || href == "" || href.substr(0, 1) == "#" || href.substr(0, 4) == "java") {
                        continue;
                    }
                    img = document.createElement("img");
                    img.alt = img.title = "QR";
                    img.setAttribute(c_style, "border:0;vertical-align:middle;" + p0m0(0, "0 3px") + "cursor:pointer");
                    img.src = "http://s.4pda.ru/forum/style_images/1/qr_code.gif";
                    proto = href.split(":")[0];
                    if (proto != "http" && proto != "https" && proto != "market" && proto != "magnet") {
                        var path = window.location.pathname;
                        if (href.substr(0, 1) == "/") {
                            path = "";
                        } else {
                            if (path.lastIndexOf("/") == -1) {
                                path = "/";
                            } else {
                                path = path.substr(0, path.lastIndexOf("/") + 1);
                            }
                        }
                        href = window.location.protocol + "//" + window.location.host + path + href;
                    }
                    img.H = href;
                    img.onclick = function () {
                        showQr(this.H);
                        return false;
                    };
                    l.parentNode.insertBefore(img, l);
                }
            };
        window["jsShowQr"] = showQr;
        window["jsParseQrForum"] = jsParseQrForum;
    })(window, document);


    ;

    (function (window, document) {
        c_post_block = "post-block", c_block_title = "block-title", c_open = "open", c_close = "close", c_box = "box", c_unbox = "unbox", c_quote = "quote", c_hidden = "hidden", hasClass = function (e, c) {
            return (e.className && ((' ' + e.className + ' ').indexOf(' ' + c + ' ') > -1));
        }, cl_enable = 1, b_touch = !1, fn_ev = function (ev) {
            if (ev.isDefaultPrevented()) {
                return;
            }
            var
                _t = ev.target,
                _p;
            // check for click in block-title
            while (_t && _t != document && !hasClass(_t, c_block_title)) {
                _t = _t.parentNode;
            }
            if (_t && _t != document && (_p = _t.parentNode)) {
                if (hasClass(_t, c_block_title) && hasClass(_p, c_post_block) && cl_enable) {
                    cl_enable = 0;
                    setTimeout(function () {
                        cl_enable = 1
                    }, 300);
                    if (hasClass(_p, c_open) || hasClass(_p, c_close)) {
                        toggleClass(toggleClass(_p, c_close), c_open);
                        return false;
                    }
                    if (hasClass(_p, c_unbox) || hasClass(_p, c_box)) {
                        toggleClass(toggleClass(_p, c_unbox), c_box);
                        return false;
                    }
                }
            }
        };
        addEvent(document, 'click', fn_ev);
        addEvent(document, 'touchstart', function (ev) {
            if (ev.isDefaultPrevented() || b_touch || ev.touches.length != 1) {
                b_touch = !1;
                return;
            }
            var
                _t = ev.target,
                _p;
            // check for click in block-title
            while (_t && _t != document && !hasClass(_t, c_block_title)) {
                _t = _t.parentNode;
            }
            if (_t && _t != document && (_p = _t.parentNode)) {
                if (hasClass(_t, c_block_title) && hasClass(_p, c_post_block) && cl_enable) {
                    b_touch = {
                        t: ev.touches[0],
                        e: ev.target
                    };
                    setTimeout(function () {
                        b_touch = !1
                    }, 300);
                }
            }
        });
        addEvent(document, 'touchend', function (ev) {
            if (ev.isDefaultPrevented() || !b_touch || (ev.changedTouches.length != 1 && ev.touches.length != 1) || ev.target != b_touch.e) {
                b_touch = !1;
                return;
            }
            var t = ev.changedTouches[0] || ev.touches[0],
                d = Math.sqrt((b_touch.t.screenY - b_touch.t.screenX) ^ 2) + ((t.screenY - t.screenX) ^ 2),
                r1 = (b_touch.t.radiusX + b_touch.t.radiusY) / 2,
                r2 = (t.radiusX + t.radiusY) / 2,
                el = ev.target;
            if (d > r1 + r2) {
                if (el.fireEvent) {
                    el.fireEvent('onclick');
                } else {
                    var evObj = document.createEvent('Events');
                    evObj.initEvent('click', true, false);
                    el.dispatchEvent(evObj);
                }
            }
        });
        window["initPostBlock"] = function () {
            var els, p, e, pc, i = 0;
            try {
                els = document.getElementsByName(location.hash.replace(/^#/, ''));
                for (i = 0; i < els.length; i++) {
                    e = [];
                    pc = 0;
                    if (els[i].tagName == "A") {
                        p = els[i].parentNode;
                        while (p && p != document.body) {
                            if ((pc = /^post-main-\d+$/.test(p.id))) {
                                break;
                            }
                            p = p.parentNode;
                            e.push(p);
                        }
                    }
                    if (!pc) {
                        continue;
                    }
                    while (e.length) {
                        p = e.pop();
                        if (hasClass(p, c_post_block) && hasClass(p, c_close)) {
                            toggleClass(toggleClass(p, c_close), c_open);
                        }
                    }
                }
            } catch (e) {}
            if (!(function () {
                    var
                        className = 'checkPseudoSupport',
                        css = '.' + className + '{position:fixed;left:-100px;top:-100px;display:block;width:auto;height:auto} .' + className + ':before{content:"";display:block;height:50px}',
                        body = document.body || document.getElementsByTagName('body')[0],
                        style = document.createElement('style'),
                        div = document.createElement('div'),
                        ret = false;
                    style.type = 'text/css';
                    div.className = className;
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }
                    body.appendChild(style);
                    body.appendChild(div);
                    ret = (div.offsetHeight > 40);
                    body.removeChild(div);
                    body.removeChild(style);
                    return ret;
                })()) {
                var needhtml, addevent, blockTitle = "BLOCK";
                els = querySelectorAll("." + c_post_block + ">." + c_block_title)
                for (i = 0; i < els.length; i++) {
                    addevent = 0;
                    p = (e = els[i]).parentNode;
                    needhtml = !(e.innerHTML + "").replace(/(^\s+)|(\s+$)/g, "");
                    if (hasClass(p, c_close) || hasClass(p, c_open)) {
                        blockTitle = "SPOILER";
                        addevent = 1;
                    } else if (hasClass(p, c_box) || hasClass(p, c_unbox)) {
                        blockTitle = "CODE";
                        addevent = 1;
                    } else if (hasClass(p, c_quote)) {
                        blockTitle = "QUOTE";
                    } else if (hasClass(p, c_hidden)) {
                        blockTitle = "HIDE";
                    }
                    needhtml && (e.innerHTML = blockTitle);
                    addevent && addEvent(els[i], 'click', fn_ev);
                }
            }
        };
    })(window, document);


    ;
    (function (window, xhr) {
        function navWnd(u) {
            window.location = u;
        };
        setTimeout(
            function (d, c, u, xhr) {
                if ("CONFIG" in window && "tz" in window["CONFIG"] && "baseurl" in window["CONFIG"]) {
                    d = new Date();
                    c = -parseInt(d.getTimezoneOffset() / 30);
                    u = window["CONFIG"]["baseurl"] + "act=xmlout&do=tz-autoset&tz=" + (c * 30);
                    if (c != parseFloat(window["CONFIG"]["tz"]) * 2) {
                        if ((xhr = (function (xhr) {
                                try {
                                    return new XMLHttpRequest()
                                } catch (e) {}
                                try {
                                    return new ActiveXObject("Microsoft.XMLHTTP");
                                } catch (e) {}
                                try {
                                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                                } catch (e) {}
                                try {
                                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                                } catch (e) {}
                                return 0
                            })())) {
                            xhr.onreadystatechange = function () {
                                this.readyState == 4 && (this.responseText != "success" && navWnd(u))
                            };
                            xhr.open("GET", u + "&xml=1&_=" + d.getTime());
                            xhr.send(null);
                        } else {
                            navWnd(u);
                        }
                    }
                }
            }, 1000
        );
    })(window);


    ;
    /*
     *	target: z_forum_helpers
     *	mdescr: show qrcode image on links
     *	depend: lib4pda/jsEvent, forum/querySelectorAll, lib4pda/qrcode, lib4pda/post-block, lib4pda/tz-autoset
     *	forum/Event
     */
    // rewrite ipb_xmlhttprequest
    function ajax_request() {
        if (typeof window["XMLHttpRequest"] === "undefined") {
            window["XMLHttpRequest"] = function () {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                } catch (e) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                } catch (e) {}
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
                throw new Error("This browser does not support XMLHttpRequest.");
            };
        }
        var xhr = new window["XMLHttpRequest"](),
            done_fn = [],
            fail_fn = [],
            complete_fn = [],
            response = "",
            _aborted = 0,
            _state = 0,
            _XHRcleanTransport = function () {
                var fn = new window.Function;
                "onreadystatechange" in xhr && (xhr.onreadystatechange = fn);
                "onload" in xhr && (xhr.onload = fn);
                "onerror" in xhr && (xhr.ontimeout = xhr.onload = fn);
            },
            _XHRonUnload = function () {
                if (_state != 4) {
                    _XHRcleanTransport();
                    xhr.abort();
                }
            },
            call_fns = function (arr, i) {
                for (i = 0; i < arr.length; i++) {
                    arr[i](xhr);
                }
            };
        xhr._abort = xhr.abort;
        xhr._open = xhr.open;
        xhr.abort = function () {
            _aborted = 1;
            xhr._abort();
        };
        xhr.open = function (m, u, a, l, p) {
            xhr._open(m, u, typeof a == "undefined" ? true : a, l ? l : null, p ? p : null);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        };
        xhr.process = function (u, m, d) {
            xhr.open(m ? m : "GET", u);
            xhr.send(d == "undefined" ? null : d);
        };
        xhr.show_loading = function () {
            var obj = querySelector('#loading-layer');
            try {
                if (obj) {
                    obj.style.display = "block";
                    obj.style.position = "absolute";
                    obj.style.left = parseInt((window.innerWidth - obj.offsetWidth) / 2 + window.scrollX) + "px";
                    obj.style.top = parseInt((window.innerHeight - obj.offsetHeight) / 2 + window.scrollY) + "px";
                }
            } catch (_) {}
        };
        xhr.hide_loading = function () {
                try {
                    querySelector('#loading-layer').style.display = "none";
                } catch (_) {}
            }
            // BUGFIX: IE - memory leak on page unload (inter-page leak)
        if (!!window.document.namespaces) {
            window.attachEvent("onunload", _XHRonUnload);
        }
        if ("onreadystatechange" in xhr) {
            xhr.onreadystatechange = function () {
                // BUGFIX: Firefox fires unnecessary DONE when aborting
                if (_aborted) {
                    _state = 0;
                    return;
                }
                // BUGFIX: Some browsers (Internet Explorer, Gecko) fire OPEN readystate twice
                if (_state != xhr.readyState) {
                    if (xhr.readyState == 4) {
                        _XHRcleanTransport();
                        if (!!window.document.namespaces) {
                            window.detachEvent("onunload", _XHRonUnload);
                        }
                        if (xhr.status == 200) {
                            call_fns(done_fn);
                        } else {
                            call_fns(fail_fn);
                        }
                        call_fns(complete_fn);
                    }
                }
                _state = xhr.readyState;
            };
        }
        if ("onload" in xhr) {
            xhr.onload = function () {
                xhr.status = 200;
                xhr.state = 4;
                call_fns(done_fn);
                call_fns(complete_fn);
                if (!!window.document.namespaces) {
                    window.detachEvent("onunload", _XHRonUnload);
                }
            };
        }
        if ("onerror" in xhr) {
            xhr.onerror = xhr.ontimeout = function () {
                xhr.status = 0;
                xhr.state = 4;
                call_fns(fail_fn);
                call_fns(complete_fn);
                if (!!window.document.namespaces) {
                    window.detachEvent("onunload", _XHRonUnload);
                }
            };
        }
        xhr.done = function (fn) {
            if (typeof fn === "function") {
                done_fn.push(fn);
                if (xhr.state == 4 && xhr.status == 200) {
                    fn(xhr);
                }
            }
            return xhr;
        };
        xhr.fail = function (fn) {
            if (typeof fn === "function") {
                fail_fn.push(fn);
                if (xhr.state == 4 && xhr.status != 200) {
                    fn(xhr);
                }
            }
            return xhr;
        };
        xhr.complete = function (fn) {
            if (typeof fn === "function") {
                complete_fn.push(fn);
                if (xhr.state == 4) {
                    fn(xhr);
                }
            }
            return xhr;
        };
        return xhr;
    }
    (function () {
        var $baseurl_forum_st = "http://s.4pda.ru/forum/",
            $baseurl_forum_index = "?";

        function getData(object, data_attr) {
            return object.getAttribute("data-" + data_attr);
        }

        function setData(object, data_attr, data) {
            return object.setAttribute("data-" + data_attr, data);
        }

        function remClass(now_class, del) {
            now_class = (now_class + "").split(" ");
            del = (del + "").split(" ")
            var ret = [];
            for (var i = 0; i < now_class.length; i++) {
                ret.push((del.indexOf(now_class[i]) > -1 ? '' : now_class[i]));
            }
            return ret.join(" ").replace(/\s\s+/gm, " ");
        }

        function getPostContainer(post_id) {
            var obj = querySelector('.borderwrap[data-post="' + post_id + '"]');
            if (!obj) {
                if (!(obj = querySelector('.borderwrap .ipbtable[data-post="' + post_id + '"]'))) {
                    obj = querySelector('#ipbwrapper [data-post="' + post_id + '"]')
                }
            }
            return obj;
        }

        function doInitTools() {
            $baseurl_forum_index = ipb_var_base_url;
            var forum_index = $baseurl_forum_index + "act=zmod&auth_key=" + ipb_md5_check + "&",
                mod_form = document.getElementById("se-mod-frm"),
                pin_img = '<img src="' + $baseurl_forum_st + 'style_images/1/p_pin.gif" alt="Закрепить пост" />',
                unpin_img = '<img src="' + $baseurl_forum_st + 'style_images/1/p_unpin.gif" alt="Открепить пост" />',
                errorOnServer = function () {
                    alert("Ошибка на сервере")
                };
            if (mod_form) {
                mod_form.setAttribute("method", "POST");
                mod_form.setAttribute("action", forum_index + "&st=" + ipb_var_st);
            }
            window["--seMODpin"] = function (_this, ev, post_id) {
                ev = ev || window.event;
                ev.preventDefault && ev.preventDefault();
                ev.returnValue = false;
                var pin_data = getData(_this, "pin");
                if (!confirm("Вы действительно хотите " + (pin_data == "pinpost" ? "поднять" : "опустить") + " данный пост?")) return;
                // ajax_request - from ips_xmlhttprequest
                var req = new ajax_request();
                req.show_loading();
                req.done(function (xhr) {
                    if (xhr.responseText != "ok") {
                        alert("Ошибка");
                        return;
                    }
                    if (pin_data == "pinpost") {
                        _this.innerHTML = unpin_img;
                        setData(_this, "pin", "unpinpost");
                    } else {
                        _this.innerHTML = pin_img;
                        setData(_this, "pin", "pinpost");
                    }
                    var pincontainer = querySelector('#topic-pin-content'),
                        post = getPostContainer(post_id),
                        pin, pinned = 0;
                    // try create pincontainer
                    if (!pincontainer) {
                        if (pin = querySelector("#ipbwrapper > .borderwrap > .maintitle:first-child > table")) {
                            pin = pin.parentNode;
                            pincontainer = document.createElement('div');
                            pincontainer.id = "topic-pin-content";
                            pin.parentNode.insertBefore(pincontainer, pin.nextSibling);
                        }
                    }
                    if (post && pincontainer && pin_data == "pinpost") {
                        try {
                            pinned = getData(querySelector("[data-post]:first-child", pincontainer), "post");
                        } catch (_) {}
                        pin = getPostContainer(pinned);
                        if (pin) {
                            post.parentNode.insertBefore(pin, post.nextSibling);
                            try {
                                pin = querySelector('.pinlink[data-pin="unpinpost"]', pin);
                                setData(pin, "pin", "pinpost");
                                pin.innerHTML = pin_img;
                            } catch (_) {}
                        }
                        pincontainer.appendChild(post);
                    }
                }).fail(errorOnServer).complete(req.hide_loading);
                req.process(forum_index + "p=" + post_id + "&code=" + getData(_this, "pin"));
            };
            window["--seMODhide"] = function (_this, ev, post_id) {
                ev = ev || window.event;
                ev.preventDefault && ev.preventDefault();
                ev.returnValue = false;
                // ajax_request - from ips_xmlhttprequest
                var approve_data = getData(_this, "approve"),
                    req = new ajax_request();
                req.show_loading();
                req.done(function (xhr) {
                    if (xhr.responseText != "ok") {
                        alert("Ошибка");
                        return;
                    }
                    approve_data = (approve_data == "approve" ? "unapprove" : "approve");
                    setData(_this, "approve", approve_data);
                    var post_obj = getPostContainer(post_id);
                    if (post_obj) {
                        post_obj.className = (post_obj.className + "").replace(/(^|\s+)hidepin(\s+|$)/g, " ").replace(/^\s+|\s+$/gm, "");
                        if (approve_data == "approve") {
                            post_obj.className = post_obj.className + " hidepin";
                            _this.innerHTML = '<img src="' + $baseurl_forum_st + 'style_images/1/p_show.gif" atl="Опубликовать" title="Опубликовать пост"/>';
                        } else _this.innerHTML = '<img src="' + $baseurl_forum_st + 'style_images/1/p_show.gif" atl="Скрыть" title="Скрыть пост"/>';
                    }
                    if ((post_obj = document.getElementById("post-main-" + post_id))) {
                        var cls = "post" + (/(^|\s+)post2/.test(post_obj.className + "") ? 2 : 1);
                        post_obj.className = remClass(post_obj.className, cls + "shaded2 " + cls) + cls + (approve_data == "approve" ? "shaded2" : "");
                    }
                }).fail(errorOnServer).complete(req.hide_loading);
                req.process(forum_index + "code=postchoice&selectedpids=" + post_id + "&tact=" + approve_data);
            }
            window["--seMODdel"] = function (_this, ev, post_id) {
                ev = ev || window.event;
                ev.preventDefault && ev.preventDefault();
                ev.returnValue = false;
                if (!confirm("Вы действительно хотите удалить это сообщение?")) return;
                // ajax_request - from ips_xmlhttprequest
                var req = new ajax_request();
                req.show_loading();
                req.done(function (xhr) {
                    if (xhr.responseText != "ok") {
                        alert("Ошибка");
                    } else {
                        var obj = getPostContainer(post_id);
                        if (obj) {
                            obj.parentNode.removeChild(obj);
                        }
                    }
                }).fail(errorOnServer).complete(req.hide_loading);
                req.process(forum_index + "code=postchoice&tact=delete&selectedpids=" + post_id);
            }
        }
        if (!window["ipb"]) {
            window["ipb"] = {};
        }

        function frmChkToggle($this, ev) {
            if (!$this) {
                ev = ev || window.event;
                ev.preventDefault && ev.preventDefault();
                ev.returnValue = false;
                return;
            }
            var form = querySelector(getData($this, "form")),
                field = querySelector('[name="' + getData($this, "field") + '"]', form),
                val = $this.value + "",
                check = $this.checked ? 1 : 0,
                lskey = getData($this, "lskey"),
                wvar = getData($this, "var");
            if (!form || !field) {
                ev = ev || window.event;
                ev.preventDefault && ev.preventDefault();
                ev.returnValue = false;
                return;
            }
            lskey = (lskey ? lskey + "" : false);
            wvar = (wvar && window[wvar] ? wvar : false)
            var oldVal = (field.value + "").split(","),
                newVal = [],
                i;
            for (var i = 0; i < oldVal.length; i++) {
                if (oldVal[i] && oldVal[i] != val) {
                    newVal.push(oldVal[i]);
                }
            }
            if (check) {
                newVal.push(val);
            }
            // old ipb code {{{
            try {
                if (typeof lang_gobutton != "undefined" && (check = querySelector('[name="gobutton"]', form))) check.value = lang_gobutton + ' (' + newVal.length + ')';
                wvar && lskey && localStorage.setItem && localStorage.setItem(lskey + "-" + window[wvar], newVal.join(","));
            } catch (_) {}
            // }}} old ipb code
            field.value = newVal.join(",");
        };
        window["ipb"]["frmChkToggle"] = frmChkToggle;

        function tryInitTopicSelectedPids() {
            var intervalRwrCD = 0,
                cnt = 10,
                arr = [],
                i,
                tryRewriteCheckdelete = function () {
                    if (typeof checkdelete == "function" || cnt > 0) {
                        intervalRwrCD && clearInterval(intervalRwrCD);
                    }
                    cnt--;
                    if (typeof checkdelete != "function") {
                        return;
                    }
                    var oldCheckdelete = checkdelete;
                    checkdelete = function () {
                        localStorage.removeItem("modpids-" + window["ipb_input_t"]);
                        localStorage.removeItem("modtids-" + window["ipb_input_f"]);
                        oldCheckdelete.apply(this, arguments);
                    };
                },
                fnLoadChecked = function (key, id) {
                    var tmpobj,
                        vals = ((localStorage.getItem("mod" + key + "-" + parseInt(id)) || "") + "").split(","),
                        arr = [],
                        c = false;
                    for (i = 0; i < vals.length; i++) {
                        if (vals[i]) {
                            arr.push(vals[i]);
                            if (tmpobj = querySelector('input[value="' + vals[i] + '"][data-field="selected' + key + '"]')) {
                                tmpobj.checked = true;
                                c = true;
                            }
                        }
                    }
                    return arr;
                },
                fnDelUnusedLS = function (key, id) {
                    if (parseInt(id)) {
                        return;
                    }
                    var arr = [],
                        i = 0,
                        k = "mod" + key + "-",
                        kl = k.length;
                    for (; i < localStorage.length; i++) {
                        if ((localStorage.key(i) + "").substr(0, kl) == k) {
                            arr.push(localStorage.key(i));
                        }
                    }
                    for (i = 0; i < arr.length; i++) {
                        localStorage.removeItem(arr[i]);
                    }
                },
                querySelectorField = function (codeValue, fieldName) {
                    return querySelector('form[name="modform"] [name="CODE"][value="' + codeValue + '"]~[name="' + fieldName + '"]')
                };
            try {
                var tfield = querySelectorField('postchoice', 'selectedpids'),
                    ffield = querySelectorField('topicchoice', 'selectedtids'),
                    tmpobj;
                if (!localStorage || !localStorage.setItem) {
                    return;
                }
                fnDelUnusedLS('pids', window["ipb_input_t"]);
                fnDelUnusedLS('tids', window["ipb_input_f"]);
                arr = fnLoadChecked('pids', window["ipb_input_t"]);
                if (tfield) {
                    tfield.value = arr.join(",");
                    querySelector('form[name="modform"] [name="gobutton"]').value = lang_gobutton + ' (' + arr.length + ')'
                }
                arr = fnLoadChecked('tids', window["ipb_input_f"]);
                if (ffield) {
                    ffield.value = arr.join(",");
                    querySelector('form[name="modform"] [name="gobutton"]').value = lang_gobutton + ' (' + arr.length + ')';
                }
                intervalRwrCD = setInterval(tryRewriteCheckdelete, 500);
            } catch (_) {}
        }
        // ready status
        var intervalId = 0;

        function checkReady() {
            if (!/int|com/.test(document.readyState)) {
                return;
            }
            intervalId && clearInterval(intervalId);
            doInitTools();
            tryInitTopicSelectedPids();
        }
        intervalId = setInterval(checkReady, 300);
    })();;

})(window, document)