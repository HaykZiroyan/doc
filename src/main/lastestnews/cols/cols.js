import React from 'react';
import "./cols.css";

function Cols ({data}) {

    return (
        <div className="columns">
            <img src={data.image} className="imgs" />
            <div className="divcols">
                <a href={data.titlelink} className="titleCols">{data.title}</a>
                <p className="date">
                    {data.date} | 
                    <span>
                        <a href={data.link} className="links">լուրեր</a>
                    </span>
                </p>
                <p className="txt">{data.text}</p>

            </div>
        </div>
    );
}
export default Cols