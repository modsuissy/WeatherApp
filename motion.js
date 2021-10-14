//Width of screen after load of document
document.querySelector(".widescreen span").innerHTML = this.window.innerWidth;

//Realtime screen width after resizing
window.addEventListener("resize", function actWidth() {
  document.querySelector(".widescreen span").innerHTML = this.window.innerWidth;
});

const menuBtn = document.querySelector(".menu");
const mainContent = document.querySelector(".main-content");
const collapseWeather = document.querySelector(".main-weather");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    collapseWeather.classList.add("collapse");
    menuBtn.classList.add("open");
    menuOpen = true;
    mainContent.classList.add("open");
  } else {
    collapseWeather.classList.remove("collapse");
    menuBtn.classList.remove("open");
    mainContent.classList.remove("open");
    menuOpen = false;
  }
});
