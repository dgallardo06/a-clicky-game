import React from "react";
import "./ScoreTracker.css";

const ScoreTracker = props => (

    <nav>
        <ul>
            <li>{props.validate}</li>
            <li>Score: {props.score}</li>
            <li>Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default ScoreTracker;