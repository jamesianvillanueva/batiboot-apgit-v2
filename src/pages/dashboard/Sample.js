import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';


// @mui


// MUI Components Practice
import { Container, Box, Grid, Stack, Typography, Button, Modal, ButtonGroup, Checkbox, Fab,
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Rating, InputLabel, Select, MenuItem, Slider, Switch, ToggleButtonGroup,
  ToggleButton, Paper, List, ListItem, ListItemIcon, ListItemText, Card, CardHeader, TableContainer, Table, TableBody, TableRow,
  TableCell, Avatar
} from '@mui/material';



// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _invoices, _nameData } from '../../_mock';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { DialogAnimate } from '../../components/animate';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Scrollbar from '../../components/Scrollbar';
import { TableHeadCustom } from '../../components/table';
// sections
import Invoice from '../../sections/@dashboard/sample';
import SampleModal from './SampleModal';



const style = {
  position: 'absolute',
  top: '50%', 
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
// ----------------------------------------------------------------------

const label = { inputProps : { 'aria-label' : 'Checkbox demo' }};
const switch_ = { inputProps : { 'aria-label' : 'Switch demo'}}


const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1)
}

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1)
}

function AddNewAccount(props) {
  const { onClose, selectedValue, open } = props;
  const [value, setValue] = React.useState(2)
  const [ day, setDay ] = React.useState('')
  const [volume, setVolume] = React.useState(30)
  const [alignment, setAlignment] = React.useState('left')


  // Data Handling

  const [checked, setChecked] = React.useState([])
  const [left, setLeft] = React.useState([0, 1, 2, 3])
  const [right, setRight] = React.useState([4, 5, 6, 7])
  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if(currentIndex === -1){
      newChecked.push(value)
    }
    else{
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }
  
  const handleAllRight = () =>{
    setRight(right.concat(left))
    setLeft([])
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };


  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto'}}>
      <List dense component='div' role='list'>
        {
          items.map((value) => {
            const labelId = `transfer-list-item=${value}-label`

            return(
              <ListItem 
                key={value}
                role='listitem'
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox 
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby' : labelId,
                    }}
                  />
                </ListItemIcon>

                <ListItemText id={labelId} primary={`${value + 1}`} />
              </ListItem>
            )
          })
        }
      </List>
    </Paper>
  )



  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (event) => {
    setDay(event.target.value)
  }

  const volumeChange = (event) => {
    setVolume(event.target.name)
  }

  const toggleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }












  const theme = useTheme();

  


  return (
    <DialogAnimate open={open} sx={{p: '3rem'}} maxWidth={'md'}>

      <Typography variant="h3">Modal</Typography>

      <Button variant="contained" onClick={handleClose} sx={{width: 30}}>
        <Icon icon="ant-design:close-square-twotone" sx={{ width: 20, height: 30}}/>
      </Button>

      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <Grid item sm={3}>
          <Button variant={'text'} >Text</Button>
          <Button disabled>Disabled</Button>
        </Grid>
        <Grid item sm={3}>
          <Button variant={'contained'} sx={{backgroundColor: theme.palette.pink.main }} >Contained</Button>
          <Button disabled>Disabled</Button>
        </Grid>
        <Grid item sm={3}>
          <Button variant={'outlined'} > Outlined </Button>
          <Button disabled>Disabled</Button>
        </Grid>
      </Grid>

    
    <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center'}} mt={3}>
      <Grid item sm={3}>
        <Fab color='primary' aria-label='add'>
          <Iconify icon="carbon:add-alt" sx={{ width: 20, height: 30 }}/>
        </Fab>
      </Grid>
      <Grid item sm={3}>
        <Fab color='secondary' aria-label='edit'>
          <Iconify icon="ci:edit" sx={{ width: 20, height: 30}}/>
        </Fab>
      </Grid>
      <Grid item sm={3}>
        <Fab variant='extended'>
          <Iconify icon='ion:navigate' sx={{ width: 20, height: 30 }} />
          Navigate
        </Fab>
      </Grid>
      <Grid item sm={3}>
       <Fab disabled aria-label="like">
        <Iconify icon="ant-design:heart-filled" color="gray" sx={{ width: 20, height: 30}} />
       </Fab>
      </Grid>
    </Grid>
    
    <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center'}} mt={3}>
      <Grid item sm={3}>
        <Checkbox {...label} defaultChecked/>
      </Grid>
      <Grid item sm={3}>
        <Checkbox {...label} disabled/>
      </Grid>
      <Grid item sm={3}>
        <Checkbox {...label} disabled checked/>
      </Grid>
      <Grid item sm={3}>
        <Checkbox {...label}/>
      </Grid>
    </Grid>

    <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center'}} mt={3}>
        <Grid item sm={3}>
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item sm={3}>
          <ButtonGroup variant="text" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item sm={3}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center'}} mt={4}>
        <Grid items sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel>Day</InputLabel>
            <Select
              value={day}
              label="Day"
              onChange={handleChange}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      

      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center'}} mt={3}>
        <Grid items sm={3}>
          <Typography component='legend'>Controlled</Typography> 
          <Rating name="simple-controlled" value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
          }}
          />
        </Grid>
        <Grid items sm={3}>
          <Typography component='legend'>Read Only</Typography>
          <Rating name='read-only' value={value} readOnly/>
        </Grid>
        <Grid items sm={3}>
          <Typography component='legend'>Disabled</Typography>
          <Rating name='disabled' value={value} disabled/>
        </Grid>
        <Grid items sm={3}>
          <Typography component='legend'>No Rating</Typography>
          <Rating name='no-value' value={null} disabled/>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }} mt={6}>
        <Grid items>
          <FormControl>
            <FormLabel>Radio Button Group</FormLabel>
            <RadioGroup row='true' defaultValue="one">
              <FormControlLabel value='one' label="First Radio Button" control={<Radio />}/>
              <FormControlLabel value='two' label="Second Radio Button" control={<Radio />}/>
              <FormControlLabel value='three' label="Third Radio Button" control={<Radio />}/>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Box spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Stack spacing={2} direction='row' sx={{ mb: 1 , width: 300}}>
          <Iconify icon={'bi:volume-down-fill'} color="gray" sx={{ width: 30, height: 30 }}/>
            <Slider aria-label="Volume" value={volume} onChange={volumeChange} />
          <Iconify icon="carbon:volume-up-filled" color="gray" sx={{ width: 30, height: 30}} />
        </Stack>
      </Box>

   
      
      <Box spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Switch {...switch_} defaultChecked />
        <Switch {...switch_} size='medium'/>
        <Switch {...switch_} disabled defaultChecked />
        <Switch {...switch_} disabled />
      </Box>

      <Box spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ToggleButtonGroup value={alignment}
          exclusive
          onChange={toggleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Iconify icon="ci:text-align-left" color="gray" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <Iconify icon="ci:text-align-center" color="gray" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Iconify icon="ci:text-align-right" color="gray" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <Iconify icon="ci:text-align-justify" color="gray" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      

      <Grid container spacing={2} justifyContent='center' alignItems='center' backgroundColor='lightgrey' mt={3} pb={3}> 
          <Grid item>
          {
            customList(left)
          }        
          </Grid>
          <Grid item>
            <Grid container direction='column' alignItems='center'>
              <Button 
                sx={{ my: 0.5 }}
                variant='outlined'
                size='small'
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label='move all right'
              >
                >>
              </Button>
              <Button 
                sx={{ my: 0.5 }}
                variant='outlined'
                size='small'
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label='move selected right'
              >
                &gt;
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant='outlined'
                size='small'
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label='move selected left'
              >
                &lt;
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left"
              > 
                ≪
              </Button>

            </Grid>

          </Grid>
          <Grid item>{customList(right)}</Grid>

      </Grid>  

    </DialogAnimate>
  );
}

