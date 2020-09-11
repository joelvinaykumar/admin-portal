import React, { useState } from 'react'
import sc from 'styled-components'
import { Input, Button, Typography, Image, Space, notification } from 'antd';

import { light } from '../Utility/theme.config'
import logo from '../Assets/Img/logo.png'
import { LoginApi } from '../Api/Auth';

const { Text } = Typography;

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if(email.length ===0 || password.length ===0) {
      notification.error({
        message: 'Empty values not allowed',
      })
    }else {
      const result = await LoginApi(email, password);
      if( result && result.data)
      localStorage.setItem('token', result.data.access_token);
    }
    
  }

  return (
    <HomeContainer>
      <Left>
        <Space direction="vertical" size={10}>
          <Image
            width={150}
            src={logo}
          />
          <Text strong>
            College Management done right
          </Text>
          <Text strong>
            KeeStep, the best college management solution.
          </Text>
        </Space>
      </Left>
      <Right>
        <LoginBox>
          <Text strong style={{ fontSize: '20px', color: 'white' }} >Login</Text>
          <Form>
            <Text type="secondary" style={{ fontSize: '12px', color: 'white', fontStyle:'italic' }}>
              Don't have an account? Please contact your administrator.
            </Text>
            <TextInput>
              <Input
                type="email"
                placeholder="Enter your email..."
                bordered={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </TextInput>
            <TextInput>
              <Input
                type="password"
                placeholder="Enter your password..."
                bordered={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </TextInput>
            <Button
              type="submit"
              style={buttonStyle}
              onClick={handleSubmit}
            >
              Log In
          </Button>
          </Form>
        </LoginBox>
      </Right>
    </HomeContainer>
  )
}


const HomeContainer = sc.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: white;
  background-image: linear-gradient(45deg, #dff9fb, #c7ecee);
`;

const Left = sc.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:  center;
`;

const Right = sc.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content:  center;
`;

const LoginBox = sc.div`
  width: 350px;
  height: 450px;
  border-radius: 20px;
  padding: 50px;
  background-color: ${light.primary};
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Poppins; 
`;

const Form = sc.div`
  height: 40vh;
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextInput = sc.div`
  margin: 30px 0;
  border-bottom: 2px solid white;
  color: white;
  @media only screen and (min-width: 300px) and (max-width: 425px) {
    width: 70vw;; 
  }
`;

const buttonStyle = { 
  color: `${light.primary}`,
  boxShadow: '0 19px 38px rgba(0,0,0,0.20), 0 15px 12px rgba(0,0,0,0.12)' 
}