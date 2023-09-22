var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
  sidenav.classList.remove("close-nav");
}

function closeNav() {
  sidenav.classList.remove("active");
  sidenav.classList.add("close-nav");
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