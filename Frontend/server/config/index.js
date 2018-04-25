
module.exports = {

	LEVEL_LOG: process.env.LEVEL_LOG === undefined ? "TRACE" : process.env.LEVEL_LOG,

	CATEGORIES: new Array(
		"App",
		"Utils.HTTPRequest",
		"Routes.Auth",
		"Routes.Service"),

	LOGGER_DEFAULT :  0,
	LOGGER_REQUEST :  1,
	LOGGER_AUTH :     2,
	LOGGER_SERVICE :  3,

	METHOD_POST : 'POST',
	METHOD_GET : 'GET',
	METHOD_PUT : 'PUT',
	METHOD_DELETE : 'DELETE',
}
