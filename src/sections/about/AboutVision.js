import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10, mb: 10 }}>
       <Grid container justifyContent="left">
        <Grid item xs={12} sm={5} sx={{mr: 11}}>
        <m.div variants={varFade().inUp}>
            <Typography variant="h3" sx={{ textAlign: 'left', mb: 2 }}>
              OUR AREA OF OPERATIONS
            </Typography>
          </m.div>
        
          <m.div variants={varFade().inUp}>
            <Typography variant="h5" sx={{ textAlign: 'left'}}>
              Operation Place #1:
            </Typography>
            <Typography variant='caption'>
            送货地址：深圳市宝安区福海街道大洋田社区皓鹏智慧园A栋 1楼自编88号仓 导航地址：大洋田浩鹏智慧园 Delivery address: 1 / F, Building A, Hao Peng Wisdom Park, Dayangtian Community, Fuhai Street, Bao'an District, Shenzhen Navigation address: Haopeng Wisdom Garden, Dayangtian 送货地址：深圳市宝安区福海街道大洋田社区皓鹏智慧园A栋 1楼自编88号仓 导航地址：大洋田浩鹏智慧园 收货时间：周一 至 周六（AM9:00~PM18：00)
            </Typography>
          </m.div>
        </Grid>
       
        <Grid item xs={12} sm={6}>
        <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/landpage.jfif"
          alt="about-vision"
          effect="black-and-white"
        />
            </Box>
        </Grid>
      </Grid>
     

    {/*     <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'center',
          }}
        >
          {['logo_amazon', 'logo_hbo', 'logo_ibm', 'logo_lya', 'logo_spotify', 'logo_netflix'].map((logo) => (
            <m.div key={logo} variants={varFade().in}>
              <Image
                alt={logo}
                src={`https://minimal-assets-api-dev.vercel.app/assets/images/logos/${logo}.svg`}
                sx={{
                  m: { xs: 1.5, md: 3 },
                  height: { xs: 24, md: 32 },
                }}
              />
            </m.div>
          ))}
        </Box> */}
  

     
    </Container>
  );
}
