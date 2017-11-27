$(function() {
  var $slider = $(".slider");
  var $slider1 = $slider.find("ul.slider1");

  var sliderSzerokoscPx = 500;
  var sliderWysokoscPx = 250;

  $slider.width(sliderSzerokoscPx);
  $slider.find(".maska").height(sliderWysokoscPx);

  $slider1.find("li").width(sliderSzerokoscPx);
  $slider1.find("li").each(function(){
          $slider.find("ul.menu").append("<li></li>");
  });

  var $menu = $slider.find("ul.menu li");
  $menu.first().addClass("aktywny");
  $menu.click(function(){
       if ( !$(this).hasClass("aktywny") )
       {
         target = $(this).index();
         scrollSlider(target);
        
       }
  });
  function scrollSlider(target) {
         $slider1.stop().animate({"left": sliderSzerokoscPx * target });
         $menu.removeClass("aktywny").eq(target).addClass("aktywny");
         resetInterval();
  }
        $slider1.css("width" , sliderSzerokoscPx * $menu.length );

        function autoScroll() {
          target = $menu.siblings(".aktywny").index();
          target == $menu.length - 1 ? target = 0 : target += 1;
          scrollSlider(target);
        }
        interwal = setInterval(function(){ autoScroll(); }, 4000 );

          function resetInterval () {
               clearInterval(interwal);
               interwal = setInterval(function(){ autoScroll(); }, 4000 );
          }
          $slider.find(".poprzedni").click(function() {
                target = $menu.siblings(".aktywny").index();
                target == 0 ? target =  $menu.length - 1 : target -= 1;
                scrollSlider(target);
          });
          $slider.find(".nastepny").click(function() {
            target = $menu.siblings(".aktywny").index();
            target ==  $menu.length - 1 ? target = 0 : target += 1;
            scrollSlider(target);
      });
});
  

