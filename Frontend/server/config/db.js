/**
  * Realiza el Manejo y Gestión de __Conexiones__ de BD.
  *
  * Se recomienda leer la documentacion provista por <a href="https://www.mongodb.com/">MongoDB</a>
  *
  * @class Connection
  * @module Configuration
  * @constructor
  *
  * @since 1.0.0
**/

var mongoose = require("mongoose");
var cfenv = require('cfenv');
var appenv = cfenv.getAppEnv();
var services = appenv.services;
var mongodb_services = services["compose-for-mongodb"];
const LOGGER = require("./Logger").Logger


/**
  * Define el evento de conexión establecida hacia la BD.
  *
  * @event connected
  * @param {String} type "connected"
  * @param {Function} fn Metodo que sera invocado al momento de recibir el evento.
  *
**/
mongoose.connection.on("connected", () => {
    LOGGER("INFO", "Mongoose default connection open to "+dbURI);
});

/**
  * Define el evento de conexión fallida hacia la BD.
  *
  * @event error
  * @param {String} type "error"
  * @param {Function} fn Metodo que sera invocado al momento de recibir el evento.
  *
**/
mongoose.connection.on("error", (err) => {
    LOGGER("INFO", "Mongoose default connection error: " + err);
});

/**
  * Define el evento de desconexión hacia la BD.
  *
  * @event disconnected
  * @param {String} type "disconnected"
  * @param {Function} fn Metodo que sera invocado al momento de recibir el evento.
  *
**/
mongoose.connection.on("disconnected", () => {
    LOGGER("INFO", "Mongoose default connection disconnected");
});

/**
  * Define el evento cuando se recibe la peticion de finalizacion de conexion hacia la BD.
  *
  * @event sigint
  * @param {String} type "SIGINT"
  * @param {Function} fn Metodo que sera invocado al momento de recibir el evento.
  *
**/
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        LOGGER("INFO", "Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});

/**
  * Función que retorna la configuración Básica del Servicio de Logout.
  * <p>
  * <strong>NOTE:</strong> La información del Servicio de BD es definido por el Contexto del Aplicativo.
  * </p>
  *
  * @method initConnect
  * @param {String} URI de la ubicacion de la BD, como direccion IP y Puerto
  * @param {Object} Credenciales para la configuración de Seguridad
  * @return {Object} Conexion a BD
**/
if (mongodb_services) {

    var credentials = mongodb_services[0].credentials;
    var ca = [new Buffer(credentials.ca_certificate_base64, 'base64')];
    dbURI = credentials.uri;

    // Create the database connection
    mongoose.connect(credentials.uri, {
        mongos: {
            ssl: true,
            sslValidate: true,
            sslCA: ca,
            poolSize: 1,
            reconnectTries: 1
        }
    });
} else {
  dbURI = 'mongodb://127.0.0.1:27017/mydb'
	mongoose.connect(dbURI);//-//127.0.0.1:27017-
}

module.exports = mongoose;
