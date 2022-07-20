import React from "react";


function Card(props) {
    return(
        <div className="box">
            <p>{props.quoteText}</p>
        </div>
    )
}

export default Card;