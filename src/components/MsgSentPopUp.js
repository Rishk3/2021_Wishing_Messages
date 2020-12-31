import React from 'react'
import { Link } from 'react-router-dom'

function MsgSentPopUp() {
    return (
        <div className="msgPopup">
            <p style={{paddingTop:"20px"}}>Your Message Has Already been Delivered</p>
          <Link className="link" to="/">Go to Home & Check your msg</Link>
        </div>
    )
}

export default MsgSentPopUp
