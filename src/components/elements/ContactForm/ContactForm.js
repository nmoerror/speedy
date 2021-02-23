import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  text-align: center;
  line-height: 1.7;
  padding: 4rem 0 6rem 0;

  .half-input {
    width: 46.5%;
    display: inline-block;
    float: right;
  }

  .plus {
    float: left;
  }
  span {
    color: black;
    font-weight: 500;
  }
  p {
    color: #333;
  }
  h2 {
    font-weight: 400;
    font-size: 1.75rem;
  }

  button {
    float: left;
    margin: -0.3rem;
    padding: 1rem 2.75rem;
  }
`;

const ContactForm = () => {
  return (
    <Section>
      <div className='center-all'>
        <h1>Contact Us or Use this form to talk to us!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          assumenda, dolorum necessitatibus eius earum voluptates sed
        </p>
        <div className='form-wrapper'>
          <form style={{ width: '150%' }}>
            <input
              className='half-input plus'
              type='text'
              placeholder='First Name'
            />
            <input className='half-input' type='text' placeholder='Last Name' />
            <input type='email' placeholder='Email Address' />
            <textarea
              type='text'
              placeholder='Dont forget to include you License plate number'
            />
            <button type='submit'>Send Enquiry</button>
          </form>
          <div className='form-side'>
            <h2>Contact Info</h2>
            <p>
              <span>Address</span> <br />
              34 Street Name, City Name Here, United States
            </p>
            <p>
              <span>Phone</span> <br />
              34 Street Name, City Name Here, United States
            </p>
            <p>
              <span>Email</span> <br />
              34 Street Name, City Name Here, United States
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
