import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { LoadingButton, DatePicker } from '@mui/lab';
import { Button, Box, Card, Grid, Stack, Switch, Typography, FormControlLabel,TextField, Checkbox, FormGroup, styled } from '@mui/material';
// utils
import { fData } from '../../../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../../../routes/paths';
// _mock
import { countries } from '../../../../../_mock';
import {  role } from '../../../../../_mock/role';
// components
import Label from '../../../../../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../../../components/hook-form';


UserNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentUser: PropTypes.object,
    nameLink: PropTypes.object,
    formRef: PropTypes.any,
};

export default function UserNewEditForm({ isEdit, currentUser, nameLink, formRef }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
  
    const NewUserSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required').email(),
      phoneNumber: Yup.string().required('Phone number is required'),
      address: Yup.string().required('Address is required'),
      country: Yup.string().required('country is required'),
      company: Yup.string().required('Company is required'),
      state: Yup.string().required('State is required'),
      city: Yup.string().required('City is required'),
      role: Yup.string().required('Role Number is required'),
      avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
    });
      const LabelStyle = styled(Typography)(({ theme }) => ({
          ...theme.typography.subtitle2,
          color: theme.palette.text.secondary,
          marginBottom: theme.spacing(1),
      }));

    const defaultValues = useMemo(
      () => ({
        name: currentUser?.name || '',
        email: currentUser?.email || '',
        phoneNumber: currentUser?.phoneNumber || '',
        address: currentUser?.address || '',
        country: currentUser?.country || '',
        state: currentUser?.state || '',
        city: currentUser?.city || '',
        zipCode: currentUser?.zipCode || '',
        avatarUrl: currentUser?.avatarUrl || '',
        isVerified: currentUser?.isVerified || true,
        status: currentUser?.status,
        company: currentUser?.company || '',
        role: currentUser?.role || '',
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
      formState: { isSubmitting },
    } = methods;
  
    const values = watch();
  
    useEffect(() => {
      if (isEdit && currentUser) {
        reset(defaultValues);
      }
      if (!isEdit) {
        reset(defaultValues);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentUser]);
  
    const onSubmit = async () => {
      try {
    
        await new Promise((resolve) => setTimeout(resolve, 500));
        reset();
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        navigate(PATH_DASHBOARD.user.list);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
  
        if (file) {
          setValue(
            'avatarUrl',
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );
        }
      },
      [setValue]
    );
  
    const [date, setDate] = useState(new Date());
  
    const [bdate, setBdate] = useState(new Date());
  
    const _departments = ['Admin','HR','Staff','IT','Finance','Inventory','Manager']
  
    const _gender = ['Male', 'Female'] 
  
    const _religion = ['Hindu','Islam','Christian']
  
    const _maritalStatus = ['Single','Married','Separated']
  
    const _bloodType = ['A','B','O','AB','A-','B-','O-','AB-' ]
  
    const _shift = ['Day','Evening','Night']
  
    const _designation = ['IT','HR', 'Marketing', 'Management','Administration']
    
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
  
    const [valueIndex, setValueIndex] = useState(0);
  
    const handleChange = (event, newValueIndex) => {
      setValueIndex(newValueIndex);
    };

  /*   <div>
                    <LabelStyle>Images</LabelStyle>
                </div> */

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <div>
                            <LabelStyle>Module Permissions</LabelStyle>
                        </div>
                        <Card sx> 
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





                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                    <div>
                        <LabelStyle>Fill Up</LabelStyle>
                    </div>
                    <Card sx={{
                        p: '1rem',
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 3,
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                    }}>
                        <RHFTextField name="name" label="Full Name" />
                        <RHFTextField name="phoneNumber" label="Phone Number" />                         
                        <RHFTextField name="address" label="Address" />
                        <RHFTextField name="email" label="Email Address" />
                        <RHFSelect name="maritalStatus" label="Marital Status" placeholder="Marital Status">
                            <option value="" />
                            {_maritalStatus.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </RHFSelect>
                        <DatePicker
                            disableFuture
                            label="Date of Birth"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={bdate}
                            onChange={(newBdate) => {
                            setBdate(newBdate);
                            }}
                        renderInput={(params) => <TextField {...params} />} />
                         <RHFSelect name="gender" label="Gender">
                            <option value="" />
                            {_gender.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </RHFSelect>
                        <RHFSelect name="bloodType" label="Blood Type" placeholder="Blood Type">
                            <option value="" />
                            {_bloodType.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </RHFSelect>
                        <RHFSelect name="religion" label="Religion" placeholder="Religion">
                            <option value="" />
                            {_religion.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </RHFSelect>
                        <RHFSelect name="country" label="Country" placeholder="Country">
                            <option value="" />
                            {countries.map((option) => (
                            <option key={option.code} value={option.label}>
                                {option.label}
                            </option>
                            ))}
                        </RHFSelect>
                    </Card>
                    <div>
                        <LabelStyle sx={{ mt: 3 }}>Management</LabelStyle>
                    </div>
                    <Card sx={{
                        p: '1rem',
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 3,
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
                    }}>
                        <Box sx={{
                            display: 'grid',
                            columnGap: 2,
                            rowGap: 3,
                            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
                        }}>
                            <RHFSelect name="role" label="Role" placeholder="Role">
                                <option value="" />
                                {role.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </RHFSelect>
                            <RHFSelect name="designation" label="Designation">
                                <option value="" />
                                {_designation.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </RHFSelect>

                            <RHFSelect name="department" label="Department">
                                <option value="" />
                                {_departments.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </RHFSelect>
                        </Box>
                        <Box sx={{
                            display: 'grid',
                            columnGap: 2,
                            rowGap: 3,
                            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                        }}>

                            <RHFSelect name="shift" label="Shift" placeholder="Shift">
                                <option value="" />
                                {_shift.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </RHFSelect>
                            <RHFTextField name="basicSalary" label="Basic Salary" />
                        </Box>
                    </Card>
                    <div>
                        <LabelStyle sx={{ mt: 3 }}>Account</LabelStyle>
                    </div>
                    <Card sx={{
                        p: '1rem',
                        mb: '2rem',
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 3,
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                    }}>
                        <RHFTextField InputAdornment name="password" label="Password"/>
                        <RHFTextField InputAdornment name="confirmPassword" label="Confirm Password"/>
                    </Card>
                </Grid>
            </Grid>
            <Stack alignItems="flex-end" sx={{ mb: 8}}>
       {/*    /*  sx={{ p: '1rem', position: 'sticky', bottom: 0, zIndex: 1, backdropFilter: 'blur(10px)'}}> */}
                   <LoadingButton ref={formRef} type="submit" variant="contained" loading={isSubmitting} sx={{display:'none'}}/>
            </Stack>
        </FormProvider>
    )
}