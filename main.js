$(document).ready(function(){
    $(".b").click(function(){
        $(this).toggleClass("b");
        $(this).toggleClass("b-selected");
        });

    function fixDiv() {
        var $cache = $('#navbar');
        var $width = $('#navbar').parent().width();
        if ($(window).scrollTop() > 100) {
            $cache.css({
                'position': 'fixed',
                'top': '0px',
                'width': $width
            });
        } else {
            $cache.css({
                'position': 'relative',
                'top': 'auto'
            });
        }
    }
    $(window).scroll(fixDiv);
    fixDiv();
});
    
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
    // options
    cellalign: 'right',
    pageDots: false,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15
});
var flkty = new Flickity( '.carousel', {
    // options
});

function changeNavbarPosition() {
    $(".navbar").css("display", "fixed")
}

function toggleFixed() {
    adjustWidth();
    $(".navbar").toggleClass("fixed");
}

function adjustWidth() {
    var parentwidth = $("#body").width();
    $(".navbar").width(parentwidth);
}

$(window).resize(function() {
    adjustWidth();
})