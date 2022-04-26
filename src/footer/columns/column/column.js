import React from 'react';
import './li.css';

function Column(props) {
    return (
        <li className="nav-item">
            <a className={[props.size, "nav-link"].join(' ')}href={props.link}>{props.text}</a>
        </li>
    );
}
export default Column