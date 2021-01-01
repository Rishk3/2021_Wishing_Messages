import React from 'react'
import "./scss/sliderComp.css"
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AnimateSharedLayout,motion  } from "framer-motion"

function Black2020({setblack2020Visible,setwelcome2020Visible}) {
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
            //   ease: 'easeInOut'
            }
          }
        }
      }
    
    return (
        <AnimateSharedLayout>
        <motion.div className="black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="header">
                 <p className="title">2020</p>
            </div>
            <div className="body">
                <div className="phrase">The Darkest year Of the Century</div>
                <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{delay:1, duration:2}}
                 >
                    <img className="img_2020" src="https://images.unsplash.com/photo-1591019928690-0221b2d9387b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="maskMan_img"/>
                </motion.div>
                <motion.p
                initial={{x:-100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{delay:1, duration:1}}
                className="quote">“Why do you go away? So that you can come back. Coming back to where you started is not the same as never leaving.” 
                 <span className="author"> -Terry Pratchett</span> </motion.p>
                <motion.div
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:.5, duration:1}}
                
                className="lets_move_button">
                    <Button onClick={()=>{
                        
                       setblack2020Visible(false) ;
                       setwelcome2020Visible(true);
                    }}>Let's Move <span><ArrowForwardIcon/></span></Button>  
                </motion.div>
            </div>
        </motion.div>
        </AnimateSharedLayout>
    )
}

export default Black2020
