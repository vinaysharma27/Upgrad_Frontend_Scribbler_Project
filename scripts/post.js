
function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdatePara = document.getElementById("blogBody") ;

    if(variable1.textContent.includes('Edit'))  {
        variable1.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdatePara.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdatePara.style.border = '1px black solid' ;
    }

    else if(variable1.textContent.includes('Save'))  {
        variable1.innerHTML = 'Edit &#x270D;'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdatePara.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdatePara.style.border = '' ;
    }
    
}
let likes = 0 ;
function incLikes() {
    likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;

   if(likes === 1)  {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }

   else {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}

// Get the modal                                        
var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal                                    
var btn = document.getElementById("button1");
var btn2 = document.getElementById("button2");

// span element that closes the modal                                       
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// On user click on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
} 

// On user click on <span> (x), close the modal                                   
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
} 

// On user clicks  outside of the modal, close it                                       
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

function AddComment() {
  let CommentToAdd = document.getElementById("text-area");
  let ShowComment = document.getElementById("addedComments") ;
  console.log(CommentToAdd) ;

}
                                                                                                                                                