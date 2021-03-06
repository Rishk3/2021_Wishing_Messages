import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from '../Login';
import CreateMessage from './CreateMessage';
import Footer from './Footer';
import HomeNav from './HomeNav';
import WishMessages from './WishMessages';

function Home() {
    return (
        <BrowserRouter>
        
         <div className="home">
        
          <HomeNav/>
          <Switch>
          <Route path="/wishes">
            <CreateMessage/>
          </Route>
          <Route path="/">
          <WishMessages />
          </Route>
         
        </Switch>
        <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Home
