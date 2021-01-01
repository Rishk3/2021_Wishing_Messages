import Button from '@material-ui/core/Button';
import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
    return (
        <div className="footer">
            <p>For any queries contact <a href="https://github.com/Rishk3/">Rishk3</a>
            <a
            className="social_icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+918423766435&text=Hey, I Saw your NewYear Project.."
            >
           <Button><WhatsAppIcon style={{marginTop:"-3px",color:"#fff",backgroundColor:"#25D366",borderRadius:"50%",padding:"1px",fontSize:"24px"}}/></Button>
           </a>
            </p>
        </div>
    )
}

export default Footer
