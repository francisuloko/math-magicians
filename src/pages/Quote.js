import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => (
  <div className="quote-container">
    <p className="quote-text">
      Mathematics is not about numbers, equations, computations, or algorithms:
      It is about understanding.
      <cite className="cite">
        <Link to="https://es.wikipedia.org/wiki/William_Thurston" id="link">
          - William Paul Thurston
        </Link>
      </cite>
    </p>
  </div>
);

export default Quote;
