import React from "react";
import styled from "styled-components";
import { Form, Input, Button, message } from "antd";

import { BackButton, SubjectTable } from "../Components";
import { lightTheme as theme } from "../Utility/theme.config";
import { notify } from "../Utility/notification";

export const AddSubject = () => {
  const [form] = Form.useForm();

  const fillForm = async (values) => {
    if(Object.entries(values).length == 0) {
      notify('warn', 'Empty values not allowed'); 
    }
  };

  const onFinishFailed = () => notify('error','Adding Subject failed');

  return (
    <Container>
      <BackButton title="Add Subject" />
      <Form
        form={form}
        layout="vertical"
        onFinish={fillForm}
        onFinishFailed={onFinishFailed}
        style={{ width: "450px", paddingTop: "50px", paddingLeft: "50px" }}
      >
        <Form.Item
          label="Subject Name"
          name="Subject_name"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Course Code"
          name="course_code"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Subject Code"
          name="subject_code"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <SubmitButton htmlType="submit">Add Subject</SubmitButton>
        </Form.Item>
      </Form>
      <div style={{height: '100px'}} />
      <SubjectTable />
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