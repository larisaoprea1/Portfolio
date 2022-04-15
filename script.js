let menub = document.querySelector('#menu-bar');
let header = document.querySelector('.header');

menub.onclick = () =>{
    menub.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
} 

window.onscroll = () =>{
if(window.innerWidth <991){
    menub.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
}
}
