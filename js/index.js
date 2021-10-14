import AdListController from './controllers/AdListController.js'

window.addEventListener('DOMContentLoaded', function() {

    // cogemos el elemento del HTML donde queremos cargar los anuncios
    const adListDiv = document.querySelector('.ad-list')

    // instanciamos el controlador pasándole el elemento del DOM donde queremos cargar los anuncios
    const adListController = new AdListController(adListDiv)

    // pintar los anuncios
    adListController.showAds()
})