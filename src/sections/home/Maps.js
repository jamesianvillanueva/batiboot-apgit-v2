// import { paramCase } from 'change-case';
import React, { useState } from 'react';
import { Link as RouterLink,  } from 'react-router-dom';
// @mui
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  Box,
  // Tab,
  // Tabs,
  // Card,
  // Table,
  // Switch,
  Button,
  // Tooltip,
  // Divider,
  // TableBody,
  Container,
  // IconButton,
  // TableContainer,
  // TablePagination,
  // FormControlLabel,
  TextField,
  Select,
  FormControl,
  MenuItem,
  // InputLabel,
} from '@mui/material';

// hooks
import useSettings from '../../hooks/useSettings';

// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';

// ----------------------------------------------------------------------

export default function Maps() {

  const [value, setValue] = useState(new Date());

  const [position, setPosition] = useState('');

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

 
  const { themeStretch } = useSettings();

  const [openModal , setOpenModal] = React.useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)
  const handleCloseModal = () => setOpenModal(false)
  
  return (
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2585337715977!2d121.16665721471873!3d14.584338781385261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b96ac2d4fae9%3A0x2ccf32276312ee51!2sMediko%20Kapitolyo%20Multispecialty%20and%20Diagnostic%20Clinic!5e0!3m2!1sen!2sph!4v1657787273997!5m2!1sen!2sph"
            title="map"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
  
      </Container>
  );
}

