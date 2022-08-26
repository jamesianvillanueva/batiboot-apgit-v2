/* import React from 'react';
import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, Paper, Card } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import { ServicesButton } from '.';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '95%',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  maxWidth: 520, 
  zIndex: 999,
  backgroundColor: 'rgba(51, 78, 111, 0.8)',
  margin: 'auto',
  width: '50%',
  padding: '10px',
  textAlign: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  marginTop: '150px',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
  backgroundColor: 'rgba(51, 78, 111, 0.8)',
  padding: '4em',
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100vh',
  margin: 'auto',
  position: 'absolute',
    [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));


// ----------------------------------------------------------------------

export default function LandingFirstPage() {
   const [picTransition, setPicTransition] = React.useState('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80');
   const handleChange = (img) => {
      setPicTransition(img);
   };

 console.log(picTransition);
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="" src="" variants={varFade().in} />

        <HeroImgStyle
          alt="hero"
          src={picTransition}
          variants={varFade().inUp}
        />

        <Container>
          <m.div variants={varFade().inUp}>
            <ContentStyle>
              <Grid>
                <m.div variants={varFade().inRight}>
                  <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                    Welcome to BATIBOOT.
                  </Typography>
                </m.div>

                <m.div variants={varFade().inRight}>
                  <Typography variant="h4" m sx={{ color: 'common.white' }}>
                    Your secured shipping lorem ipsum
                  </Typography>
                </m.div>
              </Grid>          
            </ContentStyle>
          </m.div>
          <ServicesButton sx={{ mb: '-100px' }} onHandle={handleChange} />
          <Grid>
          <div sx={{backgroundColor: 'red', height:"500px", zIndex:999, }}>asddsd</div>
          </Grid>
        </Container>
        
      </RootStyle>

      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
 */