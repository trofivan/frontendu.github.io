import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import logo from '../assets/logo.svg';
import * as socials from '../assets/socials';

import './fonts.css';

const Header = styled.header`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;

const Logo = styled.div`
    width: 100%;
    height: 420px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
`;

const Name = styled.div`
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
`;

const Line = styled.span`
    font-family: 'Fira Sans Bold';
    font-size: 42px;
    line-height: 1.5;
    background-color: #000;
    color: #fff;
    padding: 5px 30px 5px 20px;
    display: inline-block;
`;

const Credo = styled.p`
    font-family: 'Fira Sans Light';
    font-size: 32px;
    font-size: 300;
    line-height: 1.5;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
`;

const CredoHightlight = styled.span`
    background-color: #f00;
    color: white;
    padding: 5px;
`;

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 900px;
`;

const Navigation = styled.nav`
    font-family: 'Fira Sans Bold';
    font-size: 24px;
`;
const NavigationList = styled.ul``;
const NavigationPoint = styled.li`
    display: inline-block;
    padding: 20px;
`;
const NavigationLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const NavigationSocials = styled.ul``;
const NavigationSocial = styled.li`
    display: inline-block;
`;

const NavigationSocialLink = styled.a`
    width: 20px;
    height: 20px;
`;

export default () => (
    <Wrapper>
        <Navigation>
            <NavigationList>
                <NavigationPoint>
                    <NavigationLink to='themes'>Предложи тему</NavigationLink>
                </NavigationPoint>
            </NavigationList>
            <NavigationSocials>

            </NavigationSocials>
        </Navigation>
        <Header>
            <Logo />
            <Name>
                <Line>Фронтенд Юность</Line>
            </Name>
            <Credo>Самый <CredoHightlight>честный</CredoHightlight> подкаст о фронтенде!</Credo>
        </Header>
    </Wrapper>
);