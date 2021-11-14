export function adsView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div class="card border-3">
        <img class="image" style="height: 200px" src="${ad.image}" alt="no tiene imagen">
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

    export function navBarView () {
        return `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Nodepop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="new.html">Crear Anuncio</a>
              </li>
              <li class="nav-item login">
                <a class="nav-link" href="login.html">Login</a>
              </li>
              <li class="nav-item logout">
                <a class="nav-link" href="index.html" onclick="localStorage.removeItem('AUTH_TOKEN');">Logout</a>
              </li>
              <li class="nav-item signup">
                <a class="nav-link" href="signup.html" tabindex="-1" aria-disabled="true">Crear Usuario</a>
              </li>
            </ul>
            <div class="d-flex">
              <input class="form-control me-2" type="search" id="search" placeholder="Buscar por producto" aria-label="Search">
            </div>
          </div>
        </div>
      </nav>`
}

//<button class="btn btn-outline-success" type="button">Buscar</button>
