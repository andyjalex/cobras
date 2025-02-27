import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import tournament from '../assets/tournament.jpeg'
import cup from '../assets/trophy-icon.png'
import { Navbar } from '../components'
import { CupData, TournamentData } from '../utils/constants'

const TournamentsPage = () => {
  const fallbackSrc = 'https://fakeimg.pl/600x400'
  return (
    <Wrapper>
      <Navbar fixed={false} />
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
            <div className="side-feature">
              <div className="side-feature__header">
                <img className="side-feature__header__cup" src={cup} />
                <h2 id="right-title">The Cobra Cup</h2>
              </div>

              {CupData.map((item) => {
                return (
                  <div className="cup-card" key={item.year}>
                    {/* Left side */}
                    <div className="cup-card__left-side">
                      {/* Hidden year for layout */}
                      <h2 style={{ visibility: 'hidden' }} id="sub-title">
                        {item.year}
                      </h2>
                      <p className="cup-card__label">
                            Winners 🏆
                      
                          </p>
                          <p className="cup-card__label">
                            Runners up 🥈
       
                          </p>
                    </div>

                    {/* Right side */}
                    <div className="cup-card__right-side">
                      <h2 id="sub-title">{item.year}</h2>

                      <p className="cup-card__value">{item.text1}
                        
                      </p>
                      <p className="cup-card__value">{item.text2}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="bottom-container">
          {TournamentData.map((item) => {
            return (
              <div className="tournament-card">
                <h2 className="tournament__heading">{item.title}</h2>
                <img
                  className="tournament__image"
                  src={item.imageURL}
                  onError={(e) => {
                    e.target.src = fallbackSrc
                  }}
                />
                <p className="feature__description">{item.description}</p>
              </div>
            )
          })}
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
    background-color: #dcc9b4;
  }
  .container {
    padding: 10px;
    display: grid;
    gap: 2rem;
    place-items: center;

    max-width: 95vw; /* Allow more space on smaller screens */
    grid-template-columns: 1fr; /* Stack items */
    @media (min-width: 768px) {
      max-width: 80vw;
      grid-template-columns: 2fr 1fr;
    }
  }

  .bottom-container {
    padding: 10px;
    display: grid;
    gap: 2rem;
    max-width: 95vw; /* Allow more space on smaller screens */
    grid-template-columns: 1fr; /* Stack items */
    @media (min-width: 768px) {
      max-width: 80vw;
      grid-template-columns: repeat(3, 1fr);
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
    top: 6%;
    letter-spacing: 4px;
    font-size: 2em;
    text-transform: uppercase;
    font-family: 'Graphik', sans-serif;
    font-weight: bold;
     @media (min-width: 768px) {
      font-size: 4em;
     }

  }
  .feature {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    
    overflow: hidden;
    background-color: white;

    @media (min-width: 768px) {
      width: 100%;
      border: 2px solid black;
      border-radius: 12px;
      //box-shadow: 3px 3px 3px 3px rgba(255, 255, 255, 0.3);
    }
  }
  .feature__image {
    vertical-align: top;
    object-fit: cover;
    width: 100%;
    height: 100%;
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

  /**right side bar **/

  .right-side-bar {
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    @media (min-width: 768px) {
      width: 100%;
      max-height: 100vh;
      overflow-x: hidden;
            overflow-y: auto;
    }
  }
  h2 {
    width: 100%;
    text-align: center; /* Align text */
    margin: 0; /* Reset any default margins */
    padding: 0.5em 0; /* Add some vertical padding for spacing */
  }

  .side-feature {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 16px;
    
  }

  .side-feature__header {
    display: flex;
    justify-content: space-between; /* Spreads elements apart */
    align-items: center;
    gap: 20px; /* Adjust spacing between items */
  }

  .side-feature__header__cup {
    display: flex;
    align-items: center;
    animation: wiggle 200ms 3s 8 ease-out none;
  }

  .cup-card {
    position: relative;
    display: flex; /* Set to row for horizontal layout */
    flex-direction: row; /* Horizontally align left and right sections */
    margin: 16px;
    background-color: white;
    border: 2px solid black;
    border-radius: 12px;
    width: 100%;
    overflow: hidden;
  }
  .cup-card__left-side {
    display: flex;
    flex-direction: column;
    background-color: black;
    flex: 1;
    justify-content: center;
    align-items: center;
    min-height: 100px;
  }

  .cup-card__right-side {
    flex: 2;
    display: flex;
    flex-direction: column;
    //align-items: flex-start; // Align the content to the top of the column
    align-items: center;
  }


  .cup-card__label {
    font-size: 16px;
    color: white;
    opacity: 1;
    align-items: center; 
    line-height: 20px;
  }

  .cup-card__value {
   
    font-size: 16px;
    color: black;
    opacity: 1;
    align-items: center; 
    line-height: 20px;
  }
  #right-title {
    position: relative;
    font-size: 2em;
    text-transform: uppercase;
  }

  #sub-title {
    position: relative;
    font-size: 2em;
    text-transform: uppercase;
  }
  .right-side-bar h2 {
    width: 100%;
    font-family: 'Graphik', sans-serif;
    font-weight: bold;
  }
  /** bottom section **/

  .tournament-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    background-color: white;
    border: 2px solid black;
    border-radius: 12px;
    overflow: hidden;
  }
  .tournament__image {
    vertical-align: top;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .tournament__heading {
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @keyframes wiggle {
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(-10deg);
    }
    100% {
      transform: rotateZ(10deg);
    }
  }
`
export default TournamentsPage
