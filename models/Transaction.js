const mongoose = require("mongoose");

const transaction = new mongoose.Schema(
  {
    date: Date,
    transaction_id: String,
    status: String,
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transaction", transaction);