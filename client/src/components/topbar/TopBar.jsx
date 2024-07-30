import React, { useCallback, useState } from 'react';
import CreateExpenses from '../forms/CreateExpenses';
import useTotalAmount from '../../hooks/useTotalAmount';
import useTotalSpent from '../../hooks/useTotalSpent';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const [showCreateExpenses, setShowCreateExpenses] = useState(false);
    const [showBank, setShowBank] = useState(false);
    const [totalAmount, setIsTotalAmount] = useState(0);
    const [totalSpent, setIsTotalSpent] = useState(0);
    const handleTotalAmount = useTotalAmount();
    const handleTotalSpent = useTotalSpent();
    const navigate = useNavigate();

    const handleAddClick = () => {
        setShowCreateExpenses(true);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowCreateExpenses(false);
    }
    const handleBankClick = async () => {
        navigate('/bank');
        
    }

    const handleHomeClick = () => {
        navigate('/');
    }
    
    return (
        <div>
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleAddClick}>Add</button>
            <button onClick={handleBankClick}>
                Bank
            </button>
            {showCreateExpenses && <CreateExpenses onClick={handleCancelClick} />}
        </div>
    )
}

export default TopBar;