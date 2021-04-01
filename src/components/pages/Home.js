import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import homepic from '../../images/homeimage.png'
import Footer from '../Footer';




function Home () {
    return (
        <>
            <div className = "homepic">

            <img src={homepic} className = "nav1" alt=""/>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <div> <div class='footer-link-items'>
        <Link to='/identify' className='nav-links'>
                        Identify
        </Link>
        </div>
        </div>
       
       
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
   
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br>
            <Footer/>
        
        </>
    )
}

export default Home;
