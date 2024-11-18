import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <Wrapper>
        <div className="nav-center">
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

`
export default Navbar;