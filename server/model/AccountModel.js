import mongoose from "mongoose";

const { Schema } = mongoose;

const AccountSchema = new Schema(
    {
        name: { type: String, required: true },
        amount: { type: Number, required: true }
    }
);

const Account = mongoose.model("Account", AccountSchema);

export default Account;