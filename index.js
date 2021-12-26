const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;
// app.set('trust proxy', 1);

app.use(express.json({ extended: true }));
app.use(cors())
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/todo", require("./routes/todo.route"));

async function start() {
  try {
    await mongoose.connect(
    // mongoose.connect(
      "mongodb+srv://elis3:elis@cluster0.ldv56.mongodb.net/todo?retryWrites=true&w=majority",
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
