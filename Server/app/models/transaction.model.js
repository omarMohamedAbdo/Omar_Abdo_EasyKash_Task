module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    title: {
      type: Sequelize.STRING
    },
    fees: {
      type: Sequelize.INTEGER
    },
    amount: {
      type: Sequelize.INTEGER
    },
    seller_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Transaction;
};
