import React from 'react';
import "./lists.css"

function Lists({data}) {

    return (
        <center className="col-md-5 cols">
            <img className="img" src={data.image} />
            <p className="titles">{data.title}</p>
            <button className="btn">Բոլոր ռեսուրսները</button>
            <p className="mores">Խորհուրդ տրվող հղումներ</p>
            <div>
                {data.links.map((elem)=>{
                    return (
                        <a href="#" className="links">{elem}</a>
                    )
                })}
            </div>

        </center>
    );
}
export default Lists