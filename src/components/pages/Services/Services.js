import React, { Fragment } from 'react';
import styled from 'styled-components';

//Components
import SecondaryHero from '../../elements/SecondaryHero/SecondaryHero';
import Item from '../../elements/Services/Item';

//Logos
import first_logo from '../../../assets/logo/one.svg';
import second_logo from '../../../assets/logo/two.svg';
import third_logo from '../../../assets/logo/three.svg';
import ServiceOptions from '../../elements/Services/ServiceOptions';

const Section = styled.div`
  display: grid;
  padding: 3rem 0 0 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  justify-items: center;
`;

const Services = () => {
  return (
    <Fragment>
      <SecondaryHero
        ext='secondary-pages-service'
        p='middle-p-service'
        title='Our Services'
        paragraph='We are professionals at what we do. Being specialized in all makes, we provide best services to Kiwi motorists.'
      />
      <div className='center-all'>
        <Section>
          <Item
            image={first_logo}
            shadow={true}
            color='black'
            text='Service'
            par='We inspect fluids, filters and only recommend items that need replacing, saving you time and money in the long run.'
          />
          <Item
            image={third_logo}
            shadow={true}
            color='black'
            text='Repair'
            par='We are professionals at what we do. Being specialized in all makes, we provide best services to Kiwi motorists.'
          />
          <Item
            image={second_logo}
            shadow={true}
            color='black'
            text='Inspection'
            par='Buying a second hand vehicle? Bring it to us, you can seat back while our team examines the condition and safety of the car.'
          />
        </Section>
        <ServiceOptions />
      </div>
    </Fragment>
  );
};

export default Services;
