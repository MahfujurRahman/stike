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

        var waypoint = new Waypoint({
            element: document.getElementById('element-waypoint'),
            handler: function(direction) {
              notify(this.element.id + ' triggers at ' + this.triggerPoint)
            },
            offset: '75%'
          })



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	