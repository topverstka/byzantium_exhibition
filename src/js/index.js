import '../scss/style.scss'
import VideoSection from './components/VideoSection/VideoSection'
import Menu from './components/Menu'

new Menu().init()
customElements.define('video-section', VideoSection)