import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm, sansSerifFont } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <main>
          {posts.map(({ node }, i) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: sansSerifFont,
                      fontSize: rhythm(1),
                      marginTop: rhythm(1),
                      marginBottom: rhythm(0),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none', color: 'var(--normalText)' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small style={{ display: 'block' }}>
                    {formatPostDate(node.frontmatter.date, langKey)}
                    {node.frontmatter.event
                      ? ` - ${node.frontmatter.event}`
                      : ''}
                    {`\u2003 ${formatReadingTime(node.timeToRead)}`}
                  </small>
                </header>
                {node.frontmatter.cover && (
                  <div
                    className={`cover`}
                    style={{
                      height: 100,
                      maxWidth: 400,
                      margin: '0.5rem 0',
                    }}
                  >
                    <Img
                      fixed={node.frontmatter.cover.childImageSharp.fixed}
                      objectFit="cover"
                      objectPosition="50% 50%"
                      style={{
                        width: '100%',
                      }}
                    />
                  </div>
                )}
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: $langKey }, slug: { regex: "/blog/" } }
        frontmatter: { isHidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            event
            description
            cover {
              absolutePath
              relativePath
              publicURL
              childImageSharp {
                fixed(width: 630, height: 100, cropFocus: ENTROPY) {
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
