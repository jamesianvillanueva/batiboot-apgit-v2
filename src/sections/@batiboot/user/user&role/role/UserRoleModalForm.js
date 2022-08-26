import PropTypes, { object } from 'prop-types'
import { paramCase } from 'change-case'

// FORM

import * as Yup from 'yup';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import {  Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// @MUI
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel, TableContainer,
    Table, Tooltip, TableBody, IconButton, TableCell, TableRow, Checkbox 
} from '@mui/material';

// UTILS


// ROUTES
import { PATH_BATIBOOT } from '../../../../../routes/paths';
// _MOCK
import 
    _userRole from
 '../../../../../_mock/batiboot/role.json';
import
    _userList
from '../../../../../_mock/batiboot/user.json';
import
    _status
from '../../../../../_mock/batiboot/roleStatus.json';

// HOOKS
import useTable, { getComparator, emptyRows } from '../../../../../hooks/useTable';
import useTabs from '../../../../../hooks/useTabs';
// COMPONENTS

import Scrollbar from '../../../../../components/Scrollbar';
import Iconify from '../../../../../components/Iconify';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../../../components/hook-form';

// Table
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../../../../components/table';
import UserTableRow from '../UserTableRow';


UserRolesCreateForm.propsType = {
    isEdit: PropTypes.pool,
    currentUser: PropTypes.object,
    handleCloseModal: PropTypes.func,
    formRef: PropTypes.any
}


