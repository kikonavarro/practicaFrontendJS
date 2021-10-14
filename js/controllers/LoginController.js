import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class LoginController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        // manejamos el envio del formulario para hacer el login
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                // hacemos el login
                const data = new FormData(this.element)
                const username = data.get('username')  // valor del input[name="username"]
                const password = data.get('password')  // valor del input[name="password"]
                const url = new URLSearchParams(window.location.search)
                const next = url.get('next') || '/'
                try {
                    const result = await DataService.login(username, password)
                    location.href = next  // redirigimos al usuario al home
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            } else {
                PubSub.publish(PubSub.events.SHOW_ERROR, 'Ambos campos son obligatorios')
            }
        })
    }

}