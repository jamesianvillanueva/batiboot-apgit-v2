import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, IconButton, Grid,  LinearProgress } from '@mui/material';

// utils
import cssStyles from '../../utils/cssStyles';
// _mock_
import { _carouselsExample } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import useResponsive from '../../hooks/useResponsive';
import { MotionViewport, varFade } from '../../components/animate';
// ----------------------------------------------------------------------

const ContentItemStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ color: "#2bb8e3" }),
  bottom: 0,
  zIndex: 9,
  width: '35%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  textJustify: 'center',
  margin: '0 0 154px 198px',
  height: '45%',
  padding: theme.spacing(8),
  justifyContent: 'space-between',
  flexDirection: theme.direction === 'rtl' ? 'row-reverse' : 'row',
}));

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: "#0000000",
    },
  },
});



// ----------------------------------------------------------------------

export default function CarouselLandingPageOne() {
  const theme = useTheme();
  

  const carouselRef = useRef(null);

  const isDesktop = useResponsive('up', 'md');

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: Boolean(theme.direction !== 'rtl'),
    rtl: Boolean(theme.direction === 'rtl'),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <CarouselArrows
        filled
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{
          '& .arrow': {
            '&.left': { left: 16 },
            '&.right': { right: 16 },
          },
        }}
      >
        <Slider ref={carouselRef} {...settings}>
          {_carouselsExample.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </Slider>
      </CarouselArrows>
    </Box>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    landingDesc: PropTypes.string,
  }),
};


CarouselLandingPageOne.propTypes = {
  buffer: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};



function CarouselItem({ item, progress, buffer}) {
  const { image, title } = item;

  return (
    <Box sx={{ position: 'cover', zIndex: 0 }}>
      {image}
      <Box sx={{  visibility:{ xs:"hidden", sm:"visible"},}}>
      <ContentItemStyle>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color="inherit" />
        <Grid container spacing={2} >
          <Grid item xs={12}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h3" sx={{ color: 'common.white', fontSize: { xs: 10, md: 26, lg: 32 } }}>
              {item.title}
            </Typography>
            </m.div>
          </Grid>
          <Grid item xs={12} md={8}>
          <m.div variants={varFade().inRight}>
            <Typography variant="subtitle2"  sx={{ color: 'common.white', fontSize: { xs: 5, sm:8, md: 12, lg: 15 } }}>
              {item.landingDesc}
            </Typography>
            </m.div>
          </Grid>
        </Grid>

        {/* <IconButton
          onClick={() => {}}
          sx={{
            color: 'common.white',
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.common.white, theme.palette.action.hoverOpacity),
              
            },
          }}
        >
          <Iconify icon={'eva:more-horizontal-fill'} />
        </IconButton> */}
      </ContentItemStyle>
      </Box>
    </Box>
  );
}
