import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'antd';

function Users() {
  const [data,setData]= useState([])
  useEffect(()=> {
    axios.get('http://localhost:8000/users')
    .then(res => setData(res.data[0]))
    .catch(err =>console.log(err))
  },[])

    const columns = [
    { title: 'Name', dataIndex: 'name', key:"1",render:(user)=> <span>{`${user.name} ${user.surname}`}</span> },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '1',
      render: (user) => (
        <span>{`${user.name} ${user.surname}`}</span>
      ),
    },
    { title: 'Phone', dataIndex: 'phone',key:"3" }
  ];
  return (
    <div>
      
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Users