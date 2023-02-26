

type simpleCarouselSlider = {
    start: Function
}

type sliderParams = {
    slides: string[]
}

const simpleCarouselSlider: simpleCarouselSlider = {
    start: (params: sliderParams) => {
        const slider = document.querySelector('#slider');
        const slidesContainer: HTMLElement = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slider-container .slide-item');
        const slidesTotalWidth = 960 * slides.length;
        slidesContainer.style.width = slidesTotalWidth + 'px';

        let slideIndex = 0;
        let slidesWidth = 0;

        const slideInterval = setInterval(() => {

            if (slideIndex === slides.length) {
                slideIndex = 0;
                slidesWidth = 0;
                slidesContainer.style.marginLeft = `0px`;
            }

            slidesContainer.style.marginLeft = `-${slidesWidth}px`;

            slidesWidth = slidesWidth + 960;
            slideIndex++;
        }, 3000);

        return slideInterval;
    }
}

window['simpleCarouselSlider'] = simpleCarouselSlider;
