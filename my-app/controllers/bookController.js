const db = require("../models");


module.exports = {
    search: function(req, res) {
      db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    }
  };