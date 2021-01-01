import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../context_api/StateProvider';
import { actionTypes } from '../context_api/reducer';
import db from '../database/firebase';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { AnimateSharedLayout,motion  } from "framer-motion"



function Message({message,time,userImage,userName,messageId,totalLikes,index,theme}) {
    const [state,dispatch]=useStateValue();
    const [{user,likesCount}] =useStateValue();
    const [showMsg,setShowMsg]=useState(true);
    const [isLiked,setIsLiked]=useState(false);
function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let timeFormat;
    if(hour>=12){timeFormat="PM"}
    else{timeFormat="AM"}
    let min = a.getMinutes();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min+', '+timeFormat;
    return time;
  }

  let currTime;
  if(time!==null){
   currTime=timeConverter(time.seconds);
  }
  
 const deleteMsg=()=>{
     console.log("messg deleting");
     db.collection("messages").doc(messageId).delete();
 }
 const handleLiking=()=>{
    setIsLiked(!isLiked);
    dispatch({
        type:actionTypes.SET_LIKES,
        likesCount:likesCount-1,
    })
    
 }
 const handleDisLiking=()=>{
    setIsLiked(!isLiked);
    dispatch({
        type:actionTypes.SET_LIKES,
        likesCount:likesCount+1,
    })
 }
  
    return (<div>
{ showMsg &&  <motion.div
  initial={{opacity:0,y:"-100vh"}}
  animate={{opacity:1,y:0}}
  transition={{duration:1,type:"spring",stiffness:500}}
className={`MessaegSection msgbackcolor${!theme?0:theme}`}>
        <div className="msgInfo">
        <div className="profile">
            <Avatar src={userImage}/>
            <p className="profile_name">{userName} </p>
            {isLiked?
            (<Button style={{marginLeft:"10px"}}
             onClick={handleLiking}>
                 <FavoriteIcon style={{color:"#FF5733"}} />
                 {<span className="totalLikes" style={{color:"#fff"}}></span>}</Button>):
             (<Button style={{marginLeft:"10px"}} onClick={handleDisLiking}>
                 <FavoriteBorderIcon style={{color:"white"}} /> 
                 {<span className="totalLikes" style={{color:"#fff"}}></span>}</Button>)}
        </div>
        <div className="right">
       { user?.displayName===userName && <Button style={{color:"#fff",border:"none"}} onClick={deleteMsg}><DeleteIcon/></Button>}
        <p className="msgTime">{currTime}</p>
        </div>
        </div> 
                <div className= {`chatBox${!theme?0:theme}`} >
                    <div className={`traingle${!theme?0:theme}`}>   
                    </div>

              " {message} " 
                </div>
            </motion.div>  }
    </div>
        
      
    )
}

export default Message
