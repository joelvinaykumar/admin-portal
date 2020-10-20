import React from 'react';
import styled from 'styled-components';
import { Tabs, Typography, Timeline, Empty, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export const Timetable = () => {

  const william_quote = "\"Better three hours too soon, than one minute too late.\" -William Shakespear"

  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const TimeCard = ({ title, time, lecturer }) => (
    <TimeTableCard>
      <Typography.Text strong>{title}</Typography.Text>
      <Typography.Text>{lecturer}</Typography.Text>
      <Typography.Text>{time}</Typography.Text>
    </TimeTableCard>
  );

  const TimeTable = () => (
    <Timeline mode="alternate">
      <TimelineItem>
        <TimeCard title="Mathematics-1" lecturer="S.Jeeva" time="09:30 am" />
      </TimelineItem>
      <TimelineItem>
        <TimeCard title="Physics" lecturer="Shanthi" time="10:30 am" />
      </TimelineItem>
      <TimelineItem>
        <TimeCard
          title="Mathematics-2"
          lecturer="Jagannatham"
          time="11:30 am"
        />
      </TimelineItem>
      <TimelineItem>
        <TimeCard title="Lunch" lecturer="" time="12:30 pm" />
      </TimelineItem>
      <TimelineItem><TimeCard title="Computer Lab" lecturer="Charan" time="1:30 pm" /></TimelineItem>
      <TimelineItem><TimeCard title="Chemistry Lab" lecturer="Balu" time="2:30 pm" /></TimelineItem>
    </Timeline>
  );

  return (
    <Container>
      <Header>
        <Typography.Title level={2}>TimeTable</Typography.Title>
      </Header>
      <Empty description={william_quote} >
        <Button type="primary">Create Timetable</Button>
      </Empty>
    </Container>
  );
};

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

const NativeTabPane = styled(TabPane)`
  margin-top: 30px;
  padding: 30px;
`;

const TimeTableCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 370px;
`;

const TimelineItem = styled(Timeline.Item)`
  width: 70%;
`;
