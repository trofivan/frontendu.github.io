import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
    font-size: 24px;
    line-height: 1.5;
    text-indent: 1.5em;
    text-align: justify;
    margin: 0 auto;
    max-width: 900px;
`;

const FormGroup = styled.div`
    text-indent: 0;
    margin-bottom: 40px;
`;

const StyledInput = styled.input`
    font-size: 32px;
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: none;
    border-bottom: 1px solid gray;
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
`;

const StyledButton = styled.button`
    background-color: #ff0000;
    color: #ffffff;
    padding: 20px;
    border: none;
`;

export default () => (
    <MainContent>
        <p>
            У <b>Тебя</b> появилась отличная возможность предложить нам <b>свою</b> тему!
            Напиши нам ее, обязательно приложи ссылки, если они есть, и жди нового подкаста!
        </p>

        <FormGroup>
            <StyledLabel htmlFor='name'>Название темы<sup>*</sup></StyledLabel>
            <StyledInput id='name' placeholder='React разработчики очень популярны' required></StyledInput>
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor='body'>Описание<sup>*</sup></StyledLabel>
            <StyledTextArea id='body' placeholder='На это есть *некоторые* причины' required />
        </FormGroup>
        <FormGroup>
            <StyledButton>Отправить</StyledButton>
        </FormGroup>
    </MainContent>
);