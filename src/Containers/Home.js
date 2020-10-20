import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Layout, Menu, Avatar } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';


import logo from '../Assets/Img/logo.png';
import {
  Attendance,
  Timetable,
  NoticeBoard,
  Queries,
  Dashboard,
  SocialFeed,
} from '../Containers';
import { NotFound } from '../Components';

const { Sider, Content, Header } = Layout;

export const Home = () => {
  return (
    <Router>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Logo>{<img src={logo} width={50} height={70} />}</Logo>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Dashboard
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Social Feed
              <Link to="/community" />
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Attendance
              <Link to="/attendance" />
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
              TimeTable
              <Link to="/timetable" />
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              Notice Board
              <Link to="/noticeboard" />
            </Menu.Item>
            <Menu.Item key="6" icon={<BarChartOutlined />}>
              Queries
              <Link to="/queries" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <StyledHeader>
            <CollegeLink href="#">Joel Vinay Kumar</CollegeLink>
            <ProfilePic
              style={{ backgroundColor: '#27ae60', verticalAlign: 'middle' }}
              size="large"
            >
              {'J'}
            </ProfilePic>
          </StyledHeader>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Route exact path="/community" component={SocialFeed} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/attendance" component={Attendance} />
            <Route exact path="/timetable" component={Timetable} />
            <Route exact path="/noticeboard" component={NoticeBoard} />
            <Route exact path="/queries" component={Queries} />
            <Route component={NotFound} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ProfilePic = styled(Avatar)`
  border-radius: 50%;
  margin-left: 15px;
`;

const CollegeLink = styled.p`
  color: ${({ theme }) => theme.primary};
`;
