const db = require("../models");

// Defining methods for the recordsController
module.exports = {
  findAll: function(req, res) {
    db.records
      .find(req.query)
      .then(dbrecords => res.json(dbrecords))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.records
      .findById(req.params.id)
      .then(dbrecords => res.json(dbrecords))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.records
      .create(req.body)
      .then(dbrecords => res.json(dbrecords))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.records
      .findOneAndUpdate({ id: req.params.id}, req.body)
      .then(dbrecords => res.json(dbrecords))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.records
      .find(req.params.id)
      .then(dbrecords => dbrecords.remove())
      .then(dbrecords => res.json(dbrecords))
      .catch(err => res.status(422).json(err));
  }
};
