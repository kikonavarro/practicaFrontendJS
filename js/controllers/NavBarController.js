import DataService from "../services/DataService.js"
import { navBarView } from "../views.js"

export default class NavBarController {

    constructor(element) {
        this.element = element
    }

    showNavBar () {
        // si no está logueado mostramos la barra entera para que pueda hacer Login o Crear usuario
        if (DataService.isAuthenticed() === false) {
            this.element.innerHTML = navBarView()
            document.querySelector('.logout').style.display ='none'
             
        } else {
            // si el usuario está logueado pintamos la barra mostrando el botón de crear anuncio
            this.element.innerHTML = navBarView()
            document.querySelector('.signup').style.display ='none'
            document.querySelector('.login').style.display ='none'
        }


    }
}