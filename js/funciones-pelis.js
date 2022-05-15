// JavaScript Document

//CREAR NUEVA FUNCION PARA AÑADIRLA AL HTML window.onload = slideShow()
function slideShow() {

// ======== NEW SLIDESHOW REP. AUTOMATIC W3S ===========
var slideIndex = 0;
showSlides();
	
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");//ADD DOTS
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {//ADD FOR DOTS
  dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";//ADD ACTIVE
  setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
}

// ======== NEW SLIDESHOW MANUAL W3S ===========
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls = Controles de imagen en miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
	
  if (slides[slideIndex-1] != undefined) {//ADD IF
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }
}
/*--------FIN NEW SLIDE W3S-------------*/


// ======== NEW MODAL BOXES W3S - OCULTAS POR DEFECTO ===========

//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal1() {

// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
/*var btn = document.getElementById("myBtn1");//YA NO ES NECESARIA*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

//When the user clicks on the button, open the modal  
/*btn.onclick = function() {//YA NO ES NECESARIA
  modal.style.display = "block";//LA UNICA OPCION VISBLE
}*/

/*---AL TENER DOS VAR DE BOTONES SE EJECUTA SOLO CON DOBLE CLICK, YA QUE SUMA UN EVENTO CON OTRO----*/
//A)var btn = document.getElementById("myBtn1"); + B)btn.onclick = function()
  modal.style.display = "block";//ASÍ SE EJECUTA EL EVENTO (CAJA MODAL) SOLO CON UN CLICK
	
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD NEW
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD NEW
  }
 }

//CREAR NUEVA FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE TODO EL "iframe" DEL <div class="modal-content">
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal2() {

// Get the modal
var modal = document.getElementById("myModal2");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn2");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }	
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal3() {

// Get the modal
var modal = document.getElementById("myModal3");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn3");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }	
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal4() {

// Get the modal
var modal = document.getElementById("myModal4");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn4");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal5() {

// Get the modal
var modal = document.getElementById("myModal5");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn5");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal6() {

// Get the modal
var modal = document.getElementById("myModal6");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn6");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}

//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal6() {

// Get the modal
var modal = document.getElementById("myModal6");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn6");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}

//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal7() {

// Get the modal
var modal = document.getElementById("myModal7");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn7");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close7")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal8() {

// Get the modal
var modal = document.getElementById("myModal8");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn8");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close8")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal9() {

// Get the modal
var modal = document.getElementById("myModal9");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn9");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close9")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal10() {

// Get the modal
var modal = document.getElementById("myModal10");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn10");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close10")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal11() {

// Get the modal
var modal = document.getElementById("myModal11");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn11");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close11")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}


//CREAR NUEVA FUNCION PARA CADA CAJA MODAL
function cajaModal12() {

// Get the modal
var modal = document.getElementById("myModal12");

/*// Get the button that opens the modal
var btn = document.getElementById("myBtn12");*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close12")[0];

// When the user clicks on the button, open the modal
/*btn.onclick = function() {
  modal.style.display = "block";
}*/
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  stopVideo(modal);//ADD
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	stopVideo(modal);//ADD
  }
 }

//CREAR FUNCION PARAR VIDEO Y AÑADIRLA EN LOS EVENTOS ANTERIORES --> stopVideo(modal);
function stopVideo(modal) {
	var currentIframe = modal.querySelector(".modal-content > iframe");//COGE EL IFRAME
	currentIframe.src = currentIframe.src;//COGE EL SRC DEL ACTUAL IFRAME 
 }
}
/*--------FIN NEW MODAL BOXES W3S-------------*/


// ======== NEW PESTAÑAS CONMUTABLES W3S ===========
function openTabs(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*--------FIN PESTAÑAS CONMUTABLES W3S-----------*/

// ======== NEW BARRA DE NAVDEGACION RESPONSIVE W3S===========
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
