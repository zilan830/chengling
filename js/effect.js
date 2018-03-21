//$("body").append($(window).width());

var speed = 300, mobile_width = 450;
$(".header .nav_mobile").click(function(){
	$(".header .nav, .header .search, .manage-topbar").toggle();
});

if($(window).width() > mobile_width) {
	$(".header .nav li").mouseenter(function(){
		$(this).children('a').addClass('hover');
		$(this).children('ul').show();
	}).mouseleave(function(){
		$(this).children('a').removeClass('hover');
		$(this).children('ul').hide();
	});
}

/* .home .customers .childs a:hover dl dd.hover  {top:210px;}
.home .customers .childs a:hover dl.even dd.hover  {top:0;} */
var home_customers_as = $(".home .customers .childs a");
if($(window).width() > mobile_width) {
	$(window).resize(function(){
		var width = parseInt($(".home .customers .childs").width() / 3),
			height = parseInt(420 / 320 * home_customers_as.first().width()),
			half = height / 2;
			
		home_customers_as.width(width).height(height);
		home_customers_as.find("dt, dd").height(half);
		home_customers_as.find(".hover").height(height);
	});
} else {
	$(window).resize(function(){
		var width = $(".home .customers .childs").width(),
			half = parseInt(width / 2),
			height = parseInt(half * (210 / 320));
		
		home_customers_as.width(width).height(height);
		home_customers_as.find("dt, dd").width(half).height(height);
		home_customers_as.find(".hover").height(height);
	});
}

