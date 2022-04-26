import React from 'react';
import { Link } from 'react-router-dom';
import "./doccomps.css"
import Docnums from "../docnumber/docnumbers"

function Doccomp({data}) {

    return (
        <div className="doccomp">
            <img src={data.image} className="docimg" />
            <div>
                <Link to={data.link} >{data.name} </Link>
        
                <div>
                    <p>{data.texts.prof}</p>
                    <p>{data.texts.position}</p>
                </div>
                
            </div>
        </div>
    );
}
export default Doccomp