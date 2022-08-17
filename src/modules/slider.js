class Slider {
    constructor(slider) {

        this.slides = document.querySelectorAll(`#${slider} .slider-item`)

        this.arrowLeft = document.querySelector(`#${slider} .slider-arrow-left`)

        this.arrowRight = document.querySelector(`#${slider} .slider-arrow-right`)

    }

    checkDisabled() {

        if(this.slides[this.slides.length - 1].style.left == '0px') {

            this.arrowRight.classList.add('slider-arrow-disabled')

        } else {

            this.arrowRight.classList.remove('slider-arrow-disabled')

        }

        if(this.slides[0].style.left == '0px') {

            this.arrowLeft.classList.add('slider-arrow-disabled')
             
        } else {

            this.arrowLeft.classList.remove('slider-arrow-disabled')

        }

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

                this.checkDisabled()

            })

            this.arrowLeft.addEventListener('click', () => {

                if(this.slides[0].style.left != '0px') {

                    for(let i = 0; i < this.slides.length; i++) {

                        this.slides[i].style.left = `${parseInt((this.slides[i].style.left).slice(0, -2)) + this.slides[i].offsetWidth}px`
    
                    }

                }

                this.checkDisabled()

            })

        } 

        this.checkDisabled()

    }
}