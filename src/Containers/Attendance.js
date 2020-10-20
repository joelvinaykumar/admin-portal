import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Form,
  Button,
  Select,
  InputNumber,
  Typography,
  Tabs,
  Empty
} from 'antd';

const { Option } = Select;
const { Title } = Typography;
const { TabPane } = Tabs;

export const Attendance = () => {
  const [courseType, setCourseType] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState(1);
  const [section, setSection] = useState('A');

  const handleCourseType = value => setCourseType(value);
  const handleCourse = value => setCourse(value);
  const handleYear = value => setYear(value);
  const handleSection = value => setSection(value);

  const courseTypes = [
    'B.SC',
    'B.Com',
    'BBA',
    'B.A'
  ]

  const courses = [
    'BioChemistry/Bio-Technology/Chemistry',
    'BioChemistry/Bio-Technology/Chemistry',
    'Mathematics/Electronics/ComputerScience',
    'Mathematics/Physics/ComputerScience',
    'Mathematics/Stastitics/ComputerScience',
    'Microbiology/Genetics/Chemistry',
    'Bachelor of Business Administration'
  ]

  const years = [
    1,
    2,
    3
  ]

  const sections = [
    'A',
    'B',
    'C'
  ]

  const Selection = ({ label, items, handleFunction, w }) => (
    <Form.Item required requiredMark label={label} style={{width: w || 270}}>
      <NativeSelect onChange={handleFunction}>
        {items.map(item => (
          <Option value={item}>{item}</Option>
        ))}
      </NativeSelect>
    </Form.Item>
  )
  

  return (
    <Container>
      <Header>
        <Title level={2}>Attendance</Title>
      </Header>
      <StyledForm
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 12 }}
        layout="inline"
        size="large"
      >
        <Selection
          items={courseTypes}
          label="Course Type"
          handleFunction={handleCourseType}
          w={140}
        />
        <Selection
          items={courses}
          label="Course"
          handleFunction={handleCourse}
          w={600}
        />
        <Selection
          items={years}
          label="Year"
          handleFunction={handleYear}
          w={90}
        />
        <Selection
          items={sections}
          label="Section"
          handleFunction={handleSection}
          w={90}
        />
      </StyledForm>
      <AttendanceTable>
      <Empty />
      </AttendanceTable>
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

const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 95%;
`;

const NativeSelect = styled(Select)`
  margin-left: 15px;
`;

const AttendanceTable = styled.div`
  margin-top: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;