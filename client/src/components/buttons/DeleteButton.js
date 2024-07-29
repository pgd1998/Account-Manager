import React from "react";

const DeleteButton = ({disabled,onClick})=>{
    return (
        <button onClick={onClick} disabled={disabled}>Delete</button>
    )
};

export default DeleteButton;