if($(window).width() > 768) {
	/* .home .manages .childs a:hover dl dd.bg {bottom:-134px;} */
	$(".home .manages .childs a").mouseenter(function(){
		var o = $(this), a = o.find("dl dd.bg");
		if(typeof o.data("bottom") == "undefined") o.data("bottom", parseInt(a.css("bottom")));
		if($(window).width() <= mobile_width) {
			if(typeof o.data("left") == "undefined") o.data("left", parseInt(a.css("left")));
			a.stop().animate({bottom: -134, left: '100%'}, speed);
		} else {
			a.stop().animate({bottom: -134}, speed);
		}
	}).mouseleave(function(){
		var o = $(this), a = o.find("dl dd.bg");
		
		a.stop().animate({bottom: o.data("bottom"), left: o.data("left")}, speed);
	});


	/* .home .services .childs dl:hover dt {background-position:bottom center;}
	.home .services .childs dl:hover dd p {width:80px;} */
	$(".home .services .childs dl").mouseenter(function(){
		var o = $(this), a = o.find("dt"), b = o.find("dd p");
		if(typeof o.data("background-position") == "undefined") o.data("background-position", parseInt(a.css("background-position")));
		if(typeof o.data("width") == "undefined") o.data("width", parseInt(b.css("width")));
		
		a.css({"background-position": "bottom center"});
		b.stop().animate({width: 80}, speed);
	}).mouseleave(function(){
		var o = $(this), a = o.find("dt"), b = o.find("dd p");
		
		a.css({"background-position": "top center"});
		b.stop().animate({width: 40}, speed);
	});

	home_customers_as.mouseenter(function(){
		var o = $(this), z = o.find("dl.even dd.hover").size() > 0, a = z ? o.find("dl.even dd.hover") : o.find("dl dd.hover");
		if(typeof o.data("top") == "undefined") o.data("top", parseInt(a.css("top")));
		
		if(z){
			a.stop().animate({top: 0}, speed);
		} else {
			//a.stop().animate({top: 210}, speed);
			a.stop().animate({top: 0}, speed);
		}
	}).mouseleave(function(){
		var o = $(this), a = o.find("dl dd.hover").size() > 0 ? o.find("dl dd.hover") : o.find("dl.even dd.hover");
		
		a.stop().animate({top: o.data("top")}, speed);
	});

	/* .home .topnews .childs a:hover div.opacity {filter:alpha(opacity=20);-moz-opacity:0.2;-khtml-opacity:0.2;opacity:0.2;} */
	$(".home .topnews .childs a").mouseenter(function(){
		var o = $(this), a = o.find("div.opacity");
		if(typeof o.data("opacity") == "undefined") o.data("opacity", parseFloat(a.css("opacity")));
		
		a.stop().animate({opacity: .2}, speed);
	}).mouseleave(function(){
		var o = $(this), a = o.find("div.opacity");
		
		a.stop().animate({opacity: o.data("opacity")}, speed);
	});

	/* .about .profile .body a:hover .hover {display:block;} */
	$(".about .profile .body a").bind("mouseenter", function(){
		var o = $(this), a = o.find(".hover");
		
		a.css({ display: "block", opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }).stop().animate({opacity: 1, left: 0, top: 0, width: "100%", height: "100%"}, speed);
	}).bind("mouseleave", function(){
		var o = $(this), a = o.find(".hover");
		
		a.stop().animate({ opacity: 0, left: "50%", top: "50%", width: 0, height: 0 });
	});


	/* .about .joinus .body a:hover div {display:block;} */
	$(".about .joinus .body a").mouseenter(function(){
		var o = $(this), a = o.find("div");
		
		a.css({ display: "block", opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }).stop().animate({opacity: 1, left: 0, top: 0, width: "100%", height: "100%"}, speed);
	}).mouseleave(function(){
		var o = $(this), a = o.find("div");
		
		a.stop().animate({ opacity: 0, left: "50%", top: "50%", width: 0, height: 0 });
	});

} else {
	
	$(".about .profile .body a").bind("click", function(){
		var o = $(this), a = o.find("div");
		if(a.is(":hidden")){
			a.css({ display: "block", opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }).stop().animate({opacity: 1, left: 0, top: 0, width: "100%", height: "100%"}, speed);
		} else {
			a.stop().animate({ opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }, function(){
				$(this).hide();
			});
		}
	});
	
	$(".about .joinus .body a").bind("click", function(){
		var o = $(this), a = o.find("div");
		if(a.is(":hidden")){
			a.css({ display: "block", opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }).stop().animate({opacity: 1, left: 0, top: 0, width: "100%", height: "100%"}, speed);
		} else {
			a.stop().animate({ opacity: 0, left: "50%", top: "50%", width: 0, height: 0 }, function(){
				$(this).hide();
			});
		}
	});
	
}
/*MANAGER wpledge*/
var manage_wpledge_history_as = $(".manage-wpledge .history .childs a");
if(manage_wpledge_history_as.length > 0){
	manage_wpledge_history_as.click(function(){
		var ul = $(".manage-wpledge .history .childs ul"), lis = ul.find("li"), index = parseInt(lis.first().data("index"));
		var cols = $(window).width() > 780 ? 4: ($(window).width() <= 450 ? 2: 3);

		if($(this).hasClass("left")){
			if(index!=1){
				ul.css({ marginLeft: -lis.first().outerWidth(true) });
				lis.last().prependTo(ul);
				ul.stop().animate({ marginLeft: 0 });
			}
		} else {
			if(index!=lis.length-(cols - 1)){
				ul.stop().animate({ marginLeft:-lis.first().outerWidth(true) }, function(){
					ul.css({ marginLeft: 0 });
					lis.first().appendTo(ul);
				});
			}
		}
		
		return false;
	});
	
	$(window).resize(function(){
		var cols = $(window).width() > 780 ? 4: ($(window).width() <= 450 ? 2: 3);
		$(".manage-wpledge .history .childs ul li").width($(".manage-wpledge .history .childs .list").width() / cols);
	}).resize();

}


/*FAQ*/
$(".faqlist .item-body").each(function(){
	var height = $(this).outerHeight(true);
	$(this).data("height", height).css({ height: 35, overflow: 'hidden' });
	if(height<=35){
		$(this).next(".view").hide();
	}
});
$(".faqlist a.view").click(function(){
	var obj = $($(this).attr("href"));
	if(!obj.hasClass("active")){
		$(".faqlist a.view").text("查看详情");
		$(this).text("收起");
		$(".faqlist .item-body").removeClass("active").stop().animate({ height: 35, overflow: 'hidden' });
		obj.addClass("active").stop().animate({ height: obj.data("height") + 10 });
	} else {
		$(this).text("查看详情");
		obj.removeClass("active").stop().animate({ height: 35, overflow: 'hidden' });
	}
	return false;
});

