$(document).ready(function(){
    $(".begin").on("click",function(){
        $(".sec-A").addClass("showing");
        $(".head").hide();
    });
    $(".down").on("click",function(){
        $(".head").addClass("head-hide");
    });
    $(".home").on("click",function(){
        $(".side").removeClass("showing");
    });
    $(".code-btn").on("click",function(){
        $(".sec-B").addClass("showing");
    });
    $(".back-btn").on("click",function(){
        $(".sec-B").removeClass("showing");
    });
});

// RSVP button
var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

// uploadButton
var $uploadButton = document.querySelector('.uploadButton');
$uploadButton.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($uploadButton, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($uploadButton, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($uploadButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
