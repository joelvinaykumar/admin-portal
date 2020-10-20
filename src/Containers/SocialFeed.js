import React from 'react';
import styled from 'styled-components';
import { Typography, List } from 'antd';

import { Notifications, InfoCard, AttendanceChart, UserList } from '../Components';
const { Title } = Typography;

export const SocialFeed = () => {

  const data = [
    {
      title: 'Update #1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Update #2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Update #3',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Update #4',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
  ];

  return (
    <Container>
      <Header>
        <Title level={2}>Community</Title>
      </Header>
      <Content>
        <Social>

        </Social>
        <UpdatesArea>
          <SubHeader>
            <Title level={4}>Updates</Title>
          </SubHeader>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={notice => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="#">{notice.title}</a>}
                  description={notice.description}
                />
              </List.Item>
            )}
          />
        </UpdatesArea>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const Content = styled.div`
  width: 100%;
`;

const Social = styled.div`
  padding: 10px;
  overflow: auto;
  float: left;
  width: 70%;
`;

const UpdatesArea = styled.div`
  padding: 10px;
  width: 30%;
  float: right;
  height: 400px;
  background-color: ${({ theme }) => theme.primary};
  position: sticky;
  overflow-y: scroll;
`;