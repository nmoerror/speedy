import React from 'react';

const SecondaryHero = ({ title, paragraph, ext, p }) => {
  return (
    <div className={ext}>
      <h1 className='middle'>{title}</h1>
      <p className={p}>{paragraph}</p>
    </div>
  );
};

export default SecondaryHero;
