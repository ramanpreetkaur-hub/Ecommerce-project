import React, { useEffect, useState } from 'react'
import project from "../assets/project.png"

// const images = [
//     '/assets/project.jpg',
//     '/assets/',
//     '/assets/',
//     '/assets/
//     '
// ];

const PictureSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden">
            <img
                src={images[currentIndex]}
                alt="Slider"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
        </div>
    );
};

export default PictureSlider