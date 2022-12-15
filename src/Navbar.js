import React, { useState, useEffect } from 'react'
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY >100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img  
            className='nav__logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMprhfWHA3feyKzim_g2CtwBiQAZCXvnGZIw&usqp=CAU'
             alt='Netflix Logo'/>
        </div>
    )
}

export default Navbar
