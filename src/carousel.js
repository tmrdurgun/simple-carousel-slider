var simpleCarouselSlider = {
    start: function (params) {
        var slider = document.querySelector('#slider');
        var slidesContainer = document.querySelector('.slides');
        var slides = document.querySelectorAll('.slider-container .slide-item');
        var slidesTotalWidth = 960 * slides.length;
        slidesContainer.style.width = slidesTotalWidth + 'px';
        var slideIndex = 0;
        var slidesWidth = 0;
        var slideInterval = setInterval(function () {
            if (slideIndex === slides.length) {
                slideIndex = 0;
                slidesWidth = 0;
                slidesContainer.style.marginLeft = "0px";
            }
            slidesContainer.style.marginLeft = "-" + slidesWidth + "px";
            slidesWidth = slidesWidth + 960;
            slideIndex++;
        }, 3000);
        return slideInterval;
    }
};
window['simpleCarouselSlider'] = simpleCarouselSlider;
