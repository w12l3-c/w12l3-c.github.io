import './Home.css'
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/class_logo.png';
import pdf from './assets/AI-2.pdf';

import violin from './assets/home_slider/violin.jpeg';
import badminton from './assets/home_slider/badminton.jpeg';
import drawing from './assets/home_slider/drawing.jpeg';

import Footer from './pages/Footer.js';
import Navbar from './pages/Navbar.js';

function Home() {
    const [text, setText] = useState('');
    const fullText = 'Hi My Name is Wallace';
    
    const bannerRef = useRef();
    const experienceRef = useRef();
    const hobbiesRef = useRef();

    const images = [violin, badminton, drawing];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        let timer = setInterval(() => {
        setText((prevText) => {
            return fullText.substr(0, prevText.length + 1);
        });
        }, 112); // adjust typing speed by changing this value

        return () => clearInterval(timer); // cleanup on unmount
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
          setOpacity(0);
          setTimeout(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
            setOpacity(1);
          }, 1000);
        }, 10000);
    
        return () => clearInterval(timer);
    }, [currentImageIndex]);

    return (
        <div className='home'>
            <Navbar />
            <div className='home-banner fade-in'>
                <h1>{text}<span className="blink">_</span></h1>
            </div>
            <div className='home-experience fade-in flex-container '>
                <div>
                    <h4>Biomedical Engineering Student at University of Waterloo</h4>
                    <Link to="/wal/Experience"><button className='home-experience-button'>CV</button></Link>
                    <a href={ pdf } target="_blank" rel="noopener noreferrer" className='home-experience-button margin-l'>Resume</a>
                </div>
                <div className='adjust-center'>
                    <Link to="/wal/Experience"><img src={ logo } alt="Description" className="circular-image" /></Link>
                </div>
            </div>
            <div className='home-hobbies fade-in flex-container-hobbies'>
                <div>
                    <h4>Hobbies</h4>
                    <button className='home-hobbies-button'>Here</button>
                </div>
                <div className='image-container'>
                    <img src={ images[currentImageIndex] } alt="Description" className="rounded-rectangle" style={{opacity}}/>
                </div>
            </div>
        <Footer />
        </div>
    );
}

export default Home;