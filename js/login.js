import MessageController from "./controllers/MessageController.js";
import LoginController from "./controllers/LoginController.js";

window.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector('form');
    new LoginController(form)
    const messages = document.querySelector('.error-message')
    new MessageController(messages)
})