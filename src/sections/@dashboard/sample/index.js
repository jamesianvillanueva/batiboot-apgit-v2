import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
  Stack
} from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import Image from '../../../components/Image';
import Scrollbar from '../../../components/Scrollbar';
//


// ----------------------------------------------------------------------

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

InvoiceDetails.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default function InvoiceDetails({ invoice }) {
  const theme = useTheme();

  if (!invoice) {
    return null;
  }

  const {
    items,
    taxes,
    status,
    dueDate,
    discount,
    invoiceTo,
    createDate,
    totalPrice,
    invoiceFrom,
    invoiceNumber,
    subTotalPrice,
  } = invoice;

  return (
    <>
      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>              
            <Stack item m="auto" textAlign='center'>
                <Grid container>
                    <Grid m='auto'>
                        <Icon icon="fa-solid:clinic-medical" color="limegreen" width='60'/>
                    </Grid>
                    <Grid mx={2}>
                        <Typography variant="h4" sx={{ fontWeight: '100' }}>
                            John Mario XD Dela Cruz, MD, FPPS, FPSNBM
                        </Typography>
                    </Grid>                    
                </Grid>
               
                <Typography variant="h4" sx={{ fontWeight: '100' }}>
                    MAKATI MEDICAL CENTER
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: '100' }}>
                    MAKATI MEDICAL CENTER
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: '100' }}>
                    MAKATI MEDICAL CENTER
                </Typography>


            </Stack>
        </Grid>
        
        <Grid container mt={5}>
        

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
                <Typography variant="h6">
                My New Clinic
                </Typography>
                <Typography variant="body2">address</Typography>
                <Typography variant="body2">#tel</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
                <Typography variant="h6">
                Unihealth Southwoods Hospital and Medical Center
                </Typography>
                <Typography variant="body2">Rizal</Typography>
                <Typography variant="body2">09123456789</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
                <Typography variant="h6">
                PARAÑAQUE HOSPTAL
                </Typography>
                <Typography variant="body2">123 city</Typography>
                <Typography variant="body2">123456789</Typography>
            </Grid>
        </Grid>
        <Typography variant="span">
            <strong>Medical Certificate</strong>
        </Typography>
        <Divider sx={{ mt: 1}} color='black'/>

        <Grid item m="auto" textAlign='center' mt={3}>
            <Typography variant="h4">
            MEDICAL CERTIFICATE
            </Typography>
        </Grid>


        <Grid container>           
            <Grid item xs={12} sm={6} mt={3}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="outPatient"
                        name="radio-buttons-group"
                        row='true'
                    >
                        <FormControlLabel value="inPx" control={<Radio />} label="In Px" />
                        <FormControlLabel value="outPatient" control={<Radio />} label="Out Patient" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box sx={{ textAlign: { sm: 'right'} }} mt={3}>
                    <Typography variant="body2"><strong>Date: </strong>{fDate(createDate)}</Typography>
                </Box>
            </Grid>

            <Stack>
                <Grid mt={2}>
                    <Typography variant="span" sx={{ fontSize: '1rem'}}>
                    <strong>TO WHOM IT MAY CONCERN</strong>
                    </Typography>
                    <Typography paragraph variant="span" mx={3} sx={{ fontWeight: '100'}} textAlign='justify'>
                        This is to certify that per clinic record, the above named patient was seen/treated/operated on 2022-06-21 up to 2022-06-15and would need medical attention for 12 day/s barring complications.
                    </Typography>

                </Grid>
                <Grid mt={2}>
                    <Typography variant="span" sx={{ fontSize: '1rem'}}>
                    <strong>COMPLETE DIAGNOSIS:</strong>
                    </Typography>
                    <Typography paragraph variant="span" mx={3} sx={{ fontWeight: '100', textDecoration: 'underline'}}>
                       123
                    </Typography>

                </Grid>
                <Grid mt={2}>
                    <Typography variant="span" sx={{ fontSize: '1rem'}}>
                    <strong>OPERATION PERFORMED:</strong>
                    </Typography>
                    <Typography paragraph variant="span" mx={3} sx={{ fontWeight: '100'}} textAlign='justify'>
                        This certification is issued upon the request of Account, New for whatever intent it may serve.
                    </Typography>

                </Grid>
                
                <Grid mt={'5rem'}>
                    <Typography variant="span" sx={{ fontSize: '1rem'}}>
                    <strong>FURTHER RECOMMENDATION:</strong>
                    </Typography>
                    <Typography paragraph variant="span" mx={3} sx={{ fontWeight: '100'}} textAlign='justify'>
                        123
                    </Typography>

                </Grid>
               
            </Stack>

            <Grid item xs={12} sm={10}>
                <Box sx={{ textAlign: { sm: 'right', xs: 'right'} }} mt={3}>
                    <Typography variant='subtitle1'>Respectfully Yours,</Typography>
                </Box>                
            </Grid>


        
        </Grid>




        <Divider sx={{ mt: 5 }} color='black' />

        
      </Card>
    </>
  );
}
