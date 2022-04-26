import React, { Component } from 'react';
import './slider.css';
import But from './buttons/button';
import List from './list/list';



class Slider extends Component {
    state = {
        button: [
            {text:"Առցանց կապ", image: './topButtons/first.png', key:1},
            {text:"Գտնել բժիշկ", image: './topButtons/second.png', key:2},
            {text:"Ծառայություններ", image: './topButtons/third.png',key:3}
        ],
        slides: [
            "./slider/doc1.jpg",
            "./slider/doc2.jpg",
            "./slider/doc3.jpg",
            "./slider/doc4.jpg",
            "./slider/doc5.jpg",
            "./slider/doc6.jpg"
        ]
    }

    // constructor(props) {
    //     super(props);
    //       this.state.slides = {
    //         classes: true 
    //       };
    // }  
    constructor(props) {
        super(props);
        this.setChanged = this.setChanged.bind(this);
      }
    
      // Function to set the parent's state
      setChanged() {
        this.setState({ changed: true });
      }
    
    render() {
        const inform = this.state.button
        const slides = this.state.slides

        return (
            <div className="buttonPlace">
                {/* <img className="backgrounds" src="./slider/doc1.jpg"></img> */}
                <div className="buts">
                    {inform.map((elem) => {
                        return (
                            <But keys={elem.key} text={elem.text} link={elem.image}/>
                        )
                    })}
                </div>
                    {/* {slides.map((elem) => {
                        return (
                        <List link={elem.link} colors={elem.classes}/>
                        )
                    })
                    } */}
                    {/*  */}
                    <p className="hide">text</p>
                     <List data={slides}/>
                    {/*{slides.map((elem) => {
                        return (x`
                        elem.classes ? <img className="backgrounds" src={elem.link}></img> : ""
                        )

                    })} */}

                
            </div>
        )
    }
    
}
export default Slider