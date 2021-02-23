import React from 'react';
import './Contact.css';
import SecondaryHero from '../../elements/SecondaryHero/SecondaryHero';
import ContactForm from '../../elements/ContactForm/ContactForm';

const Contact = props => {
  return (
    <>
      <SecondaryHero
        ext='secondary-pages'
        p='middle-p'
        title='Contact Us'
        paragraph="Would you like a quote? Don't forget to attach your license plate number for us to give you an exact figure"
      />
      <a href='#section1'>fgfg</a>
      <section id={'section1'}>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
