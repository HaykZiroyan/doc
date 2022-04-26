import React from 'react';
import './button.css';

function But(props) {
    function addclasses(e) {
        let buttons = document.querySelectorAll('button')
        

    }
    return (
        <button id={props.keys} onClick={addclasses} className="contact">
            <img src={props.link} />
            <p>{props.text}</p>
        </button>
    );
}
export default But