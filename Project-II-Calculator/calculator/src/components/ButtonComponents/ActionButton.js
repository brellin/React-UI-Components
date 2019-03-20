import React from 'react';
import './Button.css';

function Action(props) {
    return (
        <div className={props.act.class}>
            {props.act.text}
        </div>
    )
}

export default Action;