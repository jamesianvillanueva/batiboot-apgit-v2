/* import * as React from 'react'; */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import Slider from 'react-slick';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Grid, setRef, Skeleton } from '@mui/material';
// components
import Image from '../../components/Image';

import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const STEPS = [
  {
    src: '/assets/illustrations/Step1.png',
    title: 'Step 1:',
    desc: 'Sign up for free!',
  },
  {
    src: '/assets/illustrations/Step2.png',
    title: 'Step 2:',
    desc: 'Search for your doctor.',
  },
  {
    src: '/assets/illustrations/Step3.png',
    title: 'Step 3:',
    desc: 'Book an appointment and wait for SMS confirmation.',
  },
  {
    src: '/assets/illustrations/Step4.png',
    title: 'Step 4:',
    desc: 'Upload a proof of payment.',
  },
  {
    src: '/assets/illustrations/Step5.png',
    title: 'Step 5:',
    desc: 'Consult with your doctor.',
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 250,
    minHeight: 0,
    padding: 5,
    margin: 'auto',
    textAlign: 'center',
    boxShadow: theme.customShadows.z12,
    cursor: 'pointer',
    transition: 'transform .8s',
    '&:hover': {
      transform: 'scale(1.2)',
    },

    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },

    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

// ----------------------------------------------------------------------

const RedLettering = styled('Typography')(({ theme }) => ({
  color: '#E12328',
  cursor: 'pointer',
}));

// ----------------------------------------------------------------------
LandingSlider.propTypes = {
  setRef: PropTypes.any,
};

const settings = {
  display: 'flex',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function LandingSlider({ setRef }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <RootStyle ref={setRef}>
            {loading === true ? (
      <Grid container spacing={1} sx={{ p: 2, mt: -3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          // sx={{
          //   display: 'flex',
          //   justifyContent: 'center',
          //   justifyItems: 'center',
          //   alignItems: 'center',
          //   textAlign: 'center',
          // }}
        >
   
            <Skeleton animation="wave" width={'50%'} height={25} sx={{ mx: 'auto' }} />
    
        </Grid>

      

        <Grid container spacing={1} sx={{ p: 10, mt: -15 }}>
          <Grid item xs={12} md={12}>
            <Slider {...settings}>
              {STEPS.map((s) => (
                <m.div variants={varFade().inUp}>
                  <Skeleton
                    animation="wave"
                    // variant="rectangular"
                    sx={{
                      p: {
                        xs: 4,
                        md: 3,
                        lg: 2,
                      },
                      mx: 'auto',
                      // width: 140,
                      // height: 130,
                    }}
                    width={150}
                    height={500}
                  />

                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -10,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -2,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    width={'50%'}
                    height={15}
                    sx={{
                      mt: -2,
                      mx: 'auto',
                      mb: 3,
                    }}
                  />
                </m.div>
              ))}
            </Slider>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ mb: { xs: 10, md: 0 } }}>
          <Box
            sx={{
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
              mt: -5,
            }}
          >
            <Skeleton
              animation="wave"
              width={'30%'}
              height={15}
              sx={{
                mt: -2,
                mx: 'auto',
                mb: 3,
              }}
            />
            <Skeleton
              animation="wave"
              width={'35%'}
              height={15}
              sx={{
                mt: -2,
                mx: 'auto',
                mb: 3,
              }}
            />
            <Skeleton
              animation="wave"
              width={'70%'}
              height={25}
              sx={{
                mt: 5,
                mx: 'auto',
                mb: 3,
              }}
            />
          </Box>
        </Grid>
      </Grid>
            ) : (
      <Grid container spacing={1} sx={{ p: 2, mt: -3 }} component={MotionViewport}>
        <Grid
          item
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '20px',
                  md: '38px',
                },
                fontWeight: 'bold',
                color: 'rgb(95, 95, 95)',
              }}
            >
              How to consult with your doctor in 5 easy steps
            </Typography>
          </m.div>
        </Grid>

        <Grid container spacing={1} sx={{ p: 10, mt: 1 }}>
          <Grid item xs={12} md={12}>
            <Slider {...settings}>
              {STEPS.map((s) => (
                <m.div variants={varFade().inUp}>
                  <Image
                    src={s.src}
                    alt={s.title}
                    sx={{
                      mx: 'auto',
                      width: { xs: 150, md: 150 },
                      height: 'auto',
                    }}
                  />
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: 'center', fontSize: { xs: '20px', md: '24px' }, mt: 1 }}
                  >
                    <RedLettering>{s.title}</RedLettering>
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      textAlign: 'center',
                      fontSize: { xs: '17px', md: '24px' },
                      mt: -2,
                      mb: 3,
                      lineHeight: '120%',
                      color: '#5f5f5f',
                    }}
                  >
                    {s.desc}
                  </Typography>
                </m.div>
              ))}
            </Slider>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} sx={{ mb: { xs: 10, md: 0 } }}>
          <Box
            sx={{
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
              mt: -5,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 500, color: '#5f5f5f' }}>
              <RedLettering>Sign Up</RedLettering> for a <RedLettering>FREE</RedLettering> account today
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500, color: '#5f5f5f' }}>
              Need to Consult? Find your doctor <RedLettering>here</RedLettering>
            </Typography>
          </Box>
        </Grid>
      </Grid> ) }
    </RootStyle>
  );
}
