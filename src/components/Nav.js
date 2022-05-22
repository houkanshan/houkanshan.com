import React from 'react';
import nav from '../constants/nav';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

export default function Nav() {
  return (
    <nav>
      {nav.map(({ title, url }) => (
        <Link
          key={url}
          to={url}
          style={{
            marginRight: rhythm(0.5),
            fontSize: 14,
          }}
          activeStyle={{
            color: 'var(--textNormal)',
          }}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
