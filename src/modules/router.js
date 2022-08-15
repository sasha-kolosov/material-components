{
    // Router

    const pages = {}
    const path = {}

    const ELEMENTS = {
        pages: document.querySelectorAll('[page]'),
        path: document.querySelectorAll('[path]')
    }   

    ELEMENTS.pages[0].style.display = 'block'

    window.location.hash = '/form'

    for(let i = 0; i < ELEMENTS.pages.length; i++) {

        pages[`${ELEMENTS.pages[i].getAttribute('page')}`] = ELEMENTS.pages[i]

    }

    for(let i = 0; i < ELEMENTS.path.length; i++) {

        path[`${ELEMENTS.path[i].getAttribute('path')}`] = ELEMENTS.path[i]

    }

    for(let i = 0; i < ELEMENTS.path.length; i++) {

        ELEMENTS.path[i].addEventListener('click', () => {

            window.location.hash = `/${ELEMENTS.path[i].getAttribute('path')}`

        })

    }

    window.addEventListener('hashchange', () => {

        const hash = window.location.hash.slice(2)

        for(let i = 0; i < ELEMENTS.pages.length; i++) {

            ELEMENTS.pages[i].style.display = 'none'

        }

        pages[`${hash}`].style.display = 'block'

    })

}