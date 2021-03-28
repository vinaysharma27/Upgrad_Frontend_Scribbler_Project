function del() { 

    // Get the modal
      var modal = document.getElementById("del");

    //  modal display  to the user
    modal.style.display = "block";
  
    // if the  user clicks hides the model  else where on the display
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  
    }
  }

// Get the modal
var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

// Get the button that opens the  modal                                                        
 var btn = document.getElementById("button1");
var btn2 = document.getElementById("button2");

//  span element that closes the modal              
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// on User click the button, open the modal                  
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

// On the user click on <span> (x), close the modal                   
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// On user  click  outside  the modal, close it                                   
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}