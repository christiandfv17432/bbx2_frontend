import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Formulario } from "./Formulario";

import { useSelector } from "react-redux";
import EditItem from "./EditItem";




export default function ItemDetailsDialog({open,setOpen}) {
  
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogClick = e => {
    e.stopPropagation();
  };

  return (
    <>
      <Dialog
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
        onClick={handleDialogClick}
      >
        <DialogTitle id="form-dialog-title">Dialog</DialogTitle>
       <EditItem />
        <DialogActions>

          
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}