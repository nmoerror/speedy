import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  text-align: center;
  color: ${props => props.color};

  p {
    line-height: 2;
    text-shadow: ${props => props.shadow && `0px 0px 10px #000000`};
  }

  h3 {
    text-shadow: ${props => props.shadow && `0px 0px 10px #000000`};
  }
`;

const Circled = styled.div`
  position: relative;
  margin: 2rem auto 1rem auto;
  width: 6rem;
  height: 6rem;
  border-radius: 5rem;
  border: 4px solid #007bff;
  background: white;
  z-index: 100;

  img {
    display: block;
    width: 2rem;
    margin: 1.8rem auto 0;
  }
`;

const Item = props => {
  return (
    <Section shadow={props.s} color={props.color}>
      <Circled>
        <img src={props.image} alt='' />
      </Circled>
      <h3 style={{ fontWeight: '500', marginBottom: '1.4rem' }}>
        {props.text}
      </h3>
      <p>{props.par}</p>
    </Section>
  );
};

export default Item;
