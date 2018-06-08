const { isHTML } = require("../../utils/Validation")

const LOGGER = require("../../config/Logger").Logger
const CONFIG = require("../../config")

module.exports = (router) => {

	var LOGGER_SERVICE = CONFIG.LOGGER_SERVICE

	var SERVICE = CONFIG.SERVICE_CLIENTE

	var serviceHandler = (config, map) => {
		return ( (req, res) => {
			var data = req.body

			LOGGER("INFO","[parametros] BODY: " + JSON.stringify(data), LOGGER_SERVICE)
			var responseJSON = {
				form: {
					llave:'valor',
					llave2:'valor2'
				}
			}
			 LOGGER("INFO", "[Tipo de petición: ] "+config.method,LOGGER_SERVICE)
			//LOGGER("INFO", "[User: CursoReact] "+config.name+": Exitoso", LOGGER_SERVICE)

			LOGGER("INFO", "[Valores: Login] "+req, LOGGER_SERVICE)
			return res.status(200).send(responseJSON)
		})
	}

	var login = serviceHandler({
		name: 'login',
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		return tmp
	});

	//Link routes and functions
	router.post("/login", login)
}
