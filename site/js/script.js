//Slideshow JS - used https://www.w3schools.com/howto/howto_js_slideshow.asp as a reference here
var slideIndex = 1;
var textIndex = 2; //start slideshow 1st image on middle text box ("Aesthetic")

window.onload = function () {
    slideshow(slideIndex);
};

function slideshow(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    var text = document.getElementsByClassName("slideshow-text");

    //handle indexes, textIndex should always be one ahead of slideIndex
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; } //for scrolling backwards
    textIndex = slideIndex + 1;
    if (textIndex > text.length) { textIndex = 1; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < text.length; i++) {
        text[i].className = text[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    text[textIndex-1].className += " active";
}

function currentSlide(n) {
    slideshow(slideIndex = n);
}

function shiftSlideshow(n) {
    slideshow(slideIndex += n);
}