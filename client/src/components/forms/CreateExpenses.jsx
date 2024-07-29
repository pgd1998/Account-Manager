import React, { useState } from 'react';
import { SaveButton, CancelButton, EditButton, DeleteButton } from '../buttons';
import useCreate from '../../hooks/useCreateExpense';

const CreateExpenses = () => {
    const [isName,setIsName] = useState('');
    const [isAmount, setIsAmount] = useState(0);
    const { isLoading, isError, handleCreate } = useCreate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const expenseData = {
            name: isName,
            amount: isAmount,
            totalAmount: 0
        };
         try {
            const result = await handleCreate(expenseData);
            console.log('Expense created successfully:', result);
        } catch (error) {
            console.error('Error creating expense:', error); // Log the error details
        }
        
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={isName} onChange={(e) => setIsName(e.target.value)} required/>
            <label htmlFor='amount'>Amount</label>
            <input type='number' id='amount' value={isAmount} onChange={(e) => setIsAmount(e.target.value)} required />
                <div>
                    <SaveButton disabled={ isLoading} />
                    <CancelButton />
                    <EditButton />
                    <DeleteButton/>
            </div>
            </form>
            </div>
    )
}

export default CreateExpenses;

