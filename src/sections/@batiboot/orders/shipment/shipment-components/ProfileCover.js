import PropTypes from 'prop-types';

// MUI
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';

// Utils
import cssStyles from '../../../../../utils/cssStyles';

// Hooks
import useAuth from '../../../../../hooks/useAuth';

// Components
import MyAvatar from '../../../../../components/MyAvatar';
import Image from '../../../../../components/Image';


import './ProfileSass.scss'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '&:before': {
    ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    left: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  myProfile: PropTypes.object,
};

export default function ProfileCover({ myProfile }) {
  const { user } = useAuth();

  const { phoneNumber, cover, email  } = myProfile;

  const LabelStyle = styled(Typography)(({ theme }) => ({
      ...theme.typography.subtitle2,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
  }));
  return (
    <RootStyle>
    
      <Grid sx={{ position: 'absolute', right: 0, pr: 3, pt: 2, zIndex: 99,}}>
        <LabelStyle variant='h6'>TR-No: 11304</LabelStyle>
      </Grid>
   
       <InfoStyle>
        <MyAvatar
          sx={{
            mx: 'auto',
            my: -0.5,
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'common.white',
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        />
        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h4">{user?.displayName}</Typography>
          <Typography sx={{ opacity: 0.72 }}>{email}</Typography>
          <Typography sx={{ opacity: 0.72 }}>{phoneNumber}</Typography>
        </Box>
        
      </InfoStyle>
      <Image alt="profile cover" src={cover} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} /> */}
    </RootStyle>
  );
}