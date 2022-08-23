let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

let countBreak = 0;

function myBreakfast() {
  const valueInLS = localStorage.getItem("breakCount");
  alert(valueInLS);
  if (valueInLS) countBreak = valueInLS;
  localStorage.setItem("breakCount", ++countBreak);
  document.getElementById("break").innerHTML="<p>Order Placed!<p>Number of orders placed till now are " +countBreak+ "</p></p>";
  const element = document.getElementById("demo");
  element.remove();
}

let countEven = 0; 

function myEveningSnack() {
  const valueInLS = localStorage.getItem("snackCount");
  alert(valueInLS);
  if (valueInLS) countEven = valueInLS;
  localStorage.setItem("snackCount", ++countEven);
  document.getElementById("snack").innerHTML="<p>Order Placed!<p>Number of orders placed till now are " +countEven+ "</p></p>";
  const element1 = document.getElementById("demo2");
  element1.remove();
}