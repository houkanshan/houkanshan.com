import React from 'react';

import { rhythm } from '../utils/typography';
import Nav from './Nav';

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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          :) <Nav />
        </div>
      </footer>
    );
  }
}

export default Footer;
