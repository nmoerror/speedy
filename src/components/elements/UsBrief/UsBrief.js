import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/img/spd.png';

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  padding: 8rem 0;
  position: relative;

  img {
    width: 100%;
    margin: auto;
  }
`;

const Background = styled.div`
  background: white;
`;

const UsBrief = props => {
  return (
    <Background>
      <div className='center-all'>
        <Section>
          {!props.right && <img src={Logo} alt='' />}
          <div>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
          </div>
          {props.right && <img src={Logo} alt='' />}
        </Section>
      </div>
    </Background>
  );
};

export default UsBrief;
