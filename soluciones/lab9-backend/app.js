require("dotenv").config();

const axios = require("axios");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const { PokemonModel } = require("./models");
const app = express();

const { PORT = 3000 } = process.env;
const MONGO_URL = "mongodb://admin:password@localhost:27017/admin";

app.use(cors());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/pokemon/:name", async (req, res) => {
  // await PokemonModel.create({ id: 1, name: "bulbasaur", stats: [1, 2, 3] });
  // const pokemons = await PokemonModel.find();
  let pokemon = await PokemonModel.find({ name: req.params.name });
  if (pokemon.count) {
    return res.json({ pokemon, isCached: true });
  }
  const {
    data: { id, name, weight, height, stats, sprites, abilities, evolution },
  } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
  pokemon = await PokemonModel.create({
    id,
    name,
    weight,
    height,
    stats,
    sprites,
    abilities,
    evolution,
  });
  return res.json({ pokemon, isCached: false });
});

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log({ PORT });
    });
  })
  .catch(({ error }) => {
    console.log({ error });
  });
