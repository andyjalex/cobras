import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa6'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <Wrapper>
        <div className="nav-center">
        <div className="nav-header">
          <Link className="main-header__brand" to='/'>
            <img src={logo} alt='COBRAS' />

          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
            <li>
            <StyledNavLink
                to={'/'}
                style={({ isActive }) =>
                    ({ fontWeight: isActive ? 'bold' : 'normal' })
                }>
                about
            </StyledNavLink>
            </li>
            <li>
            <StyledNavLink
                to={'/'}
                style={({ isActive }) =>
                    ({ fontWeight: isActive ? 'bold' : 'normal' })
                }>
                Tournaments
            </StyledNavLink>
            </li>
            <li>
            <StyledNavLink
                to={'/'}
                style={({ isActive }) =>
                    ({ fontWeight: isActive ? 'bold' : 'normal' })
                }>
                Social
            </StyledNavLink>
            </li>
            <li>
            <StyledNavLink
                to={'/'}
                style={({ isActive }) =>
                    ({ fontWeight: isActive ? 'bold' : 'normal' })
                }>
                Gallery
            </StyledNavLink>
            </li>
            <li>
            <StyledNavLink
                to={'/'}
                style={({ isActive }) =>
                    ({ fontWeight: isActive ? 'bold' : 'normal' })
                }>
                Contact
            </StyledNavLink>
            </li>
        </ul>
        </div>
    </Wrapper>
    )
}
const StyledNavLink = styled(NavLink)`
  color: var(--clr-primary-3);
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem;

  &:hover {
    border-bottom: 2px solid var(--clr-primary-2);
  }
`;
const Wrapper = styled.section`
    position: absolute;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    z-index: 101;

    .nav-center {
        display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* img {
      height: 25px;
      margin-left: -15px;
    } */
    }
    .nav-contact {
        border: 1px sold var(--clr-white);
        border-radius: 8px;
    }
    .main-header__brand {
        display: none;
    }
    .main-header__brand img {
        height: 2.5rem;
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

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
        list-style:none;
      }
        a {
            color: var(--clr-primary-3);
            font-size: 1.2rem;
            text-decoration: none;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            padding: 0.5rem;
            /* &:hover {
                border-bottom: 2px solid var(--clr-primary-2);
            } */
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
			display: flex;
			justify-content: center;
			li {
					margin: 0 1rem;
			}
			a {
					color: var(--clr-primary-3);
					font-size: 1.2rem;
					text-decoration: none;
					text-transform: capitalize;
					letter-spacing: var(--spacing);
					padding: 0.5rem;
					/* &:hover {
					border-bottom: 2px solid var(--clr-primary-2);
					} */
			}
			}
			.nav-contact {
			border: 1px solid var(--clr-white);
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
    }

`
export default Navbar;