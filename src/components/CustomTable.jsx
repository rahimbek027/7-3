import React from 'react';
import { Table } from 'antd';

const CustomTable = ({columns, data, isLoading}) => {

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading}
    />
  )
}
export default CustomTable;