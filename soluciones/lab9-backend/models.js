const mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var PokemonModelSchema = new Schema({
  id: Number,
  name: String,
  weight: String,
  height: String,
  stats: Array,
  sprites: Object,
  abilities: Array,
  evolution: Array,
});

// Compile model from schema
module.exports = {
  PokemonModel: mongoose.model("PokemonModel", PokemonModelSchema),
};
