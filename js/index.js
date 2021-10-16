import ErrorMessageController from './controllers/ErrorMessageController.js'
import AdListController from './controllers/AdListController.js'
import SearchController from './controllers/SearchController.js'
import NavBarController from './controllers/NavBarController.js'
import LoaderController from './controllers/LoaderController.js'

window.addEventListener('DOMContentLoaded', function() {

    //cogemos el elemento del HTML donde queremos cargar la barra de navegación
    const navBar = document.querySelector('.navbardiv')
    // instanciamos el controlador pásandole la barra de navegación
    const navBarController = new NavBarController(navBar)
    navBarController.showNavBar()


    const errorDiv = document.querySelector('.error-message')
    const errorMessageController = new ErrorMessageController(errorDiv)
    
    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)
    // cogemos el elemento del HTML donde queremos cargar los anuncios
    const adListDiv = document.querySelector('.ad-list')

    // instanciamos el controlador pasándole el elemento del DOM donde queremos cargar los anuncios
    const adListController = new AdListController(adListDiv, errorMessageController)

    // pintar los anuncios
    adListController.showAds()

    const search = document.querySelector('#search')
    new SearchController(search)
})