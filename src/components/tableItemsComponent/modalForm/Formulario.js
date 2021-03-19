import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import useForm from '../../../hooks/useForm'
import { useSelector } from 'react-redux';





const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.itemCode) {
    errors.itemCode = 'Item code cannot be empty';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  
  return errors;
};

export const Formulario= ()=> {

  

  const [formValues,handleInputChange] =  useForm({})

  const {itemCode,description} = formValues;

  const handleRegister = (e)=>{
      
      console.log(itemCode,description);
  }


  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Create Item
      </Typography>
     
      <Form
        onSubmit={handleRegister}
        initialValues={{ state: 'ACTIVE' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="itemCode"
                    component={TextField}
                    type="text"
                    label="Item code"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="description"
                    component={TextField}
                    type="text"
                    label="description"
                  />
                </Grid>
              
                
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">STATE</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="ACTIVE"
                        control={
                          <Field
                            name="state"
                            component={Radio}
                            type="radio"
                            value="ACTIVE"
                          />
                        }
                      />
                      <FormControlLabel
                        label="DISCONTINUED"
                        control={
                          <Field
                            name="state"
                            component={Radio}
                            type="radio"
                            value="DISCONTINUED"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                
             

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          
          </form>
        )}
      />
    </div>
  );
}