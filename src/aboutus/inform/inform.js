import React from 'react';
import "./inform.css"

function Inform ({data}) {
        
        return (
                <div className="colss">
                    <img src={data.image} className="image" />
                    <br />
                    <a href={data.link} className="link">{data.title}</a>
                    <p className="txt">{data.text}</p>
                </div>
        )
    

}
export default Inform