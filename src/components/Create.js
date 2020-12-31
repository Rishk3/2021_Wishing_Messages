import React,{useState,useEffect,useRef} from 'react'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import firebase from "firebase"
import db from '../database/firebase';
import { useStateValue } from '../context_api/StateProvider';
import MsgSentPopUp from './MsgSentPopUp';
function Create() {

    const defaultMessage="Years come and pass, but what it takes to make them worthwhile is someone’s unconditional love, wonderful memories, and zest offered to live them fully. You all have given me all of these and much more in the past year, and I know there will be more to come from you in the year ahead. Wishing Everyone A HAPPY NEW YEAR 2021"
    const [showDefBtn,setShowDefBtn]=useState(false);
    const inputMessageRef=useRef(null);
    const [errorMsg,setErrorMsg] =useState(false)
    const [{user,likesCount}] =useStateValue();
    const [msgSentcounter,setSentMsgcounter]=useState(0);

    const sendMessage= async (e)=>{
        e.preventDefault();
          const data={
            message:inputMessageRef.current.value,
            time:firebase.firestore.FieldValue.serverTimestamp(),
            userName:user.displayName,
            userImage:user.photoURL,
            totalLikesCount:likesCount,
        }
        const res= await db.collection("messages").add(data)
       
    }

    useEffect(()=>{
        inputMessageRef.current.focus();
      },[showDefBtn])
      const formSubmit=(e)=>{
          e.preventDefault();
          if(inputMessageRef.current.value.length>10)
          {sendMessage(e);
            inputMessageRef.current.value="";
            setSentMsgcounter(prev=>{prev=prev+1;})}
          else{
             setErrorMsg(true)
          }
      }

    return (
        <div>
              <div className="create">
              {msgSentcounter==0 && (<h2>Add Your Wish Message of 2021</h2>)}
                
               
               {msgSentcounter!=0 && (<MsgSentPopUp/>)}
               
                <form onSubmit={formSubmit}>
                    <div className="formborder">
                    <div className="formMessage">
                        {errorMsg?(<p style={{color:"red",fontSize:"14px"}}>*Your Message Should be At Least 10 letters Long
                           </p>):(<p>Your 2021 Wish Message Goes here
                           </p>)}
                        
                    <textarea onClick={()=>{
                        setErrorMsg(false);
                    }} placeholder="Say something to world..." ref={inputMessageRef} className="message2021" type="text" ></textarea>
                    <div className="btn-group">
             {!showDefBtn ? (
                <Button onClick={()=>{setShowDefBtn(true);
     inputMessageRef.current.value=defaultMessage;
     
                    }}  className="default-btn">Add a Default Message</Button>
             ):(<Button onClick={()=>{setShowDefBtn(false);
                inputMessageRef.current.value="";
                
                               }}  className="default-btn">Clear Default</Button>)}   
                
                    
                    <Button type="submit" className="submit-btn"><SendIcon/></Button>
                    </div>
               
                    </div>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default Create
