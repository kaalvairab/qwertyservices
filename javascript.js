// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.getElementById("menuClose");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.position = 'fixed';

};

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
  document.body.style.position = '';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function closeNav() {
  modal.style.display = "none";
}


function view(){
  

}