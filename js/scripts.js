
//Start jQuery
$(document).ready(function (){

$(function(){
  var carouselList = $("#carousel ul");  //this code will execute after the DOM is loaded
});

 $(document).ready(function(){
        setinterval(function(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
        }, 2000); 

        });

function moveFirstSlide() {
       var firstItem = carouselList.find("li:first");
       var lastItem = carouselList.find("li:last");
       lastItem.after(firstItem)
       carouselList.css({marginLeft:0});
    }
};
