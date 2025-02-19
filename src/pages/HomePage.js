import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Ball from '../components/Ball'
import Social from '../components/Social'
import Hero from '../components/Hero'
import about from '../assets/about.jpg'
import tournament from '../assets/tournament.jpeg'
import coaching from '../assets/coaching.jpeg'


const HomePage = () => {
  

  return (
    <Wrapper>
      <div className="App">
        <Ball />
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
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: transparent;
    overflow: hidden;
  }

  .sec2 {
    background-color: #fffa65;
    min-height: 20vh;
  }

  .sec3 {
    background-color: #333;
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
    align-items: center;
    
    margin: 16px;
    
    overflow: hidden;

    @media (min-width: 768px) {
      width: 30%;
      border: 2px solid white;
      border-bottom: 1px white solid;
      border-radius: 8px;
      //box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.3);
    }
  }

  .feature:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 280%;
    height: 205%;
    background-color: #2d3436;
    opacity: 0;
    transition: all 0.35s;
    transform: translate(550px, 300px) rotate(45deg);
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
    height: 300px;
    position: relative;
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
    transition: all 0.25s;
    opacity: 0;
    transform: translate(-500px, 300px);
  }

  .feature:hover p {
    transform: translate(0, 0);
    transition-delay: 0.4s;
    opacity: 1;
  }

  .feature a {
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
