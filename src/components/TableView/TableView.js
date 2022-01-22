import React from 'react';
import SmartTable from 'react-next-table';
import { useGlobalContext } from '../../context/Context';
import SingleItem from './SingleItem';

const headCells = [
    {
        id: 'id',
        numeric: true,
        label: 'ID',
        width: 50,
      },{
        id: 'name',
        numeric: false,
        label: 'Name',
        width: 150,
      },
    {
      id: 'email',
      numeric: false,
      label: 'Email',
      width: 150,
    },
    {
        id: 'username',
        numeric: false,
        label: 'Username',
        width: 150,
      },
  
    {
      id: 'phone',
      numeric: false,
      label: 'Phone',
      width: 150,
    },  {
      id: 'edit',
      numeric: false,
      label: 'Edit',
      width: 100,
    },
   
  ];

const TableView = () => {

const {filteredUsers} = useGlobalContext()

console.log(filteredUsers)

  return <>
   <table class="table">
    <thead>
      <tr>
          {
              headCells.map((item)=>{
                  return <th>{item.label}</th>
              })
          }
       
      </tr>
    </thead>
    <tbody>
          {
              filteredUsers.map((item)=>{
                  return <SingleItem key={item.id} item={item}/>
              })
          }
        
    </tbody>
  </table>
  </>
};

export default TableView;
