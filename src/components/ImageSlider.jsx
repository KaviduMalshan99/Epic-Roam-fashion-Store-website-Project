import React, { useState, useEffect } from 'react';
import "./ImageSlider.css" 


const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "src/assets/img1.png", alt: 'Image 1' },
    { src: 'src/assets/img2.png', alt: 'Image 2' },
  ];

  const handlePrevClick = () => {
    setCurrentImage((currentImage === 0) ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage === images.length - 1) ? 0 : currentImage + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={
            index === currentImage
              ? { opacity: 1, transition: 'opacity 0.5s ease-in-out' }
              : { opacity: 0, transition: 'opacity 0.5s ease-in-out' }
          }
        />
      ))}

      <div className="controls">
        <button onClick={handlePrevClick}></button>
        <button onClick={handleNextClick}></button>
      </div>
    </div>
  );
};

export default ImageSlider;
