const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(cors())
app.use("/api/auth", require("./routes/auth.route"));

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
  } catch (err) {
    console.error(err);
  }
}
start();
