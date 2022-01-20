import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";

export default function AlertSuccess({message}) {
  //const [open, setOpen] = React.useState(true);
  const state = useSelector(state => state.modalReducer)
  const {openAlertSuccess} = state;
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openAlertSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch({type : "CLOSE_ALERT_SUCCESS"})
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
      
    </Box>
  );
}
