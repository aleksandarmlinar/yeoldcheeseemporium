//console.log("js funkar");

function openClose() {
    var openNav = document.querySelector("#navBar");
    
    if (openNav.style.display !== "block") {
        openNav.style.display = "block";

    } else {
        openNav.style.display = "none";

    }
  }

  // scrollspy
$(document).ready(function(){
  $(window).on('activate.bs.scrollspy', function(e, obj){
    $(obj.relatedTarget).addClass('activated');
  });
});

// Funtioner och lyssnare för alla knappar.
$(".btn-primary:nth-child(3)").click(function(){
    $('#cover').fadeIn();
    $('#popUp').fadeIn().delay(800);
    $('#popUp p').text($(this).siblings('span').text()); 
  });

$("#closeBtnRef").click(function(){
    $('#cover').fadeOut(); 
    $('#popUp').fadeOut();
});

// Lyssnare för "read more" knappar förutom den enda som leder till en ny sida :) 
$(".btn-primary:nth-child(2)").click(function(){
    
if($(this).text() === "Click me!") {

    console.log("Bingo!");

} else {    
    
    $('#cover').fadeIn();
    $('#popUp').fadeIn().delay(800);
    $('#popUp p').text("Sorry, ehm, sorry, we can't go there right now. Thank you. Please try with another cheese."); 
}    
});

// Tomma meny-ankare
$(".menu-item-blank").click(function(){

        $('#cover').fadeIn();
        $('#popUp').fadeIn().delay(800);
        $('#popUp p').text("Sorry, ehm, sorry, we can't go there right now. Thank you. Please try another menu item.");   
    
});



// highlighting av nuvarande sida med hjälp av egenskapen pathname och funktionen indexOf tar och kontrollerar 'a's href attribut 
// och om den är större än -1 lägger den class "active" till a elementet och ger sida man befinner sig just på.
$(".top-nav a").each(function() {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('active');
    }
});

// En så kallad easter egg

$outRef = $("<p style='font-size: 2rem;'> Sorry, we do not have any cheese att all.</p>");

$('select').on('change', function() {
    if (this.value === 'availability') {
        setTimeout(function(){
            $("#cheeses-content").prepend($outRef).animate({opacity: "1"});
        }, 300);
        $(".col-sm-10").animate({opacity: '0'});
    } else {
        $(".col-sm-10").animate({opacity: '1'});
        $outRef.remove();
    }
  });

