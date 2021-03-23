import React from 'react';
import styled from 'styled-components';
import BG from '../../../assets/img/oil.jpg';
import Item from './Item';
import first_logo from '../../../assets/logo/one.svg';
import second_logo from '../../../assets/logo/two.svg';
import third_logo from '../../../assets/logo/three.svg';

const Section = styled.div`
  position: relative;
  height: 30rem;
  background-image: url(${(props) => props.BG});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 0 0 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h1 {
    color: white;
    font-weight: 500;
  }
`;

const GridSection = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  justify-items: center;

  h1 {
    text-shadow: 0px 0px 10px #000000;
  }
`;

const Specialization = () => {
  return (
    <Section BG={BG}>
      <div className='center-all'>
        <h1>Our Services</h1>
        <GridSection>
          <Item
            image={first_logo}
            shadow={true}
            color='white'
            text='Service'
            par='We inspect fluids, filters and only recommend items that need replacing, saving you time and money in the long run.'
          />
          <Item
            image={third_logo}
            shadow={true}
            color='white'
            text='Repair'
            par='We are professionals at what we do. Being specialized in all makes, we provide best services to Kiwi motorists.'
          />
          <Item
            image={second_logo}
            shadow={true}
            color='white'
            text='Inspection'
            par='Buying a second hand vehicle? Bring it to us, you can seat back while our team examines the condition and safety of the car.'
          />
        </GridSection>
      </div>
    </Section>
  );
};

export default Specialization;
