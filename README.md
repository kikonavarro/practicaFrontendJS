# PracticaFrontendJS

Se trata de una práctica del módulo de frontend de **KeepCoding**, este frontend cuenta con las siguientes páginas y funcionalidades:

* Página de listado de anuncios.
  * Los anuncios se cargarán desde el backend (usaremos Sparrest.js).
* Al pulsar sobre un anuncio se dirigirá a la página de detalle de ese anuncio.
* En la página principal puedes iniciar sesión o crear cuenta.
* Si el usuario está autenticado, podrá crear anuncios y borrar los suyos.

## Instrucciones para el backend

Para el backend usaremos `sparrest.js` basado en json-server el cual ofrece un completo API para simular un backend real.

Para hacerlo funcionar hay que hacer lo siguiente
- Descargarse el código desde https://github.com/kasappeal/sparrest.js
- El db.json que viene se puede sustituir por el que está en este repositorio.
- Descargar las dependencias e iniciarlo con 
  ``` sh
  npm install
  npm start  
  ``` 
## Instrucciones para el frontend

Una vez tenemos arrancado el servidor solo tendríamos que inicializar la aplicación con `browsersyync`o `liveserver` o alguno similar y acceder a la página principal `http://localhost:PORT/index.html` siendo el puerto PORT el que tengas disponible. Suele ser el 3000.

## Tecnologías

Toda la implementación se ha hecho con  `Vanilla JavaScript` y para el CSS nos hemos ayudado de `BootStrap`