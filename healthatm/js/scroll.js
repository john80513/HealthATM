//function goTop(acceleration, time) {
//    acceleration = acceleration || 0.1;
//    time = time || 16;
//
//    var x1 = 0;
//    var y1 = 0;
//    var x2 = 0;
//    var y2 = 0;
//    var x3 = 0;
//    var y3 = 0;
//
//    if (document.documentElement) {
//        x1 = document.documentElement.scrollLeft || 0;
//        y1 = document.documentElement.scrollTop || 0;
//    }
//    if (document.body) {
//        x2 = document.body.scrollLeft || 0;
//        y2 = document.body.scrollTop || 0;
//    }
//    var x3 = window.scrollX || 0;
//    var y3 = window.scrollY || 0;
//
//    // 滚动条到页面顶部的水平距离   
//    var x = Math.max(x1, Math.max(x2, x3));
//    // 滚动条到页面顶部的垂直距离   
//    var y = Math.max(y1, Math.max(y2, y3));
//
//    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小   
//    var speed = 1 + acceleration;
//    window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
//
//    // 如果距离不为零, 继续调用迭代本函数   
//    if (x > 0 || y > 0) {
//        var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
//        window.setTimeout(invokeFunction, time);
//    }
//}
//
//
//
//var mygoTop = document.getElementById('GoTop');
//
//window.onscroll = function () {
//
//    'use strivt';
//
//    if (window.pageYOffset >= 300) {
//
//        mygoTop.style.visibility = 'visible';
//        mygoTop.style.opacity = '1'
//
//
//    } else {
//
//        mygoTop.style.visibility = 'hidden';
//        mygoTop.style.opacity = '0'
//    }
//};




// create the back to top button
//$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
//
//var amountScrolled = 300;
//
//$(window).scroll(function() {
//	if ( $(window).scrollTop() > amountScrolled ) {
//		$('a.back-to-top').fadeIn('slow');
//	} else {
//		$('a.back-to-top').fadeOut('slow');
//	}
//});
//
//$('a.back-to-top, a.simple-back-to-top').click(function() {
//	$('html, body').animate({
//		scrollTop: 0
//	}, 700);
//	return false;
//});
//
//
//
//
//// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
    
        
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



function goTop(acceleration, time) {
    acceleration = acceleration || 0.1;
    time = time || 16;

    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离   
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离   
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小   
    var speed = 1 + acceleration;
    window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

    // 如果距离不为零, 继续调用迭代本函数   
    if (x > 0 || y > 0) {
        var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
        window.setTimeout(invokeFunction, time);
    }
}



var mygoTop = document.getElementById('GoTop');

window.onscroll = function () {

    'use strivt';

    if (window.pageYOffset >= 300) {

        mygoTop.style.visibility = 'visible';
        mygoTop.style.opacity = '1'


    } else {

        mygoTop.style.visibility = 'hidden';
        mygoTop.style.opacity = '0'
    }
};

