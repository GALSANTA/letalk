import React from 'react';
import './style.css';

function Title(props) {

    return (
        <span className={props.className}>
            {props.children}
        </span>
    )
}

export default Title;