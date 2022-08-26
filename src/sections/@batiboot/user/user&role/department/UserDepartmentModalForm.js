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

import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel, TableContainer,
    Table, Tooltip, TableBody, IconButton, TableCell, TableRow, Checkbox 
} from '@mui/material';

// UTILS


// ROUTES
import { PATH_BATIBOOT } from '../../../../../routes/paths';
// _MOCK
import 
    _userDepartment
from '../../../../../_mock/batiboot/department.json';
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


UserCreateDepartmentForm.propsType = {
    isEdit: PropTypes.pool,
    currentUser: PropTypes.object,
    handleCloseModal: PropTypes.func,
    formRef: PropTypes.any
}

export default function UserCreateDepartmentForm(props) {

    const { isEdit, currentUser, handleCloseModal, formRef } = props

    const navigate = useNavigate()
    const location = useLocation()


    const [loadingSave, setLoadingSave] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
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
        { id: 'department', label: 'Department', align: 'left' },
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
        department: Yup.string().required('Role is required'),
       // status: Yup.string().required('Status is required'),
    });

    const defaultValues = useMemo(
        () => ({
        department: currentUser?.department || '',
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
    
    const [tempDepartment, GETDEPARTMENT] = React.useState('')
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
    
    const [filteredEmployees, checkIfEmployeesHasRole] = React.useState(_userList.filter((key) => key.department === ''))

    const onAddTemp = (event) => {
        
        const Add = {
            'id' : tableData.length + 1,
            'role' : tempDepartment,
            'name' :  _userList.find((key) => key.id === parseInt(event.target.value, 10)).name,
            'status': tempStatus,
            'identifier' : _userList.find((key) => key.id === parseInt(event.target.value, 10)).id
        }
        setTemp(tmp => [...tableData, Add]) 
    }
    const condition = () => {
        if(tempDepartment === '' || tempStatus === '')
            return 'none'
    }

    const onSubmit = async () => {
        try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        UpdateData()
        reset();
        handleCloseModal()
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        navigate(PATH_BATIBOOT.user.department);
        } catch (error) {
        console.error(error);
        }
    }

    const UpdateData = () => {

        if(!_userDepartment.some((item) => item.role === tempDepartment.toLowerCase())){
            _userDepartment.push({
                'id' : _userDepartment.length + 1,
                'status': tempStatus,
                'role' : tempDepartment,
            })
        } 
        /* TRY MULTI INSERT ROLE FROM TABLE ***************************************************** */
    
       /*  _userDepartment.map(key => {
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
                <Box sx={{ pt: 3 }} >              
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
            <Card sx={{ py: 2, px: 3, mx: 3, mt: 2}}>
                <Box
                sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
                }}
                >
                {/*   <Autocomplete
                name="role"
                disableClearable
                options={_userDepartment}
                renderInput={params => (
                    <TextField {...params} label="Role" variant="outlined" />
                )}
                getOptionLabel={option => option.role}
                onInputChange={(_event, role) => {
                    GETDEPARTMENT(role.role.toLowerCase());
                }}
            /> */}
                <RHFTextField name="department" label="Department" onInput={(e) => GETDEPARTMENT(e.target.value.toLowerCase())}/>
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
  