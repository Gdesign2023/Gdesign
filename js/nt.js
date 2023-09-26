let aff_logo = 0;
const imageSources_logo_1 = "../public/carousel-nt/logo-one.png";
const imageSources_logo_2 = "../public/carousel-nt/logo-two.png";
const imageSources_logo_3 = "../public/carousel-nt/logo-tree.png";
const imageSources_logo_4 = "../public/carousel-nt/logo-four.png";
const imageSources_logo_5 = "../public/carousel-nt/logo-five.png";

function updateImage_logo() {
  const imageElement_logos = document.getElementById("imageElement-logo"); // Obtenez l'élément ici

  if (aff_logo === 0) {
    imageElement_logos.src = imageSources_logo_1;
  } else if (aff_logo === 1) {
    imageElement_logos.src = imageSources_logo_2;
  } else if (aff_logo === 2) {
    imageElement_logos.src = imageSources_logo_3;
  } else if (aff_logo === 3) {
    imageElement_logos.src = imageSources_logo_4;
  } else if (aff_logo === 4) {
    imageElement_logos.src = imageSources_logo_5;
  }
}

function next_logo() {
  aff_logo = aff_logo + 1;
  if (aff_logo > 4) {
    aff_logo = 0; // Loop back to the first image
  }
  updateImage_logo();
}

function prev_logo() {
  aff_logo = aff_logo - 1;
  if (aff_logo < 0) {
    aff_logo = 4; // Loop back to the last image
  }
  updateImage_logo();
}
updateImage_logo();

let aff_flyers = 0;
const imageSources_flyers_1 = "../public/carousel-nt/flyers-one.jpg";
const imageSources_flyers_2 = "../public/carousel-nt/flyers-two.jpg";
const imageSources_flyers_3 = "../public/carousel-nt/flyers-tree.jpg";

function updateImage_flyers() {
  const imageElement_flyers = document.getElementById("imageElement-flyers"); // Obtenez l'élément ici

  if (aff_flyers === 0) {
    imageElement_flyers.src = imageSources_flyers_1;
  } else if (aff_flyers === 1) {
    imageElement_flyers.src = imageSources_flyers_2;
  } else if (aff_flyers === 2) {
    imageElement_flyers.src = imageSources_flyers_3;
  }
}
function next_flyers() {
  aff_flyers = aff_flyers + 1;
  if (aff_flyers > 2) {
    aff_flyers = 0; // Loop back to the first image
  }
  updateImage_flyers();
}
function prev_flyers() {
  aff_flyers = aff_flyers - 1;
  if (aff_flyers < 0) {
    aff_flyers = 2; // Loop back to the last image
  }
  updateImage_flyers();
}
updateImage_flyers();

let aff_miniature = 0;
const imageSources_miniature_1 = "../public/carousel-nt/miniature-one.jpg";
const imageSources_miniature_2 = "../public/carousel-nt/miniature-two.jpg";
const imageSources_miniature_3 = "../public/carousel-nt/miniature-tree.jpg";
const imageSources_miniature_4 = "../public/carousel-nt/miniature_four.png";

function updateImage_miniature() {
  const imageElement_miniature = document.getElementById(
    "imageElement-miniature"
  ); // Obtenez l'élément ici

  if (aff_miniature === 0) {
    imageElement_miniature.src = imageSources_miniature_1;
  } else if (aff_miniature === 1) {
    imageElement_miniature.src = imageSources_miniature_2;
  } else if (aff_miniature === 2) {
    imageElement_miniature.src = imageSources_miniature_3;
  } else if (aff_miniature === 3) {
    imageElement_miniature.src = imageSources_miniature_4;
  }
}
function next_miniature() {
  aff_miniature = aff_miniature + 1;
  if (aff_miniature > 3) {
    aff_miniature = 0; // Loop back to the first image
  }
  updateImage_miniature();
}
function prev_miniature() {
  aff_miniature = aff_miniature - 1;
  if (aff_miniature < 0) {
    aff_miniature = 3; // Loop back to the last image
  }
  updateImage_miniature();
}
updateImage_miniature();
