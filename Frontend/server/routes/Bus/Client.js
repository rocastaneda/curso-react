const { isHTML } = require("../../utils/Validation")

const LOGGER = require("../../config/Logger").Logger
const CONFIG = require("../../config")

module.exports = (router) => {

	var LOGGER_SERVICE = CONFIG.LOGGER_SERVICE

	var SERVICE = CONFIG.SERVICE_CLIENTE

	var serviceHandler = (config, map) => {
		return ( (req, res) => {
			var data = req.body

			LOGGER("INFO","[User: CursoReact] "+config.name+".BODY: " + JSON.stringify(data), LOGGER_SERVICE)

			var responseJSON = {
				Cliente : {
					nombre: "rolando"
				}
			}

			LOGGER("INFO", "[User: CursoReact] "+config.name+": Exitoso", LOGGER_SERVICE)
			return res.status(200).send(responseJSON)
		})
	}

	var getDataClient = serviceHandler({
		name: 'getDataClient',
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		return tmp
	});

	//Link routes and functions
	router.post("/getDataClient", getDataClient)
}
