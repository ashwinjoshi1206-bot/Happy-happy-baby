const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);

function playMusic() {
  document.getElementById("bgm").play();
}
