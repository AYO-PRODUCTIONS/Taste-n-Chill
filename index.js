  let slideIndex = 0;
  let slideTimer;

  function showSlides(n) {
    const slides = document.getElementsByClassName("testimonials-grid");
    const dots = document.getElementsByClassName("dot");

    if (n === undefined) {
      slideIndex++;
    } else {
      slideIndex = n - 1;
    }

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "grid";
    dots[slideIndex].className += " active";

    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 10000);
  }

  function currentSlide(n) {
    showSlides(n);
  }
  

  // Start the slideshow
  window.onload = () => {
    showSlides();
  };

console.log(slides.length)