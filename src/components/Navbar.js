import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import butterfly from '../images/nav.png'
import './NavBar.css';


function Navbar() {
    
 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [addNewArray,setAddNewArray] = React.useState([]);

    return(
        <>
         <nav className = 'navbar' >
         <div className = 'navbar-container' >
       
         <img src={butterfly} className = "nav1" alt=""/>
       
        
         </div>
         </nav>
     
        </>
        
    );


  
  
}

export default Navbar
