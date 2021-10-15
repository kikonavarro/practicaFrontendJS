import AdFormController from "./controllers/AdFormController.js"
import MessageController from "./controllers/MessageController.js"
import DataService from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', function(){

    if (DataService.isAuthenticed() === false) {
        window.location.href = '/login.html?next=/new.html'
    }

    // 1. Seleccionamos el nodo del formulario
    const form = document.querySelector('form')

    // 2. Crear una instancia del controlador con el formulario
    new AdFormController(form)

    // 3. Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.messages')

    // 4. Crear una instancia de ErrorMessageController
    new MessageController(messages)

})
