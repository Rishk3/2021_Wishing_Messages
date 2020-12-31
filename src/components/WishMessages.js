import React,{useState,useEffect} from 'react'
import db from '../database/firebase'
import Message from './Message'

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
            <h2>NewYear 2021 Messages</h2>      
          { wishingMessages.length!=0 ? (wishingMessages.map(({message,time,userImage,userName,id,totalLikesCount})=>(
                <Message
                key={id}
                userName={userName} 
                message={message}
                time={time}
                userImage={userImage}
                messageId={id}
                totalLikes={totalLikesCount}/>
            ))) : (<p className="loadingMessage">Loading Messages...</p>)
           
          }
        </div>
    )
}

export default WishMessages
