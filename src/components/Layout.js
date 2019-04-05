import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import { rhythm, sansSerifFont } from '../utils/typography';
import Nav from './Nav';

class Layout extends React.Component {
  state = {
    theme: null,
  };
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  renderHeader() {
    const { title } = this.props;
    return (
      <h1
        style={{
          fontFamily: sansSerifFont,
          fontSize: 18,
          marginTop: 0,
          marginBottom: 0,
          marginRight: rhythm(0.5),
          height: 42, // because
          lineHeight: '2.625rem',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'var(--grayColor)',
          }}
          activeStyle={{
            color: 'var(--titleColor)',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    );
  }
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: this.state.theme === 'light' ? '#000000' : '#ffffff',
            },
          ]}
        />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `1rem ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: rhythm(1),
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              {this.renderHeader()}
              <Nav />
            </div>
            <div style={{ height: '24px ' }}>
              {this.state.theme && (
                <a
                  href="javascript:;"
                  className=""
                  style={{ fontSize: '12px' }}
                  onClick={() => {
                    window.__setPreferredTheme(
                      this.state.theme === 'dark' ? 'light' : 'dark'
                    );
                  }}
                >
                  <span style={{ color: 'var(--lightColor)' }}>日</span>
                  <span style={{ color: 'var(--darkColor)' }}>夜</span>
                </a>
              )}
            </div>
          </header>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
