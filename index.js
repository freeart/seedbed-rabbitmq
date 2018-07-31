const assert = require('assert'),
	Rabbitmq = require('rabbitmq-boilerplate')

module.exports = function () {
	assert(!this.rabbitmq, "field exists")

	this.rabbitmq = new Rabbitmq();

	this.rabbitmq.config(this.config.get("rabbitmq.connection"));

	return Promise.resolve();
}