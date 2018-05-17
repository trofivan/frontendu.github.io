import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';

const MainWrapper = styled.div`
  height: 100%;
`;

const ContentWrapper = styled.div`
  min-height: 100%;
  margin-bottom: -75px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 125px;
`;

const ChildrenWrapper = styled.main`
  padding: 50px 3rem;
  font-family: 'Fira Sans Light';
`;

const Layout = ({ children, data }) => (
  <MainWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <script src='https://www.google.com/recaptcha/api.js'></script>
    </Helmet>
    <ContentWrapper>
      <Header />
      <ChildrenWrapper>
        {children()}
      </ChildrenWrapper>
    </ContentWrapper>
    <Footer />
  </MainWrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
