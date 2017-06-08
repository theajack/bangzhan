var h=J.height(),
  w=J.width();

var w_w=w*(100/(44+12));
var i_w=w_w*0.44;
var first=true;
var config_n=300;
var middle_th=130;
if(w<900){
  config_n=100;
  middle_th=70;
}
J.ready(function(){
  

  J.id("mainWrapper").css("width",w_w+"px");
  J.class("m-item").css("padding-top",(h-middle_th*4)/2+"px");
  if(w<900){
    J.class("middle").clk(showPart);
  }else{
    J.class("middle").on("mouseenter",showPart);
  }
  J.class("content").each(function(item){
    item.css("margin-top",(h-60-item.hei())/2-item.prev().hei()+"px");
  });
  J.class("intro").findClass("left").removeClass("left");
  J.class("intro").findClass("right").removeClass("right");
});
function showPart(){
  var mw=J.id("mainWrapper");
  if(mw.css("left")=="0px"){
    mw.css("left",-i_w+"px");
    J.class("middle").css("top","-100%");
    if(first){
      first=false;
      J.class("contact").findClass("left").removeClass("left");
      J.class("contact").findClass("right").removeClass("right");
    }
  }else{
    mw.css("left","0px");
    J.class("middle").css("top","0%");
  }
}




