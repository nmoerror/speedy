import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';
import Main from '../../../assets/logo/logo2.png';

const Section = styled.div`
  position: fixed;
  width: 100%;
  background: ${props => props.scrolled};
  transition: 0.3s;
  height: 4rem;
  z-index: 1000;
`;

const SubSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 70rem;
  margin: 1.5rem auto 0;
  margin-top: ${props => props.mar};
  transition: 0.4s;
`;

{
  /*const Logo = styled.h2`
  margin: auto 0;
  color: ${props => props.colour};
  font-weight: 500;
  font-size: ${props => props.size};
  transition: 0.4s;
  font-family: 'Libre Baskerville', serif;
  text-transform: uppercase;
`;*/
}

const Logo = styled.img`
  height: ${props => props.size};
  margin: 0;
  transition: 0.4s;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Section scrolled={scrolled ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'}>
      <SubSection mar={scrolled ? '0.8rem' : '2.3rem'}>
        <Logo
          src={Main}
          /*size={scrolled ? '1.4rem' : '2rem'}
          colour={scrolled ? 'rgba(188, 155, 3, 1);' : 'rgba(255,255,255,1)'}*/
          size={scrolled ? '2.5rem' : '5rem'}
        ></Logo>
        <ul>
          <li>
            <NavLink activeClassName='header-current' to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='header-current' to='/Services'>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='header-current' to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='header-current' to='/Contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </SubSection>
    </Section>
  );
};

export default Header;
