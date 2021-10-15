import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class AdFormController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const author = data.get ('author')
                const product = data.get('product')
                const image = data.get('image')
                const price = data.get('price') 
                try {
                    const result = await DataService.createAd(author, product, image, price)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio creado!')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }

}
