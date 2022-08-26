import {
    Grid,
    Card,
    Button,
    Typography,
    DialogActions,
    Box
} from '@mui/material';
import {LoadingButton} from '@mui/lab';

import {useState} from 'react';

// SECTIONS
/* import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat'; */
import InvoiceNewEditDetails from '../../../invoice/new-edit-form/InvoiceNewEditDetails';


import ProfileCover from './ProfileCover';
import ProfileDetails from './ProfileDetails';
import ProfileStatus from './ProfileStatus';
import {_appointmentModalLocal} from '../../../../../_mock';
import TrackingTimeLine from './timeline/Timeline';
import './ProfileSass.scss'
import Iconify from '../../../../../components/Iconify';
import ShippingDetails from './list/ShippingDetails';
import Scrollbar from '../../../../../components/Scrollbar';
import palette from '../../../../../theme/palette';


export default function TrackingModal({currentUser, handleClose, isIdentifier, formRef}) {

    const [display, setDisplay] = useState(false)

    const setDisplayHandle = () => setDisplay(!display)
    const setSwapDisplay = () => setDisplay(display)
    return (
        <div>

            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={
                    {
                        padding: 2,
                        marginTop: -2
                    }
            }>
                <Grid container={1}>

                    <Grid item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        className='card-space'>
                        <Card sx={
                            {
                                mb: 3,
                                height: 170,
                                position: 'relative'
                            }
                        }>
                            <ProfileCover myProfile={_appointmentModalLocal}/>
                        </Card>
                    </Grid>
                    <Grid item
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}>
                        <ProfileDetails/>
                    </Grid>
                    <Grid item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}>
                        <ProfileStatus/>
                    </Grid>
                    <Grid item
                        xs={12}
                        md={4}>
                        <Card sx={
                            {
                                py: 3,
                                px: 3,
                                mx: 1,
                                mt: 2,
                                width: 500,
                                height: 485,
                                bgcolor: 'white'
                            }
                        }>
                            <Grid sx={
                                {
                                    mt: 1,
                                    mb: 2
                                }
                            }>
                                <LoadingButton type='button'
                                    /* onClick={} */
                                    size="small"
                                    variant='contained'
                                >
                                    View Timeline
                                </LoadingButton>
                            </Grid>
                            <Scrollbar>
                                <TrackingTimeLine/>

                            </Scrollbar>

                        </Card>
                    </Grid>
                    <Grid item
                        xs={12}
                        md={8}>
                        {/*    <Scrollbar> */}
                        <ShippingDetails isIdentifier={isIdentifier}/> {/*    </Scrollbar> */} </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
