import { paramCase } from 'change-case';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Stack,
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Switch,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  Skeleton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_BATIBOOT } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// _mock_
// import { _userList } from '../../_mock';
import _userList from '../../_mock/batiboot/user.json';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';

import UserListAnalytics from '../../sections/@batiboot/user/user&role/Analytics/UserListAnalytics';
import Label from '../../components/Label';

// sections
import { UserTableToolbar, UserTableRow } from '../../sections/@batiboot/user/user&role';
import UserModal from '../../sections/@batiboot/modal/UserModal';
// import UserListCreateModal from './UserListCreate';

// ----------------------------------------------------------------------

// const STATUS_OPTIONS = ['all', 'active', 'banned'];

const ROLE_OPTIONS = [
  'all',
  'Sourcing Agent',
  'Administrator',
  'Manager',
  'Supervisor',
];

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'left' },
  { id: 'email', label: 'Email', align: 'left' },
  { id: 'phone', label: 'Phone', align: 'left' },
  { id: 'designation', label: 'Designation', align: 'left' },
  { id: 'role', label: 'Role', align: 'left' },
  // { id: 'isVerified', label: 'Verified', align: 'center' },
  { id: 'shift', label: 'Shift', align: 'left' },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------
const delay = 3;

export default function UserList() {
  const location = useLocation();
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettings();

  const theme = useTheme();

  const navigate = useNavigate();

  const [tableData, setTableData] = useState(_userList);

  const [filterName, setFilterName] = useState('');

  const [filterRole, setFilterRole] = useState('all');

  const [isEdit, setIsEdit] = useState(false)
  const [identifier, setIdentifier] = useState('')

  const { pathname } = useLocation()  
  
  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterRole = (event) => {
    setFilterRole(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    setIsEdit(!isEdit)
    setIdentifier(id.role)
    handleOpenModal()
// navigate(PATH_DASHBOARD.user.edit(paramCase(id)));
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterRole,
    filterStatus,
  });

  const getLengthByStatus = (status) => tableData.filter((item) => item.status === status).length;

  const getPercentByStatus = (status) => (getLengthByStatus(status) / tableData.length) * 100;

  const STATS_OPT = [
    { value: 'all', label: 'All', color: 'info', count: tableData.length },
    { value: 'active', label: 'Active', color: 'success', count: getLengthByStatus('active') },
    { value: 'banned', label: 'Banned', color: 'error', count: getLengthByStatus('banned') },
  ];


  const denseHeight = dense ? 52 : 72;

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterRole) ||
    (!dataFiltered.length && !!filterStatus);

  const [ openModal, setOpenModal ] = React.useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleCloseModal = () => {
    setIsEdit(false)
    setOpenModal(false)
  }

  const [ showSkeleton, setShowSkeleton ] = useState(false);

  useEffect(
    () => {
      const timer1 = setTimeout(() => setShowSkeleton(true), delay * 900);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return (
    <Page title="Batiboot: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="User"
          links={[
            { name: 'Dashboard', href: PATH_BATIBOOT.root },
            { name: 'User', href: PATH_BATIBOOT.user.root },
            { name: 'List' },
          ]}
          action={
            <Button
              variant="contained"
              onClick={handleOpenModal}
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              Add User
            </Button>
          }
        />

      <Box>
         {/*  <UserListCreateModal 
              open={openModal}
              onClose={handleCloseModal}
              edit={isEdit}
              identifier={identifier}
          /> */}
          <UserModal
            open={openModal}
            onClose={handleCloseModal}
            edit={isEdit}
            identifier={identifier}      
            pathname={pathname}    
            nameLink={'User'}
          />



        </Box>
      

      
        {/* edit */}
       <Card sx={{ mb: 5 }}>
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
            {   
                showSkeleton ? (
                    <UserListAnalytics
                        title="Total"
                        total={tableData.length}
                        percent={100}
                        icon="ic:round-receipt"
                        color={theme.palette.info.main}
                    />
                ) : (
                    <Skeleton animation="wave" sx={{ width: '260px', height: '60px', mx: 10 }} />
                )
            }
             
            {   
                showSkeleton ? (
                    <UserListAnalytics
                        title="Active"
                        total={getLengthByStatus('active')}
                        percent={getPercentByStatus('active')}
                        icon="eva:checkmark-circle-2-fill"
                        color={theme.palette.success.main}
                    /> 
                ) : (
                    <Skeleton animation="wave" sx={{ width: '260px', height: '60px', mx: 10 }} />
                )
            }

            {   
                showSkeleton ? (
                    <UserListAnalytics
                        title="Banned"
                        total={getLengthByStatus('banned')}
                        percent={getPercentByStatus('banned')}
                        icon="eva:bell-fill"
                        color={theme.palette.error.main}
                    />  
                ) : (
                    <Skeleton animation="wave" sx={{ width: '260px', height: '60px', mx: 10 }} />
                )   
            }  
            </Stack>
          </Scrollbar>
        </Card>
      {/* edit */}

         {/* edit */}

         <Card>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onChangeFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {STATS_OPT.map((tab) => (
              <Tab 
                disableRipple 
                key={tab.value} 
                value={tab.value}
                icon={<Label color={tab.color}> {tab.count} </Label>}
                label={tab.label} />
            ))}
          </Tabs>
      
      {/* edit */}

          <Divider />

          <UserTableToolbar
            filterName={filterName}
            filterRole={filterRole}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            optionsRole={ROLE_OPTIONS}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                  actions={
                    <Tooltip title="Delete">
                      <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                        <Iconify icon={'eva:trash-2-outline'} />
                      </IconButton>
                    </Tooltip>
                  }
                />
              )}

              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={ TABLE_HEAD }
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <UserTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                      onEditRow={() => handleEditRow(row.name)}
                      path={location.pathname}
                    />
                  ))}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
            
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({ tableData, comparator, filterName, filterStatus, filterRole }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter((item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  if (filterStatus !== 'all') {
    tableData = tableData.filter((item) => item.status === filterStatus);
  }

  if (filterRole !== 'all') {
    tableData = tableData.filter((item) => item.role === filterRole);
  }

  return tableData;
}
