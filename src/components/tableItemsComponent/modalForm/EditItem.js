import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useForm from '../../../hooks/useForm';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const EditItem= () =>{
    
    const details = useSelector(state => state.itemListReducer.detail);
    const [formValues,handleInputChange] =  useForm({})

    const {id,description} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(id,description);
    }

    
    useEffect(() => {
      
    }, [])
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleRegister}>
          <TextField id="standard-basic" label="Item code" 
          value={details.id}
            name="id"
            onChange={handleInputChange}
          />
          <TextField id="standard-basic" label="Item code" 
          value={details.description}
          name = "description"
          onChange={handleInputChange}
          />
          <input type="submit" />
        </form>
      );
}



export default EditItem

