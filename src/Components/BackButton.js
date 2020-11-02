import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LeftCircleFilled } from '@ant-design/icons';
import { Typography } from 'antd';

import { lightTheme as theme } from '../Utility/theme.config'

const { Title } = Typography;

export const BackButton = ({ title }) => {
  return (
    <Link to="/">
      <Container>
        <LeftCircleFilled style={backIconStyle} />
        <Title>{title}</Title>
      </Container>
    </Link>
  )
}

const backIconStyle = { 
  fontSize: '35px', 
  color: theme.superAdmin, 
  marginRight: '20px' 
}

const Container = styled.div`
  display: flex;
`;