import React from "react";
import "./BurgerCard.css";


const BurgerCard = props => (
    
    <div 
    value={props.id} 
    onClick={() => {props.handleClick(props.id)}}
    >
        <div className="img-thumbnail">
            <img  alt={props.name} src={props.image} />
        </div>
    </div>
);


export default BurgerCard;