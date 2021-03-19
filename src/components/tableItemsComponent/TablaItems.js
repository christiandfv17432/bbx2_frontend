import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/itemAction';
import { detailAdd } from '../../actions/detailAction';
import Prueba from '../Prueba';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ItemDetailsDialog from './modalForm/ItemDetailsDialog';
import DeleteIcon from '@material-ui/icons/Delete';


const TablaItems = () => {



 
  const dispatch = useDispatch();
  const state = useSelector(state => state.itemListReducer.items);

  const [open, setOpen] = useState(false)
  

  const columns = [
    { field: 'id', headerName: 'Item Code', width: 130 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'price', headerName: 'Price', width: 130, type: 'number' },
    { field: 'creation_date', headerName: 'Creation date', width: 130 },
    { field: 'creator', headerName: 'Creator', width: 130 },
    {field:'actions', headerName: 'create', label: ' ',
    renderCell: (params) => {
          return (
            <IconButton aria-label="Edit" size="small" onClick={(e)=>openItem(params.row)} >
            <EditIcon  />
          </IconButton>
            );
      }
  },];
  function openItem(e){
    
    dispatch(detailAdd(state.filter(element => element.id == e.id )[0]))
    
    setOpen(true)
    
    
    
  }
  
  
  
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
            creator: e.creator,
            suppliers: e.suppliers,
            priceReduction: e.priceReduction
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

  
  
 

const row= []
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={state} columns={columns} pageSize={5}  />
      <ItemDetailsDialog open={open} setOpen = {setOpen} />
  
    </div>
  )
}



export default TablaItems
