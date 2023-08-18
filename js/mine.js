

// for navbar

$(".openNav").click(function(){
$("#leftMenu").animate({ width:'250px'},50)
$("#home-content").animate({marginLeft :'250px'},500)
})

$(".closebtn").click(function(){
 $("#leftMenu").animate({ width:'0px'},50)
$("#home-content").animate({marginLeft :'0px'},500)
})

// --------------------------------------------------------------
// for slide down

$(".first-h1").click( function(){
    $(" .singer1 " ).slideToggle( 500 ,function(){
        $(" .singer2 " ).slideUp( 500 )
        $(" .singer3" ).slideUp( 500 )
        $(" .singer4" ).slideUp( 500 )
    } )
} )

$(".second-h1").click( function(){
    $(" .singer2" ).slideToggle( 500,function(){
        $(" .singer1 " ).slideUp( 500 )
        $(" .singer3" ).slideUp( 500 )
        $(" .singer4" ).slideUp( 500 )

    } )
} )

$(".therd-h1").click( function(){
    $(" .singer3" ).slideToggle( 500 ,function(){
        $(" .singer1 " ).slideUp( 500 )
        $(" .singer2" ).slideUp( 500 )
        $(" .singer4" ).slideUp( 500 )
    } )
} )

$(".fourd-h1").click( function(){
    $(" .singer4" ).slideToggle( 500  , function(){
        $(" .singer1 " ).slideUp( 500 )
        $(" .singer3" ).slideUp( 500 )
        $(" .singer2" ).slideUp( 500 )
    })
} )


//---------------------------------------------------------------
// the time counter

window.onload = function() {
   
    countDownTime("10 october 2021 9:56:00");
  }

  function countDownTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    realTime = (futureDate- now);
           
   let days = Math.floor( realTime / (24*60*60));
   let hours = Math.floor((realTime - (days * (24*60*60))) / 3600);
   let mins = Math.floor((realTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((realTime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

    setInterval(function() {  countDownTime(countTo); }, 1000);


  }

  //---------------------------------------------------------------
  // for text areahjjhf,hg  hvh.ghmvhb.  nl;bl;n,mjlbhn;,l;nm ,jh/n mb/n, mb,,n .nbvbn n,gg   nm,.nlbhgvy hnb,, .mjjmmmmmmmmmm,  /.,cv

let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;    
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});