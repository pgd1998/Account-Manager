import express from 'express';
const router = express.Router();

import { createExpense, updateExpense, deleteExpense, getAllExpenses, getTotalAmount, getTotalSpent } from '../controller/AccountController';

router.route("/").get(getAllExpenses).post(createExpense);
router.route("/:id").delete(deleteExpense).patch(updateExpense);

router.route("/total/amount")
    .get(getTotalAmount);

// Route to get the total spent
router.route("/total/spent")
    .get(getTotalSpent);

export default router;