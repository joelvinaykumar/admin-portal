import React from 'react'
import styled from 'styled-components'

import { lightTheme as theme } from '../Utility/theme.config'
import logo from '../Assets/Img/logo.png'


const CollegeInfo = () => {
  return (
    <CollegeInfoContainer>
      <LogoContainer src="https://avatars2.githubusercontent.com/u/70470487?s=460&u=f72dd8da7d7810b510e3b598669e1acb316f7916&v=4" />
      <InfoContainer slide="flex-start">
        <MainText>Keestep</MainText>
        <SubText>Super Admin Portal</SubText>
      </InfoContainer>
    </CollegeInfoContainer>
  )
}

const UserInfo = () => {
  return (
    <CollegeInfoContainer>
      <InfoContainer slide="flex-end">
        <MainText>Joel Vinay Kumar</MainText>
        <SubText>joel@keestep.com</SubText>
      </InfoContainer>
      <LogoContainer src="https://avatars0.githubusercontent.com/u/16177724?s=460&u=e309b78e0ea859ec30fa897b65e7625f150f3615&v=4" />
    </CollegeInfoContainer>
  )
}

export const NewHome = () => {


  return (
    <Container>
      <Info>
        <CollegeInfo />
        <UserInfo />
      </Info>
      <RoundedContainer>

      </RoundedContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${theme.superAdmin};
  min-height: 100vh;
  width: 100%;
`;

const RoundedContainer = styled.div`
  background-color: ${theme.primary};
  min-height: 100vh;
  width: calc(100% - 0px);
  margin: 0 auto;
  border-radius: 50px;
  transform: translatey(35px);
`;

const Info = styled.div`
  height: 100px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
`;

const CollegeInfoContainer = styled.div`
  width: 25%;
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  background-color: ${theme.primary};
  width: 80px;
  height: 80px;
  margin: 0 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const InfoContainer = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.slide};
  justify-content: space-around;
  color: ${theme.primary};
`;

const MainText = styled.p`
  font-size: 18px;
`;

const SubText = styled.p`
  font-size: 15px;
`;