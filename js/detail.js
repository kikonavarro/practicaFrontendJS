import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import AdDetailController from "./controllers/AdDetailController.js"
import NavBarController from "./controllers/NavBarController.js";

window.addEventListener('DOMContentLoaded', function() {

    //cogemos el elemento del HTML donde queremos cargar la barra de navegación
    const navBar = document.querySelector('.navbardiv')
    // instanciamos el controlador pásandole la barra de navegación
    const navBarController = new NavBarController(navBar)
    navBarController.showNavBar()
    
    const messagesDiv = document.querySelector('.messages')
    new MessageController(messagesDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    // obtengo el ID del anuncio a cargar de la URL
    const id = new URLSearchParams(window.location.search).get('id')
    
    // instanciamos el controlador del detalle del anuncio
    const adDiv = document.querySelector('.ad')
    new AdDetailController(adDiv, id)



})