const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// Listen.
const server = app.listen(PORT, () => { console.log(`App started.`); });

// Set View dir and engine


// MIDDLEWARE


// app.get('*', (req, res) => {
// 	res.end('Hello Express');
// });

// Handle routes
const GOD = require('./crystal/routes/go_d');
console.log(GOD(app));