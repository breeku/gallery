//$(document).ready(function(){
//
//    $(".filter-button").click(function(){
//        var value = $(this).attr('data-filter');
//        
//        if(value == "all")
//        {
//            //$('.filter').removeClass('hidden');
//            $('.filter').show('1000');
//        }
//        else
//       {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//            $(".filter").not('.'+value).hide('3000');
//            $('.filter').filter('.'+value).show('3000');
//            
//        }
//    });
//    
//    if ($(".filter-button").removeClass("active")) {
//$(this).removeClass("active");
//}
//$(this).addClass("active");
//
//});


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