export default function UserRolesCreateForm(props){

    const { isEdit, currentUser, handleCloseModal, identifier, formRef } = props
    const navigate = useNavigate()
    const location = useLocation()

    const [loadingSave, setLoadingSave] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [valueIndex, setValueIndex] = useState(0);
  
    const handleChange = (event, newValueIndex) => {
      setValueIndex(newValueIndex);
    };
  const handleSaveAsDraft = async () => {
    setLoadingSave(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSave(true);
      handleCloseModal();
    //  navigate(PATH_BATIBOOT.invoice.list);
   //   console.log(JSON.stringify(newInvoice, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateAndSend = async () => {
    setLoadingSend(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      handleCloseModal();
      setLoadingSend(false);
   /*    navigate(PATH_BATIBOOT.invoice.list);
      console.log(JSON.stringify(newInvoice, null, 2)); */
    } catch (error) {
      console.error(error);
    }
  };

    const TABLE_HEAD = [
        { id: 'user', label: 'user', align: 'left' },
        { id: 'role', label: 'Role', align: 'left' },
        { id: 'status', label: 'Status', align: 'left' },
        { id: 'action', label: 'Actions', align: 'right' },
    ];

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

    const { enqueueSnackbar } = useSnackbar();

    const NewUserSchema = Yup.object().shape({
        role: Yup.string().required('Role is required'),
       // status: Yup.string().required('Status is required'),
    });

    const defaultValues = useMemo(
        () => ({
        role: currentUser?.role || '',
        user: currentUser?.user || '',
        status: currentUser?.status || '',
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentUser]
    );

    const methods = useForm({
        resolver: yupResolver(NewUserSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        onChange,
        onInput,
        formState: { isSubmitting }
    } = methods;


    const [tableData, setTemp] = React.useState([])
    
    const [tempRole, GETROLE] = React.useState('')
    const [tempStatus, GETSTATUS] = React.useState('')

    const [filterName, setFilterName] = React.useState('');

    const [filterRole, setFilterRole] = React.useState('all');  

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
        setTemp(deleteRow); 
    };
    
    const handleDeleteRows = (selected) => {
        const deleteRows = tableData.filter((row) => !selected.includes(row.id));
        setSelected([]);
        setTemp(deleteRows);
    };
    
    const handleEditRow = (id) => {
        navigate(PATH_BATIBOOT.user.edit(paramCase(id)));
    };

    const dataFiltered = applySortFilter({
        tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterRole,
        filterStatus,
    });

    const denseHeight = dense ? 52 : 72;
    
    const isNotFound =
        (!dataFiltered.length && !!filterName) ||
        (!dataFiltered.length && !!filterRole) ||
        (!dataFiltered.length && !!filterStatus);
    
    const [filteredEmployees, checkIfEmployeesHasRole] = React.useState(_userList.filter((key) => key.role === ''))

    const onAddTemp = (event) => {
        
        const Add = {
            'id' : tableData.length + 1,
            'role' : tempRole,
            'name' :  _userList.find((key) => key.id === parseInt(event.target.value, 10)).name,
            'status': tempStatus,
            'identifier' : _userList.find((key) => key.id === parseInt(event.target.value, 10)).id
        }
        setTemp(tmp => [...tableData, Add]) 
    }
    const condition = () => {
        if(tempRole === '' || tempStatus === '')
            return 'none'
    }

    const onSubmit = async () => {
        try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        UpdateData()
        reset();
        handleCloseModal()
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        navigate(PATH_BATIBOOT.user.role);
        } catch (error) {
        console.error(error);
        }
    }
    const panelTabs = [
        { name: 'Designation', title: 'Designation', index: 0, 
     permission: ['Read','Create','Update','Delete']},
        
        { name: 'Department',title: 'Department', index: 1, 
     permission:['Read','Create','Update','Delete'] },
        
       { name:'Users',title: 'Users', index: 2, 
     permission:['Read','Profile','Create','Edit','Update','Delete','Menu','Make HR'] },
     
       { name:'Roles', title: 'Roles',index: 3, 
     permission: ['Read','Create','Update','Delete'] },
     
       { name:'LeaveType', title: 'Leave Type', index: 4, 
     permission: ['Read','Create','Update','Delete','Menu'] },
        
       { name:'LeaveAssign',title: 'Leave Assign', index: 5,
     permission: ['Read','Create','Update','Delete'] },
     
       { name:'LeaveRequest', title: 'Leave Request', index: 6,
     permission: ['Read','Create','Approve','Reject','Delete'] },
     
       { name:'Weekend', title: 'Weekend',index: 7, 
     permission: ['Read','Update'] },
        
       { name: 'Holiday', title: 'Holiday',index: 8,
     permission: ['Read','Create', 'Update','Delete'] },
     
       { name: 'Schedule',title: 'Schedule', index: 9, 
     permission: ['Read','Create', 'Update','Delete'] },
     
       { name:'Attendance', title: 'Attendance',index: 10,
     permission: ['Read','Create', 'Update','Delete','Menu']
     },
     
       { name:'Shift',title: 'Shift', index: 11, 
     permission:['Read','Create', 'Update','Delete','Menu'] },
     
       { name:'Payroll', title: 'Payroll',index: 12, 
     permission: [
       'Menu',
       'Payroll item read',
       'Payroll item create',
       'Payroll item store',
       'Payroll item edit',
       'Payroll item update',
       'Payroll item delete',
       'Payroll item view',
       'Payroll item menu',
       'List payroll set',
       'Create payroll set',
       'Store payroll set',
       'Edit payroll set',
       'Update payroll set',
       'Delete payroll set',
       'View payroll set',
       'Payroll set menu'] },
     
       { name:'Payslip', title: 'Payslip',index: 13, 
     permission: [
       'Menu',
       'Salary generate',
       'Salary view',
       'Salary delete',
       'Salary edit',
       'Salary update',
       'Salary payment',
       'Payslip list',]},
     
       { name:'AdvanceType',title: 'Advance Type', index: 14,
     permission: [
       'Menu',
       'Advance type create',
       'Advance type store',
       'Advance type edit',
       'Advance type update',
       'Advance type delete',
       'Advance type view',
       'Advance type list',]},
     
       { name:'AdvancePay', title: 'Advance Pay',index: 15, 
     permission:[
       'Menu',
       'Advance salaries create',
       'Advance salaries store',
       'Advance salaries edit',
       'Advance salaries update',
       'Advance salaries delete',
       'Advance salaries view',
       'Advance salaries approve',
       'Advance salaries list',
       'Advance salaries pay',
       'Advance salaries invoice',
       'Advance salaries search',] },
     
        { name:'Salary', title: 'Salary' ,index: 16, 
       permission: [
         'Menu',
         'Salary store',
         'Salary edit',
         'Salary update',
         'Salary delete',
         'Salary view',
         'Salary list',
         'Salary pay',
         'Salary invoice',
         'Salary approve',
        'Salary generate',
         'Salary calculate',
         'Salary search',]},
     
        { name:'Account',title: 'Account', index: 17, 
       permission: ['Menu',
       'Account create',
       'Account store',
       'Account edit',
       'Account update',
       'Account delete',
       'Account view',
       'Account list',
       'Account search']},
     
        { name:'Deposit',title: 'Deposit', index: 18, 
       permission:['Menu',
       'Deposit create',
       'Deposit store',
       'Deposit edit',
       'Deposit update',
       'Deposit delete',
       'Deposit list',]},
     
        { name:'Expense',title: 'Expense', index: 19, 
       permission: ['Menu',
       'Expense create',
       'Expense store',
       'Expense edit',
       'Expense update',
       'Expense delete',
       'Expense list',
       'Expense approve',
       'Expense invoice',
       'Expense pay',
       'Expense view']},
     
        { name:'DepositCategory',title: 'Deposit Category', index: 20,
       permission: ['Menu',
       'Deposit category create',
       'Deposit category store',
       'Deposit category edit',
       'Deposit category update',
       'Deposit category delete',
       'Deposit category list',]},
     
        { name:'PaymentMethod',title: 'Payment Method', index: 21,
       permission: ['Menu',
       'Payment method create',
       'Payment method store',
       'Payment method edit',
       'Payment method update',
       'Payment method delete',
       'Payment method list']},
     
        { name:'Transaction',title: 'Transaction', index: 22,
       permission: ['Menu',
       'Transaction create',
       'Transaction store',
       'Transaction edit',
       'Transaction update',
       'Transaction delete',
       'Transaction view',
       'Transaction list',]},
     
        { name:'Report',title: 'Report', index: 23, 
       permission: ['Attendance report', '0', 'Menu']},
     
        { name:'LeaveSettings',title: 'Leave Settings', index: 24,
       permission: ['Read', 'Update']},
     
        { name:'Ip',title: 'Ip', index: 25, 
       permission: ['Read',
       'Create',
       'Update',
       'Delete']},
     
        { name:'CompanySetup',title: 'Company Setup', index: 26,
       permission: ['Menu',
       'Activation read',
       'Activation update',
       'Configuration read',
       'Configuration update',
       'Ip whitelist read',
       'Location read',]},
     
        { name:'Location', title: 'Location',index: 27,
       permission: ['Location create',
       'Location store',
       'Location edit',
       'Location update',
       'Location delete',]},
     
        { name:'ApiSetup',title: 'Api Setup', index: 28,
       permission:  ['Read'] },
     
        { name:'Claim',title: 'Claim', index: 29,
       permission: ['Read',
       'Create',
       'Update',
       'Delete',]},
     
        { name:'Payment',title: 'Payment', index: 30,
       permission: ['Read',
       'Create',
       'Update',
       'Delete',]},
     
        { name:'Visit',title: 'Visit', index: 31, 
       permission: ['Menu',
       'Read',
       'Update',
       'View',]},
       
        { name:'Support', title: 'Support',index: 32, 
       permission: ['Support menu',
       'Support read',
       'Support create',
       'Support reply',
       'Support delete',]},
       ]
       function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
  
  
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }

    const UpdateData = () => {
        if(!_userRole.some((item) => item.role === tempRole.toLowerCase())){
            _userRole.push({
                'id' : _userRole.length + 1,
                'status': tempStatus,
                'permission': 12,
                'role' : tempRole,
            })
        } 
        /* TRY MULTI INSERT ROLE FROM TABLE ***************************************************** */
    
       /*  _userRole.map(key => {
            const found = tableData.find((item) => item.role === key.role)
            if(found) 
                Object.assign(key, found)
            return key
        }) 
 */
        _userList.map(key => {
            const found = tableData.find((item) => item.identifier === key.id)
            if(found)
                Object.assign(key, found)
            return key
        })
    }
    
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <Card sx={{ py: 2, px: 3, mx: 3, mt: 2}}>
                <Box>              
                    <RHFSelect name="user" label="User" placeholder="User" onChange={onAddTemp}>
                        <option value="" />
                        {filteredEmployees.filter(i => !tableData.some(x => i.name === x.name.toLowerCase())).map((option, i) => (
                            <option key={i} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </RHFSelect>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800, position: 'relative', mt: 3 }}>
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
                                    path={location.pathname.concat('/create')}
                                />
                                ))}

                        <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                        <TableNoData isNotFound={isNotFound} />
                    </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbar>
                </Box>
                </Card>
                
            </Grid>
            <Grid item xs={12} md={4}>  
                <Card sx={{ py: 2, px: 3, mr: 3, mt: 2 }}>
                    <Box
                        sx={{
                            display: 'grid',
                            columnGap: 2,
                            rowGap: 2,
                            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
                        }}
                    >
                    {/*   <Autocomplete
                    name="role"
                    disableClearable
                    options={_userRole}
                    renderInput={params => (
                        <TextField {...params} label="Role" variant="outlined" />
                    )}
                    getOptionLabel={option => option.role}
                    onInputChange={(_event, role) => {
                        GETROLE(role.role.toLowerCase());
                    }}
                    /> */}
                <RHFTextField name="role" label="Role" onInput={(e) => GETROLE(e.target.value.toLowerCase())}/>
                <RHFSelect name="status" label="Status" placeholder="Status" value={tempStatus} onChange={(e) => GETSTATUS(e.target.value)}>
                    <option value="" />
                    {_status.map((option, i) => (
                    <option key={i} value={option.status}>
                        {option.status}
                    </option>
                    ))}
                </RHFSelect>
                </Box>

                
                


                <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton
          color="inherit"
          size="small"
          variant="contained"
          loading={loadingSave && isSubmitting}
          onClick={handleSubmit(handleSaveAsDraft)}
          type='submit'
          sx={{display:'none'}}
          ref={formRef}
        />

        <LoadingButton
          size="small"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
          type='submit'
          sx={{display:'none'}}
          ref={formRef}
        />
                </Stack>
            </Card>
            <Card sx={{ py: 2, px: 3, mr: 3, mt: 2 }}>
                    <Box sx={{ pt: 2}}>
                        <Tabs
                            value={valueIndex}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example">
                            {
                            panelTabs.map((panels) => (
                                <Tab key={panels} label={panels.title} {...a11yProps(panels.index)}/>
                            ))
                            }
                        </Tabs>

                        { 
                        
                            panelTabs.map((panels) => (
                            <TabPanel key={panels} value={valueIndex} index={panels.index}>
                                    {/* <FormGroup > */}{ 
                                    panels.permission.map((option) => (
                                        <FormControlLabel key={option.permission} label={option} control={<Checkbox />} sx={{color: 'text.secondary',}} />
                                    ))} {/* </FormGroup> */}
                            </TabPanel>
                            ))
                        }
                    
                    </Box> 
                
                </Card>
            </Grid>
        </Grid>
        </FormProvider>
    )
}


function applySortFilter({ tableData, comparator, filterName, filterStatus }) {
    const stabilizedThis = tableData.map((el, index) => [el, index]);
  
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
  
    tableData = stabilizedThis.map((el) => el[0]);
  
    if (filterName) {
      tableData = tableData.filter((item) => item.role.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
    }
  
    if (filterStatus !== 'all') {
      tableData = tableData.filter((item) => item.status === filterStatus);
    }
  
    return tableData;
}
  