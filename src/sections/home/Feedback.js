import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Card, Paper, Button, Typography, CardContent, Grid } from '@mui/material';
// _mock_
import { _carouselsFeedback } from '../../_mock';
// components
import Image from '../../components/Image';
import { MotionContainer, varFade } from '../../components/animate';
import { CarouselArrowIndex } from '../../components/carousel';

// ----------------------------------------------------------------------

export default function Feedback() {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? _carouselsFeedback.length - 1 : 0);

  const settings = {
    speed: 800,
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider ref={carouselRef} {...settings}>
        {_carouselsFeedback.map((item, index) => (
          <CarouselItem key={item.id} item={item} isActive={index === currentIndex} />
        ))}
      </Slider>
      <CarouselArrowIndex
        index={currentIndex}
        total={_carouselsFeedback.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

Feedback.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    jobs: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive }) {
  const theme = useTheme();
  const { image, title } = item;

  return (
    <Box sx={{ position: 'cover' }}>
      {image}
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            0
          )} 100%)`,
        }}
      />
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: '100%',
          maxWidth: 480,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8} md={12}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: 8, sm: 10, md: 14, lg: 26 } }}>
                {item.description}
              </Typography>
            </m.div>
          </Grid>
          <Grid item xs={8}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: 8, sm: 10, md: 14, lg: 20 } }}>
                {item.title}
              </Typography>
            </m.div>
          </Grid>
          <Grid item xs={12}>
            <m.div variants={varFade().inRight}>
              <Typography variant="caption" gutterBottom sx={{ fontSize: { xs: 8, sm: 10, md: 14, lg: 20 } }}>
                {item.jobs}
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}
