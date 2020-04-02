
// npx knex - Lista todos os comandos 
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
    table.increments();

    table.string('title').notNullable(); // .notNullable() Valor 
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable(); // Relacionamento com ID da tabela Ong

    table.foreign('ong_id').references('id').inTable('ongs');
    //npx knex migrate:latest comando que cria a tabela do banco.  
})
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
  //npx knex migrate:rollback dexfaz a última migration feita. 
};

//npx knex migrate:status mostra todas as migrate que foram exexcutadas. 
