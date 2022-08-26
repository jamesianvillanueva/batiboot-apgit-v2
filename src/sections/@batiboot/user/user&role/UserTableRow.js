import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem, AvatarGroup, Link, Skeleton } from '@mui/material';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';

import { PATH_BATIBOOT } from '../../../../routes/paths';
import _mock from '../../../../_mock';
import createAvatar from '../../../../utils/createAvatar';

// ----------------------------------------------------------------------

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

const delay = 3;

export default function UserTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow, path }) {
  const theme = useTheme();
 
  const {
    name,
    avatarUrl,
    company,
    role,
    isVerified,
    status,
    email,
    phone,
    designation,
    shift,
    permission,
    days,
    type,
    date,
    availableDays,
    substitute,
    managerApproved,
    hrApproved,
    id,
    weekend,
    description,
    file,
    startDate,
    endDate,
    startTime,
    endTime,
    hours,
    considerTime,
    department,
    // attendance history
    breaks,
    breakDuration,
    checkin,
    checkout,
    overtime,
    // payroll setup
    employeeId,
    basicSalary,
    // payroll advance
    advanceType,
    amount,
    month,
    payment,
    returns,
    installment,
    createdAt,
    // payroll payslip
    payslipType,
    calculation,
    salary,
    // account
    accountNumber,
    balance,
    branch,
    // account deposit
    category,
    paymentMethod,
    reference,
    // appointment
    appointmentWith,
    startAt,
    endAt,
    location,
    // visit
    employee,
    cancellationNote,
    // support
    code,
    subject,
    priority,
  } = row;
  console.log(amount);
  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

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

  
  const UserTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
        { showSkeleton ? (
          <Checkbox checked={selected} onClick={onSelectRow} />
          ) : (
          <Skeleton variant='circular' animation="wave" sx={{ width: '40px', height: '40px', mr: 2 }} />
          )
        }
        </TableCell>

        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        { showSkeleton ? (
          <>
          <Avatar alt={name} color={createAvatar(name).color} sx={{ mr: 2 }}>
            {createAvatar(name).name}
          </Avatar>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {name} 
          </Typography>
          </>
          ) : (
            <Skeleton animation="wave" sx={{ width: '140px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>
       {/*  <TableCell>
        { showSkeleton ? (
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {name} 
          </Typography>
          ) : (
              <Skeleton animation="wave" sx={{ width: '140px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell> */}

        <TableCell align="left">
          { showSkeleton ? (
            <Typography>{email}</Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '140px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>
        <TableCell align="left">
        { showSkeleton ? (
            <Typography>{phone}</Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '140px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { showSkeleton ? (
            <Typography>{designation}</Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '140px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { showSkeleton ? (
            <Typography>{role}</Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '40px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { showSkeleton ? (
            <Typography>{shift}</Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '40px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>
        <TableCell align="left">
        { showSkeleton ? (
            <Label
              variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
              color={(status === 'banned' && 'error') || 'success'}
              sx={{ textTransform: 'capitalize' }}
            >
              {status}
            </Label>
          ) : (
            <Skeleton animation="wave" sx={{ width: '60px', height: '60px', mr: 2 }} />
          )
        }
        </TableCell>
      </>
    );
  };

  const TempAddDesignationTable = () => {
    
    return (
      <>
       <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {name}
        </TableCell>

        <TableCell align="left" style={{ display: 'flex' }}>
          {role}
        </TableCell>

        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    )

  }

  const DesignationTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
        { showSkeleton ? (
          <Checkbox checked={selected} onClick={onSelectRow} />
          ) : (
              <Skeleton animation="wave" sx={{ width: '20px', height: '40px', mx: 1 }} />
          )
        }
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { 
          showSkeleton ? (
              <Typography>{role}</Typography>
          ) : ( 
              <Skeleton animation="wave" sx={{ width: '160px', height: '40px', mr: 2 }} /> 
          ) 
        }
        </TableCell>

        <TableCell align="left" style={{ display: 'flex' }}>
        { 
          showSkeleton ? (
            <AvatarGroup total={15}>
              <Avatar alt="Remy Sharp" src={_mock.image.avatar(1)} />
              <Avatar alt="Travis Howard" src={_mock.image.avatar(2)} />
              <Avatar alt="Cindy Baker" src={_mock.image.avatar(3)} />
            </AvatarGroup>
          ) : (
              <Skeleton animation="wave" sx={{ width: '180px', height: '40px', mr: 2 }} /> 
          )
        }
        </TableCell>

        <TableCell align="left">
        { 
          showSkeleton ? (
            <Label
              variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
              color={(status === 'banned' && 'error') || 'success'}
              sx={{ textTransform: 'capitalize' }}
            >
              {status}
            </Label>
          ) : (
            <Skeleton animation="wave" sx={{ width: '80px', height: '40px', mr: 2 }} /> 
          )
        }
        </TableCell>
      </>
    );
  };

  // User
  const DepartmentTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
        { showSkeleton ? (
          <Checkbox checked={selected} onClick={onSelectRow} />
          ) : (
            <Skeleton animation="wave" sx={{ width: '20px', height: '40px', mx: 1 }} />
          )
        }
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { 
          showSkeleton ? (
              <Typography>{role}</Typography>
          ) : ( 
              <Skeleton animation="wave" sx={{ width: '160px', height: '40px'}} /> 
          ) 
        }
        </TableCell>

        <TableCell align="left" style={{ display: 'flex' }}>
        {
          showSkeleton ? (
            <AvatarGroup total={15}>
              <Avatar alt="Remy Sharp" src={_mock.image.avatar(4)} />
              <Avatar alt="Travis Howard" src={_mock.image.avatar(5)} />
              <Avatar alt="Cindy Baker" src={_mock.image.avatar(6)} />
            </AvatarGroup>
          ) : (
              <Skeleton animation="wave" sx={{ width: '180px', height: '40px'}} /> 
          )
        }
        </TableCell>

        <TableCell align="left">
        { 
          showSkeleton ? (
            <Label
              variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
              color={(status === 'banned' && 'error') || 'success'}
              sx={{ textTransform: 'capitalize' }}
            >
              {status}
            </Label>
          ) : (
            <Skeleton animation="wave" sx={{ width: '120', height: '40px' }} />
          )
        }
        </TableCell>
      </>
    );
  };

  const TempAddRoleTable = () => {
    
    return (
      <>
       <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {name}
        </TableCell>

        <TableCell align="left" style={{ display: 'flex' }}>
          {role}
        </TableCell>

        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    )

  }


  const RoleTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
        { 
          showSkeleton ? (
          <Checkbox checked={selected} onClick={onSelectRow} />
          ) : (
            <Skeleton animation="wave" sx={{ width: '20px', height: '40px', mx: 1 }} />
          )
        }
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        { 
          showSkeleton ? (
              <Typography>{role}</Typography>
          ) : ( 
              <Skeleton animation="wave" sx={{ width: '130px', height: '40px'}} /> 
          ) 
        }
        </TableCell>

        <TableCell align="left">
        {
        showSkeleton ? (
          <Typography>
          {permission}
          </Typography>
          ) : (
            <Skeleton animation="wave" sx={{ width: '130px', height: '40px'}} /> 
          ) 
        }
        </TableCell>

        <TableCell align="left">
        { 
          showSkeleton ? (
            <Label
              variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
              color={(status === 'banned' && 'error') || 'success'}
              sx={{ textTransform: 'capitalize' }}
            >
              {status}
            </Label>
          ) : (
            <Skeleton animation="wave" sx={{ width: '120', height: '40px' }} />
          )
        }
        </TableCell>
      </>
    );
  };

  // Leave
  const LeaveTypeTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          {/* <Avatar alt={name} src={avatarUrl} sx={{ mr: 2 }} /> */}
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {name}
          </Typography>
        </TableCell>

        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const LeaveAssignTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {type}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {days}
        </TableCell>
        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const LeaveRequestTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {days}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {availableDays}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {substitute}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {managerApproved}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {hrApproved}
        </TableCell>
        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  // Attendance
  const AttendanceWeekendTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {id}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {role}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(weekend === true && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {weekend === true ? 'Yes' : 'No'}
          </Label>
        </TableCell>
        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AttendanceHolidayTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {description}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {file}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {startDate}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {endDate}
        </TableCell>

        <TableCell align="left">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AttendanceDutyTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {startTime}
        </TableCell>
        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {endTime}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {hours}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {considerTime}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  /* const AttendanceHistoryTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {date}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Link href={PATH_APGIT.attendance.history}> {role}</Link>
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {department}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {breaks}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {breakDuration}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {checkin}
          </Label>
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'success') || 'error'}
            sx={{ textTransform: 'capitalize' }}
          >
            {checkout}
          </Label>
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {hours}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {overtime}
        </TableCell>
      </>
    );
  }; */

  const AttendanceShiftTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  // Payroll
  const PayrollSetupTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left" color="primary">
          <Typography variant="subtitle2" noWrap color="primary" sx={{ textTransform: 'capitalize' }}>
            {employeeId}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {designation}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {department}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {shift}
        </TableCell>

        <TableCell align="center">{basicSalary}</TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const PayrollAdvanceTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {advanceType}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Typography color="orange">Requested: {amount.map((item) => item.Requested)} </Typography>
          <Typography color="green">Approved: {amount.map((item) => item.Approved)} </Typography>
          <Typography color="error">Returned: {amount.map((item) => item.Return)} </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {month}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(payment === 'unpaid' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {payment}
          </Label>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(returns === false && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {returns === false ? 'No' : 'Yes'}
          </Label>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {installment}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {createdAt}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'disapproved' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const PayrollPayslipTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {employeeId}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {payslipType}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(calculation === false && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {calculation === false ? 'No' : 'Yes'}
          </Label>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          $ {salary}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {month}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'unpaid' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  // Accounts
  const AccountListTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          $ {balance}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {name}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {accountNumber}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {branch}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AccountDepositTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {category}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          $ {amount}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {paymentMethod}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {reference}
        </TableCell>
      </>
    );
  };

  const AccountExpenseTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {category}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          $ {amount}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>
        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {payment}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AccountTransactionTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          $ {amount}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {type}
        </TableCell>

        <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  // Accounts Settings
  const AccountDepositCategoryTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AccountExpenseCategoryTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  const AccountPaymentCategoryTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

  // Appoinment
  const AppointmentTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {role}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {appointmentWith}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {startAt}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {endAt}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {location}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {file}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

   // Visit
   const VisitTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {employee}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {date}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {role}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {description}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {cancellationNote}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

   // Support
   const SupportTable = () => {
    return (
      <>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell align="left">
          <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
            {date}
          </Typography>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {code}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {role}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {subject}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {type}
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {priority}
        </TableCell>

        <TableCell align="center">
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={(status === 'inactive' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>
      </>
    );
  };

    // Announcement
    const AnnouncementTable = () => {
      return (
        <>
          <TableCell padding="checkbox">
            <Checkbox checked={selected} onClick={onSelectRow} />
          </TableCell>
  
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap sx={{ textTransform: 'capitalize' }}>
              {date}
            </Typography>
          </TableCell>
  
          <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
            {role}
          </TableCell>
  
          <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
            {department}
          </TableCell>
  
          <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
            {description}
          </TableCell>
  
          <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
            {file}
          </TableCell>
  
         
        </>
      );
    };


  const Table = () => {
     if (path === PATH_BATIBOOT.user.designation) {
      return <DesignationTable />;
    }
    if(path === PATH_BATIBOOT.user.createDesignation){
      return <TempAddDesignationTable />
    } 
    if (path === PATH_BATIBOOT.user.deparment) {
      return <DepartmentTable />;
    }
    if (path === PATH_BATIBOOT.user.list) {
      return <UserTable />;
    }
    if(path === PATH_BATIBOOT.user.createRole){
      return <TempAddRoleTable />
    }
    if (path === PATH_BATIBOOT.user.role) {
      return <RoleTable />;
    }
   /*  if (path === PATH_APGIT.leave.type) {
      return <LeaveTypeTable />;
    }
    if (path === PATH_APGIT.leave.assign) {
      return <LeaveAssignTable />;
    }
    if (path === PATH_APGIT.leave.request) {
      return <LeaveRequestTable />;
    } // Attendance
    if (path === PATH_APGIT.attendance.weekend) {
      return <AttendanceWeekendTable />;
    }
    if (path === PATH_APGIT.attendance.holiday) {
      return <AttendanceHolidayTable />;
    }
    if (path === PATH_APGIT.attendance.duty) {
      return <AttendanceDutyTable />;
    }
    if (path === PATH_APGIT.attendance.history) {
      return <AttendanceHistoryTable />;
    }
    if (path === PATH_APGIT.attendance.shift) {
      return <AttendanceShiftTable />;
    } // Payroll
    if (path === PATH_APGIT.payroll.setup) {
      return <PayrollSetupTable />;
    }
    if (path === PATH_APGIT.payroll.advance) {
      return <PayrollAdvanceTable />;
    }
    if (path === PATH_APGIT.payroll.payslip) {
      return <PayrollPayslipTable />;
    } // Accounts
    if (path === PATH_APGIT.accounts.list) {
      return <AccountListTable />;
    }
    if (path === PATH_APGIT.accounts.deposit) {
      return <AccountDepositTable />;
    }
    if (path === PATH_APGIT.accounts.expense) {
      return <AccountExpenseTable />;
    }
    if (path === PATH_APGIT.accounts.transaction) {
      return <AccountTransactionTable />;
    }
    if (path === PATH_APGIT.accounts.depositCategory) {
      return <AccountDepositCategoryTable />;
    }
    if (path === PATH_APGIT.accounts.expenseCategory) {
      return <AccountExpenseCategoryTable />;
    }
    if (path === PATH_APGIT.accounts.paymentMethod) {
      return <AccountPaymentCategoryTable />;
    } // Appointment
    if (path === PATH_APGIT.appointment.list) {
      return <AppointmentTable />;
    } // Visit 
    if (path === PATH_APGIT.visit.list) {
      return <VisitTable />;
    } // Support 
    if (path === PATH_APGIT.support.ticket ) {
      return <SupportTable />;
    } // Announcement
    if (path === PATH_APGIT.announcement.notice ) {
      return <AnnouncementTable />;
    }  */
  };

  return (
    <TableRow hover selected={selected}>
      <Table />
      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
