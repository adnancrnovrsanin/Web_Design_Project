class FormValidator {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.status = false;
    }

    initialize() {
        this.validateOnEntry();
        this.validateOnSubmit();
        this.setRequirement();
        this.submitForm();
    }

    setRequirement = () => {
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            input.addEventListener('focusin', e => {
                let element = document.getElementById(`${field}Req`);

                element.classList.remove('hidden');
            })
        });
        
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            input.addEventListener('focusout', e => {
                let element = document.getElementById(`${field}Req`);

                element.classList.add('hidden');
            })
        });
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`);
                self.validateFields(input);
            })
        })
    }

    validateOnEntry() {
        let self = this;
        
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);

            input.addEventListener('keyup', e => {
                self.validateFields(input);
            })
        })
    }

    validateFields(field) {

        // Check presence of values

        if (field.value.trim() === "") {
            this.setStatus(field, `${field.previousElementSibling.innerText} cannot be blank`, "error");
        } else {
            this.setStatus(field, null, "success");
        }

        // check for a valid email address
        if (field.type === "email") {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (regex.test(field.value)) {
                this.setStatus(field, null, "success");
            } else {
                this.setStatus(field, "Please enter a valid email address", "error");
            }
        }

        if (field.type === "textarea") {
            if (field.value.trim().length < 30 || field.value.trim().length > 1000) {
                this.setStatus(field, `${field.previousElementSibling.innerText} is not the right size`, "error");
            } else {
                this.setStatus(field, null, "success");
            }
        }
    }

    setStatus(field, message, status) {
        const successIcon = field.parentElement.querySelector('.icon-success');
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessage = field.parentElement.querySelector('.error-message');

        if (status === "success") {
            if (errorIcon) { errorIcon.classList.add('hidden') };
            if (errorMessage) { errorMessage.innerText = "" };
            successIcon.classList.remove('hidden');
            field.classList.remove('input-error');
            this.status = true;
        }

        if (status === "error") {
            if (successIcon) { successIcon.classList.add('hidden') };
            errorMessage.innerText = message;
            errorIcon.classList.remove('hidden');
            field.classList.add('input-error');
            this.status = false;
        }
    }

    submitForm() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            if (this.status === true) {
                window.location.pathname = "/media/actaer/Adnan%20Crnovr%C5%A1anin/Projects/Projekat%20iz%20VebDizajna/FlutterCamp/index.html";
            }
        })
    }
}

const form = document.querySelector('.form');
const fields = ["username", "surname", "email", "mailBody"];

const validator = new FormValidator(form, fields)
validator.initialize();

document.getElementById("mailBody").addEventListener("keyup", e => {
    let value = e.target.value.length;
    let current = document.getElementById("current");

    current.textContent = value;

    if (value > 30 && value < 1000) {
        current.style.color = "#098518";
        current.style.fontWeight = "normal";
    } else {
        current.style.color = "#a80707";
        current.style.fontWeight = "bold";
    }
})
