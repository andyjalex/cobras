import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Social from '../components/Social'
import Hero from '../components/Hero'
import cobraImage1 from '../assets/cobra1.jpeg'
import cobraImage2 from '../assets/cobra2.jpeg'
import cobraImage3 from '../assets/cobra3.jpeg'
import cobraImage4 from '../assets/cobra4.jpeg'
import cobraImage5 from '../assets/cobra5.jpeg'
import about from '../assets/about.jpg'
import tournament from '../assets/tournament.jpeg'
import coaching from '../assets/coaching.jpeg'

const HomePage = () => {
  return (
    <Wrapper>
      <div className="App">
        <Hero mediaWidth />

        <Social />
        <section className="sec3">
          <div className="main-feature-container">
            <div className="feature">
              <h2 className="feature__heading">About us</h2>
              <img src={about} alt="about" className="feature__image" />
              <div className="feature__caption">
                <p className="feature__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href="#">read more</a>
              </div>
            </div>
            <div className="feature">
              <h2 className="feature__heading">Tournaments</h2>
              <img src={tournament} className="feature__image" />
              <div className="feature__caption">
                <p className="feature__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href="/tournaments">read more</a>
              </div>
            </div>

            <div className="feature">
              <h2 className="feature__heading">Coaching</h2>
              <img src={coaching} className="feature__image" />
              <div className="feature__caption">
                <p className="feature__description">
                  Coaching is something we would love to offer in the near
                  future.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

//

const Wrapper = styled.section`
border-sizing: border-box;
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
  background-position: top right;
  color: transparent; /* Prevent fill color */
  animation: fadeInTextBackground 5s forwards, fadeOutText 1s forwards 5s;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  flex-flow: column wrap;

    @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    background-position:center;
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
    width: 100%;
    text-align: center;
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
      top: 50%;
      font-size: 7em;
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
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 16px;

  @media (min-width: 768px) {
      flex-direction: row;
      
  }
  
}

.feature {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32rem;
  justify-content: space-between;
  align-items:center;
  border-bottom: 1px white solid;
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;


  @media (min-width: 768px) {
    width: 30%;
    border: 2px solid white;
    //box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.3);
      
  }
}

.feature:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 280%;
  height: 205%;
  background-color: #2d3436;
  opacity: 0.0;
  transition: all 0.35s;
  transform: translate(550px, 300px) rotate(45deg)
}
.feature:hover:before {
  transform: translate(-80px, -200px) rotate(45deg);
  opacity: 0.8;
}


.feature__image-container {
  // display: inline-block;
  // vertical-align: middle;
  // width: 100%;
  // margin-bottom: 0.5rem; /* Adjust as necessary */

  width: 450px;
		height:300px;
		position:relative;
		overflow: hidden;
}

.feature__image {
  vertical-align: top;
  height: 100%;
  width: 100%;
}
  .main-feature-container .feature:nth-of-type(3) .feature__image {
    width: auto;
  }

.feature__heading {
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.feature__caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  text-transform: uppercase;
}

h2 {
  width: 100%;
  text-align: left; /* Align text */
  margin: 0; /* Reset any default margins */
  padding: 0.5em 0; /* Add some vertical padding for spacing */
  
}



.feature p {
  align-self: center;
  width: 80%;
  font-size: 16px;
  color: white;
  margin-top: 64px;
  transition: all .25s;
  opacity: 0.0;
		transform: translate(-500px, 300px);
}

.feature:hover p {
	transform: translate(0,0);
	transition-delay: 0.4s;
  opacity: 1;
}

.feature a{
  text-decoration: none;
  background-color: black;
  color: white;
  width: 100px;
  padding: 15px;
  margin-bottom: 10px;
  align-self: center;
  transition: all 0.25s;
  transform: translateY(200px);
}

.feature:hover a {
  transform: translateY(0);
  transition-delay: 0.5s;
}





`

export default HomePage
