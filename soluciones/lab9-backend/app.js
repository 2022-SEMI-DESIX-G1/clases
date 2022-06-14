const mongoose = require("mongoose");

const mongoDB = "mongodb://admin:password@localhost:27017/admin";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

SomeModel.create({ name: "also_awesome" }, function (err, awesome_instance) {
  if (err) {
    console.log("Error...");
    console.log({ err });
    return;
  }
  console.log("Saved...");
});
