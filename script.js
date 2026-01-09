const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);

function playMusic() {
  document.getElementById("bgm").play();
}