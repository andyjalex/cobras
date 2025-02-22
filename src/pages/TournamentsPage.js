import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import tournament from '../assets/tournament.jpeg'
import { Navbar } from '../components'


const TournamentsPage = () => {
  return (
    <Wrapper>
      <Navbar fixed={false}/>
      <section className="sec1">
        <div className="container">
          <div className="main-feature-continer">
            <div className="feature">
              <img className="feature__image" src={tournament}></img>
              <h2 id="title"> Volleyball Tournaments since 2020</h2>
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
              </div>
            </div>
          </div>
          <div className="right-side-bar">
            <h2 id="sub-title">The Cobra Cup</h2>
            <div className="cup-card">
              Cup 2024</div>
            <div className="cup-card">Cup 2023</div>
            <div className="cup-card">Cup 2022</div>
            <div className="cup-card">Cup 2021</div>
            <div className="cup-card">Cup 2020</div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-sizing: border-box;
  position: relative;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    background: transparent;
    overflow: hidden;
    background-color: #DCC9B4
  }
  .container{ 
    padding: 10px;
    display: grid;
    gap: 2rem;
    place-items: center; 
 
    max-width: 95vw; /* Allow more space on smaller screens */
    grid-template-columns: 1fr; /* Stack items */
  
  }
  @media (min-width: 768px) {
  .container {
     max-width: 80vw;
    grid-template-columns: 2fr 1fr;
  }
  }
  .main-feature-continer {
    position: relative;
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 16px;

    }
  #title {
    position: absolute;
    top: 10%;
    font-size: 4em;
    text-transform: uppercase;
     font-family: 'Graphik', sans-serif;
    font-weight: bold;

  } 
  .feature {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    margin-top: 64px;
overflow: hidden;
         

    @media (min-width: 768px) {
      
      width: 100%;
      border: 2px solid black;

      border-radius: 8px;
      //box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.3);
    }
  }
   .feature__image {
    vertical-align: top;
    
    object-fit: cover; 
        width: 100%;
    height: 100%;
  }
  .right-side-bar {
    position: relative;
    display: flex ;
    flex: 1;
    flex-direction: column;
    justtify-content: center
    align-items: center;
    border: 1px solid #979797;  
    padding: 10px;
    @media (min-width: 768px) {
      width: 100%;
      border: 2px solid black;
      border-radius: 8px;
    }
  }
  h2 {
    width: 80%;
    text-align: center; /* Align text */
    margin: 0; /* Reset any default margins */
    padding: 0.5em 0; /* Add some vertical padding for spacing */
  }
  .feature__caption {
    position: relative;
    width: 60%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    text-transform: uppercase;
  }
  .feature p {
    align-self: center;
    width: 100%;
    font-size: 16px;
    color: black;
    margin-top: 64px;
    opacity: 1;

  }

  .cup-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
  }

  #sub-title {
    position: relative;
    font-size: 2.5em;
    text-transform: uppercase;
  }
  .right-side-bar  h2 {
    width: 100%;
     font-family: 'Graphik', sans-serif;
  font-weight: bold;
  }
  


`
export default TournamentsPage
