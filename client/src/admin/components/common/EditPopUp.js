import React from 'react';
import { IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function EditPopUp() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (
    <div>
    <IconButton onClick={handleClickOpen}>
      <EditIcon />
    </IconButton>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Edit User"}</DialogTitle>
      <DialogContent>
        
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Phone Number" variant="standard" />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default EditPopUp