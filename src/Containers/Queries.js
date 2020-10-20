import React from 'react'
import styled from 'styled-components'
import {
  Form,Button, Typography,List, Avatar, Space, Image
} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

export const Queries = () => {
  const listData = [];

  for (let i = 1; i < 23; i++) {
    listData.push({
      href: `https://admin.keestep.com/queries/${i}`,
      title: `Query #${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Posted by Sai Kumar, BBA Ist year, Section A',
      content:
        'As we are aware of the pandemic situation, we should be cautious and make sure to avoid any occurence of infection.',
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Container>
      <Header>
        <Typography.Title level={2}>Queries</Typography.Title>
      </Header>
      <QueryList
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={listData}
        renderItem={(item,i) => (
          <QueryList.Item
            key={item.title}
            actions={[
              <IconText icon={MessageOutlined} text="Reply" key="list-vertical-message" />,
            ]}
            extra={
              <Image
                width={272}
                alt="logo"
                src={`https://picsum.photos/id/${i+100}/1200/600`}
              />
            }
          >
            <QueryList.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </QueryList.Item>
        )}
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

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const QueryList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;