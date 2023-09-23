var sidenav = document.getElementById("mySidenav");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
  sidenav.classList.remove("close-nav");
  button1.style.borderTop="2px solid #fff";
  button2.style.borderTop="2px solid #fff";
  button3.style.borderTop="2px solid #fff";
  button4.style.borderTop="2px solid #fff";
  button5.style.borderTop="2px solid #fff";
}

function closeNav() {
  sidenav.classList.remove("active");
  sidenav.classList.add("close-nav");
  button1.style.borderTop="none";
  button2.style.borderTop="none";
  button3.style.borderTop="none";
  button4.style.borderTop="none";
  button5.style.borderTop="none";
}

function page(Name){
  if (Name === "main"){
    window.location.href = "../html/main.html";
  }
  else if (Name === "cqnf"){
    window.location.href = "../html/cqnf.html";
  }
  else if (Name === "nt"){
    window.location.href = "../html/nt.html";
  }
  else if (Name === "presentation"){
    window.location.href = "../html/presentation.html";
  }
  else if (Name === "nc"){
    window.location.href = "../html/nc.html";
  }
}