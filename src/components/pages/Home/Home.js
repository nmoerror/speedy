import React, { Fragment } from 'react';
import './Home.css';

import Specialization from '../../elements/Services/Specialization';
import ServiceOptions from '../../elements/Services/ServiceOptions';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <Fragment>
      <div className='hero'>
        <div className='center-all'>
          <div className='hero-main'>Home</div>
          <div className='hero-guide'>
            <h2>Put your mind at ease and let our helpful mechanics look after your vehicle</h2>
            <p>
              Our team of highly trained mechanics have been in business for over 8 years providing great service to
              Kiwi motorists. We carry out repairs on any make or model. Some common repairs we provide are:
            </p>
            <ul>
              <li>Brakes</li>
              <li>Steering and suspension</li>
              <li>Diagnostic check</li>
              <li>Clutch replacements</li>
              <li>Cambelt replacements</li>
              <li>Electrical</li>
            </ul>
            <Link to='/Contact'>Make an enquiry now</Link> for a free no obligation quote.
          </div>
        </div>
      </div>
      <ServiceOptions />
      <Specialization />
    </Fragment>
  );
};

export default Home;
