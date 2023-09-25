let aff = 0;

function updateImage() {
  const imageElement = document.getElementById("imageElement"); // Obtenez l'élément ici

  const imageSources1 = "../public/carousel-main/com-one.png";
  const imageSources2 = "../public/carousel-main/com-two.png";
  const imageSources3 = "../public/carousel-main/com-tree.png";
  const imageSources4 = "../public/carousel-main/com-four.png";
  const imageSources5 = "../public/carousel-main/com-five.png";

  if (aff === 0) {
    imageElement.src = imageSources1;
  } else if (aff === 1) {
    imageElement.src = imageSources2;
  } else if (aff === 2) {
    imageElement.src = imageSources3;
  } else if (aff === 3) {
    imageElement.src = imageSources4;
  } else if (aff === 4) {
    imageElement.src = imageSources5;
  }

  console.log("aff:", aff);
  console.log("imageElement.src:", imageElement.src);
}

function next() {
  aff = aff + 1;
  if (aff > 4) {
    aff = 0; // Loop back to the first image
  }
  updateImage();
}

function prev() {
  aff = aff - 1;
  if (aff < 0) {
    aff = 4; // Loop back to the last image
  }
  updateImage();
}
updateImage();
