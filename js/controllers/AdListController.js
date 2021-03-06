import { adsView } from "../views.js"
import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js";


export default class AdListController {
    
    constructor (element, errorMessageController) {
        this.element = element
        this.errorMessageController = errorMessageController
        PubSub.subscribe(PubSub.events.SEARCH_PRODUCT,searchProduct => {
            this.showAdsSearched(searchProduct)
        })
        
    }

    async showAds () {
        try {
            const ads = await DataService.getAds()
            for (const ad of ads) {
                const adElement = document.createElement('article')
                adElement.innerHTML = adsView(ad)
                this.element.appendChild(adElement)
            }
        } catch (error) {
            this.errorMessageController.showError(error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    async showAdsSearched (searchProduct) {       
        try {
            const ads = await DataService.getAdsSearched(searchProduct)
            for (const ad of ads) {
                if (searchProduct !== '')
                this.element.innerHTML =''
                const adElement = document.createElement('article')
                adElement.innerHTML = adsView(ad)
                this.element.appendChild(adElement)
            }
        } catch (error) {
            this.errorMessageController.showError(error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }
}