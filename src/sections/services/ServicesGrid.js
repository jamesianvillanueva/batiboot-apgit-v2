import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
import { alpha, useTheme, styled } from '@mui/material/styles';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  marginTop: 55,
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

export default function ServicesGrid() {
  return (
    <>
      <RootStyle sx={{ backgroundColor: '#02c4f0' }}>
        <Container component={MotionViewport}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Image src="\assets\Logo2\cargo.png" variants={varFade().inRight} />
                </Grid>
                <Grid item xs={7}>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="h4" sx={{ mt: 2 }}>
                      Product Sourcing
                    </Typography>
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </>
  );
}
