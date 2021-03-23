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
    </>
  );
};

export default About;
