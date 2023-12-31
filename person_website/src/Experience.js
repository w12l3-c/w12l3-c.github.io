import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

import Navbar from './pages/Navbar.js';
import Footer from './pages/Footer.js';

import placeholder from './assets/placeholder.jpeg';
import sunnybrook from './assets/experience/sunnybrook.JPG';
import vip from './assets/experience/vip.png';
import watolink from './assets/experience/watolink.jpeg';
import igem from './assets/experience/igem.png';
import biotron from './assets/experience/biotron.jpeg';
import warg from './assets/experience/WARG.png';


function Experience() {
    return(
        <div className='main1'>
            <Navbar />
            <div className='experience'>
                <div className='Work'>
                    <h1>Work Experience</h1>
                    <div className='work-flex'>
                        <div className='container'>
                            <div className='vertical-line'></div>
                            <div className='box'>
                                <h3>Co-founder</h3>
                                <h4>Limbitless Bionics</h4>
                                <h5>September 2023 - Present</h5>
                                <ul>
                                    <li>Developing Bionic Arms</li>
                                    <li>Waterloo Velocity 2023 Semi-Finals</li>
                                </ul>
                                <img src={placeholder} alt='TBD Picture' className='rounded-rectangle'></img>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='vertical-line'></div>
                            <div className='box'>
                                <h3>Robotics & ML Research Assistant</h3>
                                <h4> - The Hospital for Sick Children (Sickkids)</h4>
                                <h5>Janurary 2024 - Present</h5>
                                <ul>
                                    <li>TBD</li>
                                </ul>
                                <img src={placeholder} alt='TBD Picture' className='rounded-rectangle'></img>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='vertical-line'></div>
                            <div className='box'>
                                <h3>Machine Learning Research Assistant</h3>
                                <h4>Vision & Image Processing Lab - University of Waterloo</h4>
                                <h5>September 2023 - Present</h5>
                                <ul>
                                    <li>Train and Finetune Generative AI Models to enlarge exisiting medical database for COVID</li>
                                    <li>Create Object Detection to classify foriegn objects in lung xray</li>
                                    <li>Resaerch on Live2D Generative Model and Motion Tracking</li>
                                </ul>
                                <br/>
                                <img src={vip} alt='VIP Lab logo' className='rounded-rectangle'></img>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='vertical-line'></div>
                            <div className='box'>
                                <h3>Machine Learning Research Assistant</h3>
                                <h4>Focused Ultrasound Lab - Sunnybrook Research Institute</h4>
                                <h5>May 2023 - August 2023</h5>
                                <ul>
                                    <li>Achieve 99.97% time reduction in MRI regional segmentation by implementing 3D and 2D Machine Learning pipeline with 89.5 dice score </li>
                                    <li>Create a segmentation dataset with 8K masks on MRI dicom files for MRI Guided Focused Ultrasound Surgery of Uterine Fibroids</li>
                                    <li>Develop a GUI with streamlit to allow custom model inference and a Huggingface Demo with gradio</li>
                                    <li>Win 1st place in Sunnybrook’s academic poster competition</li>
                                </ul>
                                <br/>
                                <img src={sunnybrook} alt='Sunnybrook' className='rounded-rectangle'></img>
                            </div>
                        </div>
                    </div>
                    <p>...To be Continued...</p>
                </div>
                <div className='Education'>
                    <h1>Design Teams</h1>
                    <div className='work-flex'>
                        <div className='edu-container'>
                            <div className='circular left'><img src={watolink}></img></div>
                            <div className='content'>
                                <h3>Software Member</h3>
                                <h4>WATOLINK - BCI WheelChair</h4>
                                <h5>September 2023 - Present</h5>
                                <ul>
                                    <li>Working with Jetson NANO on Data Processing</li>
                                    <li>Using multi-threading to flash LEDs and collect signal simutaenously</li>
                                </ul>
                            </div>
                        </div>
                        <div className='edu-container'>
                            <div className='circular right'><img src={igem}></img></div>
                            <div className='content-right'>
                                <h3>Math & Modelling Member</h3>
                                <h4>Waterloo iGEM</h4>
                                <h5>Janurary 2023 - Present</h5>
                                <ul>
                                    <li>2023: TSWV RNAi Vaccine &#129353;</li>
                                    <li>Research and modeled the interaction between plants and tomato spotted wilted virus using ODEs</li>
                                    <li>Resaerch and modeled the RNA interference pathway in individual plants</li>
                                </ul>
                            </div>
                        </div>
                        <div className='edu-container'>
                            <div className='circular left'><img src={warg}></img></div>
                            <div className='content'>
                                <h3>Hardware Member</h3>
                                <h4>Waterloo Aerial Robotics Group</h4>
                                <h5>September 2023 - Present</h5>
                                <ul>
                                    <li>Using SolidWorks and PDM to 3D CAD parts for 2024 AEAC Drone</li>
                                    <li>Design drone landing gear, board casings, and gimbal</li>
                                </ul>
                            </div>
                        </div>
                        <div className='edu-container'>
                            <div className='circular right'><img src={biotron}></img></div>
                            <div className='content-right'>
                                <h3>Hardware Member & Software Lead</h3>
                                <h4>BioMechatronics - EMG Fabric</h4>
                                <h5>September 2022 - Present</h5>
                                <ul>
                                    <li>Deisgn and 3D CAD EMG Collecting Sleeve</li>
                                    <li>Create Script for Signal Processing of EMG data</li>
                                    <li>Develop Wireless communication using bluetooth using ESP32 and Arduino for Data Transfer</li>
                                    <li>Programmed the Gesture Recognition script using Pytorch and Gradient Boosted Trees</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Projects'>

                </div>
                <div className='Skills'>

                </div>
            </div>
            
            <Footer />
        </div>
    )
};

export default Experience;