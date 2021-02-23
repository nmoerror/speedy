import React from 'react';
import styled from 'styled-components';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Section = styled.div`
  background: black;
  position: relative;
  color: #fff;
  height: 22rem;
  font-weight: 500;
  padding: 4rem;

  a {
    margin: 0 0 1rem 0;
    color: #333;
    transition: 0.25s;

    &:hover {
      color: white;
    }
  }
  .header-current {
    color: #007bff;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const Copyright = styled.div`
  height: 1rem;
  text-align: center;
  text-justify: center;
  padding-top: 8rem;
  position: relative;

  span {
    color: #333;
  }
`;

const Footer = () => {
  return (
    <Section>
      <div className='center-all'>
        <div className='footer-about'>
          <h4>About Us</h4>
          <p>We specialize in all makes.</p>
        </div>
        <div className='footer-links'>
          <h4>Navigate</h4>
          <NavLink activeClassName='header-current' to='/' exact>
            Home
          </NavLink>
          <NavLink activeClassName='header-current' to='/Services'>
            Services
          </NavLink>
          <NavLink activeClassName='header-current' to='/About'>
            About
          </NavLink>
          <NavLink activeClassName='header-current' to='/Contact'>
            Contact
          </NavLink>
        </div>
        <Copyright>
          Speedy Gonzalez ©{new Date().getFullYear()}{' '}
          <span>| All rights reserved</span>
        </Copyright>
      </div>
    </Section>
  );
};

export default Footer;
