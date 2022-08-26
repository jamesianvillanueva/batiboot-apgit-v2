import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 0),
  /* backgroundColor: '#02c4f0', */
  height: '400px',
        backgroundImage: `url(${'/assets/batibootAssets/officebg.webp'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        marginTop: '20px',
        backdropFilter: "blur(200px)",
        
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

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  height: '',
  /*  [theme.breakpoints.up('lg')]: {
      right: '%',
      width: 'auto',
      height: '48vh',
    }, */
}));

const BackgroundImg = styled(m.img)(({ theme }) => ({
  height: '500px',
  backgroundImage: `url(${'/assets/batibootAssets/officebg.webp'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  marginTop: '20px',
}));

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

export default function ContactNow() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle sx={{
        
      }}>
      <Container component={MotionViewport} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12} sx={{ mt: 10 }}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h3" sx={{ mb: 5 }}>
                  Reach your destination 100% sure and safe
                </Typography>
                <Typography>
                  We designed a detailed homepage layouts that will fit any transportation industry size. We will take
                  care of your cargo or your pasenger and deliver them safe and on time!
                </Typography>
                </m.div>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#02c4f0',
                    borderRadius: '20px',
                    p: '10px',
                    
                  }}
                >
                  CONTACT NOW
                </Button>
              </Grid>
              <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' }}} >
                <Image src="\assets\batibootAssets\callcenter.png" sx={{ width: '500px', height: '400px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
