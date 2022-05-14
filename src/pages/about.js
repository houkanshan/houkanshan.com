import React from 'react';
import get from 'lodash/get';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout title={siteTitle} location={this.props.location}>
        <SEO />
        <article className="post-article-content">
          Hi, I’m a front-end engineer and indie game maker, previously working
          at{' '}
          <a href="https://read.douban.com" target="_blank">
            Douban Read
          </a>
          . Recently, I got an MFA in Game Design at{' '}
          <a href="https://gamecenter.nyu.edu/">NYU Game Center</a>.
        </article>
        <footer style={{ marginTop: '1rem' }}>
          <a href="https://douban.com/people/houkanshan" target="_blank">
            豆瓣
          </a>
          {' - '}
          <a href="https://mobile.twitter.com/houkanshan" target="_blank">
            twitter
          </a>
          {' - '}
          <a href="https://github.com/houkanshan" target="_blank">
            github
          </a>
          {' - '}
          <a href="https://instagram.com/houkanshan" target="_blank">
            instagram
          </a>
          {' - '}
          <a href="https://houkanshan.itch.io/" target="_blank">
            itch.io
          </a>
          {' - '}
          <a href="https://resume.houkanshan.com/" target="_blank">
            resume
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
