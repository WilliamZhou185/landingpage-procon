// Java Document

 $(function() {
            var offset = $("#enquiry").offset();
            var topPadding = 80;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#enquiry").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#enquiry").stop().animate({
                        marginTop: 80
                    });
                };
            });
 });
 
 

function goToByScroll(id){
     			$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
	
	
$(document).ready(function() {
        $('#slider1').s3Slider({
            timeOut: 6500 
        });
    });

$(document).ready(function() {
			$(".sel_foto a").fancybox({
				'width'				: '80%',
				'height'			: '80%',
				'autoScale'			: false,
				'transitionIn'		: 'elastic',
				'transitionOut'		: 'elastic',
				'type'				: 'iframe'
			});

		});