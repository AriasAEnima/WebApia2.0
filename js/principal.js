var movil=$(window).width()<=700;
// Pagina Web Creada por Julian Eduado Arias Barrera : AriasAenima en GitHub y otras Redes

$("a").click(function () {
	var elem=$(this).attr('href');
	if ( this.classList.contains("anchor")){
		smooth_scroll_to(elem);
	}
});

function smooth_scroll_to(elem){
	var offset = 0;
	offset = $(elem).offset().top;
	$('html').animate({
	    scrollTop: offset
	}, 550);
}
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
	if(movil){
		document.getElementById("mySidenav").style.width = "0";
	}
}

window.onresize = function(event) {
   if($(window).width()<=700){
   		movil=true;
      document.getElementById("mySidenav").style.width="0";

   }else{
   		movil=false;
   		document.getElementById("mySidenav").style.width="auto";
   }
};

$(document).ready(function() {
    document.body.style.opacity=1;
});
