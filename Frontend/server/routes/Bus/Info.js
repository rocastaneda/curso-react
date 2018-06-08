const { isHTML } = require("../../utils/Validation")

const LOGGER = require("../../config/Logger").Logger
const CONFIG = require("../../config")
const Test = require("../../models/test")//importo mi esquema

module.exports = (router) => {

	var LOGGER_SERVICE = CONFIG.LOGGER_SERVICE

	var SERVICE = CONFIG.SERVICE_CLIENTE

	var serviceHandler = (config, map) => {
		return ( (req, res) => {
			var data = req.body
			LOGGER("INFO","[User: CursoReact] "+config.name+".BODY: " + JSON.stringify(data), LOGGER_SERVICE)
			var responseJSON = {
				form: {
					combo:'1',
					txt:''
				}
			}
			LOGGER("INFO", "[User: CursoReact] "+config.name+": Exitoso", LOGGER_SERVICE)
			return res.status(200).send(responseJSON)
		})
	}

	var getDataEjercicio = serviceHandler({
		name: 'getDataEjercicio',
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		return tmp
	});

	//==EJEMPLO CON MONGO===//


	var serviceMongoHandler = (config, map) => {
		return ( (req, res) => {
			var query = {
				a: {
					$in: 1
				}
			};
			Test.find(query).select().exec((err, modulResponse) => {

				if (!err) {
					if (Object.keys(modulResponse).length === 0) {
						return res.status(400).send({
						code: 200,
						data: ""
					});

					} else {
						LOGGER("DEBUG", "[User: X] getTemplate.RESPONSE" + modulResponse[0], LOGGER_SERVICE);
						LOGGER("INFO", "[User: X] getTemplate: Exitoso", LOGGER_SERVICE);
						return res.status(200).send({
						code: 200,
						data: modulResponse[0] != undefined ? modulResponse[0] : ""
						});
					}
				} else {
					LOGGER("ERROR", err, LOGGER_SERVICE);
				}
			});
		})
	}


	var getMongoInfo = serviceMongoHandler({
		name: 'getMongoInfo',
		method: CONFIG.METHOD_GET
	}, (data) => {
		var tmp = Object.assign({}, data)
		return tmp
	});


	//Link routes and functions
	//router.post("/getDataEjercicio", getDataEjercicio)
	router.post("/getDataEjercici2", getDataEjercicio)
	router.post("/getMongoInfo", getMongoInfo)

}
