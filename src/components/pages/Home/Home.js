import React, { Fragment } from 'react';
import './Home.css';

import Specialization from '../../elements/Services/Specialization';
import ServiceOptions from '../../elements/Services/ServiceOptions';

const Home = props => {
  return (
    <Fragment>
      <div className='hero'>
        <div className='center-all'>
          <div className='hero-main'>Home</div>
          <div className='hero-guide'>Begin your trip with us</div>
        </div>
      </div>
      <ServiceOptions />
      <Specialization />
    </Fragment>
  );
};

export default Home;
