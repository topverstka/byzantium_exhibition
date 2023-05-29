import '../scss/style.scss'
import VideoSection from './components/VideoSection/VideoSection'
import Menu from './components/Menu'
import Slider from './components/Slider/Slider'

if (document.querySelector('.menu')) {
    new Menu().init()
}
customElements.define('video-section', VideoSection)

// const sliderNode = document.querySelector('.product__slider')
// if (sliderNode) {
// }
new Slider(
    document.querySelector('.product__slider'),
    {
        // align: 'start',
        // containScroll: 'trimSnaps',
        // skipSnaps: true,
        // watchDrag: false,
        nav: {
            prev: document.querySelector('.product__slider-arrow.is-prev'),
            next: document.querySelector('.product__slider-arrow.is-next'),
        },
    }
)

new Slider(
    document.querySelector('.s-exh__slider'),
    {
		align: 'start',
		containScroll: 'trimSnaps',
		// skipSnaps: true,
        // watchDrag: false,
        nav: {
            prev: document.querySelector('.s-exh__slider-arrow.is-prev'),
            next: document.querySelector('.s-exh__slider-arrow.is-next'),
        },
    }
)
