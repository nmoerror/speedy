import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Option from './Option';

const Section = styled.div`
  min-height: 30rem;
  padding: 8rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
`;

const SomethingElse = styled.div`
  width: 100%;
  text-align: center;
  background: white;
  margin-bottom: 2rem;
  cursor: pointer;
  padding: 1rem 0;
  transition: 0.25s ease-in-out;
  color: rgba(0, 123, 255, 1);
  &:hover {
    background: #007bff;
    color: white;
  }
`;

const data = [
  [
    { left: 'Standard Oil', right: '~3.5L' },
    { left: 'Oil filter', right: '' },
    { left: 'Fill radiator coolant', right: '1L' },
    { left: 'Check radiator condition', right: '' },
    { left: 'Test battery life', right: '' },
    { left: '*T radiator cap', right: '' },
    { left: '*T break fluid', right: '' },
    { left: '*T clutch fluid', right: '' },
    { left: '*T antifreeze condition', right: '' },
    { left: '*T differential fluid', right: '' },
    { left: '*T air filter', right: '' },
  ],
  [
    { left: 'Premium Oil', right: '~4.5L' },
    { left: 'Premium Oil filter', right: '' },
    { left: 'Antifreeze radiator coolant', right: '5L' },
    { left: 'Restore Battery', right: '' },
    { left: 'Premium windshiled wipers', right: 'x3' },

    { left: 'Premium break fluid', right: '' },
    { left: 'Premium air filter', right: '4' },
    { left: '*T clutch fluid', right: '' },
    { left: '*T differential fluid', right: '20' },
    { left: '*T radiator cap', right: '' },
  ],
  [
    { left: 'Semi Syntetic Oil', right: '~4L' },
    { left: 'Premium filter', right: '' },
    { left: 'Fill radiator coolant', right: '1L' },
    { left: 'Check radiator condition', right: '' },
    { left: 'Test battery life', right: '' },
    { left: '*T radiator cap', right: '' },
    { left: '*T break fluid', right: '' },
    { left: '*T clutch fluid', right: '' },
    { left: '*T antifreeze condition', right: '' },
    { left: '*T differential fluid', right: '' },
    { left: '*T air filter', right: '' },
  ],
];

const ServiceOptions = (props) => {
  return (
    <div className='center-all'>
      <Section>
        <Option title='Basic Service' price='75' data={data} i='0' />
        <Option title='Mechanical Inspection' price='120' data={data} i='1' />
        <Option title='Basic Service' price='99' data={data} i='2' />
      </Section>
      <Link to='/Contact'>
        <SomethingElse>I'd like to quote a mechanical repair</SomethingElse>
      </Link>
    </div>
  );
};

export default ServiceOptions;
