import React from 'react';
import styled from 'styled-components';
import Social from '../components/Social';
import cobraImage1 from '../assets/cobra1.jpeg';
import cobraImage2 from '../assets/cobra2.jpeg';
import cobraImage3 from '../assets/cobra3.jpeg';
import cobraImage4 from '../assets/cobra4.jpeg';
import cobraImage5 from '../assets/cobra5.jpeg';

const HomePage = () => {
    return (
        <Wrapper>
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
  animation: fadeInBackground 2s forwards ease-in 3s, change-bg 16s infinite ease-in 5s;
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
    background: url(${cobraImage1}) no-repeat center center;
    background-clip: text;
    -webkit-background-clip: text;
    background-attachment: fixed;
    background-size: cover;
    animation: fadeOutText 1s linear 5s;
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
      font-size: 5em;
    }
    
}

#text {
    position: absolute;
    font-size: 5em;
    color: #fff;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
    top: 30%;
    opacity: 0;
    z-index: 300;
    animation: fadeInText 4s forwards ;
    animation-delay: 4s;  
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
   99% { opacity: 0; }
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

@keyframes change-bg {
    0% { background-image: url(${cobraImage1}) }
    25% { background-image: url(${cobraImage2}) }
    50% { background-image: url(${cobraImage3}) }
    75% { background-image: url(${cobraImage4}) }
    100% { background-image: url(${cobraImage5}) }

}


`

export default HomePage;