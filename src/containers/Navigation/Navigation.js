import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/article/1">Artykuł 1</Link>
        </li>
        <li>
          <Link to="/article/2">Artykuł 2</Link>
        </li>
        {/* Dodaj więcej linków do innych artykułów */}
      </ul>
    </nav>
  );
}

export default Navigation;
