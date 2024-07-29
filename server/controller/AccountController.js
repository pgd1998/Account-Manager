import Account from "../model/AccountModel";

export const createExpense = async (req,res) => {
    try {
        const data = req.body;
       const expenseData= await Account.create(data);
        res.status(201).json(expenseData);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateExpense = async (req,res) => {
    try {
        const expenseId = req.params.id;
        
        const result = await Account.findByIdAndUpdate(expenseId, req.body);
        if (!result) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({ message: "Expense successfully updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteExpense = async (req,res) => {
    try {
        const expenseId = req.params.id;
        const result = await Account.findByIdAndDelete(expenseId);
        if (!result) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get total amount
export const getTotalAmount = async (req, res) => {
    try {
        const account = await Account.findOne({});
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }
        res.status(200).json({ totalAmount: account.totalAmount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getTotalSpent = async (req, res) => {
    try {
        const expenses = await Account.find({});
        const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({totalSpent})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Account.find();
        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
