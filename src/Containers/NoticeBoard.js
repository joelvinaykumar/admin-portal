import React from 'react'
import styled from 'styled-components'
import { Typography, Empty, Button, List } from 'antd';

import { NoticeForm, NoticeBoardItem } from '../Components'

export const NoticeBoard = () => {
  const [showEmptyBox, setEmptyBoxStatus] = React.useState(false);
  const [notices, setNotices] = React.useState([]);

  const data = [
    {
      title: 'Notice Board Item #1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Notice Board Item #2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Notice Board Item #3',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Notice Board Item #4',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
  ];

  React.useEffect(() => {
    setNotices(data);
  })


  const handleCreateNotice = () => setEmptyBoxStatus(false);
  
  return (
    <Container>
      <Header>
        <Typography.Title level={2}>NoticeBoard</Typography.Title>
      </Header>
      {showEmptyBox 
      ? (
      <Empty description="It seems empty here." >
        <Button type="primary" onClick={handleCreateNotice}>Create Notice</Button>
      </Empty>
      )
      : (
          <List
            style={{display: 'flex', justifyContent: 'center', width: '100%'}}
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
      )}
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

const Notices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
`;