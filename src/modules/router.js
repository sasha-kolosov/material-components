class Router {
    constructor() {
        this.pages = document.querySelectorAll('[page]')
        this.path = document.querySelectorAll('[path]')
    }

    init() {
        const pages = {}
        const path = {}

        this.pages[0].style.display = 'block'
        window.location.hash = `/${this.path[0].getAttribute('path')}`

        for(let i = 0; i < this.pages.length; i++) {
            pages[`${this.pages[i].getAttribute('page')}`] = this.pages[i]
        }

        for(let i = 0; i < this.path.length; i++) {
            path[`${this.path[i].getAttribute('path')}`] = this.path[i]
        }

        for(let i = 0; i < this.path.length; i++) {
            this.path[i].addEventListener('click', () => {
                window.location.hash = `/${this.path[i].getAttribute('path')}`
            })
        }

        window.addEventListener('hashchange', () => {
            for(let i = 0; i < this.pages.length; i++) {
                this.pages[i].style.display = 'none'
            }
            pages[`${window.location.hash.slice(2)}`].style.display = 'block'
        })
    }
}