import React from 'react';
import { Button } from "../ui/button";
import { BrowserRouter, NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { SignUp } from '../sign-up/SignUp';

import App from '../../App';


const Header = () => {
const [signIn, setSignIn] = useState(true);




  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
    
    <Link to ={'/'}>
        <img src={'/meal_buddy.svg'} className="h-20 cursor-pointer" alt="logo" />
      </Link>
      {signIn && <SignUp signIn={signIn}/>}
    </div>
  );
};

export default Header;