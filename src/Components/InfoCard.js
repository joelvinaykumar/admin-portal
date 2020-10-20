import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from 'antd';

const { Text } = Typography;

export const InfoCard = ({ title, count, width }) => {
  return (
    <StyledCard title={title} bordered={false} style={{ width: width }}>
      <Text>{count}</Text>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  border-radius: 10px;
`;