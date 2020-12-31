import React from 'react'
import "./scss/sliderComp.css"
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Black2020({setblack2020Visible,setwelcome2020Visible}) {
    
    return (
        <div className="black">
            <div className="header">
                 <p className="title">2020</p>
            </div>
            <div className="body">
                <div className="phrase">The Darkest year Of the Century</div>
                <div>
                    <img className="img_2020" src="https://images.unsplash.com/photo-1591019928690-0221b2d9387b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="maskMan_img"/>
                </div>
                <p className="quote">“Why do you go away? So that you can come back. Coming back to where you started is not the same as never leaving.” 
                 <span className="author"> -Terry Pratchett</span> </p>
                <div className="lets_move_button">
                    <Button onClick={()=>{
                       setblack2020Visible(false) ;
                       setwelcome2020Visible(true);
                    }}>Let's Move <span><ArrowForwardIcon/></span></Button>
                    
                </div>
            </div>

        </div>
    )
}

export default Black2020
