const video = document.getElementById("myVideo");
video.addEventListener("ended", function () {
  window.location.href = "./html/main.html";
});
const screenWidth = window.screen.width;
const tailleVideo = document.getElementById("myVideo");
console.log(`Screen width: ${screenWidth}`);
if (screenWidth < 768) {
  tailleVideo.classList.add("taille-tel");
} else {
  tailleVideo.classList.remove("taille-tel");
}
