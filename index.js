var express = require("express");
var userRouter = require("./router/users");
var app = express();
var port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var myLogger = (req, res, next) => {
  req.time = new Date();
  next();
};

app.use(myLogger);
app.use("/assets", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const kelas = {
    id: 1,
    nama: "NodeJS",
    date: req.time.toString(),
  };

  res.render("pages/index", { kelas: kelas });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
  //res.send("About");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
