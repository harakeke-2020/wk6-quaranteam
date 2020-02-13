exports.up = function (knex) {
  return knex.schema.createTable('fav', function (table) {
    table.increments('id')
    table.integer('external_id')
    table.string('type')
    table.string('setup')
    table.string('punchline')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fav')
}
