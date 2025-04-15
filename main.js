// Initialize Swiper
var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Video player functionality
let playButtons = document.querySelectorAll(".play-btn");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myVideo");
let closebtn = document.querySelector(".close-video");

playButtons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    video.classList.add("show-video");
    myvideo.play();
  });
});

closebtn.addEventListener("click", function() {
  video.classList.remove("show-video");
  myvideo.pause();
  myvideo.currentTime = 0;
});

