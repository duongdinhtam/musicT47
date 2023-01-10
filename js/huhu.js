$(function() {
    var index = 0;
    var endImg = $("img.slide:last").attr("idx");
  
    var interval;
    var timer = function () {
      interval = setInterval(function () {
        $("#next").click();
      },5000);
    };
  
    var changeImage = function(index) {
      $("img.slide").hide();
      $("img.slide").eq(index).fadeIn(500);
      $("button").removeClass("active");
      $("button").eq(index).addClass("active");
      
      clearInterval(interval);
      timer();
    };
  
    changeImage(index);
  
    $("button").click(function() {
      index = $(this).attr("idx");
      
      changeImage(index);
    });
  
    $("#next").click(function() {
      if(++index > endImg) {
        index = 0;
      }
      
      changeImage(index);
    });
  
    $("#prev").click(function() {
      if(--index < 0) {
        index = endImg;
      }
      
      changeImage(index);
    });
  });