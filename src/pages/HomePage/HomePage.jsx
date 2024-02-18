import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './home.scss';

const HomePage = () => {
  useEffect(() => {
    ScrollReveal().reveal('h2, a.contactBtn', {
      delay: 200,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
      duration: 1000,
    });
  }, []);

  return (
    <section>
      <div className="container ">
        <div className="textBox">
          <h2 className="heading">About Us</h2>
          <p className="homePar plusWidth">
            We are your reliable partner in the car rental industry. Our company
            offers a wide range of cars for any needs and budgets. We provide
            quality service and offer convenient rental conditions for our
            customers.
          </p>
        </div>
        <div className="textBox">
          <h2 className="heading">Our Services</h2>
          <ul className="listHome">
            <li>
              <p className="homePar">Rental of cars of any class</p>{' '}
            </li>
            <li>
              <p className="homePar">Car rental with driver</p>{' '}
            </li>
            <li>
              <p className="homePar">
                Car rental for weddings and other special events
              </p>{' '}
            </li>
            <li>
              <p className="homePar">Long-term car rental services</p>{' '}
            </li>
          </ul>
        </div>
        <div className="textBox">
          <h2 className="heading">Contact Us</h2>
          <p className="homePar plusWidth">
            For more information and car rental inquiries, please contact our
            managers at +380730000000.
          </p>
          <a href="tel:+380730000000" className="rentalButton contactBtn">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
