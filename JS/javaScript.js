//Define the varibles 
var $block = $('.border-radius-object');

//It represents the browser's window.
var $win = $(window);

$win.on('scroll', function () {
    //The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.
    var $top = $win.scrollTop();
    $block.css({ transform: "rotate(" + $top + "deg)" });
});









