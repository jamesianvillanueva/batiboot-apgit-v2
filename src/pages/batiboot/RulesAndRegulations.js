// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { FaqsRulesRegulationHero, FaqsCategory, FaqsList, FaqsForm } from '../../sections/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function HelpsAssistance() {
  return (
    <Page title="Help and Assistance">
      <RootStyle>
        <FaqsRulesRegulationHero />

        <Container sx={{ mt: 15, mb: 10, position: 'relative' }}>
          <FaqsCategory />
        </Container>
      </RootStyle>
    </Page>
  );
}
