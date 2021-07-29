const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();
 const PORT = process.env.PORT  || 3000;

//connect to mongoDB
const dbURI = process.env.MONGO_URL;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("CONNECTED TO MONGO");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/about", (req, res) => {
    res.render("about");
  });

app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});
