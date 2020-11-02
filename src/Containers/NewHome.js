import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Typography } from 'antd';

import { lightTheme as theme } from '../Utility/theme.config'
import { auth } from './Login/firebase';
import { College, AddCourse, AddSubject, SuperDashboard, User } from '../Containers';

const { Title } = Typography;

export const NewHome = () => {

  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setEmail(user.email);
      }else {
        return 'User Not Found';
      }
    })
  })

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      window.location.reload(false);
    }catch(error) {
      console.error('Error logging out: ', error)
    }
  }
  
  const CollegeInfo = () => {
    return (
      <CollegeInfoContainer>
        <Link to="/"><LogoContainer src="https://avatars2.githubusercontent.com/u/70470487?s=460&u=f72dd8da7d7810b510e3b598669e1acb316f7916&v=4" /></Link>
        <InfoContainer slide="flex-start">
          <MainText>Keestep</MainText>
          <SubText>Super Admin Portal</SubText>
        </InfoContainer>
      </CollegeInfoContainer>
    )
  }
  
  const UserInfo = () => {
    return (
      <UserInfoContainer>
        <InfoContainer slide="flex-end">
          <MainText>{email}</MainText>
          <LogoutLink onClick={handleLogout}>Logout</LogoutLink>
        </InfoContainer>
        <Link to="/user"><LogoContainer src="https://avatars0.githubusercontent.com/u/16177724?s=460&u=e309b78e0ea859ec30fa897b65e7625f150f3615&v=4" /></Link>
      </UserInfoContainer>
    )
  }
  
  const AddButton = ({text}) => (
    <Circle>{text}</Circle>
  )
  const MenuBox = () => (
    <Menu>
      <Header><Title>Home</Title></Header>
      <Link to='/college'><MenuItem>College<AddButton text="🎓" /></MenuItem></Link>
      <Link to='/course'><MenuItem>Course<AddButton text="📃" /></MenuItem></Link>
      <Link to='/subject'><MenuItem>Subject<AddButton text="📖" /></MenuItem></Link>
      <Link to='/dashboard'><MenuItem>Dashboard<AddButton text="📺" /></MenuItem></Link>
    </Menu>
  )

  return (
    <Router>
      <Container>
        <Info>
          <CollegeInfo />
          <UserInfo />
        </Info>
        <RoundedContainer>
          <Route exact path="/" component={MenuBox} />
          <Route exact path="/user" component={User} />
          <Route exact path="/college" component={College} />
          <Route exact path="/course" component={AddCourse} />
          <Route exact path="/subject" component={AddSubject} />
          <Route exact path="/dashboard" component={SuperDashboard} />
        </RoundedContainer>
      </Container>
    </Router>
    
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
  width: 100%;
  margin: 0 auto;
  padding: 100px 250px;
  border-radius: 50px 50px 0 0;
`;

const Header = styled.div`
  height: 250px;
  width: 100%;
  // padding: 0 150px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const MenuItem = styled.div`
  width: 200px;
  height: 60px;
  margin: 0 40px 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.superAdmin};
  border-radius: 15px;
  color: ${theme.primary};
  cursor: pointer;
  transition: opacity 0.3s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 1;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  margin-left: 10px;
`;

const Info = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CollegeInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const UserInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  float: right;
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
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
`;

const LogoutLink = styled.a`
  color: white;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.slide};
  color: ${theme.primary};
`;

const MainText = styled.p`
  font-size: 18px;
`;

const SubText = styled.p`
  font-size: 15px;
`;