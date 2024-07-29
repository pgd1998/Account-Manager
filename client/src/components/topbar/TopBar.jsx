import React, { useState } from 'react';
import CreateExpenses from '../forms/CreateExpenses';
const TopBar = () => {
    const [showCreateExpenses, setShowCreateExpenses] = useState(false);

    const handleClick = () => {
        setShowCreateExpenses(!showCreateExpenses);
    }
    
    return (
        <div>
            <button onClick={handleClick}>Add</button>
            <button>Bank</button>
            {showCreateExpenses&&<CreateExpenses/>}
        </div>
    )
}

export default TopBar;