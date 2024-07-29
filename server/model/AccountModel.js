import mongoose from "mongoose";

const { Schema } = mongoose;

const AccountSchema = new Schema(
    {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        totalAmount: { type: Number, default: 0 },
        totalSpent:{type:Number,default:0}
    }
);
const Account = mongoose.model("Account", AccountSchema);

export default Account;