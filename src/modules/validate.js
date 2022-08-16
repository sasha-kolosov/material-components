class Validate {
    constructor(form) {

        this.inputs = document.querySelectorAll(`#${form} .validate`)

        this.EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

        this.PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        
        this.TEL_REGEXP = /^(\+7|8)(\(\d{3}\)|\d{3})\d{7}$/

    }

    validate(input) {

        const validateSuccess = () => {

            document.querySelector(`label[for="${input.getAttribute('id')}"]`).style.color = '#4CAF50'

            input.style.borderBottom = `2px solid #4CAF50`

            return 'success'

        }

        const validateError = () => {

            document.querySelector(`label[for="${input.getAttribute('id')}"]`).style.color = '#F44336'

            input.style.borderBottom = `2px solid #F44336`

            return 'error'

        }

        if(input.getAttribute('name') == 'name' || input.getAttribute('name') == 'surname') {

            if(input.value.replace(/\s/g, '').length > 2) {

                validateSuccess()

            } else {

                validateError()

            }
            
        } else if(input.getAttribute('name') == 'email') {

            if(this.EMAIL_REGEXP.test(input.value)) {

                validateSuccess()

            } else {

                validateError()
            
            }
        } else if(input.getAttribute('name') == 'password') {
            
            if(this.PASSWORD_REGEXP.test(input.value)) {
            
                validateSuccess()
            
            } else {
            
                validateError()
            
            }
        
        } else if(input.getAttribute('name') == 'tel') {
        
            if(this.TEL_REGEXP.test(input.value)) {
        
                validateSuccess()
        
            } else {
        
                validateError()
        
            }
        
        }

    }

    start() {
        
        for(let i = 0; i < this.inputs.length; i++) {

            this.inputs[i].addEventListener('input', () => {

                this.validate(this.inputs[i])
                
            })

        }

    }

    check(input) {

        return this.validate(input)
        
    }

}