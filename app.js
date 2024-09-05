let person = document.querySelector('.person');
let off = document.querySelector('#off');
let cross = document.querySelector('.cross');

person.addEventListener('click', ()=>{
  off.classList.add('active');  
});

cross.addEventListener('click', ()=>{
    off.classList.remove('active');
});

off.addEventListener('click', function(e){
if(e.target.classList.contains('active')){
    off.classList.remove('active');
}
})

window.onscroll = function() {myFunction()};
var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
