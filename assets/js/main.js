(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".treger-menu").on("click", function(){
            $(".hide-menu, .menu-overlay").addClass("active");
            return false;
        });

        $("span.menu-close, .menu-overlay").on("click", function(){
            $(".hide-menu, .menu-overlay").removeClass("active");
        });

        $("tooltip").tooltip();

        $('.popover').popover({
            container: 'body'
          });

          $(".counter-number").counterUp({
            delay: 10,
            time: 1000
        });
        $('#singel-list').waypoint(function() {
            $(".counter-number span").css({ 
                  opacity: "1",
                  marginTop: "0"
                });
          }, { offset: 150 });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	