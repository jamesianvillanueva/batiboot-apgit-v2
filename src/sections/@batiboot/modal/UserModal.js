import { paramCase } from 'change-case';
import { Link as RouterLink, useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { Container, Button, Grid, DialogTitle, Typography, DialogActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_BATIBOOT } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// _mock_
import { _userList  , _invoices} from '../../../_mock'; 
// import { _invoices } from '../../../_mock/batiboot/invoice_mock/_invoice';
// components
import { DialogAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';

import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import ProductNewEditForm from '../inquirequotation/InquireQuotationModal';
import InvoiceCreate from '../invoice/new-edit-form'
import OrderListModalForm from '../orders/order/OrderModal';
import UserRolesCreateForm from '../user/user&role/role/UserRoleModalForm';
import UserCreateDesignationForm from '../user/user&role/designation/UserDesignationModalForm';
import UserCreateDepartmentForm from '../user/user&role/department/UserDepartmentModalForm';
import UserNewEditForm from '../user/user&role/user/UserCreateModalForm';
import TrackingModal from '../orders/shipment/shipment-components/TrackingModal';
/* import UserRolesCreateForm from '../../sections/@apgit/user/user/UserRoleModal/UserCreateRoleModal'; */

// ----------------------------------------------------------------------
import './modalStyle.scss';


export default function UserModal(props) {
  const { open, selectedValue, onClose, edit, identifier, pathname, nameLink, pathLink } = props

  const { themeStretch } = useSettings()

  const { name = '' } = useParams()

  const isEdit = edit

  const currentUser = _userList.find((user) => paramCase(user.name) === name)

  const currentInvoice = _invoices.find((invoice) => invoice.id === identifier);
  const theme = useTheme();

  const formRef = useRef(null);
    const onSaveChanges = () =>{
        if(formRef)
        {
            formRef.current.click();
        }
    }
    const onSaveAsDraft = () =>{
      if(formRef)
      {
          formRef.current.click();
      }
  }
  // alert(nameLink)
  // alert(_invoices.find((invoice) => invoice.id === identifier))

  const handleCloseModal = () => onClose(selectedValue)
  const Path = () => {
    if(/* pathname === PATH_BATIBOOT.invoice.create */
        nameLink === 'Invoice' && !isEdit
      ){    
    
      return <InvoiceCreate 
        isEdit={isEdit} 
        currentUser={currentUser} 
        handleCloseModal={handleCloseModal} 
        currentInvoice={currentInvoice} 
        formRef={formRef} 
      />
    }
    if(nameLink === 'Invoice' && isEdit)
        return <InvoiceCreate 
        isEdit={isEdit} 
        currentUser={currentUser} 
        handleCloseModal={handleCloseModal} 
        currentInvoice={currentInvoice} 
        formRef={formRef} 
    />
    if(nameLink === 'Inquiry Quotation' && !isEdit){
      return <ProductNewEditForm isEdit={isEdit} formRef={formRef} />
    }
    if(nameLink === 'Inquiry Quotation' && isEdit){
      return <ProductNewEditForm isEdit={isEdit}
      formRef={formRef}   />
    }
    if(nameLink === 'Order List' && !isEdit){
      return  <OrderListModalForm isEdit={isEdit}
        handleCloseModal={handleCloseModal}
        formRef={formRef} />
    }
    if(nameLink === 'Order List' && isEdit){
      return  <OrderListModalForm isEdit={isEdit}
        handleCloseModal={handleCloseModal} 
        formRef={formRef} />
    }
    // USER ROLES MODAL
    if(nameLink === 'Roles' && !isEdit){
      return <UserRolesCreateForm isEdit={isEdit} 
      currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }
    if(nameLink === 'Roles' && isEdit){
      return <UserRolesCreateForm isEdit={isEdit} 
      currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }
    if(nameLink === 'Department' && !isEdit){
      return <UserCreateDepartmentForm 
      isEdit={isEdit} currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef} />
    }
    if(nameLink === 'Department' && isEdit){
      return <UserCreateDepartmentForm 
      isEdit={isEdit} currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }
    if(nameLink === 'Designations' && !isEdit){
      return <UserCreateDesignationForm isEdit={isEdit} 
      currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }
    if(nameLink === 'Designations' && isEdit){
      return <UserCreateDesignationForm isEdit={isEdit} 
      currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier} 
      formRef={formRef} />
    }
    if(nameLink === 'User' && isEdit){
      return <UserNewEditForm currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef} />
    }
    if(nameLink === 'User' && !isEdit){
      return <UserNewEditForm currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }        
    if(nameLink === 'Tracking' && isEdit){
      return <TrackingModal currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={currentInvoice}
      formRef={formRef} />
    }
    /* if(nameLink === 'Tracking' && !isEdit){
      return <UserNewEditForm currentUser={currentUser} 
      handleCloseModal={handleCloseModal} 
      isIdentifier={identifier}
      formRef={formRef}  />
    }  */
  }

  return(
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
                      Cancel
                  </Button>
                  <LoadingButton type='button' onClick={onSaveAsDraft} size="small" variant='contained' color="inherit" >
                  Save as Draft
                  </LoadingButton>
                  <LoadingButton type='button' onClick={onSaveChanges} size="small" variant='contained' >
                  {!isEdit ? `Create ${nameLink}` : 'Save Changes'}
                  </LoadingButton>
              </DialogActions>
          </div>
      </div>
    </DialogAnimate>
    
  )
}
/* <DialogAnimate open={open} className='dialog-center' fullScreen>
       <Container maxWidth={themeStretch ? false: 'lg'}>
        <Grid container>
          <Grid sx={{ position: 'absolute', zIndex: 99999}}  xs={12} md={12}>
            <HeaderBreadcrumbs 
                sx={{ pt: 2 }}
                heading={!isEdit ? `Create ${nameLink}` : `Edit ${nameLink}`}
                links={[  
                  { name: 'Batiboot', href: PATH_BATIBOOT.root },
                  { name: `${nameLink}`},
                  { name: !isEdit ? `Create ${nameLink}` : `Edit ${nameLink}`}
                ]}
                action={
                  <Button
                    variant='contained'
                    onClick={handleCloseModal}
                    startIcon={<Iconify icon={'eva:arrow-back-fill'} />}
                  >
                    Back
                  </Button>
                }
              />
            </Grid>
          
          </Grid>
      </Container>
    </DialogAnimate> */
