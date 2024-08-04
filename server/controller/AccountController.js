import bcrypt from "bcryptjs/dist/bcrypt.js";
import Account from "../model/AccountModel.js";
import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";

export const createExpense = async (req, res) => {
    const { name, amount } = req.body;
    if (!amount || !name) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const expense = new Account({
        ...req.body,
        user: req.user._id
    });
    try {
        const expenseData= await expense.save();
        res.status(201).json(expenseData);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateExpense = async (req,res) => {
    try {
        const expense = await Account.findByIdAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );
        if (!expense) {
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
        const result = await Account.findByIdAndDelete({expenseId,user:req.user._id});
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
        const account = 500;
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
        const expenses = await Account.find({user:req.user._id});
        const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        res.status(200).json({totalSpent})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Account.find({user:req.user._id});
        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getSearch = async (req, res) => {
    try {
        const searchTerm = req.query.term;
        if (!searchTerm) {
            return res.status(400).json({message:"Search Term is required"})
        }

        const regex = new RegExp(searchTerm, 'i');

        const expenses = await Account.find({name:regex,user:req.user._id});
        if (expenses.length===0) {
            return res.status(404).json({message:`${searchTerm} not present!`})
        }
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: "New User Created",userId:user._id });
    } catch (error) {
        res.status(500).json({ message: "Error while user registration" });
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ userId: user._id }, 'jwt-token-dont-have-yet');
        res.json({token,userId:user._id});

    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
}

export const logout = async (req, res) => {
    res.send('Logout Successful');
}