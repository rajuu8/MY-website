var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,

  // ✅ autoplay config
  autoplay: {
    delay: 5000, // har 3 second me slide change hoga
    disableOnInteraction: false, // user click kare to bhi autoplay chalta rahe
  },
});
