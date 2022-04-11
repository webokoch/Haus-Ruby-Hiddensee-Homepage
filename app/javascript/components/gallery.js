const initGallery = () => {

  var images = document.getElementsByClassName('gallery-img');
  var close = document.getElementById('close-modal');
  var prev = document.getElementById('prev-img');
  var next = document.getElementById('next-img');
  var imageIndex = 1

  function openModal() {
    document.getElementById("modal").style.display = "block";
  };

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  };

  function plusImages(n) {
    showImages(imageIndex += n);
  };

  function showImages(n) {
    var i;
    var images = document.getElementsByClassName("modal-image");
    if (n > images.length) {
        imageIndex = 1
    } else if (n < 1) {
        imageIndex = images.length
    } else {
        imageIndex = n
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[imageIndex-1].style.display = "block";
  };

  Array.from(images).map(image => {
    image.addEventListener('click', (event) => {
      openModal();
      imageIndex = event.target.dataset.id;
      showImages(imageIndex);
    });
  });

  close.addEventListener('click', () => {
    closeModal();
  });

  prev.addEventListener('click', () => {
    plusImages(-1);
  });

  next.addEventListener('click', () => {
    plusImages(1);
  });

};

export {initGallery};