import React from 'react';
import styled from 'styled-components';

import login from '../../Assets/Img/login.svg'
import logo from '../../Assets/Img/logo.png'
import LoginForm from './Form';

export const Login = ({ history }) => {
  return (
    <Container>
      <Logo src={logo} alt="logo" width={50}/>
      <Left>
        <img src={login} width={200} alt="logo" />
        <Motto>Into the digital era</Motto>
      </Left>
      <Right>
        <LoginForm history={history} />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

const Left = styled.div`
  height: 100vh;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.login};
`;

const Motto = styled.p`
  margin-top: 20px;
  font-size: 25px;
  color: white;
`;

const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const Right = styled.div`
  height: 100vh;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;
