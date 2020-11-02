import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

export const SubjectTable = () => {
  const dataSource = [
    {
      key: "1",
      subject_name: "Mathematics-I(Linear Algebra and Calculus)",
      subject_code: "BSC1",
      lecture_points: 3,
      tutorial_points: 1,
      practical_points: 0,
      credits: 4
    },
    {
      key: "2",
      subject_name: "Engineering Physics",
      subject_code: "ESC2",
      lecture_points: 2,
      tutorial_points: 1,
      practical_points: 2,
      credits: 5
    },
    {
      key: "3",
      subject_name: "Programming for Problem Solving",
      subject_code: "ESC3",
      lecture_points: 3,
      tutorial_points: 0,
      practical_points: 1,
      credits: 4
    },
  ];

  const columns = [
    {
      title: "Subject name",
      dataIndex: "subject_name",
      key: "subject_name",
    },
    {
      title: "Subject Code",
      dataIndex: "subject_code",
      key: "subject_code",
    },
    {
      title: "Lecture Points",
      dataIndex: "lecture_points",
      key: "lecture_points",
      width: '10%'
    },
    {
      title: "Tutorial Points",
      dataIndex: "tutorial_points",
      key: "tutorial_points",
      width: '10%'
    },
    {
      title: "Practical Points",
      dataIndex: "practical_points",
      key: "practical_points",
      width: '10%'
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "credits",
      width: '10%'
    },
  ];

  return (
    <div>
      <Title level={3}>Subjects</Title>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
