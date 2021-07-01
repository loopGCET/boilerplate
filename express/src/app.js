const express = require('express')
const app = express();
const port = 3000;
const userRoute = require('./routes/urls');

app.get('/', (req, res) => {
	console.log("HELLO WORLD");
	res.send("HELLO WORLD");
});

/*
 	this is how you set subRoutes
	all the request starting with /user will go inside this route
*/
app.use('/user', userRoute);

app.listen(port, () => {
	console.log("App started on port ", port);
});