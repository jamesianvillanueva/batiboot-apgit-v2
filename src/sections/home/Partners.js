import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
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

export default function Partners() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle sx={{ /* backgroundColor: '#02c4f0' */ }}>
      <Container component={MotionViewport}>
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={6} md={3} sx={{mt: 5}}>
            <Image src="/assets/partners/alibaba.png" alt="partner1" />
          </Grid>
          <Grid item xs={6} md={3} sx={{mt: 5}}>
            <Image src="/assets/partners/aliexpress-small.png" alt="partner2" />
          </Grid>
          <Grid item xs={6} md={2}>
            <Image src="/assets/partners/mic.png" alt="partner3" />
          </Grid>
          <Grid item xs={6} md={2}>
            <Image src="/assets/partners/taobao-small.png" alt="partner4" />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
