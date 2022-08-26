// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../_mock';
import {
/*   HomeHero, */
  /*   HomeMinimal, */
 /*  HomeDarkMode, */
  ContactUs,
/*   HomeColorPresets, */
/*   HomePricingPlans, */
/*   HomeAdvertisement, */
/*   HomeCleanInterfaces, */
  AboutUs,
/*   LandingSecondPage, */
  LandingThirdPage,
  LandingSlider,
  LandingCounts,
  SpecialServices,
  ContactNow,
  CarouselLandingPageOne,
  Feedback,
  Partners,
  Maps
} from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Home2() {
  return (
    <Page title="Home">
      <RootStyle>
        <CarouselLandingPageOne />
        <ContentStyle>
          <LandingThirdPage />
          <LandingCounts />
          <SpecialServices />
          <ContactNow/>
          <ContactUs />
          <Feedback />
          {/* <Partners /> */}
          <LandingSlider />
          <Maps />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
