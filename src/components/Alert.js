import React from "react";

export const Alert = (props) =>{
    return (
        <div className="alert alert-primary" role="alert">
            <div>
            {props.message}
            </div>
        </div>
    )
}

export default Alert;