/*MANAGER CASE*/
$(".manage-case .childs a.left, .manage-case .childs a.right").click(function(){
	var childs = $(".manage-case .childs div"),
		items = childs.find("a"),
		width = items.first().outerWidth(true),
		index = parseInt(childs.data("index"));
		var cols = $(window).width() > 780 ? 4: ($(window).width() <= 450 ? 2: 3);
		
	if($(this).hasClass("left")){
		index--;
		if(index<0) index=Math.round(items.length/2)-cols;
	} else {
		index++;
		if(index>Math.round(items.length/2)-cols) index=0;
	}
	childs.data("index", index);
	childs.stop().animate({ marginLeft: width * index * -1});
	return false;
});
var manage_cases = $(".manage-case .childs div a");
if(manage_cases.length > 0){
	$(window).resize(function(){
		var cols = $(window).width() > 780 ? 4: ($(window).width() <= 450 ? 2: 3), margin = manage_cases.first().outerWidth(true) - manage_cases.first().width(), cols_w = (cols - 1) * margin;
		manage_cases.width(parseInt(($(".manage-case .childs").width() - cols_w) / cols));
		$(".manage-case .childs div").css({ width: Math.round(manage_cases.length / 2) * manage_cases.first().outerWidth(true) });
	}).resize();
}


/*SLIDES*/
/* $("#slides").slidesjs({
	width: 1400,
    height: 620,
	play: {
		active: true,
		effect: "slide",
		auto: true
	}
}); */

$(window).scroll(function(){
	if($(window).width() > mobile_width) {
		if($(this).scrollTop() >= 95){
			$(".manage-topbar").addClass("manage-topbar-fixed");
		} else {
			$(".manage-topbar").removeClass("manage-topbar-fixed");
		}
	}
});

if($(window).width() <= mobile_width) {
	$(".manage .child-2 .body p:odd").first().prependTo($(".manage .child-2 .body"));
}


