import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

export default function ServicesGrid() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10, mb: 10 }}>
      <Grid container spacing={2} justifyContent='center' sx={{textAlign:"center"}}>
        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\label.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Private Labeling</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\branding.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Rebranding</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\product-design.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Customize Packaging</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\ship.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Importing</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\Container.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Warehouse</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{mt: 5}}>
          <Grid item md={2} xs={3} sx={{ml: 18}}>
            <Image src="\assets\Logo2\cargo.png" alt="label" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3">Fullfilment</Typography>
            <Typography variant="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</Typography>
          </Grid>
        </Grid>

        
      </Grid>
    </Container>
  );
}
