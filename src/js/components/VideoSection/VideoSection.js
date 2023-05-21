import styles from './VideoSection.styles.scss?inline'

class VideoSection extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })

        // Стилизация элемента и добавление стилей
        const style = document.createElement('style')
        style.textContent = styles
        this.shadow.appendChild(style)

        // Элементы компонента
        const div = document.createElement('div')
        const img = document.createElement('img')

        // Настройка div
        div.classList.add('video-frame')
        div.setAttribute('role', 'button')
        div.setAttribute('tabindex', 0)
        this.shadow.appendChild(div)

        // Настройка img
        img.classList.add('s-video__img')
        img.setAttribute('src', this.getAttribute('thumb') || '')
        img.setAttribute('alt', this.getAttribute('thumb-alt') || '')
        div.appendChild(img)

        this.videoBlock = div
        this.videoThumb = img
        this.videoType = this.getAttribute('video-youtube') ? 'youtube' : 'locale'
        this.videoPath = this.videoType === 'youtube' ? this.getAttribute('video-youtube') : this.getAttribute('video')

        this.videoBlock.addEventListener('click', (e) => {
            const iframeBlock = document.createElement('div')
            const iframe = document.createElement('iframe')

            iframeBlock.classList.add('video-frame__block')
            iframe.setAttribute('src', this.videoPath + '?autoplay=1')
            iframe.setAttribute('allowfullscreen', '')
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')

            iframeBlock.appendChild(iframe)
            this.videoBlock.appendChild(iframeBlock)
        })
    }
}

export default VideoSection
