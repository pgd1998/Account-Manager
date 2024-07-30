import React, { useCallback, useState } from 'react';
import CreateExpenses from '../forms/CreateExpenses';
import useTotalAmount from '../../hooks/useTotalAmount';
import useTotalSpent from '../../hooks/useTotalSpent';

const TopBar = () => {
    const [showCreateExpenses, setShowCreateExpenses] = useState(false);
    const [showBank, setShowBank] = useState(false);
    const [totalAmount, setIsTotalAmount] = useState(0);
    const [totalSpent, setIsTotalSpent] = useState(0);
    const handleTotalAmount = useTotalAmount();
    const handleTotalSpent = useTotalSpent();

    const handleAddClick = () => {
        setShowCreateExpenses(!showCreateExpenses);
    }
    const handleBankClick = async () => {
        
        try {
            const amount = await handleTotalAmount();
            const spent = await handleTotalSpent();
            console.log(spent)
            setIsTotalAmount(amount);
            setIsTotalSpent(spent);
            setShowBank(!showBank);
        } catch (error) {
            console.error("Error fetching totals:", error);
        }
        
    }
    
    return (
        <div>
            <button onClick={handleAddClick}>Add</button>
            <button onClick={handleBankClick}>
                Bank
            </button>
            {showBank&&
                <p>Total Amount: {totalAmount}, Total Spent: {totalSpent}</p>
            }
                {showCreateExpenses && <CreateExpenses />}
        </div>
    )
}

export default TopBar;