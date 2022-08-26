import { paramCase } from 'change-case';
import { Link as RouterLink, useParams, useLocation, } from 'react-router-dom';
import PropTypes from 'prop-types';
// @mui
import { Container, Button } from '@mui/material';
// routes
import { PATH_BATIBOOT } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userList, _invoices } from '../../_mock';
// components
import { DialogAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';

import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import ProductNewEditForm from '../../sections/@batiboot/inquirequotation/InquireQuotationModal';
import InvoiceCreate from '../../sections/@batiboot/invoice/new-edit-form'
import OrderListModalForm from '../../sections/@batiboot/orders/order/OrderModal';
/* import UserRolesCreateForm from '../../sections/@apgit/user/user/UserRoleModal/UserCreateRoleModal'; */

// ----------------------------------------------------------------------


export default function OrderCreateModal(props) {
  const { open, selectedValue, onClose, edit, identifier} = props
  
  const { themeStretch } = useSettings()
  const { pathname } = useLocation()

  const { name = '' } = useParams()

  const isEdit = edit

 // const currentUser = _userList.find((user) => paramCase(user.name) === name)
  
//  const currentInvoice = _invoices.find((invoice) => invoice.id === identifier);

  const handleCloseModal = () => onClose(selectedValue)

  return(
    <DialogAnimate open={open} sx={{ px: 1, py: 3}} maxWidth={'md'}>
      <Page title={!isEdit ? 'Batiboot: Create Order' : 'Batiboot: Edit Order'}>
        <Container maxWidth={themeStretch ? false: 'lg'}>
          <HeaderBreadcrumbs 
            heading={!isEdit ? 'Add Order' : 'Edit Order'}
            links={[
              { name: 'Batiboot', href: PATH_BATIBOOT.root },
              { name: 'Order', href: PATH_BATIBOOT.order.root },
              { name: !isEdit ? 'Create Order' : 'Edit Order'}
            ]}
            action={
              <Button
                variant='contained'
                component={RouterLink}
                to={PATH_BATIBOOT.order.list}
                onClick={handleCloseModal}
                startIcon={<Iconify icon={'eva:arrow-back-fill'} />}
              >
                Back
              </Button>
            }
          />
        {/*  <UserRolesCreateForm isEdit={isEdit} currentUser={currentUser} handleCloseModal={handleCloseModal} isIdentifier={identifier} /> */}
          <OrderListModalForm isEdit={isEdit} /* currentUser={currentUser}  */handleCloseModal={handleCloseModal} /* currentInvoice={currentInvoice} */ />
        </Container>
      </Page>
    </DialogAnimate>
  )
}

OrderCreateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  identifier: PropTypes.string,
};





