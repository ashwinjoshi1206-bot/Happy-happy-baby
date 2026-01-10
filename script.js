// Slideshow images
const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

// Change image every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
}, 3000);

// Play music
function playMusic() {
  document.getElementById("bgMusic").play();
}