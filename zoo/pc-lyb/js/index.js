var flex = $("#flex");
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 500) {
		$('.flex-sub-fanhui').slideDown(1000);
	}
	else if (scrollTop <= 200) {
		$('.flex-sub-fanhui').slideUp(1000);
	}
	flex.stop().animate({top:scrollTop+300},800);
	$('.flex-sub-fanhui').click(function() {
		$(window).scrollTop(0)
	});
});

// 图片切换
$(function(){
	var tiemer = "";
	var time = 1000;
	var fun = function bClick(){
		$(".lunbo-pic").animate({marginLeft: '+=980px'}, "500");
		$(".left-arrow").unbind("click");
		tiemer = setTimeout(function(){
			$(".left-arrow").click(fun);
		},time);
	};
	$(".left-arrow").click(fun);
})
$(function(){
	var tiemer = "";
	var time = 1000;
	var fun = function bClick(){
		$(".lunbo-pic").animate({marginLeft: '-=980px'}, "500");
		$(".right-arrow").unbind("click");
		tiemer = setTimeout(function(){
			$(".right-arrow").click(fun);
		},time);
	};
	$(".right-arrow").click(fun);
})

$(function(){
	var tiemer = "";
	var time = 1000;
	var fun = function bClick(){
		$(".dy-lunbo-pic").animate({marginLeft: '+=980px'}, "500");
		$(".dy-left-arrow").unbind("click");
		tiemer = setTimeout(function(){
			$(".dy-left-arrow").click(fun);
		},time);
	};
	$(".dy-left-arrow").click(fun);
})

$(function(){
	var tiemer = "";
	var time = 1000;
	var fun = function bClick(){
		$(".dy-lunbo-pic").animate({marginLeft: '-=980px'}, "500");
		$(".dy-right-arrow").unbind("click");
		tiemer = setTimeout(function(){
			$(".dy-right-arrow").click(fun);
		},time);
	};
	$(".dy-right-arrow").click(fun);
})



setInterval(function() {
	var marginLeft = $('.lunbo-pic').css('margin-left');
	if(marginLeft == '980px') {
		$('.left-arrow').addClass('zindex');
		$('.right-arrow').removeClass('zindex');
	}
	else if(marginLeft == '0px') {
		$('.right-arrow').removeClass('zindex');
		$('.left-arrow').removeClass('zindex');
	}
	else if (marginLeft == '-980px'){
		$('.left-arrow').removeClass('zindex');
		$('.right-arrow').addClass('zindex');
	}
 },500);
setInterval(function() {
	var submarginLeft = $('.dy-lunbo-pic').css('margin-left');
	if(submarginLeft == '980px') {
		$('.dy-left-arrow').addClass('zindex');
		$('.dy-right-arrow').removeClass('zindex');
	}
	else if(submarginLeft == '0px') {
		$('.dy-right-arrow').removeClass('zindex');
		$('.dy-left-arrow').removeClass('zindex');
	}
	else if (submarginLeft == '-980px') {
		$('.dy-left-arrow').removeClass('zindex');
		$('.dy-right-arrow').addClass('zindex');
	}
 },500);


