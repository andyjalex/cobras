import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa6'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const Navbar = ({fixed}) => {

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const {openSidebar}= useProductsContext()
  const position = fixed ? 'fixed': 'relative';

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
      
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  
  }, [])


  return (
    <NavWrapper fixed={fixed} className={isScrollingDown ? 'hide-navbar': ''}>
        <div className="nav-center">
        <div className="nav-header">
          <Link className="main-header__brand" to='/'>
            <img src={logo} alt='COBRAS' />

          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li><a href="/" data-text="about">About</a></li>
          <li><a href="/tournaments" data-text="tournaments">Tournaments</a></li>
          <li><a href="/social" data-text="social">Social</a></li>
          <li><a href="/gallery" data-text="gallery">Gallery</a></li>
          <li><a href="/contact" data-text="contact">Contact</a></li>
        </ul>

        </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
    position: ${(props) => (props.fixed ? 'fixed' : 'relative')};
    top: 0;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background-color: #000;
    z-index: 102;
    transition: ${(props) => (props.fixed ? 'transform 0.3s ease-in-out': 'none')};
    &.hide-navbar {
      transform: ${(props) => (props.fixed ? 'translateY(-100%)' : 'none')};
    }
    .nav-center {
      width: 90vw;
			margin: 0px auto;	
			max-width: var(--max-width)

    }
    .nav-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    }
    .nav-links {
      display: none;
    }
    .nav-contact {
        border: 1px sold var(--clr-white);
        border-radius: 8px;
    }
    .main-header__brand {
				display: flex;
        color: #0e4f1f;
        text-decoration: none;
        font-weight: bold;
        vertical-align: middle;
    	}
			.main-header__brand img {
					height: 3rem;
			}

    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-white);
        cursor: pointer;
        svg {
        font-size: 2rem;
        }
    }


    @media (min-width: 992px) {
			.nav-toggle {
			display: none;
			}
			.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			}
			.nav-contact,
			.nav-links {
        list-style: none;
        display: flex;
        justify-content: center;
        li {
            margin: 0 1rem;
        }
        a {
            position: relative;
            display: block;
            color: var(--clr-primary-3);
            font-size: 1.8rem;
            text-decoration: none;
             -webkit-text-stroke: 1px white;
            text-transform: uppercase;
            letter-spacing: var(--spacing);
      
            font-weight: 900;
            text-decoration: none;
        }
        a:before,
        a:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          transition: 0.5s;
        }
        a:hover:before {
          color: rgb(255, 250, 101);
          z-index: 1;
          -webkit-text-stroke: 1px black;
          transform: translate(-10px, 10px);
        }
        a:hover:after {
          color: rgb(34, 34, 34);
          z-index: 2;
          -webkit-text-stroke: 1px black;
          transform: translate(-20px, 20px);
        }
        a:hover {
          color: transparent;
          -webkit-text-stroke: 1px black;
          transition: 0.5s;
        }
			}
			.nav-contact {
			border: 1px solid var(--clr-white);
			}
			
    }

`
export default Navbar;