 $(document).ready(function() {
     /* Credit for the if statement logic and animation to this website */
     /*https://deepmikoto.com/coding/3--how-to-create-back-to-top-button-using-jquery-and-some-css*/
     $(function() {
         $(window).scroll(function() {
             if ($(this).scrollTop() - 200 > 0) {
                 $('#warning').stop().slideDown('fast'); // show the button
             } else {
                 $('#warning').stop().slideUp('fast'); // hide the button
             }
         });
     });

     $(function() {
         // previous detection logic

         $("#warning").on("click", function() {
             $("html, body").animate({
                 scrollTop: 0
             }, 200);
         });
     });

     $(function() {
         var prevScrollpos = window.pageYOffset;
         $(window).scroll(function() {
             var currentScrollPos = window.pageYOffset;
             if (prevScrollpos > currentScrollPos) {
                 $(".navbar.navbar-expand-md.bg-dark").css("top", "0");
             } else {
                 $(".navbar.navbar-expand-md.bg-dark").css("top", "-50px");
             }
             prevScrollpos = currentScrollPos;

         });
     });

 });