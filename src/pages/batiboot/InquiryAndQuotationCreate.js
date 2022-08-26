import { paramCase } from 'change-case';
import { useParams, useLocation, } from 'react-router-dom';
import PropTypes from 'prop-types';
// @mui
import { Container, Button, Box } from '@mui/material';
// routes
import { PATH_BATIBOOT } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userList } from '../../_mock';
// components
import { DialogAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';

import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import ProductNewEditForm from '../../sections/@batiboot/inquirequotation/InquireQuotationModal';
// sections
/* import UserRolesCreateForm from '../../sections/@apgit/user/user/UserRoleModal/UserCreateRoleModal'; */

// ----------------------------------------------------------------------


export default function InquireAndQuotationCreateModal(props) {

  const { open, selectedValue, onClose, edit, identifier} = props
  const { themeStretch } = useSettings()
  const { pathname } = useLocation()

  const { name = '' } = useParams()

  // const isEdit = pathname.includes('edit')

  const isEdit = edit

  const currentUser = _userList.find((user) => paramCase(user.name) === name)
 
  const handleCloseModal = () => onClose(selectedValue)

  return(
    <DialogAnimate open={open} sx={{ px: 2}} maxWidth={'lg'}>
      <Page title={!isEdit ? 'Batiboot: Create Inquire And Quotation' : 'Batiboot: Edit Inquire And Quotation'}>
        <Container maxWidth={themeStretch ? false: 'lg'}>
          <HeaderBreadcrumbs 
            sx={{ position:  'sticky', top: 0, zIndex: 1, backgroundColor: 'white', py: 2}}
            heading={!isEdit ? 'Create Inquire/Quotation' : 'Edit Inquire/Quotation'}
            links={[  
              { name: 'Batiboot', href: PATH_BATIBOOT.root },
              { name: 'Inquire & Quotation', href: PATH_BATIBOOT.inquire.root },
              { name: !isEdit ? 'Create Inquire/Quotation' : 'Edit Inquire/Quotation'}
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
       
            <ProductNewEditForm  />
          
        </Container>
      </Page>
    </DialogAnimate>
  )
}

InquireAndQuotationCreateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  identifier: PropTypes.string,
};


 // {/*  <UserRolesCreateForm isEdit={isEdit} currentUser={currentUser} handleCloseModal={handleCloseModal} isIdentifier={identifier} /> */}



