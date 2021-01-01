import React,{useState,useEffect} from 'react'
import db from '../database/firebase'
import Message from './Message'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function WishMessages() {
    const [wishingMessages, setWishingMessages] = useState([])
    useEffect(()=>{
        db.collection("messages")
        .orderBy("time","desc")
        .onSnapshot((snapshot)=>{
            setWishingMessages(snapshot.docs.map(doc=>{ const data =doc.data();
                const id = doc.id;
                return { id, ...data };}))
        }   
        )
    },[])
    console.log("setWish mess",wishingMessages)
 
    return (
        <div className="wish">
            <h2><Button className="btnAdd" ><Link className="link" to="/wishes">Add Your 2021's Resolution 
            <AddCircleIcon style={{marginLeft:"10px"}}/></Link></Button></h2>      
          { wishingMessages.length!==0 ? (wishingMessages.map(
              ({message,time,userImage,userName,id,totalLikesCount,theme},index)=>(
                <Message 
                index={index}
                key={id}
                userName={userName} 
                message={message}
                time={time}
                userImage={userImage}
                messageId={id}
                theme={theme}
                totalLikes={totalLikesCount}/>
            ))) : (<p className="loadingMessage">Loading Messages...</p>)
           
          }
        </div>
    )
}

export default WishMessages
