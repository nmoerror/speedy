import React from 'react';
import SecondaryHero from '../../elements/SecondaryHero/SecondaryHero';
import UsBrief from '../../elements/UsBrief/UsBrief';
import Team from '../../elements/Team/Team';

const About = props => {
  return (
    <>
      <SecondaryHero
        title='About Us'
        paragraph='Providing the best service for over 7 years!'
        ext='secondary-pages'
        p='middle-p'
      />
      <UsBrief
        title='Speedy Gonzalez'
        paragraph=' dsalkdlmasmdksakmsdakmaldskmadsm adskl mdsaklm
            sdalkmdsamkldsalkmdasmkldaslk mdsalkdsal kmdsaklm sdalkm asdklm
            sadlmk sadmkl'
        right={true}
      />
      <Team />
      <UsBrief
        title='Speedy Gonzalez'
        paragraph=' dsalkdlmasmdksakmsdakmaldskmadsm adskl mdsaklm
            sdalkmdsamkldsalkmdasmkldaslk mdsalkdsal kmdsaklm sdalkm asdklm
            sadlmk sadmkl'
        right={false}
      />
    </>
  );
};

export default About;
