import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import { Notifications, InfoCard, AttendanceChart, UserList } from '../Components';
const { Title } = Typography;

export const Dashboard = () => {
  const notificationData = [
    { title: 'Timetable', text: 'Timetable updated by Sirish Kumar' },
    { title: 'Result', text: 'Result uploaded by Satyanadh Jagannatham' },
    {
      title: 'Exam',
      text: 'B.Sc Physics - Atomic Physics exam on 26/10/2020 (10:00 am)',
    },
  ];

  const infoData = [
    {
      type: 'Students',
      count: 1100,
    },
    {
      type: 'Faculty',
      count: 35,
    },
    {
      type: 'Non-Technical Staff',
      count: 15,
    },
  ];

  const physics = [
    { day: 'Sep 1', value: 85 },
    { day: 'Sep 2', value: 90 },
    { day: 'Sep 3', value: 75 },
    { day: 'Sep 4', value: 100 },
    { day: 'Sep 5', value: 86 },
    { day: 'Sep 6', value: 84 },
    { day: 'Sep 7', value: 95 },
    { day: 'Sep 8', value: 98 },
    { day: 'Sep 9', value: 89 },
  ];
  const computer_science = [
    { day: 'Sep 1', value: 95 },
    { day: 'Sep 2', value: 80 },
    { day: 'Sep 3', value: 85 },
    { day: 'Sep 4', value: 90 },
    { day: 'Sep 5', value: 86 },
    { day: 'Sep 6', value: 74 },
    { day: 'Sep 7', value: 95 },
    { day: 'Sep 8', value: 88 },
    { day: 'Sep 9', value: 85 },
  ];

  const chartData = {physics: physics, computer_science: computer_science};

  const classes = [
    'B.Sc Physics I',
    'B.Sc Physics II',
    'B.Sc Physics III',
    'B.Com Mathematics I',
    'B.Com Mathematics II',
    'B.Com Mathematics III',
  ]

  return (
    <Container>
      <TopContent>
        <Content>
          <InfoArea>
            {infoData.map((infoItem) => (
              <InfoCard
                title={infoItem.type}
                count={infoItem.count}
                width="200px"
              />
            ))}
          </InfoArea>
          <ChartArea>
            <AttendanceChart data={chartData} />
          </ChartArea>
        </Content>
        <Sider>
          <NotificationsArea>
            <Title level={2}>Notifications</Title>
            <Notifications data={notificationData} itemLayout="horizontal" />
          </NotificationsArea>
        </Sider>
      </TopContent>
      <BelowContent>
        <StudentsArea>
          <UserList title="Students" classData={classes} />
        </StudentsArea>
        <FacultyArea>
          <UserList title="Faculty" classData={classes} />
        </FacultyArea>
      </BelowContent>
    </Container>
  );
};

const Container = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopContent = styled.div`
  display: flex;
  width: 100%;
`;

const BelowContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 70%;
`;

const Sider = styled.div`
  width: 30%;
  height: 85vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotificationsArea = styled.div`
  padding: 15px;
  width: 100%;
`;

const InfoArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ChartArea = styled.div`
  display: flex;
  justify-content: center;
`;

const StudentsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 95%;
`;

const FacultyArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 95%;
`;
