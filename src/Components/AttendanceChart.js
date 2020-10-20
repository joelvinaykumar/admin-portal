import React from 'react';
import styled from 'styled-components';
import { Typography, Select } from 'antd';
import { Line } from '@ant-design/charts';

const { Title } = Typography;
const { Option } = Select;

export const AttendanceChart = ({ data }) => {
  const [course,setCourse] = React.useState('physics');
  const options = Object.keys(data);

  const config = {
    data: data[course],
    xField: 'day',
    yField: 'value',
  };

  const ref = React.useRef();

  const handleSelect = value => setCourse(value)

  return (
    <Container>
      <Header>
        <Title level={4}>Attendance Chart</Title>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a class"
          optionFilterProp="children"
          onChange={handleSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {options.map(option => (
            <Option value={option}>{option}</Option>
          ))}
        </Select>
      </Header>
      <Line {...config} chartRef={ref} />
    </Container>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const Container = styled.div`
  width: 90%;
  margin-top: 30px;
  background-color: ${({theme}) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;
