import React from 'react'
import { Result, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;