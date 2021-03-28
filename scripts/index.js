
// Get the modal                                                        
var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3") ;

// Get the button that opens the modal                  
var btn = document.getElementById("button1");                     
var btn2 = document.getElementById("button2");      
var btn3 = document.getElementById("Create-Post-Modal") ;

// Get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2] ;

// On  user click on the button, open the modal                                           
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

// On  user click on <span> (x), close the modal                              
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
} 

span3.onclick = function() {
  modal3.style.display = "none";
}

// On user click  outside of the modal, close it
window.onclick = function(event) {

  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


