import React from 'react'
import { Result, Button } from 'antd';
import styled from 'styled-components';

export const NotFound = () => {
  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;