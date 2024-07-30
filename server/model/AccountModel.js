import mongoose from "mongoose";

const { Schema } = mongoose;

const AccountSchema = new Schema(
    {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        totalAmount: { type: Number, default: 100 }
    }
);
// AccountSchema.pre('save', function(next) {
//     if (this.isNew) {
//         this.totalAmount = this.amount;
//     } else {
//         this.totalAmount += this.amount;
//     }
//     next();
// });
const Account = mongoose.model("Account", AccountSchema);

export default Account;