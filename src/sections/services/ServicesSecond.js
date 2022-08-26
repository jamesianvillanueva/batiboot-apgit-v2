import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
import { alpha, useTheme, styled } from '@mui/material/styles';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
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

export default function ServicesSecond() {
  return (
    <RootStyle sx={{ backgroundColor: '#faf86b' }}>
      <Container component={MotionViewport}>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
          <Grid item xs={6} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Image src="\assets\countLogos\done.svg" variants={varFade().inRight} />
              </Grid>
              <Grid item xs={7}>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h4" sx={{ mt: 4}}>
                    Importing
                  </Typography>
                </m.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
