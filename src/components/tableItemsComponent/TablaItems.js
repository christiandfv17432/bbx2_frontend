import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/itemAction';
import TransitionsModal from './modalForm/TransitionsModal';


const TablaItems = () => {



  const state = useSelector(state => console.log(state.itemListReducer.items));
  const dispatch = useDispatch();
  const [items, setItemsData] = useState([])
  const columns = [
    { field: 'id', headerName: 'Item Code', width: 130 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'price', headerName: 'Price', width: 130, type: 'number' },
    { field: 'creation_date', headerName: 'Creation date', width: 130 },
    { field: 'creator', headerName: 'Creator', width: 130 },
  ];

  const getItem = async (id) => {
    return axios.get('http://localhost:8080/api/v1/item/getItemById/?id=' + id)
      .then((response) => {
        console.log(response.data);
        <TransitionsModal item={response.data} />

      }

      )
      .catch((error) => {
        console.log(error);
      });
  };

  const getRowsAxios = async () => {
    return axios.get('http://localhost:8080/api/v1/item/findAllItems')
      .then((response) => {
        var data = response.data;
     
          dispatch(list(data.map((e) => ({
            id: e.itemCode,
            description: e.description,
            state: e.state,
            price: e.price,
            creation_date: e.date,
            creator: e.creator
          }))))

      }

      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRowsAxios();
  }, []);


  const getRow = (e) => {
    console.log(e.row)
  };
  const deleteItem = (id) => {
  
  };


  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={items} columns={columns} pageSize={5} onRowClick={(e) => { getItem(e.row.id) }} />
    </div>
  )
}



export default TablaItems
