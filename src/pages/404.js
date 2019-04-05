import React from 'react';
import get from 'lodash/get';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout title={siteTitle} location={this.props.location}>
        <main>
          <h1>Not Found</h1>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query NotFountSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default NotFoundPage;
