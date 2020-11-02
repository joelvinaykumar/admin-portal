import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Select, message, Checkbox, Row, Col } from "antd";

import { BackButton, CollegeTable } from "../Components";
import { lightTheme as theme } from "../Utility/theme.config";

export const College = () => {
  const [form] = Form.useForm();

  const Universities = [
    "Anna university",
    "Jawharlal Nehru technological University",
    "Andhra University",
    "Sri Venkateswara University",
  ];

  const Features = [
    "Attendance",
    "Timetable",
    "Notice Board",
    "Queries",
    "Social Feed",
    "Chat",
  ];

  const [selectedUniversity, setSelectedUniversity] = React.useState([]);

  const handleUniversityChange = (selectedUniversity) =>
    setSelectedUniversity(selectedUniversity);


  const fillForm = async (values) => {
    console.log("form data", values);
  };

  const onFinishFailed = () => message.error("Onboarding College failed");
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }

  return (
    <Container>
      <BackButton title="College" />
      <Form
        form={form}
        layout="vertical"
        onFinish={fillForm}
        onFinishFailed={onFinishFailed}
        style={{ width: "550px", paddingTop: "50px", paddingLeft: "50px" }}
      >
        <Form.Item
          label="College Name"
          name="college_name"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="College Code"
          name="college_code"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="University"
          name="university"
          required
        >
          <Select
            value={selectedUniversity}
            onChange={handleUniversityChange}
            style={{ width: "100%" }}
          >
            {Universities.map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Courses"
          name="courses"
          required
        >
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Row>
              <Col span={8}>
                <Checkbox value="B.Tech">B.Tech</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B.E">B.E</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B.Pharm">B.Pharm</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label="Features"
          name="features"
          required
        >
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Row>
              {Features.map(feature => (
                <Col span={8}>
                  <Checkbox value={feature}>{feature}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <SubmitButton htmlType="submit">Add College</SubmitButton>
        </Form.Item>
      </Form>
      <div style={{height: '100px'}} />
      <CollegeTable />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: ${theme.superAdmin};
  color: ${theme.primary};
`;
