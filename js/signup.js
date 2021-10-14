import SignupController from "./controllers/SignupController.js";
import MessageController from "./controllers/MessageController.js"

window.addEventListener("DOMContentLoaded", function () {
	//seleccionamos el form
	const form = document.querySelector("form");

	//creamos una instancia del controlador llamamos al controlador

	new SignupController(form);

	// 3. Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.error-message')

    // 4. Crear una instancia de ErrorMessageController
    new MessageController(messages)
});
