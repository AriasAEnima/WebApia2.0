
// Pagina Web Creada por Julian Eduado Arias Barrera : AriasAenima en GitHub y otras Redes

var number=0;
var contchangerow=1;	
var i=0;
var divinit="<div class='column'>";
var temp="";

function openModal(e) {
	document.getElementById("preview").src=e.src;	
	document.getElementById('myModal').style.display = "block";
	showSlides(e);	
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

function showSlides(e) {
	var slide=document.getElementById("principal");
	var captionText = document.getElementById("caption");  
	slide.style.display = "block";
	captionText.innerHTML= e.getAttribute('alt');
}

function chargeImg(title,path,desc,num) {
	number=num;	
	var rows=Math.floor(number/4);
	var k=number%4;
	if (number<3) divinit="<div class='column doble'>";
	temp="<hr><h3>"+title+"</h3>"+"<article>"+divinit;
	for(i = 1; i <=number; i++){
	    temp += "<div class='container'> <img src='"+path+" ("+ i
	     + ").jpg' alt='"+desc+"' onclick='openModal(this)'></div>";
	    if(contchangerow>=rows){
	    	if(k>0 && contchangerow==rows){
	    		k-=1;	    			    	
	    	}else{	    		
	    		closeDiv();  			    		
	    	}	    	
	    }
	    contchangerow++;
	}		// body...
	temp+="</article>";	
	document.getElementById("galeria").innerHTML+=temp; 	
}

function closeDiv() {
	contchangerow=0;	
	temp +="</div>";
	if(i!=number){
		temp +=divinit;
	}	   
}
