export function adsView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div class="card post">
        <img class="image" src="${ad.image}" alt="no tiene imagen">
        <h4 class="product card-title">${ad.product}</h4>
        <p class="price">${ad.price} euros</p>
        <p class="status">${ad.status} </p>
        <strong class="author">${ad.author}</strong>
    </div>
    
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
        button = '<button class="rounded mx-auto d-block delete btn btn-danger">Borrar</button>'
    }
    return `
        <div class="card post text-center">
            <img class="image rounded mx-auto d-block" src="${ad.image}" alt="no tiene imagen">
            <h4 class="product card-title">${ad.product}</h4>
            <p class="price">${ad.price} euros</p>
            <p class="status">${ad.status} </p>
            <strong class="author">${ad.author}</strong>
            
            ${button}
            </div>        
    `
}
