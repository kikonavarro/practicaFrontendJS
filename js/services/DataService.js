export default {
	parseAd: function(ad) {
        
		return ad
	},

	getAds: async function() {
		const url = "http://localhost:8000/api/ads/";
		const response = await fetch(url);
		if (response.ok) {
			const ads = await response.json();
			return ads.map(ad => this.parseAd(ad));
		} else {
			throw new Error('Error al cargar los anuncios')
		}
	},

	getAdDetail: async function(adID) {
        const url = `http://localhost:8000/api/ads/${adID}?_expand=user`
        const response = await fetch(url)
        if (response.ok) {
            const ad = await response.json()
            return this.parseAd(ad)
        } else {
            if (response.status === 404) {
                return null
            } else {
                throw new Error('Error al cargar el tweet')
            }
        }
    },

    getAdsOld: function() {
        return new Promise(function(resolve, reject) {
            // llamar a fetch para obtener la respuesta
            fetch(url).then(function(response){
                if (response.ok) {
                    // una vez tengo la respuesta, obtener el JSON
                    response.json().then(function(data) {
                        // cuando tenga el JSON, resolver la promesa
                        resolve(data)
                    }).catch(function() {
                        reject('Error al parsear el JSON')
                    })
                } else {
                    reject('Error al cargar los anuncios')
                }
            }).catch(function() {
                reject('Error inesperado')
            })
        })
    },

    delete: async function(url, body={}) {
        return await this.request('DELETE', url, body)
    },

    post: async function(url, body) {
        return await this.request('POST', url, body)
    },

    put: async function(url, body) {
        return await this.request('PUT', url, body)
    },

    request: async function(method, url, body) {
        const requestConfig = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            // requestConfig.headers.Authorization = `Bearer ${token}`
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)
        try {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },

    registerUser: async function(username, password) {
        const url = 'http://localhost:8000/auth/register'
        return await this.post(url, {username, password})
    },

    login: async function(username, password) {
        const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, {username, password})
        const token = data.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
    },

    createAd: async function(text) {
        const url = 'http://localhost:8000/api/ads'
        return await this.post(url, { message: text })
    },

    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    deleteAd: async function(adID) {
        const url = `http://localhost:8000/api/ads/${adID}`
        return await this.delete(url)
    },

    getAuthUserId: function() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    }

}
