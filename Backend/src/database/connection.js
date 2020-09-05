const knex = require('knex');
const configration = require('../../knexfile');

const connection = knex(configration.development);

module.exports = connection;