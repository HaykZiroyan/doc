import React, { Component } from 'react';
import docinfo from "../docsInfo.json";
import "./docnumbers.css";
// import calls from "./contacts/call.png";
// import advice from "./contacts/advice.png";
import check from "./contacts/check-in.png";
import messege from "./contacts/messege.png";
import opinion from "./contacts/opinion.png";


// var slideIndex = 1;
// showDivs(slideIndex);

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-red", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " w3-red";
// }
// extends Component
function Docnums()  { 

   // render() {
      return (
         <div>              
            {/* {
               
               console.log((window.location.pathname).substring((window.location.pathname).lastIndexOf("/") + 1, (window.location.pathname).length))
           } */}
            {
               
               docinfo.map((elem) => {
               if(elem.link == (window.location.pathname).substring((window.location.pathname).lastIndexOf("/") + 1, (window.location.pathname).length)) {
                  return   <div>
                              <a href="/" className="ttl">Գլխավոր</a>
                              <a href="/doctors" className="ttl">/ Բժիշկներ</a>
                              <p className="ttl1">/ {elem.name}</p>
                              <p className="ttls">Բժիշկներ</p>
                              <div>
                                 <div> 
                                    <img src={require(("./" + elem.image))} />
                                 </div>
                                 <div>
                                    <p>{elem.name}</p>
                                    <table>
                                          { elem.texts.hasOwnProperty("prof") ? <tr><td className="upercases">Մասնագիտություն</td> <td>{elem.texts.prof}</td></tr> : console.log("no")}
                                          { elem.texts.hasOwnProperty("service") ? <tr><td className="upercases">Ծառայություն</td> <td>{elem.texts.service}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("surgeon") ? <tr><td className="upercases">Վիրաբույժ</td> <td>{elem.texts.surgeon}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("degree") ? <tr><td className="upercases">Գիտական աստիճան</td> <td>{elem.texts.degree}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("title") ? <tr><td className="upercases">Գիտական կոչում</td> <td>{elem.texts.title}</td></tr> : console.log("no")}   
                                          { elem.texts.hasOwnProperty("position") ? <tr><td className="upercases">Պաշտոն</td> <td>{elem.texts.position}</td></tr> : console.log("no")}
                                          { elem.texts.hasOwnProperty("lanuages") ? <tr><td className="upercases">Լեզուներ</td> <td>{elem.texts.lanuages}</td></tr> : console.log("no")}
                                       
                                    </table>
                                 </div>
                                 <div>
                                    {/* slider */}
                                    <div className="slidershow middle">

                                       <div className="slides">
                                          <input type="radio" name="r" id="r1" checked />
                                          <input type="radio" name="r" id="r2" />
                                          <input type="radio" name="r" id="r3" />
                                          <input type="radio" name="r" id="r4" />
                                          <input type="radio" name="r" id="r5" />
                                          <div className="slide s1">
                                             <img src={require("./contacts/call.png")} alt="" />
                                          </div>
                                          <div className="slide">
                                             <img src={require("./contacts/call.png")} alt="" />
                                          </div>
                                          <div className="slide">
                                             <img src={require("./contacts/call.png")} alt="" />
                                          </div>
                                          <div className="slide">
                                             <img src={require("./contacts/call.png")} alt="" />
                                          </div>
                                          <div className="slide">
                                             <img src={require("./contacts/call.png")} alt="" />
                                          </div>
                                       </div>

                                       <div className="navigation">
                                          <label for="r1" className="bar">text</label>
                                          <label for="r2" className="bar">text</label>
                                          <label for="r3" className="bar">text</label>
                                          <label for="r4" className="bar">text</label>
                                          <label for="r5" className="bar">text</label>
                                       </div>
                                    </div>






                                    {/* slider */}
                                 </div>
                              </div>

                           </div>
               }
            })}
            <ul className="conts">
               <li>
                  <a href="tel:+37410537500">
                     <img src={require("./contacts/call.png")} />
                     +374 10 53 75 00
                  </a>
               </li>
               <li>
                  <a href="#">
                  {/* onclick function */}
                  <img src={messege} />
                  Հաղորդագրություն 
                  </a>
               </li>
               <li>
                  <a href="#">
                  {/* onclick function */}
                     <img src={require("./contacts/advice.png")} />
                     Խորհրդատվություն  
                  </a>
               </li>
               <li>
                  <a href="#">
                     {/* onclick function */}
                     <img src={check} />
                     Գրանցվել ընդունելության   
                  </a>
               </li>
               <li>
                  <a href="#">
                     {/* onclick function */}
                     <img src={opinion} />
                     Երկրորդ կարծիք   
                  </a>
               </li>
            </ul>
         </div>


      )
   // }
}
export default Docnums