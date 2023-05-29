import '../scss/style.scss'
import VideoSection from './components/VideoSection/VideoSection'
import Menu from './components/Menu'
import Slider from './components/Slider/Slider'

if (document.querySelector('.menu')) {
    new Menu().init()
}
customElements.define('video-section', VideoSection)

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
