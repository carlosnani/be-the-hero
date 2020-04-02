
exports.up = function(knex) {
      return knex.schema.createTable('ongs', function(table){
      table.string('id').primary(); // Número primário
      table.string('name').primary(); //
      table.string('email').notNullable(); // .notNullable() Valor 
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf' , 2).notNullable(); // O segundo parametro sgnifica a quantidade de caracteres.    
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