AddNewAccount.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


// ----------------------------------------------------------------------
export default function Sample() {

  const { themeStretch } = useSettings();

  const { id } = useParams();

  const invoice = _invoices.find((invoice) => invoice.id === id);

  const [openAccount, setOpenAccount] = React.useState(false);
  const [openModalView, setOpenModalView] = React.useState(false)

  const handleClickOpenAccount = () => {
    setOpenAccount(!openAccount);
  };

  const handleCloseAccount = () => {
    setOpenAccount(false);
  };



  const handleOpenViewModalData = () => {
    setOpenModalView(!openModalView)

  }

  const handleCloseViewModalData = () => {
    setOpenModalView(false)
  }







  return (
    <Page title="Invoice: View">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Medical Certificate"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Medical Certificate',
              href: PATH_DASHBOARD.invoice.root,
            },
            { name: `Med-123` || '' },
          ]}
        />

        <Invoice invoice={invoice} />

        



        <Grid>
          <Stack spacing={3} direction={'row'}> 
            <Box>
1
            </Box>
            <Box>
2
            </Box>
            <Box>
              3
            </Box>

          </Stack>
          
          

          <Box sx={{ backgroundColor: 'red'}}>
            <Box>
1
            </Box>
            <Box>
2
            </Box>
            <Box>
              3
            </Box>
          </Box>
        </Grid>


        <Grid container spacing={1}>
          {
            /* <Grid item sm={3} md={3}>
              <Box sx={{backgroundColor: 'blue'}}>
1
              </Box>
            </Grid> */}

          
            <Grid item sm={3} md={6} >
              <Box sx={{backgroundColor: 'blue'}}>
