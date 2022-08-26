// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock
import { _mapContact } from '../_mock';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm, ContactMap, ContactMap2, ContactAddress } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        <ContactHero />

        <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={5}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={7}>
              <ContactMap2 />
            </Grid>
          </Grid>
          <ContactAddress />
        </Container>
      </RootStyle>
    </Page>
  );
}
