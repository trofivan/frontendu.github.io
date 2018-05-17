import React from 'react';
import styled from 'styled-components';

import email from '../assets/socials/email.svg';
import itunes from '../assets/socials/itunes.svg';
import tg from '../assets/socials/telegram.svg';
import twitter from '../assets/socials/twitter.svg';
import youtube from '../assets/socials/youtube.svg';

const socials = [
    {
        logo: tg,
        link: 'https://t.me/frontend_u',
        name: 'Наш чатик'
    },
    {
        logo: twitter,
        link: 'https://twitter.com/frontend_u',
        name: 'Twitter'
    },
    {
        logo: itunes,
        link: 'https://itunes.apple.com/ru/podcast/фронтенд-юность-18/id1247192730',
        name: 'iTunes'
    },
    {
        logo: youtube,
        link: 'https://www.youtube.com/channel/UCqq1LRv6KKh0bh4JrG_5vDA',
        name: 'YouTube'
    },
    {
        logo: email,
        link: 'mailto:frontendu@gmail.com',
        name: 'E-mail'
    }
];

const Footer = styled.footer`
    background-color: #ff0000;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const Copyright = styled.span`
    font-size: 18px;
    line-height: 40px;
    color: #ffffff;
`;

const StyledLinks = styled.span``;

const StyledLink = styled.a`
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    margin-right: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export default () => (
    <Footer>
        <StyledLinks>
            {socials.map(({logo, link, name}) => (
                <StyledLink
                    key={name}
                    style={{backgroundImage: `url(${logo})`}}
                    href={link}
                    title={name}
                    target='_blank'
                />
            ))}
        </StyledLinks>
        <Copyright>
            &copy;&nbsp;Фронтенд Юность
        </Copyright>
    </Footer>
);