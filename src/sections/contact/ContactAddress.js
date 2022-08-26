import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),

  
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
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

export default function ContactAddress() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={2} sx={{mt: 10}}>
          <Grid item xs={6} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant='caption' sx={{mt: 2}}>
                 Address 123, Local City Manila
                </Typography><br/>
                <Typography variant='caption'>
                  +63912345634
                </Typography><br/>
                <Typography variant='caption'>
                  batiboot@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant='caption' sx={{mt: 2}}>
                 Address 123, Local City Manila
                </Typography><br/>
                <Typography variant='caption'>
                  +63912345634
                </Typography><br/>
                <Typography variant='caption'>
                  batiboot@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant='caption' sx={{mt: 2}}>
                 Address 123, Local City Manila
                </Typography><br/>
                <Typography variant='caption'>
                  +63912345634
                </Typography><br/>
                <Typography variant='caption'>
                  batiboot@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant='caption' sx={{mt: 2}}>
                 Address 123, Local City Manila
                </Typography><br/>
                <Typography variant='caption'>
                  +63912345634
                </Typography><br/>
                <Typography variant='caption'> 
                  batiboot@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
