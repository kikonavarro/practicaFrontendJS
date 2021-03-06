import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"


export default class SignupController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    checkIfAllPasswordsAreEqual() {
        const inputsPassword = this.element.querySelectorAll('input[type="password"]')

        // guardo las contraseñas que hay en los inputs
        let passwords = []
        for (const input of inputsPassword) {
            if (passwords.includes(input.value) === false) {
                passwords.push(input.value)
            }
        }

        if (passwords.length == 1) {
            // esta bien
            for (const input of inputsPassword) {
                input.setCustomValidity('')
            }
        } else {
            // esta mal
            for (const input of inputsPassword) {
                input.setCustomValidity('Las password no coinciden')
            }
        }

    }

    attachEventListeners() {

        this.element.addEventListener('submit', async function (event) {
           
            //evitamos que el formulario se envíe
            event.preventDefault()

            //comprobar si el formulario valida
            if (this.checkValidity()) {
                const url = new URLSearchParams(window.location.search)
                const next = url.get('next') || '/login.html'
                try {
                    const data = new FormData(this)
                    const username = data.get('username')  // valor del input[name="username"]
                    const password = data.get('password')  // valor del input[name="password"]
                    const result = await DataService.registerUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado correctamente')
                    location.href = next
                } catch (error) {
                    // Cuando ocurre un error, lo grito para que se enteren otros controladores
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            } else {
                // si no valida, mostrar un mensaje de error
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el campo ${element.name}: ${element.validationMessage}. `
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage)
            }

        })
        
        // establecer la validación personalizada de los input de tipo password
        // for (const input of this.element.querySelectorAll('input[type="password"]'))
        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () => {
               this.checkIfAllPasswordsAreEqual()
            })
        })

        // controlamos cambios en cada uno de los inputs y validamos el formulario para activar o desactivar el botón
        this.element.querySelectorAll('input').forEach(inputElement => {
            // para cada input del formulario
            inputElement.addEventListener('input', () => {
                // cada vez que el usuario escriba en cada input
                if (this.element.checkValidity()) {
                    // si el formulario esta ok, habilitamos boton
                    this.element.querySelector('button').removeAttribute('disabled')
                } else {
                    // si no esta ok, deshabilitamos boton
                    this.element.querySelector('button').setAttribute('disabled', true)
                }
            })
        })

    }
}