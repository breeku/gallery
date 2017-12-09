// Init fancyBox
$().fancybox({
  selector : '.element-item:visible > a'
})

// Init Isotope
var $grid = $('.grid').isotope({
  // options
});

// Filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  $grid.isotope({ filter: $(this).attr('data-filter') });
});
$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});