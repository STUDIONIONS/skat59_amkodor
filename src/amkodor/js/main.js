var nAgt = navigator.userAgent,
	getXmlHttp = function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP")
		} catch (a) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP")
			} catch (b) {}
		}
		return "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : !1
	};
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(a) {
	if (!a.browser) {
		a.browser = {}, a.browser.mozilla = !1, a.browser.webkit = !1, a.browser.opera = !1, a.browser.safari = !1, a.browser.chrome = !1, a.browser.msie = !1, a.browser.ua = nAgt, a.browser.name = navigator.appName, a.browser.fullVersion = "" + parseFloat(navigator.appVersion), a.browser.majorVersion = parseInt(navigator.appVersion, 10);
		var b, c, d;
		if (-1 != (c = nAgt.indexOf("Opera"))) a.browser.opera = !0, a.browser.name = "Opera", a.browser.fullVersion = nAgt.substring(c + 6), -1 != (c = nAgt.indexOf("Version")) && (a.browser.fullVersion = nAgt.substring(c + 8));
		else if (-1 != (c = nAgt.indexOf("OPR"))) a.browser.opera = !0, a.browser.name = "Opera", a.browser.fullVersion = nAgt.substring(c + 4);
		else if (-1 != (c = nAgt.indexOf("MSIE"))) a.browser.msie = !0, a.browser.name = "Microsoft Internet Explorer", a.browser.fullVersion = nAgt.substring(c + 5);
		else if (-1 != nAgt.indexOf("Trident")) {
			a.browser.msie = !0, a.browser.name = "Microsoft Internet Explorer";
			var e = nAgt.indexOf("rv:") + 3,
				f = e + 4;
			a.browser.fullVersion = nAgt.substring(e, f)
		} else -1 != (c = nAgt.indexOf("Chrome")) ? (a.browser.webkit = !0, a.browser.chrome = !0, a.browser.name = "Chrome", a.browser.fullVersion = nAgt.substring(c + 7)) : -1 != (c = nAgt.indexOf("Safari")) ? (a.browser.webkit = !0, a.browser.safari = !0, a.browser.name = "Safari", a.browser.fullVersion = nAgt.substring(c + 7), -1 != (c = nAgt.indexOf("Version")) && (a.browser.fullVersion = nAgt.substring(c + 8))) : -1 != (c = nAgt.indexOf("AppleWebkit")) ? (a.browser.webkit = !0, a.browser.name = "Safari", a.browser.fullVersion = nAgt.substring(c + 7), -1 != (c = nAgt.indexOf("Version")) && (a.browser.fullVersion = nAgt.substring(c + 8))) : -1 != (c = nAgt.indexOf("Firefox")) ? (a.browser.mozilla = !0, a.browser.name = "Firefox", a.browser.fullVersion = nAgt.substring(c + 8)) : (b = nAgt.lastIndexOf(" ") + 1) < (c = nAgt.lastIndexOf("/")) && (a.browser.name = nAgt.substring(b, c), a.browser.fullVersion = nAgt.substring(c + 1), a.browser.name.toLowerCase() == a.browser.name.toUpperCase() && (a.browser.name = navigator.appName)); - 1 != (d = a.browser.fullVersion.indexOf(";")) && (a.browser.fullVersion = a.browser.fullVersion.substring(0, d)), -1 != (d = a.browser.fullVersion.indexOf(" ")) && (a.browser.fullVersion = a.browser.fullVersion.substring(0, d)), a.browser.majorVersion = parseInt("" + a.browser.fullVersion, 10), isNaN(a.browser.majorVersion) && (a.browser.fullVersion = "" + parseFloat(navigator.appVersion), a.browser.majorVersion = parseInt(navigator.appVersion, 10)), a.browser.version = a.browser.majorVersion
	}
	a.browser.android = /Android/i.test(nAgt), a.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), a.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), a.browser.operaMobile = /Opera Mini/i.test(nAgt), a.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), a.browser.kindle = /Kindle|Silk/i.test(nAgt), a.browser.mobile = a.browser.android || a.browser.blackberry || a.browser.ios || a.browser.windowsMobile || a.browser.operaMobile || a.browser.kindle, a.isMobile = a.browser.mobile, a.isTablet = a.browser.mobile && a(window).width() > 765, a.isAndroidDefault = a.browser.android && !/chrome/i.test(nAgt)
}), String.prototype.trim || ! function() {
	var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	String.prototype.trim = function() {
		return this.replace(a, "")
	}
}(), $(function() {
	var a = function(a, b, c) {
		var d = $("#modal3D"),
			e = $(".modal-title", d),
			f = $(".modal-body", d).addClass("alert");
		return d.unbind("hide.bs.modal"), e.text(b), f.removeClass("alert-danger").removeClass("alert-warning").removeClass("alert-info").removeClass("alert-success"), f.addClass("alert-" + a).empty().append($("<div />").html(c)), d.modal({
			backdrop: !1,
			show: !0
		}), d
	};
	$("#carousel").carousel(), $(".user_name").hide(), $("input[placeholder], textarea[placeholder]", $(".block__form")).placeholder(), $("input[placeholder], textarea[placeholder]", $(".block__form")).each(function() {
		var a = $(this).attr("placeholder");
		null != a || void 0 != a ? $(this).attr("data-placeholder-fancy", a) : $(this).attr("data-placeholder-fancy", "")
	}).focus(function() {
		$(this).attr("placeholder", "")
	}).blur(function() {
		$(this).attr("placeholder", $(this).attr("data-placeholder-fancy"))
	}), $("input[type=tel]", $(".block__form")).mask("+7(999)999-99-99"), $(".dropdown__wrapper__list li").hyphenate($("html").attr("lang")), $(".block__svoyamkodor__price p").hyphenate($("html").attr("lang"));
	var b;
	$.fancybox.defaults.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin skat-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>';
	var c = function(a) {
			a.preventDefault();
			var c = $(this),
				e = c.attr("data-api"),
				f = $("<div></div>").append('<div class="form"><h2 class="text-center form__api">' + e + '</h2><h4 class="text-center form__title">Заполните информацию о себе<br />и наши менеджеры свяжутся с Вами в самое ближайшее время</h4><div class=""><input type="text" name="user_name" id="user_name" /></div><div class="input-group"><span class="input-group-addon glyphicon glyphicon-user"></span><input type="text" class="form-control" placeholder="Ваше Имя" id="f1" name="f1" /><span class="glyphicon form-control-feedback"></span></div><div class="input-group"><span class="input-group-addon glyphicon glyphicon-envelope"></span><input type="email" class="form-control" placeholder="Ваш Email" id="f2" name="f2" /><span class="glyphicon form-control-feedback"></span></div><div class="input-group"><span class="input-group-addon glyphicon glyphicon-phone"></span><input type="tel" class="form-control" placeholder="Ваш Телефон" id="f3" name="f3" /><span class="glyphicon form-control-feedback"></span></div><div class="input-group"><span class="input-group-addon glyphicon glyphicon-align-justify"></span><textarea class="form-control" placeholder="Ваше Собщение" id="f4" name="f4" /></textarea></div><div class="form__button input-group text-center"><button class="btn btn-primary" id="f5" name="f5"><span class="glyphicon glyphicon-send"></span>&nbsp;&nbsp;&nbsp;ОТПРАВИТЬ</button></div><input type="hidden" value="' + e + '"  id="f6" name="f6" /></div>');
			$.fancybox(f, {
				height: "90%",
				width: "auto",
				minWidth: "220px",
				maxWidth: 400,
				autoWidth: !0,
				fitToView: !0,
				autoCenter: !0,
				scrolling: "auto",
				padding: [20, 20, 20, 20],
				beforeClose: function() {
					$(this.inner).remove()
				},
				beforeShow: function() {
					var a = $(this.inner);
					$("#user_name", a).hide()
				},
				afterShow: function() {
					var a = this,
						c = a.inner,
						e = $("#f5", c);
					$("input[placeholder], textarea[placeholder]", $(c)).placeholder(), $("input[placeholder], textarea[placeholder]", $(c)).each(function() {
						var a = $(this).attr("placeholder");
						null != a || void 0 != a ? $(this).attr("data-placeholder-fancy", a) : $(this).attr("data-placeholder-fancy", "")
					}).focus(function() {
						$(this).attr("placeholder", "")
					}).blur(function() {
						$(this).attr("placeholder", $(this).attr("data-placeholder-fancy"))
					}), $("#f3", c).mask("+7(999)999-99-99"), e.bind("click", function(e) {
						e.preventDefault();
						var f = $("#f1", c),
							g = $("#f2", c),
							h = $("#f3", c),
							i = $("#f4", c),
							j = $("#f6", c),
							k = $("#user_name", c),
							l = /^[A-zА-яЁё ]{2,40}$/,
							m = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
							n = /^[a-z0-9_\.-]+@[a-z0-9_\.-]+\.[a-z\.]{2,6}$/,
							o = l.test(f.val().trim()),
							p = n.test(g.val().trim()),
							q = m.test(h.val().trim()),
							r = {
								api: j.val().trim(),
								xhr: "ajax",
								user_name: k.val(),
								name: f.val().trim(),
								phone: h.val().trim(),
								email: g.val().trim(),
								message: i.val().trim()
							};
						return o ? (f.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", f.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (f.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", f.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), f.val("")), p ? (g.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", g.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (g.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", g.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), g.val("")), q ? (h.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", h.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (h.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", h.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), h.val("")), clearTimeout(b), b = setTimeout(function() {
							$(".form-control-feedback", c).removeClass("glyphicon-remove"), $(".input-group", c).removeClass("has-error")
						}, 3500), o && q && p && d.call(a, r), !1
					})
				}
			});
			return !1
		},
		d = function(a) {
			var b = this,
				c = b.beforeClose,
				d = $("<div />", {
					"class": "send__overlay"
				}).append($("<div />")),
				e = $(".fancybox-overlay"),
				f = function(a) {
					d.remove(), b.beforeClose = c, $(b.inner).html(""), b.minWidth = "220px", b.maxWidth = "400px", b.height = "auto", a ? $tpl = '<h4 class="text-center"><strong class="color__c1">Сообщение отправлено!</strong></h4><p class="text-center">Спасибо!<br />Ваше сообщение отправлено.</p><p class="text-center">Наши менеджеры свяжутся с Вами в самое ближайшее время.</p><div class="form__button input-group text-center"><button class="btn btn-primary" id="form__closeBtn"><span class="glyphicon glyphicon-remove"></span>&nbsp;&nbsp;&nbsp;ЗАКРЫТЬ</button></div>' : $tpl = '<h4 class="text-center"><strong class="color__red">Ошибка!</strong></h4><p class="text-center">Во время отравки вашего сообщения произошла ошибка.</p><p class="text-center">Попробуйте ещё раз.</p><div class="form__button input-group text-center"><button class="btn btn-primary" id="form__closeBtn"><span class="glyphicon glyphicon-remove"></span>&nbsp;&nbsp;&nbsp;ЗАКРЫТЬ</button></div>', $(b.inner).append($tpl), $("#form__closeBtn", $(b.inner)).click(function() {
						$.fancybox.close(!0)
					}), $.fancybox.update()
				},
				g = function(a, b) {
					f(Number(a.error) ? !1 : !0)
				},
				h = function(a, b) {
					f(!1)
				};
			return e.append(d), b.beforeClose = function() {
				return !1
			}, $.ajax({
				data: a,
				type: "POST",
				url: "",
				success: g,
				error: h
			}), !1
		};
	$(".button-zvonok").bind("click", c);
	var e = $("form#form_site");
	$(".overlay_site");
	e.submit(function(c) {
		var d, f = $(".f1", e),
			g = $(".f2", e),
			h = $(".f3", e),
			i = $(".f4", e),
			j = $(".api", e),
			k = $(".xhr", e);
		j.val("Заказ звонка с формы обратной связи."), k.val("ajax"), f.val(f.val().trim()), g.val(g.val().trim()), h.val(h.val().trim()), i.val(i.val().trim());
		var l = /^[A-zА-яЁё ]{2,40}$/,
			m = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
			n = /^[a-z0-9_\.-]+@[a-z0-9_\.-]+\.[a-z\.]{2,6}$/,
			o = l.test(f.val().trim()),
			p = n.test(g.val().trim()),
			q = m.test(h.val().trim());
		if (o ? (f.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", f.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (f.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", f.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), f.val("")), p ? (g.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", g.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (g.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", g.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), g.val("")), q ? (h.parent().removeClass("has-error").addClass("has-success"), $(".form-control-feedback", h.parent()).removeClass("glyphicon-remove").addClass("glyphicon-ok")) : (h.parent().removeClass("has-success").addClass("has-error"), $(".form-control-feedback", h.parent()).removeClass("glyphicon-ok").addClass("glyphicon-remove"), h.val("")), clearTimeout(b), b = setTimeout(function() {
				$(".form-control-feedback", e).removeClass("glyphicon-remove"), $(".input-group", e).removeClass("has-error")
			}, 3500), !(o && p && q)) return c.preventDefault(), !1;
		if ("undefined" != typeof FormData) {
			c.preventDefault(), $("body").addClass("send-form-site");
			var r = e.get(0),
				s = new FormData(r),
				t = getXmlHttp();
			if (t) return t.open(r.method, r.action), t.onreadystatechange = function() {
				if (4 == t.readyState) {
					if (200 == t.status) {
						var b = $.parseJSON(t.responseText);
						d = 1 == b.error ? a("danger", "ОШИБКА!", "Не удалось отправить сообщение.<br />Попробуйте ещё раз.") : a("success", "Поздравляем!", "Сообщение успешно отправлено!<br />Наш менеджер обязательно свяжется с Вами."), r.reset(), d.bind("hide.bs.modal", function() {
							d.unbind("hide.bs.modal")
						})
					} else d = a("danger", "ОШИБКА!", "Не удалось отправить сообщение.<br />Попробуйте ещё раз."), r.reset();
					$("body").removeClass("send-form-site"), $(".input-group", e).removeClass("has-error").removeClass("has-success"), $(".form-control-feedback", e).removeClass("glyphicon-remove").removeClass("glyphicon-ok")
				} else(3 == t.readyState || 1 == t.readyState) && $("body").addClass("send-form-site")
			}, t.upload.onprogress = function(a) {
				a.loaded / a.total * 100
			}, t.send(s), !1;
			$("body").addClass("send-form-site")
		} else $("body").addClass("send-form-site")
	}), $(".dropdown", $(".block__svoyamkodor__wrapper__items")).hover(function(a) {
		var b = $(this);
		$(".dropdown").removeClass("open"), $(".dropdown-toggle").attr("aria-expanded", "false"), b.addClass("open"), $(".dropdown-toggle", b).attr("aria-expanded", "true")
	}, function(a) {
		$(".dropdown").removeClass("open"), $(".dropdown-toggle").attr("aria-expanded", "false")
	}), $(".studionions").removeAttr("title").popover({
		trigger: "hover",
		title: " "
	})
});
var mapYandexInit = function() {
	ymaps.ready(function() {
		var a = new ymaps.Map("map_skat", {
			center: [58.011878, 56.204041],
			zoom: 17,
			controls: ["typeSelector", "zoomControl", "fullscreenControl"]
		});
		a.behaviors.disable("scrollZoom")
	})
};