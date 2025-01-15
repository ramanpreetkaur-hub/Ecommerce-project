import React, { useState, useEffect } from 'react';

const images = [
    '/assets/f3.jpg',
    '/assets/player.jpg',
    '/assets/trinityBlood.jpg',
    '/assets/robin.jpg'
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
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

export default ImageSlider;
