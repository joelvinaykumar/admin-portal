import React from 'react';
import styled from 'styled-components';

import logo from '../../Assets/Img/logo.png';
import LoginForm from './Form';

export const Login = ({ history }) => {
  return (
    <Container>
      <Left>
        <img src={logo} width={200} />
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
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.login};
`;

const Right = styled.div`
  height: 100vh;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;
