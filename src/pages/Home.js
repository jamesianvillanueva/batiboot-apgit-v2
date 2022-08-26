// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  /*   HomeMinimal, */
  HomeDarkMode,
  ContactUs,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  AboutUs,
  LandingSecondPage,
  LandingThirdPage,
  LandingCounts,
  SpecialServices,
  ContactNow,
  CarouselLandingPageOne,
  Feedback,
  Partners,
  Maps
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
        <CarouselLandingPageOne />
        <ContentStyle>
          {/* <LandingSlider /> */}
          <LandingThirdPage />
          <LandingCounts />
          <SpecialServices />
          <ContactNow/>
          {/* <AboutUs /> */}
          <ContactUs />
          <Feedback />
          <Partners />
          <Maps />
        </ContentStyle>

    </Page>
  );
}
