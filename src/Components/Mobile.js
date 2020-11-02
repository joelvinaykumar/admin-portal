import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from 'antd';

import mobile from '../Assets/Img/mobile.svg'

const { Title } = Typography;

export const MobileView = () => {

  const width = window.innerWidth;


  return (
    <Container>
      <img src={mobile} width={width*0.7} alt="mobile" />
      <Message level={3}>{'Sorry, we don\'t support admin view in mobile/tablet yet.'}</Message>
    </Container>
  )
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Message = styled(Title)`
  text-align: center;
  margin: 50px 0;
`;