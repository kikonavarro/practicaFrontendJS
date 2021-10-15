import ErrorMessageController from './controllers/ErrorMessageController.js'
import AdListController from './controllers/AdListController.js'
import SearchController from './controllers/SearchController.js'

window.addEventListener('DOMContentLoaded', function() {

    
    const errorDiv = document.querySelector('.error-message')
    const errorMessageController = new ErrorMessageController(errorDiv)
    // cogemos el elemento del HTML donde queremos cargar los anuncios
    const adListDiv = document.querySelector('.ad-list')

    // instanciamos el controlador pasándole el elemento del DOM donde queremos cargar los anuncios
    const adListController = new AdListController(adListDiv, errorMessageController)

    // pintar los anuncios
    adListController.showAds()

    const search = document.querySelector('#search')
    new SearchController(search)
})