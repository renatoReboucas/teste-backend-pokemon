
exports.up = function(knex) {
  return knex.schema.createTable('pokemon', table =>{
    table.decimal("row").nullable();
    table.string("name").nullable();
    table.decimal("pokedexNumber").nullable();
    table.decimal("imgName").nullable();
    table.decimal("generation").nullable();
    table.decimal("evolutionStage").nullable();
    table.decimal("evolved").nullable();
    table.decimal("familyID").nullable();
    table.decimal("crossGen").nullable();
    table.string("type1").nullable();
    table.string("type2").nullable();
    table.string("weather1").nullable();
    table.string("weather2").nullable();
    table.decimal("staTotal").nullable();
    table.decimal("atk").nullable();
    table.decimal("def").nullable();
    table.decimal("sta").nullable();
    table.decimal("legendary").nullable();
    table.decimal("aquireable").nullable();
    table.decimal("spawns").nullable();
    table.decimal("regional").nullable();
    table.decimal("raidable").nullable();
    table.decimal("hatchable").nullable();
    table.decimal("Shiny").nullable();
    table.decimal("nest").nullable();
    table.decimal("new").nullable();
    table.decimal("notGettable").nullable();
    table.decimal("futureEvolve").nullable();
    table.decimal("CP40").nullable();
    table.decimal("CP39").nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("pokemon");
};
