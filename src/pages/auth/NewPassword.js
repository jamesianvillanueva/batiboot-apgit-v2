import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';

import jwtDecode from 'jwt-decode';
import { PATH_AUTH } from '../../routes/paths';

// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// components
import Page from '../../components/Page';
// sections
import { NewPasswordForm } from '../../sections/auth/new-password';
// assets
import { SentIcon } from '../../assets';
import { RequestLinkInvalid } from '../../sections/auth/request-link';



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


// ----------------------------------------------------------------------

export default function NewPassword() {

  const navigate = useNavigate();

  /* const { token } = useParams();

  const validateToken = () => {
    try{
      if(!jwtDecode(token)) {
        return false;
      }
      const decodedToken = jwtDecode(token, {complete: true})

      if(decodedToken.exp * 1000 < Date.now()){
        return false;
      }
      return true;
    }
    catch(err){
      console.error(err);
    }
  } */
  const handleResendCode = () => {
    try {
     //  await checkEmailCode(email)
    }
    catch(err) {
      console.error(err);
    }
  }
  return (
        <Page title="New Password">
          <LogoOnlyLayout />
          <Container>
            <ContentStyle sx={{ textAlign: 'center' }}>
              <SentIcon sx={{ mb: 5, mx: 'auto', height: 120 }} />

              <Typography variant="h3" gutterBottom>
                Change Password
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Make sure you remember the password to log in.
                <br />
             {/*    Please enter the code in below box to verify your email. */}
              </Typography>

              <Box sx={{ mt: 5, mb: 3 }}>
                <NewPasswordForm />
              </Box>

              {/* <Typography variant="body2">
                Don’t have a code? &nbsp;
                <Link variant="subtitle2" onClick={() => {handleResendCode()}}>
                  Resend code
                </Link>
              </Typography> */}
            </ContentStyle>
          </Container>
        </Page>
    );
}
