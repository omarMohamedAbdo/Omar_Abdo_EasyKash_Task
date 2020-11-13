const db = require("../models");
const Transaction = db.transactions;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: transactions } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const per_page = limit;

  const Data = 
  {
    transactions,
    "paging":
    {
      "total": totalItems,
      "currentPage":currentPage,
      "per_page":per_page
    }
  }

  return {Data};
};



// Retrieve all transactions from the database.
const findAll = (req, res) => {
  const { page, per_page, seller_id } = req.query;
  var condition = seller_id ? { seller_id: seller_id  } : null;

  const { limit, offset } = getPagination(page, per_page);

  Transaction.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Transactions."
      });
    });
};

module.exports = {
  getPagination,
  findAll,
}