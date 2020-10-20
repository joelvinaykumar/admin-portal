import React from 'react';
import styled from 'styled-components';
import { Typography, Menu, Dropdown } from 'antd';
import {
  EditFilled,
  DeleteFilled,
  DownOutlined
} from '@ant-design/icons';

const { Text, Title } = Typography;

const ColorPalette = ({name, color}) => (
  <ColorContainer>
    <ColorCircle color={color} />
    <Text>{name}</Text>
  </ColorContainer>
)

const menu = () => (
  <Menu>
    <Menu.Item>
      <ColorPalette color="#f1c40f" name="Yellow" />
    </Menu.Item>
  </Menu>
)

export const NoticeBoardItem = ({title, description,color}) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <NoticeCard color={color}>
      <Content>
        <Title editable level={5}>{title}</Title>
        <Description contentEditable>{description}</Description>
      </Content>
      <Actions>
        <EditFilled style={{color:'#2980b9', cursor: 'pointer'}} />
        <DeleteFilled style={{color:'#e74c3c', cursor: 'pointer'}} />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Select Color <DownOutlined />
          </a>
        </Dropdown>
      </Actions>
    </NoticeCard>
  );
};

const NoticeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  background-color: ${({color}) => color};
  border-radius: 10px;
  padding: 20px;
`;

const ColorContainer = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-around;
  align-items: center;
`;

const ColorCircle = styled.span`
  width: 15px;
  height: 15px;
  border-radisu: 50%;
  color: ${(color) => {console.log(color)}}
`;

const Description = styled.p`
  text-align: justify;
  word-break: break-all;
  width: 200px;
  color: #333;
`;

const Content = styled.div` 

`;

const Actions = styled.div` 
  display: flex;
  justify-content: space-around;
  align-items: center;
`;