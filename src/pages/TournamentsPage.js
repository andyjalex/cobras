import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import tournament from '../assets/tournament.jpeg'
import { Navbar } from '../components'
import { CupData, TournamentData } from '../utils/constants'

const TournamentsPage = () => {
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
              <h2 id="sub-title">The Cobra Cup</h2>
              {CupData.map((item) => {
                return (
                  <div className="cup-card">
                    <h2>{item.year}</h2>
                    <p className="feature__description">
                      Winners: {item.text1}
                    </p>
                    <p className="feature__description">
                      Runners up: {item.text2}
                    </p>
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
                <h2>{item.title}</h2>
                <img className="tournament__image" src={tournament}></img>
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
      grid-template-columns: repeat(3, 1fr);;
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
      height: 100%;
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
  .side-feature {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 16px;
    margin-top: 64px;
  }

  .cup-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    background-color: white;
    border: 2px solid black;
    border-radius: 12px;
    width: 100%;
  }

  #sub-title {
    position: relative;
    font-size: 2.5em;
    text-transform: uppercase;
  }
  .right-side-bar h2 {
    width: 100%;
    font-family: 'Graphik', sans-serif;
    font-weight: bold;
  }

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
    width: 100%;
  }
  .tournament__image {
    vertical-align: top;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export default TournamentsPage
