import express from 'express';
import {
    createExpense, updateExpense, deleteExpense, getAllExpenses, getTotalAmount, getTotalSpent, getSearch} from '../controller/AccountController.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();


router.route("/").get(authenticate,getAllExpenses).post(authenticate,createExpense);
router.route("/:id").delete(authenticate,deleteExpense).patch(authenticate,updateExpense);

router.route("/total/amount")
    .get(authenticate,getTotalAmount);

// Route to get the total spent
router.route("/total/spent")
    .get(authenticate,getTotalSpent);

router.route("/search").get(authenticate,getSearch)


export default router;