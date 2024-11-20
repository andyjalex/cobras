import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Social from '../components/Social';
import cobraImage1 from '../assets/cobra1.jpeg';
import cobraImage2 from '../assets/cobra2.jpeg';
import cobraImage3 from '../assets/cobra3.jpeg';
import cobraImage4 from '../assets/cobra4.jpeg';
import cobraImage5 from '../assets/cobra5.jpeg';

const HomePage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);


  useEffect(() => {
    const images = [cobraImage1, cobraImage2, cobraImage3, cobraImage4, cobraImage5];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const bgElement = document.querySelector(".shared-background");
      let index = 0;
      const images = [cobraImage1, cobraImage2, cobraImage3, cobraImage4, cobraImage5];
 
      const changeBackground = () => {
        bgElement.style.backgroundImage = `url(${images[index]})`; // Set background image
        bgElement.style.opacity = 1; // Make sure the background is visible
        index = (index + 1) % images.length; // Cycle through images
        bgElement.style.transition = "background-image 1s ease-in-out"; // Smooth transition between images
      };
  
      const interval = setInterval(changeBackground, 4000); // Change every 4 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [imagesLoaded]);

  return (
      <Wrapper imagesLoaded={imagesLoaded}>
      <div className="App">
      
      <section className="sec1 ">
      <div className ="overlay"></div>
      <div className="shared-background">
        
        <ul>
          <li>C</li>
          <li>O</li>
          <li>B</li>
          <li>R</li>
          <li>A</li>
          <li>S</li>
        </ul>
        <h2 id="text">COBRAS BEACH 
        VOLLEYBALL CLUB</h2>
      </div>
      </section>
      <Social />
      <section className="sec3">
        <div className="main-feature-container">
          <div className="feature-container">About</div>
          <div className="feature-container">Tournaments</div>
          <div className="feature-container">Coaching</div> 
        </div>
      </section>
      </div>

      </Wrapper>
  )
}

//

const Wrapper = styled.section`
position: relative;
section {
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 1; /* Initially visible */
  z-index: 100;
  background-color: black;
  animation: fadeOutOverlay 3s forwards; /* Fade out after text animation */
}

.shared-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black; /* Start with black background */
   opacity: 0; /* Start with transparent background */
  opacity: 1;
  z-index: 99;
  animation: fadeInBackground 0.1s forwards;
  animation-delay: 3s;
  /*transition: background-image 1s ease-in-out, opacity 1s ease-in-out;  Add transition for opacity too */
}

  

.sec1 {
    position: relative;
    width: 100%;
    height: 100vh; /* Ensure the section fills the viewport */
    background-size: cover;
}

.sec2 {
 background-color: #FFFA65;
 min-height: 20vh;
}

.sec3 {

  background-color: #333;
}

ul {
    position: absolute;
    height: 100vh; /* Make the text background take up full screen height */
    width: 100%;   /* Ensure the width matches */
    left: 0;
    top:0;
    margin: 0;
    padding: 0;
    margin-top: 0;
    justify-content: center;
    align-items: center; /* Vertically centers the text */
    z-index: 200;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: url(${cobraImage1}); /* Cobra image for text fill */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: transparent; /* Prevent fill color */
    animation: fadeInTextBackground 5s forwards, fadeOutText 1s forwards 5s;
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    flex-flow: column wrap;

     @media (min-width: 768px) {
      display: flex;
      flex-flow: row wrap;
    }


  
}

ul li {

  list-style: none;
  font-size: 20em;
  font-weight: 700;
  letter-spacing: 15px;
  margin: 0 0;
  -webkit-text-fill-color: transparent; /* Transparent to let background show */
  -webkit-text-stroke: 5px #fff; /* White outline stroke */
  animation: fadeInTextBackground 4s forwards;

     // Existing styles...
    @media (max-width: 768px) {
      font-size: 10em;
    }
    @media (max-width: 480px) {
      font-size: 8em;
    }
    
}

#text {
    position: absolute;
    font-size: 4em;
    color: #fff;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
    top: 50%;
    opacity: 0;
    z-index: 300;
    animation: fadeInText 4s forwards ;
    animation-delay: 8s;  

    @media (min-width: 768px) {
      top: 25%;
      font-size: 5em;
    }
    @media (min-width: 1200px) {
      top: 35%;
      font-size: 8em;
    }

}

@keyframes fadeInTextBackground {
    0% { -webkit-text-fill-color: white; }
    20% { text-shadow: 0 0 14px #fff900, 10px 10px 50px #ff6c00; }

    90% { -webkit-text-fill-color: transparent; }

    100% { -webkit-text-fill-color: transparent;
        text-shadow: 0 0 100px rgba(255, 108, 0, 0.3); }
         
}

@keyframes fadeInBackground {
  0% {
    background-color: black; /* Starting with black background */
    background-image: none;  /* No background image initially */
    
  }

  }

  100% {
    
    background-image: url(${cobraImage1}); /* Final background image */
    
  }
}

/* Animation to fade out overlay after text animation */
@keyframes fadeOutOverlay {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    display: none; /* Optionally remove overlay from the layout */
  }
}

@keyframes fadeOutText {
  0% { opacity: 1; }
   99% { opacity: 0; display: none; }
  100% { opacity: 0; display: none; }
}

@keyframes fadeInText {
  0% { opacity: 0; display: none; }
   99% { opacity: 1; }
  100% { opacity: 1;  }
}



ul li:nth-child(1) {
    animation-delay: 0s
}
ul li:nth-child(2) {
    animation-delay: 0.1s
}

ul li:nth-child(3) {
    animation-delay: 0.2s
}
ul li:nth-child(4) {
    animation-delay: 0.3s
}

ul li:nth-child(5) {
    animation-delay: 0.4s
}

ul li:nth-child(6) {
    animation-delay: 0.5s
}


.main-feature-container {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 16px;
  
}

.feature-container {
  position: relative;
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items:center;
  border: 1px white solid;
  padding: 16px;
  margin: 8px;
}






`

export default HomePage;