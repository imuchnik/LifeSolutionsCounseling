$(window).on("load",function(){function e(){0===n?$("header").removeClass("nav-up").addClass("nav-down"):n-t>0&&n>70?$("header").removeClass("nav-down").addClass("nav-up"):n-t<0&&n>70&&$("header").removeClass("nav-up").addClass("nav-down"),t=n}var o,n,t=0;$(window).scroll(function(e){o=!0,n=window.scrollY||window.pageYOffset||document.documentElement.scrollTop}),setInterval(function(){o&&(e(),o=!1)},250),$(window).scroll(function(){$(".hideme").each(function(e){var o=$(this).position().top+$(this).outerHeight();$(window).scrollTop()+$(window).height()>o&&$(this).animate({opacity:"1"},1e3)})}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var e=$(o);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})}),$(document).ready(function(){google.maps.event.addDomListener(window,"load",function(){var e=new google.maps.LatLng(28.306171,-81.439076),o={zoom:15,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(document.getElementById("map"),o),t=new google.maps.InfoWindow({content:'<h3 id="firstHeading" class="firstHeading">Life Solutions Counseling</h3><div id="bodyContent"><p>We are located in La Mirada Plaza off Vine Street in Kissimmee, FL.</p></div>',maxWidth:300}),a=new google.maps.Marker({position:e,map:n,icon:"https://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png",title:"Life Solutions Counseling"});google.maps.event.addListener(a,"click",function(){t.open(n,a)}),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)})}),$("#contact-form").submit(function(e){var o=$("#contact-form").serialize();if(e.preventDefault(),$("#contact-form").hide(),$("#gotcha").val())return $("#success-error").text("Go away, spambot!"),!1;$.ajax({url:"https://formspree.io/christine@life-solutions-counseling.com",method:"POST",data:o,dataType:"json",success:function(e){$("#success-error").text("Thanks! We'll be in touch.")},error:function(e){console.error(e),$("#success-error").text("Sorry, please try again.")}})}),$("#msg-again").on("click",function(){$("#contact-form").show(),$("#result").hide()})});