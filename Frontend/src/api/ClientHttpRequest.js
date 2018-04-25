import * as Utils from 'Assets/Utils'

import Axios from 'axios'
import Labels from 'Assets/Labels'

export default class ClientHttpRequest {

	constructor(config) {

		this.config = config

		this.instanceAxios = Axios.create({
			baseURL: process.env.baseURL,
			timeout: 45000,
			url: config.service,
			responseType: 'json',
			headers: {
				"Content-Type": 'application/json'
			}
		})
	}

	request() {

		let TIEMPO_SESION_ALERTA = Number(process.env.TIEMPO_SESION_ALERTA)

		let TIEMPO_SESION_INACTIVIDAD = Number(process.env.TIEMPO_SESION_INACTIVIDAD)

		let CODE_REFRESH = ["NMP-902","NMP-901"]

		let CODE_REFRESH_BPM = ["NMP-902","NMP-901"]

		let CODE_SESSION_OUT = "NMP-902"

		let _this = this

		return new Promise((resolve, reject) => {

			_this.instanceAxios.request(_this.config)
				.then(response => {
					sessionStorage.session_time = Number(new Date()) - TIEMPO_SESION_ALERTA + TIEMPO_SESION_INACTIVIDAD
					resolve(response)
				})
				.catch(error => {

					let __this = this;

					if (error.response) {

						if (error.response.data && ( Utils.indexOfItem(CODE_REFRESH, error.response.data.codigoError) != -1) ) { // Refresh and Recall Service

							__this.refreshToken = {
								baseURL: process.env.baseURL,
								url: 'auth/oauth/refresh',
								method:"POST",
								data: {
									"idUser": sessionStorage.uid,
									"refreshToken":sessionStorage.refresh_token,
									"bpmToken":sessionStorage.bpm_token
								}
							};

							__this.refreshTokenAxios = Axios.create({
								baseURL: process.env.baseURL,
								timeout: 45000,
								url: __this.refreshToken.endpoint,
								responseType: "json",
								headers: {
									"Content-Type": "application/json"
								}
							});

							__this.refreshTokenAxios.request(__this.refreshToken) // Refresh token
							.then(response => {

								sessionStorage.access_token = response.data.access_token
								sessionStorage.refresh_token = response.data.refresh_token
								sessionStorage.bpm_token = response.data.bpm_token

								_this.config.headers.Authorization = response.data.access_token

								_this.instanceAxios.request(_this.config) // Recall Service New Token
								.then(response => {
									resolve(response)
								})
								.catch(error => {
									reject(error)
								});
							})
							.catch( () => {
								sessionStorage.clear()
								window.location.href = `/${process.env.APP}/login`
							});

						} else if (error.response.data && ( Utils.indexOfItem(CODE_REFRESH_BPM, error.response.data.codigoError) != -1)) { // Refresh and Recall Service

							__this.refreshToken = {
								baseURL: process.env.baseURL,
								url: 'auth/oauth/refresh',
								method:"POST",
								data: {
									"idUser": sessionStorage.uid,
									"refreshToken":sessionStorage.refresh_token,
									"bpmToken":sessionStorage.bpm_token
								}
							};

							__this.refreshTokenAxios = Axios.create({
								baseURL: process.env.baseURL,
								timeout: 45000,
								url: __this.refreshToken.endpoint,
								responseType: "json",
								headers: {
									"Content-Type": "application/json"
								}
							});

							__this.refreshTokenAxios.request(__this.refreshToken) // Refresh token
							.then(response => {

								sessionStorage.access_token = response.data.access_token
								sessionStorage.refresh_token = response.data.refresh_token
								sessionStorage.bpm_token = response.data.bpm_token

								_this.config.headers.Authorization = response.data.bpm_token

								_this.instanceAxios.request(_this.config) // Recall Service New Token
								.then(response => {
									resolve(response)
								})
								.catch(error => {
									reject(error)
								});
							})
							.catch( () => {
								sessionStorage.clear()
								window.location.href = `/${process.env.APP}/login`
							});

						} else if (error.response.data && error.response.data.codigoError === CODE_SESSION_OUT) { // Session Out Service

							reject(error)

						} else if (error.response.data) { // Error Service

							//if(error.response.status == 400){
							//	reject({response: {data: {message: Labels.existsMessage}}})
							//} else {
							reject({response: {data: error.response.data }})
							//}

							//reject(error)
						}  else if (error.response.data == undefined) { // Error Service

							reject({response: {data: {message: Labels.errorMessage}}})
						}

					} else { // Error Connect

						reject({response: {data: {message: "Error de conexión, intente de nuevo"}}})
					}
				})
		})
	}
}
