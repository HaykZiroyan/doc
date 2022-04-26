import React, { Component } from 'react';
import Lists from "./lists/lists"

class Forpeople extends Component {
    state = {
        list: [
            {image: "forlists/patient.png", title: "Պացիենտների համար", links:[
                "Պացիենտի կրթություն", "Պացիենտների պատմություններ", "Հանրամատչելի հոդվածներ"
            ]},
            {image: "forlists/doc.png", title: "Բժիշկների համար", links:[
                "Մասնագիտական հոդվածներ", "Կլինիկական դեպքեր"
            ]}
        ],
    }


    render() {
        const list = this.state.list

        return (
            <center className="row justify-content-center">
                {list.map((elem) => {
                        return (
                            <Lists data={elem} />
                        )
                })}
                
            </center>
        )
    }
    
}
export default Forpeople