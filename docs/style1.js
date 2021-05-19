var typed=new Typed('.typeing',{

    strings:["Software Engineer","Devloper","Freelancer"],
    typedSpeed:100,
    backSpeed:60,
    loop:true
});
var typed1=new Typed('.typing1',{

    strings:["JAVA","SQL","PL SQL","HTML","CSS","BOOTSTRAP","JQUERY"],
    typedSpeed:1000,
    backSpeed:100,
    loop:true
});
var typed2=new Typed('.typing2',{

    strings:["Web Devlopment","App Devlopment","Application Devlopment"],
    typedSpeed:1000,
    backSpeed:100,
    loop:true
});

$(document).ready(function(){
  $(window).scroll(function (){
    var scrollTop = $(this).scrollTop();
    
    $('.default-block').hide();
      if( scrollTop > 900 ){
        $('#abc').slideDown("slow");
       
      } 
      if( scrollTop > 150 ){
        $('#xyz').slideDown("slow");
       
      } 
     
      
});

  $("#card1").mouseenter(function(){
    $('#card1 p ').slideDown("slow");
  });
  $("#card1").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
  });
  $("#card2").mouseenter(function(){
    $('#card2 p ').slideDown("slow");
  });
  $("#card2").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
  });
  $("#card3").mouseenter(function(){
    $('#card3 p ').slideDown("slow");
  });
  $("#card3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
  });
});
