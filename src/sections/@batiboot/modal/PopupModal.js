import { paramCase } from 'change-case';
import { useParams, useLocation, } from 'react-router-dom';
import PropTypes from 'prop-types';
// @mui
import { Container, Button, Grid, DialogTitle, Typography, DialogActions, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

import { _invoices } from '../../../_mock';

// routes
import { PATH_BATIBOOT } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

import { DialogAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

import Invoice from '../invoice/details';

import './modalStyle.scss';
import QuotationDetails from '../inquirequotation/details';


export default function PopUpModal(props) {
    
    const { open, selectedValue, onClose, isIdentifier, nameLink } = props

    const invoice = _invoices.find((invoice) => invoice.id === 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5');

    const { themeStretch } = useSettings();

    const { pathname } = useLocation();

    const { name = '' } = useParams();
    const theme = useTheme();

    const handleCloseModal = () => onClose(selectedValue)

    const Path = () => {

        if(open && nameLink === 'Quotation'){
            return <Box sx={{ m: 3}}>
                        <QuotationDetails invoice={invoice} />
                    </Box>
        }
        if(open && nameLink === 'Invoice'){
            return <Box sx={{ m: 3}}>
                        <Invoice invoice={invoice} />
                    </Box>
        }
    }

    return (
        <DialogAnimate open={open} className='dialog-center' fullScreen>

        <div className='mpp-main'>
            <div className='mpp-header'>
                <DialogTitle className='dialog-title' sx={{backgroundColor: theme.palette.primary.main }}>
                    {/*  <Image disabledEffect alt='samplejhonghilario' src='/assets/hip-logosm.png' sx={{ position: 'fixed', top: -11, left: 1, width: 90, height: 90 }} /> */}
                    <Typography sx={{ position: 'fixed', top: 18, left: 50, color: 'white'/* theme.palette.primary.light */ }}>
                        {nameLink} 
                    </Typography>
                    <Button
                        sx={{ position: 'fixed', top: 14, right: 15, color: 'black', '&:hover': { backgroundColor: 'white', color: theme.palette.primary.main } }}
                        variant='contained'
                        onClick={handleCloseModal}
                        startIcon={<Iconify icon={'eva:arrow-back-fill'} />}
                    >
                        Back
                    </Button>
                </DialogTitle>
            </div>

            <div className='mpp-body'>
            {
                Path()
            }
            </div>

            <div className='mpp-footer' sx={{backgroundColor: theme.palette.primary.main }}>
                <DialogActions sx={{ '& .MuiDialogActions-root': { padding: '50px !important' }}}>
                    <Button  onClick={handleCloseModal} variant='outlined' size="small" sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'white' }}}>
                            Back
                    </Button>
                    {/*  <LoadingButton type='button' onClick={onSaveAsDraft} size="small" variant='contained' color="inherit" >
                    Save as Draft
                    </LoadingButton>
                    <LoadingButton type='button' onClick={onSaveChanges} size="small" variant='contained' >
                    {!isEdit ? `Create ${nameLink}` : 'Save Changes'}
                    </LoadingButton> */}
                </DialogActions>
            </div>
        </div>
    </DialogAnimate>
    )
}

PopUpModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    isView: PropTypes.bool,
    identifier: PropTypes.string,
    nameLink: PropTypes.string,
  };
  
  
  