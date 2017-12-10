
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

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});