/**
 {(() => {
                let defValue = null;
                switch (renderView) {
                    case 'SOAP': defValue = <SOAPForm  patient={patient} formRef={formRef} onClose={onClose}/>
                        break;

                    case 'TextNotes': defValue = <TextNotesForm  patient={patient} formRef={formRef} onClose={onClose} />
                        break;
                    
                    case 'LabReq': defValue = <LaboratoryRequest  patient={patient} formRef={formRef} onClose={onClose} />
                        break;
                    
                    case 'MedCert': defValue = <MedicalCertificateForm patient={patient} formRef={formRef} onClose={onClose} />
                        break;

                    case 'MedClea': defValue = <MedicalClearanceForm  patient={patient}  formRef={formRef} onClose={onClose} />
                        break;

                    case 'MedAbs': defValue = <MedicalAbstract patient={patient}  formRef={formRef} onClose={onClose} />
                        break;

                    case 'Vacc': defValue = <PediatricVaccine  patient={patient}  formRef={formRef} onClose={onClose} />
                        break;
                
                    default: defValue = <div>No Return Value</div>
                        break;
                }
                return(defValue)
            })()}
 */
/* 
 <Page title={!isEdit ? `Batiboot: Create ${nameLink}` : `Create ${nameLink}`}>
        <Container maxWidth={themeStretch ? false: 'lg'}>
          <HeaderBreadcrumbs 
            sx={{ pt: 2 }}
            heading={!isEdit ? `Create ${nameLink}` : `Edit ${nameLink}`}
            links={[  
              { name: 'Batiboot', href: PATH_BATIBOOT.root },
              { name: `${nameLink}`},
              { name: !isEdit ? `Create ${nameLink}` : `Edit ${nameLink}`}
            ]}
            action={
              <Button
                variant='contained'
               /*  component={RouterLink}
                to={PATH_BATIBOOT.invoice.list} 
                onClick={handleCloseModal}
                startIcon={<Iconify icon={'eva:arrow-back-fill'} />}
              >
                Back
              </Button>
            }
          />
          
            Path()
          
          /* <div className='mpp-body'>
            {(() => {
                let defValue = null;
                switch (renderView) {
                    case 'SOAP': defValue = <SOAPForm  patient={patient} formRef={formRef} onClose={onClose}/>
                        break;

                    case 'TextNotes': defValue = <TextNotesForm  patient={patient} formRef={formRef} onClose={onClose} />
                        break;
                    
                    case 'LabReq': defValue = <LaboratoryRequest  patient={patient} formRef={formRef} onClose={onClose} />
                        break;
                    
                    case 'MedCert': defValue = <MedicalCertificateForm patient={patient} formRef={formRef} onClose={onClose} />
                        break;

                    case 'MedClea': defValue = <MedicalClearanceForm  patient={patient}  formRef={formRef} onClose={onClose} />
                        break;

                    case 'MedAbs': defValue = <MedicalAbstract patient={patient}  formRef={formRef} onClose={onClose} />
                        break;

                    case 'Vacc': defValue = <PediatricVaccine  patient={patient}  formRef={formRef} onClose={onClose} />
                        break;
                
                    default: defValue = <div>No Return Value</div>
                        break;
                }
                return(defValue)
            })()}
          </div> 
        </Container>
      </Page>
      
    */
/* UserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  identifier: PropTypes.string,
  pathLink: PropTypes.any,
  pathname: PropTypes.string,
  nameLink : PropTypes.string
};
 */




