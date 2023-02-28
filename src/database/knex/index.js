const config = require('../../../knexfile');
const knex = requires('knex');

const connection = knex(config.development);

module.exports = connection;