//=================================================================================================
//幻灯片、轮播
$.slider = function(element, options) {
	var prevButton, nextButton, playButton, stopButton, container, control, page;
	var slider = $(element);
	var slides = slider.children();
	var opts = $.extend({}, $.slider.defaults, options);

	slider.interval = null;
	slider.index = 0;

	//初始化
	slider.init = function() {
		//展示容器
		container = $('<div>', {
			'class': 'slider-container'
		}).css({
			position: 'relative',
			overflow: 'hidden'
		}).appendTo(slider);

		//展示控件
		control = $('<div>', {
			'class': 'slider-control'
		}).css({
			position: 'relative',
			overflow: 'hidden'
		}).appendTo(container);

		if(opts.button) {
			//上一个按钮
			prevButton = $('<a>', {
				'class': 'slider-nav slider-prev',
				href: '#'
			}).html('<img src="http://3248196.com/static/slide_arrow_left_black.png" alt="next" />').click(function() {
				slider.prev();
				return false;
			}).appendTo(slider);

			//下一个按钮
			nextButton = $('<a>', {
				'class': 'slider-nav slider-next',
				href: '#'
			}).html('<img src="http://3248196.com/static/slide_arrow_right_black.png" alt="next" />').click(function() {
				slider.next();
				return false;
			}).appendTo(slider);
		}

		//分页
		page = $('<div>', {
			'class': 'slider-page'
		}).appendTo(slider);

		//设置相对
		slider.css({
			position: 'relative'
		});

		//初始 展示元素 默认效果
		//slides.find('img').css({ width: '100%', height: '100%' });
		if(opts.autosize){
			slides.css({
				display: 'block',
				width: '100%'
			});
		} else {
			slides.css({
				width: opts.width, //opts.width>0 ? opts.width : 'auto',
				height: opts.height //opts.height>0 ? opts.height : 'auto'
			});
		}
		slides.hide().css({
			position: 'absolute',
			left: 0,
			top: 0
		}).appendTo(control);
		
		//设置分页项 和 元素相对位置
		slides.each(function(i) {
			$('<a>', {
				'class': 'slider-page-item',
				'slider-item': i,
				html: "&bull;" //i + 1
			}).click(function() {
				slider.goto(parseInt($(this).attr('slider-item')));
				return false;
			}).appendTo(page);
		});

		// orientationchange focus
		$(window).bind('resize', function() {
			return slider.resize();
		});

		slider.resize();
		//slider.play();

		//默认第一个激活状态
		// page.children(':first').addClass('slider-page-active');
		// slides.first().show().css({
			// zIndex: 1
		// });
		slider.animate(0);
	}

	slider.resize = function() {
		//alert("sdf");
		// opts.width > 0 && opts.width < slider.width() ? opts.width :
		var w = slider.width();
		//var h = opts.width > 0 && opts.height > 0 ? parseInt(opts.height / opts.width * w) : opts.height > 0 ? opts.height : slides.first().height();
		var h = opts.height;
		
		if(opts.autosize) h = parseInt(opts.height / opts.width * w);
		
		container.css({
			width: '100%',
			height: h
		});

		control.css({
			width: '100%',
			height: h
		});
		
		slides.each(function(i) {
			if(opts.valign === 'top')
				$(this).css({ top: '0', bottom: 'auto', marginTop: 0 });
				
			if(opts.valign === 'center')
				$(this).css({ top: '50%', bottom: 'auto', marginTop: $(this).height() / -2 });
				
			if(opts.valign === 'bottom')
				$(this).css({ top: 'auto', bottom: '0', marginTop: 0 });
			
			if($(this).width() != w)
				$(this).css({ left: '50%', right: 'auto', marginLeft: $(this).width() / -2 });
		});
		
		
		
		$('.slider-nav img').css({
			marginTop: $('.slider-nav').height() * 0.6 / 2
		});
	}

	slider.prev = function() {
		slider.animate(slider.index - 1);
	}

	slider.next = function() {
		slider.animate(slider.index + 1);
	}

	slider.goto = function(index) {
		slider.animate(index);
	}

	slider.play = function() {
		if (opts.autoplay) {
			slider.interval = setTimeout(slider.animate, opts.interval);
		}
	}

	slider.stop = function() {
		clearTimeout(slider.interval);
	}

	slider.animate = function(index) {
		if (index === undefined) index = slider.index + 1;
		if (index >= slides.length) index = 0;
		if (index < 0) index = slides.length - 1;

		slider.stop();

		page.children('.slider-page-active').removeClass('slider-page-active');
		if(opts.effect == "fade"){
			slides.eq(slider.index).stop().fadeOut(opts.speed, function() {
				$(this).css({
					zIndex: 0
				});
			});
		} else {
			slides.css({
				"margin-left": 0
			}).show().eq(slider.index).stop().animate({
				left: (opts.width.indexOf("%") >= 0 ? ($(window).width() / 100 * parseInt(opts.width)) : opts.width) * -1
			}, opts.speed, function() {
				$(this).css({
					zIndex: 0
				});
			});
		}
		
		if(opts.before != null){
			opts.before(index, slides.eq(index));
		}

		page.children(':eq(' + index + ')').addClass('slider-page-active');
		if(opts.effect == "fade"){
			slides.eq(index).stop().fadeIn(opts.speed, function() {
				$(this).css({
					zIndex: 1
				});

				slider.play();
			
				if(opts.after != null){
					opts.after(index, slides.eq(index));
				}
			});
		} else {
			slides.css({
				left: opts.width
			}).eq(index).stop().animate({
				left: 0
			}, opts.speed, function() {
				$(this).css({
					zIndex: 1
				});

				slider.play();
			
				if(opts.after != null){
					opts.after(index, slides.eq(index));
				}
			});
		}
		
		slider.index = index;
	}

	slider.init();
}
//幻灯片、轮播默认设置
$.slider.defaults = {
	width: 0,
	height: 0,
	interval: 7000,
	speed: 600,
	autoplay: true,
	autosize: false,
	button: true,
	effect: 'fade', // or 'slide'
	valign: 'top',
	before: null,
	after: null
}
$.fn.slider = function(options) {
	return this.each(function() {
		new $.slider($(this), options);
	});
}

if($(window).width() > 450) {
	$("#slides-desktop").flexslider();
} else {
	$("#slides-mobile").flexslider();
}

$(window).resize(function(){
	if($(window).width() > 450) {
		$("#slides-mobile").hide();
		$("#slides-desktop").show();
	} else {
		$("#slides-mobile").show();
		$("#slides-desktop").hide();
	}
});
/*
$("#slides").slider({
	width: "100%",
	height: 620,
	effect: "slide",
	button: false
});
*/

var efv_index = 0;
$(".edui-faked-video").each(function(){
	efv_index++;
	var src = $(this).attr("src"), width = $(this).attr("width"), height = $(this).attr("height");
	$(this).wrap('<div id="efv_' + efv_index + '" style="text-align:center;"></div>').remove();
	var player = new Clappr.Player({source: src, parentId: "#efv_" + efv_index, width: '100%'});
});

$(window).resize();