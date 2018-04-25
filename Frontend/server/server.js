'use strict'
require('newrelic')

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const cfenv = require('cfenv')
const fs = require("fs")
var server = require('http').createServer(app)

const LOGGER = require("./config/Logger").Logger

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const routerApi = express.Router()

app.use("/api", routerApi)

routerApi.use((req, res, next) => {

	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Bpm, Uid")

	if (req.method !== "OPTIONS") {
		if (req.get("authorization")) {
			req.body.token = req.get("authorization")
			req.body.bpm_token = req.get("bpm")
			req.body.idUser = req.get("uid")
			next() // make sure we go to the next routes and don't stop here
		} else if (req.query.Authorization) {
			req.body.token = req.query.Authorization
			req.body.idUser = req.query.uid
			req.body.propuestaId = req.query.propuestaId
			next() // make sure we go to the next routes and don't stop here
		} else {
			// if there is no token
			// return an error
			return res.status(403).send({
				codigoError: 403,
				message: 'No Authorization provided.'
			})
		}
	} else {
		next() // make sure we go to the next routes and don"t stop here
	}
})

fs.readdirSync(path.join(__dirname, '.', "routes/Bus/")).forEach(function(file) {
	require("./routes/Bus/" + file)(routerApi)
})

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get(`/${process.env.APP}*`, function (req, res) {
	res.header("Cache-Control", "no-cache, no-store, must-revalidate")
	res.header("Pragma", "no-cache")
	res.header("Expires", 0)

	res.sendFile(path.join(__dirname, "../dist/index.html"))
})

var appEnv = cfenv.getAppEnv()

var port = process.env.PORT || appEnv.port

server.listen(port, appEnv.bind,  function() {
	LOGGER("INFO","Node server running on " + appEnv.url)
})
