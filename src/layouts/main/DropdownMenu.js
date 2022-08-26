import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, List, Menu, Button, MenuItem, Container, IconButton, ListItemText, ListItemButton, Typography } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections

// ----------------------------------------------------------------------
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 4,
  marginLeft: -4
};

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));


export default function DropdownMenu() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [isOpen, setOpen] = useState(null);

  const [isOpenList, setOpenList] = useState(null);

  const [isOpenMaxHeight, setOpenMaxHeight] = useState(null);

  const handleClick = (event) => {
    setOpenMaxHeight(event.currentTarget);
  };

  const handleClickListItem = (event) => {
    setOpenList(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenList(null);
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMaxHeightClose = () => {
    setOpenMaxHeight(null);
  };

  return (
      <RootStyle>
        <Container>
            <Box title="Simple" sx={style}>
              <Typography variant="subtitle2" onClick={handleOpen} sx={{cursor:"pointer"}}>
                Sign-In
              </Typography>
              <Menu keepMounted id="simple-menu" anchorEl={isOpen} onClose={handleClose} open={Boolean(isOpen)}>
                {['Sign-in', 'Sign-up', 'Forgot Password'].map((option) => (
                  <MenuItem key={option} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
        </Container>
      </RootStyle>
  );
}
