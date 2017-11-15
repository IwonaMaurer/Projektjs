
//Start jQuery
/*
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
*/

//zadanie 11.4

function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and price is " + this.price + ".");
}
var iPhone6S = new Phone("Aplle", 2250, "sliver");
var SamsungGalaxyS6 = new Phone("Samsung", 1420, "black");
var OnePlusOne = new Phone("OnePlus", 1000, "black");


iPhone6S.printInfo();

