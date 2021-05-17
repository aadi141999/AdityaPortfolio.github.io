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