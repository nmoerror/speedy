import React from 'react';
import styled from 'styled-components';
import Staff from './Staff';

const Section = styled.div`
  text-align: center;
  padding: 3.5rem;

  p {
    max-width: 32rem;
    margin: auto;
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: space-between;
  padding: 6rem 0 3rem 0;
`;

const Team = () => {
  return (
    <div className='center-all'>
      <Section>
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          provident eius ratione velit, voluptas laborum nemo quas ad
          necessitatibus placeat?
        </p>
        <Grid>
          <Staff />
          <Staff />
          <Staff />
        </Grid>
      </Section>
    </div>
  );
};

export default Team;
