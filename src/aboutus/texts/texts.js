import React from 'react';
import "./texts.css"
import { Routes, Route, Link } from 'react-router-dom';
import Elem from "./elem/elem";

function Texts ({list}) {
        
        return (
            <div>
                {/* <Routes>
                    <Route path="/#tab0" element={<Elem />} />
                    <Route path="/#tab1" element={<Elem />} />
                    <Route path="/#tab2" element={<Elem />} />
                    <Route path="/#tab3" element={<Elem />} />
                    <Route path="/#tab4" element={<Elem />} />
                </Routes> */}
                <div className="row rows">
                    {list.map((elem) => {
                        return (
                            <a href={elem.tabs} className="col cols">{elem.title}</a>
                        )
                    })}
                </div>
            </div>

        )
    

}
export default Texts