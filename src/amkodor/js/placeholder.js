(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(
function(a) {
	function b(b) {
		var c = {},
			d = /^jQuery\d+$/;
		return a.each(b.attributes, function(a, b) {
			b.specified && !d.test(b.name) && (c[b.name] = b.value)
		}), c
	}

	function c(b, c) {
		var d = this,
			f = a(d);
		if (d.value === f.attr("placeholder") && f.hasClass(m.customClass))
			if (d.value = "", f.removeClass(m.customClass), f.data("placeholder-password")) {
				if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c, c;
				f.focus()
			} else d == e() && d.select()
	}

	function d(d) {
		var e, f = this,
			g = a(f),
			h = f.id;
		if (d && "blur" === d.type) {
			if (g.hasClass(m.customClass)) return;
			if ("password" === f.type && (e = g.prevAll('input[type="text"]:first'), e.length > 0 && e.is(":visible"))) return
		}
		if ("" === f.value) {
			if ("password" === f.type) {
				if (!g.data("placeholder-textinput")) {
					try {
						e = g.clone().prop({
							type: "text"
						})
					} catch (i) {
						e = a("<input>").attr(a.extend(b(this), {
							type: "text"
						}))
					}
					e.removeAttr("name").data({
						"placeholder-enabled": !0,
						"placeholder-password": g,
						"placeholder-id": h
					}).bind("focus.placeholder", c), g.data({
						"placeholder-textinput": e,
						"placeholder-id": h
					}).before(e)
				}
				f.value = "", g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
			} else {
				var j = g.data("placeholder-password");
				j && (j[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
			}
			g.addClass(m.customClass), g[0].value = g.attr("placeholder")
		} else g.removeClass(m.customClass)
	}

	function e() {
		try {
			return document.activeElement
		} catch (a) {}
	}
	var f, g, h = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
		i = "placeholder" in document.createElement("input") && !h,
		j = "placeholder" in document.createElement("textarea") && !h,
		k = a.valHooks,
		l = a.propHooks,
		m = {};
	i && j ? (g = a.fn.placeholder = function() {
		return this
	}, g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function(b) {
		var e = {
			customClass: "placeholder"
		};
		return m = a.extend({}, e, b), this.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
			"focus.placeholder": c,
			"blur.placeholder": d
		}).data("placeholder-enabled", !0).trigger("blur.placeholder")
	}, g.input = i, g.textarea = j, f = {
		get: function(b) {
			var c = a(b),
				d = c.data("placeholder-password");
			return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
		},
		set: function(b, f) {
			var g, h, i = a(b);
			return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)), i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(m.customClass) && c.call(b), b.value = f), i) : (b.value = f, i)
		}
	}, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function() {
		a(document).delegate("form", "submit.placeholder", function() {
			var b = a("." + m.customClass, this).each(function() {
				c.call(this, !0, "")
			});
			setTimeout(function() {
				b.each(d)
			}, 10)
		})
	}), a(window).bind("beforeunload.placeholder", function() {
		a("." + m.customClass).each(function() {
			this.value = ""
		})
	}))
}));