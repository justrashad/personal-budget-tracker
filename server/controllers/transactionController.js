const Transaction = require('../models/Transaction');

const addTransaction = async (req, res) => {
    const { amount, type, category, description, date } = req.body;
    const user = req.user._id;

    try {
        const transaction = await Transaction.create({
            user,
            amount,
            type,
            category,
            description,
            date,
        });

        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getTransactions = async (req, res) => {
    const user = req.user._id;

    try {
        const transactions = await Transaction.find({ user });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addTransaction, getTransactions };
