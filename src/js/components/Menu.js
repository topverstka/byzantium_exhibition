import { bodyLock, bodyUnlock } from "../helpers/bodyLock"

class Menu {
    constructor() {
        this.menu = document.querySelector('.menu')
        this.menuWrap = this.menu.querySelector('.menu__wrap')
        this.openner = document.querySelector('.header__burger')
        this.closer = document.querySelector('.menu__burger')
        this.linkArr = this.menu.querySelectorAll('a')
    }

    init() {
        this.openner.addEventListener('click', () => this.open())
        this.closer.addEventListener('click', () => this.close())
        this.menu.addEventListener('click', () => this.close())
        this.menuWrap.addEventListener('click', e => { e.stopPropagation() })
        this.linkArr.forEach(link => {
            link.addEventListener('click', () => {
                this.close()
            })
        })
    }

    open() {
        console.log(this.menu)
        this.menu.classList.add('is-show')
        bodyLock()
    }

    close() {
        this.menu.classList.remove('is-show')
        bodyUnlock()
    }
}

export default Menu