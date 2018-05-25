// prevent browser zooming
$(document).ready(function(){
 let keyCodes = [61, 107, 173, 109, 187, 189];
 $(document).keydown(function(event) {
   if (event.ctrlKey==true && (keyCodes.indexOf(event.which) != -1)) {
     event.preventDefault();
    }
 });
 $(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  });
});

// prevent moving with mid mouse button
document.body.onmousedown = function(e) { if (e.button === 1) return false; }
