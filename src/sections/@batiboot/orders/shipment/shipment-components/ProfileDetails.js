// MUI
import { styled, useTheme } from '@mui/material/styles';
import { Card, Typography, Stack } from '@mui/material';

// Components
import Iconify from '../../../../../components/Iconify';

// SCSS
import './ProfileSass.scss'

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 25,
  height: 25,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export default function ProfileDetails() {

  const theme = useTheme();

  return (
    <Card sx={{ mr: 1.5 }}>
      <Stack spacing={2} sx={{ p: 3.7 }}>

        <Stack direction='row'>
          <IconStyle icon={'eva:pin-outline'} sx={{ color: theme.palette.primary.dark }} />
          <Typography variant='body1' color='text.primary' sx={{ mt: 0.5 }}>
            Manila City, Philippines
          </Typography>
        </Stack>

        <Stack direction='row'>
          <IconStyle icon={'eva:calendar-outline'} sx={{ color: theme.palette.primary.dark }}  />
          <Typography variant='body1'>
              April 19, 2022 <span className='si-pa'>(Monday)</span>
          </Typography>
        </Stack>

        <Stack direction='row'>
          <IconStyle icon={'eva:clock-outline'} sx={{ color: theme.palette.primary.dark }}  />
          <Typography variant='body1'>
              12:00nn to 12:30pm
          </Typography>
        </Stack>

      </Stack>
    </Card>
  );
}