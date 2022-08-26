// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock
import { _mapContact } from '../_mock';
// components
import Page from '../components/Page';
import {
    QuotationFirst,
  } from '../sections/quotation';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Quotation() {
  return (
    <Page title="Quotation">
      <RootStyle>
        <QuotationFirst/>
      </RootStyle>
    </Page>
  );
}

