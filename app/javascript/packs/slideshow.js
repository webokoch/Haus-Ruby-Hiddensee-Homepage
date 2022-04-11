const initSlideShow = () => {

  var prevSlide = document.getElementById('prev-slide');
  var nextSlide = document.getElementById('next-slide');

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  };

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var text = document.getElementsByClassName("text");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        text[i].className = text[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    text[slideIndex-1].className += " active";
    captionText.innerHTML = text[slideIndex-1].alt;
  }

  prevSlide.addEventListener('click', () => {
    plusSlides(-1)
  });

  nextSlide.addEventListener('click', () => {
    plusSlides(1);
  });

};

export {initSlideShow};