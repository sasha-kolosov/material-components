class Slider {
    constructor(slider) {

        this.slides = document.querySelectorAll(`#${slider} .slider-item`)

        this.arrowLeft = document.querySelector(`#${slider} .slider-arrow-left`)

        this.arrowRight = document.querySelector(`#${slider} .slider-arrow-right`)

    }

    start() {

        for(let i = 0; i < this.slides.length; i++) {

            this.slides[i].style.left = `${i * this.slides[i].offsetWidth}px`

        }

        if(this.arrowLeft !== undefined && this.arrowRight !== undefined ) {

            this.arrowRight.addEventListener('click', () => {

                if(this.slides[this.slides.length - 1].style.left != '0px') {

                    for(let i = 0; i < this.slides.length; i++) {

                        this.slides[i].style.left = `${parseInt((this.slides[i].style.left).slice(0, -2)) - this.slides[i].offsetWidth}px`

                    }

                }

            })

            this.arrowLeft.addEventListener('click', () => {

                if(this.slides[0].style.left != '0px') {

                    for(let i = 0; i < this.slides.length; i++) {

                        this.slides[i].style.left = `${parseInt((this.slides[i].style.left).slice(0, -2)) + this.slides[i].offsetWidth}px`
    
                    }

                }

            })

        } 

    }
}