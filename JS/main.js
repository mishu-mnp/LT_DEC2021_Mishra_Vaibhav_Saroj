// ***************** Slider *****************
var slideIndex = 0;
showSlides();
var slides, dots;

function showSlides() {
    var i;
    // get slides length
    slides = document.getElementsByClassName("slides");
    // get dots length
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000);
}

function moveSlides(position) {
    console.log("Move")
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function currentSlide(index) {
    if (index > slides.length) { index = 1 }
    else if (index < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}



// Slider for Best Seller
var bestIndex = 1;
showDivs(bestIndex);

function plusDivs(n) {
    showDivs(bestIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide__watches");
    if (n > x.length) { bestIndex = 1 }
    if (n < 1) { bestIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[bestIndex - 1].style.display = "flex";
}

// Slider for Brands
var slideBIndex = 0;
showBSlides();
var bSlides, bDots;

function showBSlides() {
    var i;
    // get slides length
    bSlides = document.getElementsByClassName("brand__slide");
    // get dots length
    bDots = document.getElementsByClassName("bdot");
    for (i = 0; i < bSlides.length; i++) {
        bSlides[i].style.display = "none";
    }
    slideBIndex++;
    if (slideBIndex > bSlides.length) { slideBIndex = 1 }
    for (i = 0; i < bDots.length; i++) {
        bDots[i].className = bDots[i].className.replace(" active", "");
    }
    bSlides[slideBIndex - 1].style.display = "flex";
    bDots[slideBIndex - 1].className += " active";
    setTimeout(showBSlides, 2000);
}

function currentBSlide(index) {
    if (index > bSlides.length) { index = 1 }
    else if (index < 1) { index = bSlides.length }
    for (i = 0; i < bSlides.length; i++) {
        bSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        bDots[i].className = bDots[i].className.replace(" active", "");
    }
    bSlides[index - 1].style.display = "flex";
    bDots[index - 1].className += " active";
}

// Navbar Toggler
const toggleBar = () => {

    var toggleMenu = document.getElementsByClassName('navHeader')[0];
    console.log(toggleMenu.style.height)

    if (toggleMenu.style.height == '6rem') {
        toggleMenu.style.height = '20rem'
    } else {
        toggleMenu.style.height = '6rem'
    }

}
