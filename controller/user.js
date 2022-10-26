const { v4: uuidv4 } = require("uuid");

let users = [
  { id: 1, name: "Hafiz", email: "hafiz@mail.com" },
  { id: 2, name: "Aziz", email: "aziz@mail.com" },
];

module.exports = {
  index: (req, res) => {
    res.render("pages/user/index", { users });
  },
  show: (req, res) => {
    //res.send(req.params.id);
    const id = req.params.id;
    const data = users.filter((user) => {
      return user.id == id;
    });
    //res.send(data);
    res.render("pages/user/show", { user: data });
  },
  create: (req, res) => {
    res.render("pages/user/create");
  },
  store: (req, res) => {
    users.push({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });
    //console.log(users);
    res.redirect("/users");
  },
  update: (req, res) => {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.email = req.body.email;

        return user;
      }
    });
    res.json({
      status: true,
      data: users,
      message: `Data users dengan id: ${id} berhasil diubah`,
      method: req.method,
      url: req.url,
    });
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);
    res.send({
      status: true,
      data: users,
      message: "Data users berhasil dihapus",
      method: req.method,
      url: req.url,
    });
  },
};