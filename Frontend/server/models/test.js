"use strict";

var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var testSchema = new Schema({
	a: Number
});

module.exports = mongoose.model("test", testSchema, "test");