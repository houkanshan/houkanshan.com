import React from 'react';

import { rhythm } from '../utils/typography';
import nav from '../constants/nav';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
          fontSize: 14,
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <nav>
          {nav.map(({ title, url }) => (
            <a key={url} href={url} style={{ marginRight: rhythm(0.5) }}>
              {title}
            </a>
          ))}
        </nav>
      </footer>
    );
  }
}

export default Footer;
