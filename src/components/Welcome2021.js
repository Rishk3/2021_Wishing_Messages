import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Welcome2021({setwelcome2020Visible,sethomeVisible}) {
    return (
        <div className="welcome">
         <div className="header">
                 <p className="title">Welcome 2021</p>
            </div>
            <div className="body">
                <div className="phrase">Now It's My Time 2021 is Here</div>
                <div >
                    <img className="img_2020" src="https://images.unsplash.com/photo-1573119744940-b79bdf58a6b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="maskMan_img"/>
                </div>
                <p className="quote">It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going
                <span className="author"> -Brian Tracy</span>
                </p>
                <div className="lets_move_button">
                    <Button onClick={()=>{
                       setwelcome2020Visible(false) ;
                       sethomeVisible(true);
                    }}>Let's Move <span><ArrowForwardIcon/></span></Button>
                   
                </div>
            </div>
        </div>
    )
}

export default Welcome2021
