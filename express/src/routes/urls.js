const {Router} = require('express');
const route = Router();
const {
	getUsers
} = require('./../services/userSrvice')


route.get('/', (req, res) => {
	let users = getUsers();
	res.send(users);
});

module.exports = route;