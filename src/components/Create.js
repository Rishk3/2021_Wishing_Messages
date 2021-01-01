import React,{useState,useEffect,useRef} from 'react'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import firebase from "firebase"
import db from '../database/firebase';
import { useStateValue } from '../context_api/StateProvider';
import MsgSentPopUp from './MsgSentPopUp';
import { motion  } from "framer-motion"
import Theme from './Theme';
function Create() {

    const defaultMessage="Years come and pass, but what it takes to make them worthwhile is someone’s unconditional love, wonderful memories, and zest offered to live them fully. You all have given me all of these and much more in the past year, and I know there will be more to come from you in the year ahead. Wishing Everyone A HAPPY NEW YEAR 2021"
    const [showDefBtn,setShowDefBtn]=useState(false);
    const inputMessageRef=useRef(null);
    const [errorMsg,setErrorMsg] =useState(false)
    const [{user,likesCount}] =useStateValue();
    const [msgSentcounter,setSentMsgcounter]=useState(0);
    const [theme,setTheme]=useState(0);
    const [theme1Select,settheme1Selcet]=useState(true);
    const [theme2Select,settheme2Selcet]=useState(false);
    const [theme3Select,settheme3Selcet]=useState(false);

    const sendMessage= async (e)=>{
        e.preventDefault();
          const data={
            message:inputMessageRef.current.value,
            time:firebase.firestore.FieldValue.serverTimestamp(),
            userName:user.displayName,
            userImage:user.photoURL,
            totalLikesCount:likesCount,
            theme:theme,
        }
        const res= await db.collection("messages").add(data)
       
    }

    useEffect(()=>{
        inputMessageRef.current.focus();
      },[showDefBtn,theme])
      
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
      const theme1SelectFun=()=>{
        setTheme(0);
        settheme1Selcet(!theme1Select)
        settheme2Selcet(false)
        settheme3Selcet(false)
    }
    const theme2SelectFun=()=>{
        setTheme(1);
        settheme1Selcet(false)
        settheme2Selcet(!theme2Select)
        settheme3Selcet(false)
    }
    const theme3SelectFun=()=>{
        setTheme(2);
        settheme3Selcet(!theme3Select);
        settheme1Selcet(false);
        settheme2Selcet(false);
    }
console.log("themeno",theme);

    return (
        <div>
              <div className="create">
              {msgSentcounter==0 && (<h4 style={{paddingTop:"10px"}}>Enter Your 2021's Resolution Or Message</h4>)}     
               {msgSentcounter!=0 && (<MsgSentPopUp/>)}       
                <motion.form
                 initial={{x:-100,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{ duration:1,type:"spring",stiffness:"400"}}
                onSubmit={formSubmit}>
                    <div className="formborder">
                    <div className="formMessage">
                        {errorMsg?(<p style={{color:"red",fontSize:"14px"}}>*Sorry! Your Resolution Should be At Least 10 letters Long
                           </p>):(<p>Your 2021 Resolution Goes here
                           </p>)}
                        
                    <textarea onClick={()=>{
                        setErrorMsg(false);
                    }} placeholder="Say something to world..." ref={inputMessageRef} className="message2021" type="text" ></textarea>
                   
                 
                   <div className="pickTheme">
                  <p style={{alignSelf:"center",marginTop:"10px"}}>Choose MsgTheme:</p>
     
                  <div onClick={theme1SelectFun} className={`border${theme1Select?`yes`:`no`}`}>
                  <Theme
                  initial={{scale:1}}
                  animate={{scale:1.2}}
                  transition={{ duration:1,type:"spring",stiffness:"400"}}
                  onClick={theme1SelectFun} color={0}/>
                  </div>
                  <div onClick={theme2SelectFun} className={`border${theme2Select?`yes`:`no`}`}>
                  <Theme onClick={theme2SelectFun} color={1}/>
                  </div>
                  <div onClick={theme3SelectFun} className={`border${theme3Select?`yes`:`no`}`}>
                  <Theme onClick={theme3SelectFun} color={2}/>
                  </div>
                       
                      

              
                   </div>
                    <div className="btn-group">
             {!showDefBtn ? (
                <Button onClick={()=>{setShowDefBtn(true);
     inputMessageRef.current.value=defaultMessage;     
                    }}  className="default-btn">Add a Default Resolution</Button>
             ):(<Button onClick={()=>{setShowDefBtn(false);
                inputMessageRef.current.value="";
                
                               }}  className="default-btn">Clear Default</Button>)}   
                
                    
                    <Button type="submit" className="submit-btn"><SendIcon/></Button>
                    </div>
               
                    </div>
                    </div>
                </motion.form>
                </div>
        </div>
    )
}

export default Create
