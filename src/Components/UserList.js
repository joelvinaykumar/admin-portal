import React from 'react';
import styled from 'styled-components';
import { Table, Input, Button, Space, Typography, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import {
  SearchOutlined,
  DeleteFilled,
  EditFilled,
} from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

export const UserList = ({ title, classData }) => {
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  let searchInput = React.createRef();

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const editStudent = () => console.log('edit student');

  const deleteStudent = () => console.log('delete student');

  const data = [
    {
      key: '1',
      name: 'John Brown',
      registration_id: '20K81A0480',
      email: 'kdjbv@kajfbb.com',
    },
    {
      key: '2',
      name: 'Joe Black',
      registration_id: '20K81A0481',
      email: 'leifhnn@lqwohrf.com',
    },
    {
      key: '3',
      name: 'Jim Green',
      registration_id: '20K81A0482',
      email: 'wlifh@alkfhb.com',
    },
    {
      key: '4',
      name: 'Jim Red',
      registration_id: '20K81A0483',
      email: 'lworh@awepiofih.com',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'College Identification Number',
      dataIndex: 'registration_id',
      key: 'registration_id',
      width: '25%',
      ...getColumnSearchProps('registration_id'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '25%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: '5%',
      render: () => (
        <Space size="middle">
          <EditFilled style={{color:"#4834d4"}} onClick={editStudent} />
          <DeleteFilled style={{color:"#eb4d4b"}} onClick={deleteStudent}/>
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <Header>
        <Title level={4}>{title}</Title>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a class"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {classData.map((option) => (
            <Option value={option}>{option}</Option>
          ))}
        </Select>
        <Button>+ More</Button>
      </Header>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
`;
