import React, { useState, useEffect } from "react";
import './Navbar.css';

import menu from '../assets/sidebar/menu_FILL0_wght400_GRAD0_opsz24.svg';
import close from '../assets/sidebar/close_FILL0_wght400_GRAD0_opsz24.svg';


function Navbar(){
    const [style, setStyle] = useState('noSidebar');

    const showSidebar = () => {
        if (style !== "sidebar") setStyle("sidebar");
        else setStyle("noSidebar");
    };

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (darkMode !== true){
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    };

    return (
        <div>
            <nav>
                <ul className={style}>
                    <li onClick={showSidebar}>
                        <a href='#'>
                            {style === "sidebar"
                                ? <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="rgb(112, 23, 255)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                : ''
                            }
                        </a>
                    </li>
                    <li><a href="/wal">Home</a></li>
                    <li><a href="/Experience">Experience</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Hobbies">Hobbies</a></li>
                    
                </ul>
                
            </nav>
            <nav>
                <ul className={!style}>
                    <li onClick={showSidebar}>
                        <a href='#'>
                            {style === "sidebar"
                                ? ''
                                : <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;