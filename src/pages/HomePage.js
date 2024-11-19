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
      const bgElement = document.querySelector(".overlay");
      let index = 0;
      const images = [cobraImage1, cobraImage2, cobraImage3, cobraImage4, cobraImage5];
  
      const changeBackground = () => {
        bgElement.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
      };
  
      const interval = setInterval(changeBackground, 4000); // Change every 4 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [imagesLoaded]);

  return (
      <Wrapper imagesLoaded={imagesLoaded}>
      <div className="App">
      <div className="overlay"></div>
      <section className="sec1">
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
      </section>
      <Social />
      <section className="sec3">
      main links
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
  background: #222;
  overflow: hidden;
  animation-delay: 4s;
}

.overlay {
  position: absolute;
  top: 0rem;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  z-index: 100;
  background-image:url(${cobraImage1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  animation: ${({ imagesLoaded }) =>
  imagesLoaded
    ? 'fadeInBackground 2s forwards ease-in 4s'
    : 'none'};
}

  

.sec1 {
  
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
    margin: 0;
    padding: 0;
    display: flex;
    opacity: 1;
    background: url(${cobraImage1}) center center;
    background-clip: text;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-attachment: fixed;
    background-size: cover;
    animation: fadeOutText 1.5s forwards 5s ;

     @media (max-width: 480px) {
      flex-flow: column wrap;
    }
}

ul li {

    list-style:none;
     color: #fff;
    font-size: 20em;
    font-weight: 700;
    letter-spacing: 15px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 5px #fff;
    animation: fadeInTextBackground 4s forwards ;

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
    top: 0%;
    opacity: 0;
    z-index: 300;
    animation: fadeInText 4s forwards ;
    animation-delay: 8s;  

    @media (min-width: 768px) {
      top: 15%;
      font-size: 5em;
    }
    @media (min-width: 1200px) {
      top: 15%;
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
    0% { opacity: 0; }
    100% { opacity: 1; }
         
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





`

export default HomePage;