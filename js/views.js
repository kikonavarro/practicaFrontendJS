export function adsView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div class="post">
        <strong class="author">${ad.author}</strong>
        <p class="product">${ad.product}</p>
        <p class="image">${ad.image}</p>
        <p class="price">${ad.price} euros</p>
        <p class="status">${ad.status} </p>
    </div>
    <hr>
</a>` 
    
}

export function errorView(message) {
    return `<div class="error">
        ${message}
        <button>Cerrar</button>
    </div>`
}
export function successView(message) {
    return `<div class="success">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
}


export function adDetailView (ad) {
    if (ad === null) {
        return '<h1>:( NO HAY NINGÚN ANUNCIO</h1>'
    }
    let button = ''
    if (ad.canBeDeleted) {
        button = '<button class="delete">Borrar</button>'
    }
    return `
        <strong class="author">${ad.author}</strong>
        <p class="product">${ad.product}</p>
        <p class="image">${ad.image}</p>
        <p class="price">${ad.price} euros</p>
        <p class="status">${ad.status} </p>
        ${button}
    `
}
