const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav-items');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navItem.classList.toggle('active');
})

function removeItem(){
    hamburger.classList.remove('active');
    navItem.classList.remove('active');

}