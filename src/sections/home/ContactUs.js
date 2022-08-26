import { m } from 'framer-motion';

// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid, Stack, TextField } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { ContactForm, ContactMap } from '../contact';
import { FaqsList } from '../faqs';
import TrackingOrder from './TrackingOrder';



// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginBottom: 20,
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
      <Grid container justifyContent="left">
      <Grid item xs={12} md={5} sx={{mr: 10}}>
      <TrackingOrder />
      </Grid>
      <Grid item xs={12} md={6} sx={{mt: 3}}>
      <m.div variants={varFade().inRight}>
      <Typography variant="h3" sx={{ mb: 5 }}>
            Frequently asked questions
          </Typography>
         </m.div>
      <FaqsList />
      </Grid>
      </Grid>
      </Container>
    </RootStyle>
  );
}
