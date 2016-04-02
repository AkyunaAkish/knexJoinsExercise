// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/knex-joins'
  },
  pool: {
    min: 2,
    max: 10
  },
  seeds: {
    directory: './seeds/'
  }

};
