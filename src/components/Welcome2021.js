import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AnimateSharedLayout,motion  } from "framer-motion"
const containerVariants = {
    hidden: {
      opacity: 0,
      x:'-100vw'
    },
    visible: {
      opacity: 1,
      x:'0',
      transition: {
        duration: 1
      },
      exit: {
        x: '-100vw',
        transition: {
          ease: 'easeInOut'
        }
      }
    }
  }

function Welcome2021({setwelcome2020Visible,sethomeVisible}) {
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        /* to */
        animate="visible"
        exit="exit"
        className="welcome">
         <div className="header">
                 <p className="title">Welcome 2021</p>
            </div>
            <div className="body">
                <div className="phrase">Now It's My Time 2021 is Here</div>
                <motion.div 
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{delay:1, duration:2}}
                >
                    <img className="img_2020" src="https://images.unsplash.com/photo-1573119744940-b79bdf58a6b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="maskMan_img"/>
                </motion.div>
                <motion.p
                 initial={{y:100,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{delay:1, duration:1}}
                className="quote">It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going
                <span className="author"> -Brian Tracy</span>
                </motion.p>
                <motion.div 
                 initial={{y:-100,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{delay:.5, duration:1}}
                className="lets_move_button">
                    <Button onClick={()=>{
                       setwelcome2020Visible(false) ;
                       sethomeVisible(true);
                    }}>Let's Move <span><ArrowForwardIcon/></span></Button>
                   
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Welcome2021
