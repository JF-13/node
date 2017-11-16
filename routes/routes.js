var path = require('path');
var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.use(function(req, res){
  res.status(404).send("Page was not found...");
})

module.exports = router;
