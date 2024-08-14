position=0;
var interval = setInterval(function (){
  position -= 1;
  $(".background").css({"background-position":+ position +"px 0px"})
  $(".background2").css({"background-position":+ position +"px 0px"})
},8 );