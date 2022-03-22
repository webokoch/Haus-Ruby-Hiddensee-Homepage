const initBannerAutoSlide = () => {
  var autoSlideIndex = 0;
  showAutoSlides();

  function showAutoSlides() {
    var i;
    var autoSlides = document.getElementsByClassName("auto-slide");
    for (i = 0; i < autoSlides.length; i++) {
      autoSlides[i].style.display = "none";  
    }
    autoSlideIndex++;
    if (autoSlideIndex > autoSlides.length) {autoSlideIndex = 1}    
    autoSlides[autoSlideIndex-1].style.display = "block"; 
    setTimeout(showAutoSlides, 4000);
  } 
};
export {initBannerAutoSlide};