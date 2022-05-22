import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

// import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import Signup from '../components/Signup';
import Panel from '../components/Panel';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import { rhythm, scale, sansSerifFont } from '../utils/typography';
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from '../utils/i18n';

class Translations extends React.Component {
  render() {
    let { translations, lang, languageLink } = this.props;

    let readerTranslations = ['en'].concat(translations);

    return (
      <div className="translations">
        <Panel style={{ fontFamily: sansSerifFont }}>
          {translations.length > 0 && (
            <span>
              <span>In other language: </span>
              {readerTranslations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang ? (
                    <b>{codeToLanguage(l)}</b>
                  ) : (
                    <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                  )}
                  {i === readerTranslations.length - 1 ? '' : ' • '}
                </React.Fragment>
              ))}
            </span>
          )}
        </Panel>
      </div>
    );
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    let {
      previous,
      next,
      slug,
      translations,
      translatedLinks,
    } = this.props.pageContext;
    const lang = post.fields.langKey;

    // Replace original links with translated when available.
    let html = post.html;
    translatedLinks.forEach(link => {
      // jeez
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      let translatedLink = '/' + lang + link;
      html = html.replace(
        new RegExp('"' + escapeRegExp(link) + '"', 'g'),
        '"' + translatedLink + '"'
      );
    });

    translations = translations.slice();
    translations.sort((a, b) => {
      return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
    });

    loadFontsForCode(lang);
    // TODO: this curried function is annoying
    const languageLink = createLanguageLink(slug, lang);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article className="post-article">
            <header>
              <h1 style={{ color: 'var(--textTitle)' }}>
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {post.frontmatter.event ? ` - ${post.frontmatter.event}` : ''}
                {`\u2003 ${formatReadingTime(post.timeToRead)}`}
              </p>
              {translations.length > 0 && (
                <Translations
                  translations={translations}
                  languageLink={languageLink}
                  lang={lang}
                />
              )}
            </header>
            <div className="extra-info">
              {post.frontmatter.url && post.frontmatter.url.startsWith('http') && (
                <p>
                  <a href={post.frontmatter.url}>{post.frontmatter.url}</a>
                </p>
              )}
            </div>
            <div
              className="post-article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </main>
        <aside>
          {/* <Signup /> */}
          <nav>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <span>
                    ←{' '}
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      style={{ marginRight: 20, color: 'var(--normalText)' }}
                    >
                      {previous.frontmatter.title}
                    </Link>
                  </span>
                )}
              </li>
              <li>
                {next && (
                  <span>
                    <Link
                      to={next.fields.slug}
                      rel="next"
                      style={{ color: 'var(--normalText)' }}
                    >
                      {next.frontmatter.title}
                    </Link>{' '}
                    →
                  </span>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        event
        url
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
