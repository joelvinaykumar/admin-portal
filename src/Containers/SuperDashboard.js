import React from "react";
import styled from "styled-components";

import { BackButton, CollegeTable, CourseTable, SubjectTable } from "../Components";

export const SuperDashboard = () => {

  const labels = [
    {key: 'At', name: 'Attendance'},
    {key: 'Tt', name: 'Timetable'},
    {key: 'Nb', name: 'Noticeboard'},
    {key: 'Qr', name: 'Queries'},
    {key: 'Mr', name: 'Marks Board'},
    {key: 'Sc', name: 'Social Media'},
    {key: 'Ct', name: 'Chat'},
    {key: 'St', name: 'Student Count'},
  ]


  return (
    <Container>
      <BackButton title="Dashboard" />
      <Labels>
        {labels.map(({key, name}) => <LabelItem>{`${key}-${name}`}</LabelItem>)}
      </Labels>
      <Colleges>
        <CollegeTable />
        <CourseTable />
        <SubjectTable />
      </Colleges>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Labels = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

const LabelItem = styled.p`
  font-weight: 400;
  padding: 10px 20px;
`;

const Colleges = styled.div`
  margin-top: 20px;
`;
