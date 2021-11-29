

/*============ nav button ============*/
$(".nav-button").click(function () {
	if ($(this).hasClass("active")) {
		$(".nav-list").slideUp();
		$(this).removeClass("active");
	} else {
		$(".nav-list").slideDown();
		$(this).addClass("active");
	}
});

/*============ Submenu ============*/
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).parent(".sub-menu").toggleClass("active");
});


/*=================Panel===============*/
$('.panel-collapse').on('show.bs.collapse', function () {
          $(this).parent('.panel').find('.fa-minus').show();
          $(this).parent('.panel').find('.fa-plus').hide();
         })
         $('.panel-collapse').on('hide.bs.collapse', function () {
          $(this).parent('.panel').find('.fa-minus').hide();
          $(this).parent('.panel').find('.fa-plus').show();
         })