import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Select, message } from "antd";

import { BackButton, CourseTable } from "../Components";
import { lightTheme as theme } from "../Utility/theme.config";

export const AddCourse = () => {
  const [form] = Form.useForm();

  const Universities = [
    "Anna university",
    "Jawharlal Nehru technological University",
    "Andhra University",
    "Sri Venkateswara University",
  ];

  const [selectedUniversity, setSelectedUniversity] = React.useState([]);

  const handleUniversityChange = (selectedUniversity) =>
    setSelectedUniversity(selectedUniversity);

  const fillForm = async (values) => {
    console.log("form data", values);
  };

  const onFinishFailed = () => message.error("Adding Course failed");

  return (
    <Container>
      <BackButton title="Add Course" />
      <Form
        form={form}
        layout="vertical"
        onFinish={fillForm}
        onFinishFailed={onFinishFailed}
        style={{ width: "450px", paddingTop: "50px", paddingLeft: "50px" }}
      >
        <Form.Item
          label="Course Name"
          name="course_name"
          required
          tooltip="This is a required field"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="University"
          name="university"
          required
          tooltip="This is a required field"
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
          label="Course Code"
          name="course_code"
          required
          tooltip="This is a required field"
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <SubmitButton htmlType="submit">Add Course</SubmitButton>
        </Form.Item>
      </Form>
      <div style={{height: '100px'}} />
      <CourseTable />
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