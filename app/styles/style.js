 $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
    })

 
  $(document).click(function(e) {
    if (!$(e.target).is('.navbar-admin')) {
        $('.collapse').collapse('hide');        
    }
});