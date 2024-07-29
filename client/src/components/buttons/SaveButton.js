import React from "react";

const SaveButton = ({disabled})=>{
    return (
        <button type="submit" disabled={disabled}>Save</button>
    )
};

export default SaveButton;