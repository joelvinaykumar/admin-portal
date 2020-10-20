import React from 'react';
import styled from 'styled-components';
import { Card, Space, Typography } from 'antd';

import mobile from '../Assets/Img/mobile.svg'

const { Title } = Typography;

export const MobileView = () => {

  const [width, height] = [window.innerWidth, window.innerHeight];


  return (
    <Container>
      <img src={mobile} width={width*0.7} />
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