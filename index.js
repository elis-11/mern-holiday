const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    // await mongoose.connect(
    mongoose.connect(
          "mongodb+srv://elis2:elis@cluster0.gzwcn.mongodb.net/holiday?retryWrites=true&w=majority",
          {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true,
              useFindAndModify: true,
          }
      );

    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  } catch (err) {console.error(err)}
}
start()