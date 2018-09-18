const express = require('express');
const index_router = express.Router();

index_router.get('/', (req, res) => {
	res.end('Hello Index');
});

module.exports = index_router;