const GO_D = (app) => {

	// Main route endpoints
	const index = require('./index');
	// const something = require('./something');

	app.use('/app', index);
	// app.use('/something', something);
};

module.exports = GO_D;