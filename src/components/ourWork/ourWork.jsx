/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import './ourWork.css';
import img1 from '../img/alpha.jpeg';
import img2 from '../img/eco.jpeg';
import img3 from '../img/Medical tech.jpeg';

function OurWork() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: img1,
            title: 'Project Alpha',
            icon: '🔗', 
            description: 'Project Alpha is a dynamic web platform designed to connect freelancers with small businesses in need of skilled professionals. The platform includes a job marketplace, profile management, and automated matching features.',
            techStack: ['React', 'Node.js', 'Ecpress', 'MongoDB', 'AWS'],
        },
        {
            src: img2,
            title: 'EcoSense',
            icon: '🌱', 
            description: 'EcoSense is a mobile app promoting sustainable living by tracking users’ carbon footprint and suggesting eco-friendly alternatives for daily choices. It features a user-friendly dashboard, rewards for eco-friendly actions, and a social sharing option.',
            techStack: ['React Native', 'Firebase', 'D3.js'],
        },
        {
            src: img3,
            title: 'MedConnect',
            icon: '💉', 
            description: 'MedConnect is a telemedicine platform built to facilitate secure video consultations between doctors and patients. It includes features like appointment scheduling, digital prescriptions, and medical record sharing.',
            techStack: ['Vue.js', 'Ruby', 'WebRTC', 'PostgreSQL', 'Stripe API'],
        }
    ];

    const showSlide = (index) => {
        const totalItems = images.length;
        setCurrentIndex((index + totalItems) % totalItems);
    };

    return (
        <div>
            <div className='heading'>
                <h1>OUR WORK</h1>
            </div>
            <div className="carousel-container">
                <div
                    className="carousel-slide"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={image.src} alt={`Image ${index + 1}`} />
                            <div className="text-content">
                                <div className="title">
                                    <span className="icon">{image.icon}</span> <h2>{image.title}</h2>
                                </div>
                                <p className="description">{image.description}</p>
                                <div className="tech-stack">
                                    {image.techStack.map((tech, idx) => (
                                        <button key={idx} className="tech-button">{tech}</button>
                                    ))}
                                </div>
                                <button className="read-more">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-buttons">
                    <button className="carousel-button" onClick={() => showSlide(currentIndex - 1)}>❮</button>
                    <button className="carousel-button" onClick={() => showSlide(currentIndex + 1)}>❯</button>
                </div>
            </div>
        </div>
    );
}

export default OurWork;
