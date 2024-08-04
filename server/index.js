import express from "express";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/AccountRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import cors from 'cors';

connectDB();
const app = express();

app.use(express.json());

// const corsOptions = {
//     origin: ['https://poorvithgowda.com','https://www.poorvithgowda.com'],
//     optionsSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use('/api/expenses', expenseRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
console.log("Server starting...");
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))


