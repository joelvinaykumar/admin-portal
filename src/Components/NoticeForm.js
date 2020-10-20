import React from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const NoticeForm = () => {

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      layout="inline"
    >

      <Form.Item>
        <Input placeholder="Title" maxLength={50} />
      </Form.Item>

      <Form.Item>
        <TextArea rows={3} placeholder="Description" maxLength={500} />
      </Form.Item>

      <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
