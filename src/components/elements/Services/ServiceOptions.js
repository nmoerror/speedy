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
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' }
  ],
  [
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' }
  ],
  [
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' },
    { left: 'Servicio', right: '4' },
    { left: 'Oil', right: '20' }
  ]
];

const ServiceOptions = props => {
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
