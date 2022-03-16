import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav () {
  const[show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY> 100){
        handleShow(true);
        } 
         else
        handleShow(false);
      
    });
    return ()=>{
      window.removeEventListener("scroll");
    };
  },[]);
  return (
    <div className={show ? 'nav nav_black ': 'nav'}>
    
    <img className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Loading"
    />
    
    
     </div>
  )
}

export default Nav ;