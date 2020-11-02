import React from "react";
import styled from 'styled-components'
import { Upload, Button, Form, Input, message, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { BackButton } from "../Components";
import { lightTheme as theme } from "../Utility/theme.config";
import { notify } from "../Utility/notification";

export const User = () => {
  const [form] = Form.useForm();
  const [uploadDisabled, setUploadDisabled] = React.useState(false);

  const fillForm = async ({title, sub_title, picture}) => {
    if(!title || !sub_title || !picture) {
      notify('warn','Empty values not allowed');
    }
  };

  const onFinishFailed = () => message.error("Onboarding College failed");

  const handleUpload = (event) => {
    console.log(event);
  }

  return (
    <Container>
      <BackButton title="Edit User details" />
      <Form
        form={form}
        layout="vertical"
        onFinish={fillForm}
        onFinishFailed={onFinishFailed}
        style={{ width: "450px", paddingTop: "50px", paddingLeft: "50px" }}
      >
        <Form.Item
          label="Name"
          name="name"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Picture"
          name="picture"
          required
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            className="upload-list-inline"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploadDisabled}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <SubmitButton htmlType="submit">Add College</SubmitButton>
        </Form.Item>
      </Form>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: ${theme.superAdmin};
  color: ${theme.primary};
`;