const {Users} = require('../models/users');

function getUsers() {
	return Users
}


module.exports = {
	getUsers
}