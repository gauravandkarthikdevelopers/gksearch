import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search';
//import { Tooltip } from '@material-ui/core';
//import Avatar from '@mui/material/Avatar';
//import {Link, Typography,} from "@material-ui/core";

function Home() {
  return (
    <div className='home'>
      {/* <h1>This is Home Page</h1> */}

      <div className='home__body'>
          
          <center>
            <h1 id='gksr'>Gksearch</h1>
           {/* <img className='woogle__logo' src='C:\Users\gaura\Desktop\my-projects\gksearch\google-clone\src\Capture.PNG' alt="googlelogo" />*/}
          </center>
          <p className='woogle__credits'>
            Made with React(love) by gauravkarthik
          </p>
          
          <div className='home__inputContainer'>
              <Search />

          </div>
      </div>
    </div>
  )
}

export default Home;
