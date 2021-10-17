export default {
	parseAd: function(ad) {
        const cleanString = (dirtyString) => { return dirtyString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }
        ad.date = ad.date || ad.updatedAt
        ad.product = cleanString(ad.product)
        ad.author = ad.user.username
        ad.canBeDeleted = ad.userId === this.getAuthUserId()
        ad.image = cleanString(ad.image)
        ad.price = cleanString(ad.price)
        ad.status = cleanString(ad.status)
        return ad
    },

	getAds: async function() {
		const url = "http://localhost:8000/api/ads?_expand=user";
		const response = await fetch(url);
		if (response.ok) {
			const ads = await response.json();
			return ads.map(ad => this.parseAd(ad));
		} else {
			throw new Error('Error al cargar los anuncios')
		}
	},

    getAdsSearched: async function(searchProduct) {
		const url = `http://localhost:8000/api/ads?product_like=${searchProduct}`;
		const response = await fetch(url);
		if (response.ok) {
			const ads = await response.json();
			return ads

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
                throw new Error('Error al cargar el anuncio')
            }
        }
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

    createAd: async function(product, image, price, status) {
        const url = 'http://localhost:8000/api/ads'
        return await this.post(url, { product, image, price, status })
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
