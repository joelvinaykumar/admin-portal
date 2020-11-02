import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

export const CourseTable = () => {

  const dataSource = [
    {
      key: "1",
      course_name: "Bachelors in Technology",
      course_code: "BTECH",
      student_count: 1250,
    },
    {
      key: "2",
      course_name: "Bachelors in Engineering",
      course_code: "BE",
      student_count: 350,
    },
    {
      key: "3",
      course_name: "Bachelors in Pharmacy",
      course_code: "BPHARM",
      student_count: 780,
    },
  ];

  const columns = [
    {
      title: "Course name",
      dataIndex: "course_name",
      key: "course_name",
    },
    {
      title: "Course Code",
      dataIndex: "course_code",
      key: "course_code",
    },
    {
      title: "St",
      dataIndex: "student_count",
      key: "student_count",
    },
  ];

  return (
    <div>
      <Title level={3}>Courses</Title>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
