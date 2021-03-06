import React from "react";
import { Table, Drawer, Typography } from "antd";

const { Title } = Typography;

export const CollegeTable = () => {
  const [drawerStatus, setDrawerStatus] = React.useState(false);
  const [drawerData, setDrawerData] = React.useState({});

  const ColoredCell = ({ present }) => (<div>{present? '✔️': '❌'}</div>);

  const dataSource = [
    {
      key: "1",
      college_name: "Vaagdevi College of Engineering and Technology",
      college_code: "VGDV",
      attendance: true,
      timetable: true,
      notice_board: true,
      queries: true,
      marks_board: true,
      social_media: true,
      chat: true,
      student_count: 1605,
    },
    {
      key: "2",
      college_name: "G. Narayanamma Institute of Engineering and Technology",
      college_code: "GNITS",
      attendance: true,
      timetable: true,
      notice_board: true,
      queries: true,
      marks_board: true,
      social_media: false,
      chat: true,
      student_count: 2500,
    },
  ];

  const columns = [
    {
      title: "College name",
      dataIndex: "college_name",
      key: "college_name",
      render: (value, key) => {
        return <p>{value}</p>
      }
    },
    {
      title: "College Code",
      dataIndex: "college_code",
      key: "college_code",
    },
    {
      title: "At",
      dataIndex: "attendance",
      key: "attendance",
      render: value => <ColoredCell present={value} />,
    },
    {
      title: "Tt",
      dataIndex: "timetable",
      key: "timetable",
      render: value => <ColoredCell present={value} />,
    },
    {
      title: "Nb",
      dataIndex: "notice_board",
      key: "notice_board",
      render: value => <ColoredCell present={value} />,
    },
    {
      title: "Qr",
      dataIndex: "queries",
      key: "queries",
      render: value => <ColoredCell present={value} />,
    },
    {
      title: "Mr",
      dataIndex: "marks_board",
      key: "marks_board",
      render: value => <ColoredCell value={value} />,
    },
    {
      title: "Sc",
      dataIndex: "social_media",
      key: "social_media",
      render: value => <ColoredCell value={value} />,
    },
    {
      title: "Ct",
      dataIndex: "chat",
      key: "chat",
      render: value => <ColoredCell value={value} />,
    },
    {
      title: "St",
      dataIndex: "student_count",
      key: "student_count",
    },
  ];

  return (
    <div>
      <Title level={3}>Colleges</Title>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
