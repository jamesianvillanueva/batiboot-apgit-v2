
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../../layouts/LogoOnlyLayout';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
import { PATH_AUTH, PATH_BATIBOOT } from '../../../routes/paths';
// components
import Page from '../../../components/Page';
// sections
/* import { ResetPasswordForm } from '../reset-password'; */

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function RequestLinkInvalid() {

    const { method } = useAuth();
    
    return (
    <Page title="Request Link is Invalid">
        <LogoOnlyLayout />
       
        <Container>
          <ContentStyle sx={{ textAlign: 'center' }}>
            <Typography variant="h3" paragraph>
              Request link is invalid
            </Typography>
       
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Please check your email address associated with your account. Thank you.
            </Typography>

            <Button fullWidth size="large" component={RouterLink} to={PATH_BATIBOOT.root} sx={{ mt: 1 }}>
              Back
            </Button>
          </ContentStyle>
        </Container>
    </Page>
    );
}