module.exports = app => {
  const transactions = require("../controllers/transaction.controller.js");

  var router = require("express").Router();

  // Retrieve all transactions
  router.get("/", transactions.findAll);
 
  app.use('/transaction', router);
};
