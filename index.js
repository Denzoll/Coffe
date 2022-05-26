const express = require("express");
const mongoose = require("mongoose");
const port = 4444;
const app = express();
app.use(require("./routs/drinks.rout"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Denzoll:Prosecutor95@cluster0.vlhuizw.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Сервер успешно запущен");
});
