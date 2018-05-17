import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${logo});
  margin-right: 10px;
`;

const Header = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

const Navigation = styled.nav`
  line-height: 100px;
`;

const NavigationLink = styled.a`
  color: #000;
  font-family: 'Fira Sans Bold';
  font-size: 24px;
  padding: 0 20px;
`;

const NavigationGatsbyLink = styled(Link)`
  color: #000;
  font-family: 'Fira Sans Bold';
  font-size: 24px;
  padding: 0 20px;
`;

const LinkToIndex = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export default ({ siteTitle }) => (
  <Header>
    <LinkToIndex to='/'>
      <Logo />
    </LinkToIndex>
    <Navigation>
      <NavigationGatsbyLink to='themes' activeStyle={{ color: '#ff0000' }}>Предложи&nbsp;тему</NavigationGatsbyLink>
    </Navigation>
  </Header>
);

