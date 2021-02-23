import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  padding: 3rem 1rem 0 1rem;
  width: 100%;
  background: #fff;
  margin: 0 1rem;
  height: 11.5rem;

  h2 {
    margin-top: 0;
    font-weight: 400;
    line-height: 1.2;
  }

  span {
    margin: 0;
    color: #ccc;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Photo = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  background: blue;
  border-radius: 2.5rem;
  left: 50%;
  top: -18%;
  transform: translateX(-50%);
`;

const Staff = props => {
  return (
    <Card>
      <Photo></Photo>
      <span>Founder</span>
      <h2>James Bond</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente
      </p>
    </Card>
  );
};

export default Staff;
