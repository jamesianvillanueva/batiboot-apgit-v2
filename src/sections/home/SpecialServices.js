import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock';
import { MotionViewport, varFade } from '../../components/animate';
import { BookingIllustration, CheckInIllustration, CheckOutIllustration } from '../../assets';
import { SpecialServicesSlider } from '.';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: '#005a87',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const ScreenStyle = styled(m.div)(({ theme }) => ({
  paddingRight: 2,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function SpecialServices() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ marginTop: 5 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography variant="h3" sx={{ mb: 5, color: 'common.white' }}>
                  SPECIAL SERVICES
                </Typography>
                <Typography sx={{ mb: 5, color: 'common.white' }}>
                  Globally known for our ability to handle every last detail of our customers’ particular logistics and
                  forwarding needs, TransCargo’s Special Services team takes care of all your logistics.
                </Typography>
              </Grid>
              <Grid item xs={12} md={9} sx={{mt: 5}}>
                <SpecialServicesSlider title="Newest Booking" subheader="12 Booking" list={_bookingNew} />
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
