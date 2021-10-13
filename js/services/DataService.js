export default {
	parseAd: function (ad) {
        ad.product
	},

	getAds: async function () {
		const url = "http://localhost:8000/api/ads/";
		const response = await fetch(url);
		if (response.ok) {
			const ads = await response.json();
			return ads.map(ad => this.parseAd(ad));
		} else {
			throw new Error('Error al cargar los anuncios')
		}
	},

	registerUser: async function (username, password) {
		const url = "http://localhost:8000/api/tweets";
		const requestConfig = {
			// este archivo de configuración es el que hay que hacer para hacer un POST con FETCH
			method: "POST",
			body: JSON.stringify({ username, password }),
		};
		const response = await fetch(url, requestConfig);
		if (response.ok) {
			return await response.json();
		} else {
			throw new Error("Error al registrar el usuario");
		}
	},
};
