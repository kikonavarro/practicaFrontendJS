import PubSub from "../services/PubSub.js"; 


const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export default class SearchController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('input', debounce(() => {
            
            const searchProduct = this.element.value
            //console.log('PUBLISH', 'SEARCH', this.element.value)
            PubSub.publish(PubSub.events.SEARCH_PRODUCT, searchProduct)
        }, 1000))
    }

}
