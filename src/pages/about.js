import React from 'react';
import get from 'lodash/get';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout title={siteTitle} location={this.props.location}>
        <article className="post-article-content">
          Mai HOU is a front-end engineer and indie game maker, studying as a
          Game Design MFA at NYU Game Center, previously working at{' '}
          <a href="https://read.douban.com" target="_blank">
            Douban Read
          </a>
          .
        </article>
        <footer style={{ marginTop: '1rem' }}>
          <a
            href="https://douban.com/people/houkanshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            豆瓣
          </a>
          {' - '}
          <a
            href="https://mobile.twitter.com/houkanshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          {' - '}
          <a
            href="https://github.com/houkanshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          {' - '}
          <a
            href="https://instagram.com/houkanshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </footer>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AboutSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
