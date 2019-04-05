import { graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import Showcase from '../components/Showcase';

class IndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const games = posts.filter(({ node }) =>
      node.fields.slug.startsWith('/games')
    );
    const shorts = posts.filter(({ node }) =>
      node.fields.slug.startsWith('/shorts')
    );

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <main>
          <section id="games">
            <h2 style={{ marginTop: rhythm(1), marginBottom: rhythm(0.5) }}>
              Games
            </h2>
            <Showcase posts={games} isDetailed />
          </section>
          <section id="shorts">
            <h2 style={{ marginBottom: rhythm(0.5) }}>Short Things</h2>
            <Showcase posts={shorts} />
          </section>
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default IndexTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/^/(games|shorts)/" } }
        frontmatter: { isHidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            url
            title
            spoiler
            cover {
              childImageSharp {
                fixed(width: 224, height: 140, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
