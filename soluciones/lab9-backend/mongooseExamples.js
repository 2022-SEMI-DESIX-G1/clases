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
  name: String,
});

// Compile model from schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

(async () => {
  try {
    const instance = await SomeModel.create({ name: "also_awesome" });
    console.log({ instance });
  } catch (error) {
    console.log({ error });
  }
})();

(async () => {
  try {
    const instance = await SomeModel.find();
    console.log({ instance });
  } catch (error) {
    console.log({ error });
  }
})();

(async () => {
  try {
    const instance = await SomeModel.findById(123);
    console.log({ instance });
  } catch (error) {
    console.log({ error });
  }
})();
