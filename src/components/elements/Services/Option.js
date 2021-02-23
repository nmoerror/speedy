import React from 'react';
import styled from 'styled-components';
import './Option.css';

import Image from '../../../assets/img/hero_1.jpg';

const Card = styled.div`
  width: 22rem;
  background: white;
  padding: 0 0 1rem 0;
  text-align: center;
  transition: 0.25s ease-in-out;

  img {
    width: 100%;
  }

  h4 {
    color: #007bff;
    font-size: 18px;
    font-weight: 500;
    margin: 0.5rem;
  }

  p {
    margin: 0;
  }

  button {
    background: rgba(245, 245, 245, 0.8);
    color: rgba(0, 123, 255, 0.5);
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 30px -18px #0271e7;
    -moz-box-shadow: 0px 0px 30px -18px #0271e7;
    box-shadow: 0px 0px 30px -18px #0271e7;

    button {
      background: #0271e7;
      color: white;
      &:hover {
        background: #007bff;
      }
    }
  }
`;

const Option = ({ title, price, data, i }) => {
  let a = 0;
  return (
    <>
      {data && (
        <Card>
          <img src={Image} alt='' />
          <h4>{title}</h4>
          <span className='price'>{price ? `$${price}` : 'Get a Quote'}</span>
          <div className='rows'>
            {data[i].map(
              single => (
                a++,
                a == data[i].length ? (
                  <div className='space-between-end'>
                    <span>{single.left}</span>
                    <span>{single.right}</span>
                  </div>
                ) : (
                  <div className='space-between'>
                    <span>{single.left}</span>
                    <span>{single.right}</span>
                  </div>
                )
              )
            )}
          </div>
          <button>Book Now</button>
        </Card>
      )}
    </>
  );
};

export default Option;
