

import { Container, Box, Grid, Stack, Typography, Button, Modal, ButtonGroup, Checkbox, Fab,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Rating, InputLabel, Select, MenuItem, Slider, Switch, ToggleButtonGroup,
    ToggleButton, Paper, List, ListItem, ListItemIcon, ListItemText, Card, CardHeader, TableContainer, Table, TableBody, TableRow,
    TableCell, Avatar
  } from '@mui/material';

import Iconify from '../../components/Iconify';
import { DialogAnimate } from '../../components/animate';
import { _invoices, _nameData } from '../../_mock';

export default function SampleModal(props){
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <DialogAnimate open={open} sx={{p: '3rem'}} fullScreen>
  
        <Typography variant="h3">View Data Modal</Typography>
        <Button variant="contained" onClick={handleClose} sx={{width: 30}}>
          <Iconify icon="ant-design:close-square-twotone" sx={{ width: 20, height: 30}}/>
        </Button>
  
    
  
  
  
  
  
      </DialogAnimate>
    )
    
  }