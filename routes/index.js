var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString()
  }
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Get new form
router.get("/new", function (req, res, next) {
  res.render("form");
});

// Post new message so home page
router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date().toDateString()
  });
  console.log(messages);

  res.redirect("/");
});

module.exports = router;
