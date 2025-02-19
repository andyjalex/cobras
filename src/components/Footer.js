import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <Wrapper>
      <div className="mainSection">
        <div className="leftSide">
          <div className="main-header__brand" to="/">
            <img src={logo} alt="COBRAS" />
          </div>
        </div>
        <div className="rightSide">
          <ul className="nav-links">
            <li>
              <a href="/" data-text="about">
                About
              </a>
            </li>
            <li>
              <a href="/tournaments" data-text="tournaments">
                Tournaments
              </a>
            </li>
            <li>
              <a href="/social" data-text="social">
                Social
              </a>
            </li>
            <li>
              <a href="/gallery" data-text="gallery">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" data-text="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomSection">
        <h3>
          &copy; {new Date().getFullYear()}
          <span> Cobras BVBC</span>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  .mainSection {
    display: flex;
    justify-content: space-between;
    margin: 2rem 4rem;
    width: 100%;
    flex-direction: column;
  }
  .leftSide {
    display: flex;
  }
  .rightSide {
    display: flex;
  }
  h3 {
    color: white;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  ul li {
    width: 50%; /* Each item takes up half the container width */
    box-sizing: border-box; /* Ensures padding is included in width */
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  .bottomSection {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;

    .mainSection {
      display: flex;
      justify-content: space-between;
      margin: 0 4rem;
      width: 100%;
      flex-direction: row;
    }

    .leftSide {
      display: flex;
    }
    .rightSide {
      display: flex;
    }
  }

  @media (min-width: 992px) {
    .mainSection {
      width: 90%;
    }
  }
`
export default Footer
