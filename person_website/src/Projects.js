import React, { useState, useEffect } from 'react';
import { useSpring, animated, styled } from '@react-spring/web';

import Navbar from './pages/Navbar.js';
import Footer from './pages/Footer.js';

import './Projects.css';

import placeholder from './assets/placeholder.jpeg';

import blood from './assets/projects/blood.jpeg';
import emg from './assets/projects/emg.JPG';
import breast from './assets/projects/breast cancer.png';
import brain from './assets/projects/brain.png';
import stable from './assets/projects/stable.webp';
import doorlock from './assets/projects/face.jpeg';
import pneumonia from './assets/projects/pneumonia.jpeg';
import protein from './assets/projects/protein.webp';
import heart from './assets/projects/heart.jpg';
import row from './assets/projects/row.jpeg';
import narwhale from './assets/projects/narwhale.jpeg';
import ultrasound from './assets/projects/ultrasound.jpeg';
import pose from './assets/projects/facial.jpeg';
import loan from './assets/projects/loan.png';
import nutri from './assets/projects/nutricartdemo.png';

function Projects() {
    const [showCarousel, setShowCarousel] = useState(true);

    const images = [nutri, emg, breast, brain, stable, doorlock, pneumonia, protein, heart, row, narwhale, ultrasound, pose, loan, blood]; 
    const links = ['https://github.com/m-chenie/NutriCart2.0', 'https://github.com/w12l3-c/EMG-Fabric', 'https://github.com/w12l3-c/Breast-Tumour-Segmentation', 'https://github.com/w12l3-c/Brain-Tumour-Detection', 'https://github.com/w12l3-c/Stable-Diffusion-Interface', 'https://github.com/w12l3-c/RaspberryPi-Face-and-Object-Detection-DoorLock', 'https://github.com/w12l3-c/Pneumonia_Classification', 'https://github.com/w12l3-c/Drug-Binding-Protein-Prediction', 'https://github.com/w12l3-c/Heart-Disease-Machine-Learning', '', '', 'https://github.com/w12l3-c/Waterloo_BME121', 'https://github.com/w12l3-c/Computer-Vision-Projects', 'https://github.com/w12l3-c/ML-Django-Loan-Probabilistic-Website', 'https://github.com/w12l3-c/Malaria'];   // github project links
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const prevImageIndex = (currentSlide - 1 + images.length) % images.length;
    const nextImageIndex = (currentSlide + 1) % images.length;

    const description = [
        <div key={0}>
            <h3>Nutricart</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        NutriCart is a chrome extension that allows users to balance health and concenience by tracking 
                        calories and nutrition of their groceries. 
                        <br/><br/>
                        It also supports the user to set up goals for themselves and it will give them instant feedback on
                        the nutritional status of the shopping cart and suggest healthier alternatives.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Selenium</li>
                        <li>HTML/CSS/JS</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={1}>
            <h3>Custom EMG Detection Sleeve</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Custom design sleeve using conductive fabric and velcro to strap on reusable EMG sensors.
                        Also designed the real-time collection of EMG data, signal processing, and
                        gesture detection by machine learning models such as LightGBM and CNN.
                        It also wireless transmits the data between client and server ESP32s using BLE.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Tensorflow</li>
                        <li>Scipy</li>
                        <li>OpenCV</li>
                        <li>LightGBM</li>
                        <li>RaspberryPi</li>
                        <li>Arduino</li>
                        <li>ESP32</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={2}>
            <h3>Breast Tumour Segmentation</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Segmentating Breast Cancer from Ulatrosound images using various model such as
                        U-Net, Segformer, Yolov8 + Segment Anything, and Mask R-CNN. Reaching 92-98% dice score.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Tensorflow</li>
                        <li>Segment Anything</li>
                        <li>Numpy</li>
                        <li>Matplotlib</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={3}>
            <h3>Brain Tumour Classification & Segmentation</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Classifying and segmentating brain tumours from MRI images using transfer learning with EfficientNet and U-Net respectively.
                        These two models achieve 98% accuracy and 96% dice score respectively.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Tensorflow</li>
                        <li>Numpy</li>
                        <li>Matplotlib</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={4}>
            <h3>Stable Diffusion GUI</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Implementing Stable Diffusion Inferface in Google Colab. 
                        The GUI allows interferncing of custom model and generate images using text2img and img2img.
                        It also supports LoRA, Dreambooth and ControlNet.

                        This is intially made for myself to generate pose or landscape reference images for my drawing hobby.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Tensorflow</li>
                        <li>Huggingface</li>
                        <li>CUDA</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={5}>
            <h3>Face Recognition Doorlock</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        A smart doorlock that uses facial recognition to detect my family members and unlock the door.
                        It also uses object detection to detect if there is a package in front of the door or dangerous objects and send a notification to my phone.
                        I also 3D print the case to hold the servo, RaspberryPi, and camera.
                        <br/><br/>
                        This is achieve using Siamese Model and OpenCV for face recognition and Yolov7 for object detection.
                        
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Tensorflow</li>
                        <li>RaspberryPi</li>
                        <li>OpenCV</li>
                        <li>SolidWorks</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={6}>
            <h3>Pneumonia Detection</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        It detects pneumonia from chest xray using transfer learning with ViT, it also determine the probability between bacterial and viral pneumonia.
                        It achieves 99% accuracy.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Scikit-learn</li>
                        <li>Huggingface</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={7}>
            <h3>Protein Binding Prediction</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Investigate in drug binding protein prediction using DNN and gradient boosted trees with data supplied from alphaFold2.
                        The best model achieves a weighted f1 score of 93% and ROC(reciever operating characteristic score) AUC of 88%
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Tensorflow</li>
                        <li>Scikit-learn</li>
                        <li>LightGBM</li>
                        <li>XGBoost</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={8}>
            <h3>Heart Disease Prediction Website</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        This website allows users to input their daily habits and health factors and it will predict the probability of them having heart disease, 
                        it will also gives them suggestions on how to improve their health (aka lower the score).
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Tensorflow</li>
                        <li>Streamlit</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={9}>
            <h3>Paraplegic Rowing Stabilizer</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        This device is designed to help paraplegic rowers to stablize their body and prevent them from falling off the scull when transferring themselves in and out.
                        It is designed as a clamp mechanism to prevent damage to the scull while allowing the paraplegic rower to easily perform this task safe and independent.
                        Meanwhile, it is also designed to be adjustable to fit different body types and different scull sizes.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Engineering Analysis</li>
                        <li>SolidWorks</li>
                        <li>Machining and Woodwork</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={10}>
            <h3>Narwhale 3D puzzle</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        This is a 3D puzzle of a narwhale that can be assembled as a puzzle and it can move its tail by rotating the horn in front.
                        It is designed as a toy that has a moving mechanism and resembles one of Canada's motifs.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>SolidWorks</li>
                        <li>3D slicing</li>
                        <li>Creative Design</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={11}>
            <h3>A mode & B mode Ultrasound</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        A mode and B mode Ultrasound image processing using opengl and c++.
                        Processed real and imaginary signals from the ultrasound beamformer and find the arteries' location and size.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>C++</li>
                        <li>OpenGL</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={12}>
            <h3>Body Posture Recognition</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        This projects includes Face, Face-Mesh, Pose, Motion, and Hand Gesture Recognition using OpenCV and Mediapipe.
                        Using these detectors, I made some miniprograms such as virtual paint, virtual mouse, virtual piano and gym pose corrector.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>OpenCV</li>
                        <li>Mediapipe</li>
                        <li>Pytorch</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={13}>
            <h3>Loan Credit Score Prediction Website</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        This website is intend to help people who are appyling or planned to apply for mortgages or loans from bank.
                        It will predict the probability of them getting approved and give them suggestions on how to improve their credit score base on their financial history.
                        This is an unbiased prediction so it will not be affected by the users gender, gender preference, race, or age.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Django-REST</li>
                        <li>Scikit-learn</li>
                        <li>Heroku</li>
                        <li>Postgresql</li>
                        <li>HTML/CSS/JS</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
        <div key={14}>
            <h3>Malaria Classification</h3>
            <div className='description-container'>
                <div className='description-content'>
                    <p>
                        Classifying between healthy RBCs and malaria infected RBCs using transfer learning with VGG-NET and ResNet.
                        It achieves 93% accuracy.
                    </p>
                    <br/><br/>
                    <ul>
                        <li>Python</li>
                        <li>Pytorch</li>
                        <li>Numpy</li>
                        <li>Matplotlib</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div className='image-container'>
                    <a href={links[currentSlide]}><img src={images[currentSlide]}></img></a>
                </div>
            </div>
        </div>,
    ];

    return(
        <div className="main">
            <Navbar />

            <h1>Projects</h1>
            <div className="body">
                <div className="image-track">
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="45" fill='white' onClick={prevSlide}><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></div>
                    <a href={links[prevImageIndex]} target='_blank' className={`projects carousel carousel-small ${currentSlide === prevImageIndex ? 'carousel-visible' : ''}`}><img className={''} src={images[prevImageIndex]} alt="Previous" draggable={false}/></a>
                    <a href={links[nextImageIndex]} target='_blank' className={`projects carousel carousel-small ${currentSlide === nextImageIndex ? 'carousel-visible' : ''}`}><img className={''} src={images[nextImageIndex]} alt="Next" draggable={false}/></a>
                    <a href={links[currentSlide]} target='_blank' className='projects carousel carousel-large carousel-visible'><img className={''} src={images[currentSlide]} alt="Current" draggable={false}/></a>
                    <div><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="45" fill='white' onClick={nextSlide}><path d="M400-240 640-480l-240-240-56 56 184 184-184 184 56 56Z"/></svg></div>
                </div>
                <div className="carousel-dots">
                    {images.map((image, index) => (
                        <div key={index}
                            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                        />
                    ))}
                </div>

                <div onClick={() => setShowCarousel(!showCarousel)} className='toggle-view'>
                {showCarousel ? 
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill='white' className='toggle-view'><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill='white' className='toggle-view'><path d="M80-360v-240q0-33 23.5-56.5T160-680q33 0 56.5 23.5T240-600v240q0 33-23.5 56.5T160-280q-33 0-56.5-23.5T80-360Zm280 160q-33 0-56.5-23.5T280-280v-400q0-33 23.5-56.5T360-760h240q33 0 56.5 23.5T680-680v400q0 33-23.5 56.5T600-200H360Zm360-160v-240q0-33 23.5-56.5T800-680q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280q-33 0-56.5-23.5T720-360Zm-360 80h240v-400H360v400Zm120-200Z"/></svg>
                    }
                </div>
            </div>
            <div className='description'>
                {description[currentSlide]}
            </div>
            <div className='decoration'></div>
            <Footer />
        </div>
    )
}

export default Projects;

