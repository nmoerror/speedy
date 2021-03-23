import React from 'react';
import SecondaryHero from '../../elements/SecondaryHero/SecondaryHero';
import UsBrief from '../../elements/UsBrief/UsBrief';
import Team from '../../elements/Team/Team';

const About = (props) => {
  return (
    <>
      <SecondaryHero
        title='About Us'
        paragraph='Providing the best service for over 7 years!'
        ext='secondary-pages'
        p='middle-p'
      />
      <UsBrief
        title='Speedy Motors'
        paragraph='Maximise the lifespan and value of your vehicle with regular servicing at Speedy Motors Centre. Our fully qualified mechanics can service any make or model vehicle with the latest equipment and our car services are up to 36% cheaper* than main dealer services, and are generally just as comprehensive - if not more!'
        right={true}
      />
      <Team />
      <UsBrief        
        paragraph='We recommend a service every 10,000km or six months (whichever occurs first).
        We have four levels of services available for both petrol and diesel, from Bronze through to Platinum using either Standard or Advanced oil.  The oil required for your vehicle will be dependent on a number of factors including age and model type
        Standard oil is a mineral or semi synthetic and is generally used in older vehicles.  Advanced oil is fully synthetic and is predominately used in newer vehicles. The selection of oil will be based on the original vehicle manufacturer specifications and the recommendation of the Speedy Motors Auto Centre.'
        right={false}
      />
    </>
  );
};

export default About;
