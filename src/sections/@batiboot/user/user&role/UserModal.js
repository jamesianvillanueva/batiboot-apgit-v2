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
import { PATH_DASHBOARD, PATH_APGIT } from '../../../../routes/paths';
// _MOCK
import 
    _userRole from
 '../../../../_mock/apgit/role.json';
import
    _userList
from '../../../../_mock/apgit/user.json';
import
    _status
from '../../../../_mock/apgit/roleStatus.json';

// HOOKS
import useTable, { getComparator, emptyRows } from '../../../../hooks/useTable';
import useTabs from '../../../../hooks/useTabs';
// COMPONENTS

import Scrollbar from '../../../../components/Scrollbar';
import Iconify from '../../../../components/Iconify';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';

// Table
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../../../components/table';
import UserTableRow from './UserTableRow';


UserModal.propTypes = {
    row: PropTypes.object,
    selected: PropTypes.bool,
    onEditRow: PropTypes.func,
    onSelectRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
    isEdit: PropTypes.bool,
    currentUser: PropTypes.object,
    handleCloseModal: PropTypes.func,
};

export default function UserModal(props){

    const { isPath, isEdit, currentUser, handleCloseModal, identifier, onEditRow } = props

    const [tableData, setTemp] = React.useState([])
    const navigate = useNavigate()
    const location = useLocation()

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
        navigate(PATH_APGIT.user.edit(paramCase(id)));
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

    // Modal UseState
    const [tempRole, GETROLE] = React.useState('')
    const [tempStatus, GETSTATUS] = React.useState('')


    // Table Display inside Modal
    const condition = () => {
        if(tempRole === '' || tempStatus === '')
            return 'none'
    }
    const CreateUserList = () => {

        
        return(
            <>
            
            fdffd
            
            </>
        )
    }

    const CreateDesignation = () => {


        return(
            <>
            
            ddsfdu
            
            </>
        )
    }

    const CreateRoleModal = () => {
        const { enqueueSnackbar } = useSnackbar();
    
        const [filteredEmployees, checkIfEmployeesHasRole] = React.useState(_userList.filter((key) => key.role === ''))
        
    
        const TABLE_HEAD = [
            { id: 'user', label: 'user', align: 'left' },
            { id: 'role', label: 'Role', align: 'left' },
            { id: 'status', label: 'Status', align: 'left' },
            { id: 'action', label: 'Actions', align: 'right' },
        ];

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
       

        const onSubmit = async () => {
            try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            UpdateData()
            reset();
            handleCloseModal()
            enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
            navigate(PATH_DASHBOARD.user.role);
            } catch (error) {
            console.error(error);
            }
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
                <Grid item xs={12} md={12}>
                <Card sx={{ py: 5, px: 3 }}>
                    <Box
                    sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 3,
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
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
                    <Box sx={{ pt: 3, display: condition }} >              
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
                    


                    <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                        <LoadingButton type="submit" variant="contained" 
                            loading={isSubmitting}>
                            {!isEdit ? 'Add Role' : 'Edit Role'}
                        </LoadingButton>
                    </Stack>
                </Card>
                </Grid>
            </Grid>
        </FormProvider>
        )
    }

    const Path = () => {
        if(isPath === 'createUserListModal'){
            return <CreateUserList />
        }
        if(isPath === 'createUserRoleModal'){
            return <CreateRoleModal />
        }
        if(isPath === 'createDesignation'){
            return <CreateDesignation />
        }
    }

    return(
        <Path />
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
  