const User = require("../Modals/User");
const bcrypt = require("bcryptjs");
module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.register_get = (req, res) => {
  res.render("register");
};

module.exports.register_post = (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill all the query." });
  }
  if (password !== password2) {
    errors.push({ msg: "Password is not matching." });
  }
  if (password.length < 6) {
    errors.push({ msg: "Password must greater than 6." });
  }
  if (errors.length > 0) {
    res.render("register", { errors, name, email, password, password2 });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        console.log(newUser);
        res.send("suuccess");
      }
    });
  }
};
