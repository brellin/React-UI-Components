import React from 'react';
import './Button.css';

function Num(props) {
    return (
        <div className={props.text.class}>
            {props.text.number}
        </div>
    )
}

export default Num;