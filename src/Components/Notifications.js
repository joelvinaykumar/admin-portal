import React from 'react';
import styled from 'styled-components';
import { List, Avatar, Popover } from 'antd';
import {
  EyeOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
  NotificationOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';

export const Notifications = ({ data, itemLayout }) => {
  const NotificationPopMessage = (
    <p>Clicking this will mark the notification as read</p>
  );

  const icons = {
    Timetable: <ScheduleOutlined />,
    Exam: <SnippetsOutlined />,
    Result: <FileProtectOutlined />,
    Announcement: <NotificationOutlined />,
  };

  return (
    <NotificationContainer>
      <List
        itemLayout={itemLayout}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={avatarStyle}
                  icon={icons[item.title]}
                />
              }
              title={item.title}
              description={item.text}
            />
            <Popover placement="topLeft" content={NotificationPopMessage}>
              <EyeOutlined />
            </Popover>
          </List.Item>
        )}
      />
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div` 
  overflow-y: scroll;
  width: 100%;
`;

const avatarStyle = { 
  backgroundColor: 'navy',
  verticalAlign: 'middle'
}