2
              </Box>
            </Grid>
            <Grid item sm={3}md={6} sx={{justifyContent:'center', justifyItems: 'center', display: 'flex'}}>
              <Box sx={{backgroundColor: 'yellow'}}>
                <Typography variant='subtitle1'>Respectfully Yours,</Typography>
              </Box>
            </Grid>
          </Grid>

          <Button variant="contained" onClick={handleClickOpenAccount}>
            <Iconify icon={'majesticons:burger-line'} sx={{ width: 20, height: 30}}/> 
          </Button>

          <Button variant="contained" onClick={handleOpenViewModalData}>
            <Iconify icon="icon-park:hamburger-button" sx={{ width: 20, height: 30}}/>
          </Button>


        <Box>
          <AddNewAccount
            open={openAccount}
            onClose={handleCloseAccount}
          />
        </Box>



        <Box>
          <SampleModal
            open={openModalView}
            onClose={handleCloseViewModalData}
          />
        </Box>

          
        

        
        

        
        
        
        
        
        
        
        




      </Container>
    </Page>

    
  );
}



function ViewDataModal(props){
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <DialogAnimate open={open} sx={{p: '3rem'}} fullScreen>

      <Typography variant="h3">View Data Modal</Typography>
      <Button variant="contained" onClick={handleClose} sx={{width: 30}}>
        <Icon icon="ant-design:close-square-twotone" sx={{ width: 20, height: 30}}/>
      </Button>

      <Grid item xs={12} md={6} lg={8}>
        <NameTable
          title="Name Table"
          tableData={_nameData}
          tableLabels={[
            { id: 'firstName', label: 'First Name' },
            { id: 'middleName', label: 'Middle Name' },
            { id: 'lastName', label: 'Last Name', align: 'center' }
          ]}
        />
      </Grid>





    </DialogAnimate>
  )
  
}


function NameTable({ title, subheader, tableData, tableLabels, ...other }){

  return(
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <NameTableRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  )
}


NameTableRow.propTypes = {
  row: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string
  }),
};

function NameTableRow({ row }) {
  const theme = useTheme();

  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center">
          <Avatar alt={row.name} src={row.avatar} />

          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2"> {row.firstName} </Typography>
          </Box>
        </Stack>
      </TableCell>

      <TableCell>{row.middleName}</TableCell>
      <TableCell>{row.lastName}</TableCell>
    </TableRow>
  );
}


NameTable.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  tableData: PropTypes.array.isRequired,
  tableLabels: PropTypes.array.isRequired,
};

ViewDataModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

