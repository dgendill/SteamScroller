function steamScroller (end, speed, callback) {
  var maxHeight = $(document).height();
  var currentY = $(window).scrollTop(); //window.scrollY || window.pageYOffset;
  var currentX = $(window).scrollLeft(); //window.scrollX || window.pageXOffset;
  var callback = callback || function() {};

  //console.log(JSON.stringify($.browser));
  if ($.browser.msie) { 
    window.scrollTo(currentX, end);
    callback();
    return;
  }   

  var distance = Math.round(Math.abs(currentY - end));
  if (distance === 0) {
    callback();
    return;
  }

  var increment = (end - currentY < 0) ? -1 : 1;

  var doScroll = function() {
    var time = window.setTimeout(function() {

      while (distance > 0 && (currentY < maxHeight) && (currentY >= 0) ) {
        currentY = currentY + increment; 
        distance = Math.round(Math.abs(currentY - end));
        //console.log(distance);
        if (currentY === end) {
          window.clearTimeout(time);
          callback();
          break;
        }
        window.scrollTo(currentX, currentY);
        if (currentY%speed === 0) {
          doScroll();
          break;
        }
      }
      //window.clearTimeout(time);
      //callback();
    }, 1);
  };
  doScroll();
};