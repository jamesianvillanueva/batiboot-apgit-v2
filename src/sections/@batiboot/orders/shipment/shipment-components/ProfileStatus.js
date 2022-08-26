// MUI
import { Card, Typography, Stack } from '@mui/material';

// SCSS
import './ProfileSass.scss'

// ----------------------------------------------------------------------

export default function ProfileStatus() {

    return (
        <Card>
            <Stack spacing={2} sx={{ p: 2 }}>
                <Stack direction='row' sx={{ justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>

                    {/* APPROVED */}
                    {/* <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#4169e140', color: '#4169e1' }}>
                        APPROVED
                    </Typography> */}

                    {/* PENDING */}
                    <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#80808040', color: '#808080' }}>
                        PENDING
                    </Typography>

                    {/* DONE */}
                    {/* <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#a0522d40', color: '#a0522d' }}>
                        DONE
                    </Typography> */}

                    {/* CANCELLED */}
                    {/* <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#ffa50040', color: '#ffa500' }}>
                        CANCELLED
                    </Typography> */}

                </Stack>
                <Stack direction='row' sx={{ justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>

                    {/* TELEMEDICINE */}
                    {/* <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#00800040', color: '#008000' }}>
                        TELEMEDICINE
                    </Typography> */}

                    {/* FACE TO FACE */}
                    <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#66339940', color: '#663399' }}>
                        FACE TO FACE
                    </Typography>
                </Stack>
                <Stack direction='row' sx={{ justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>

                    {/* PAID */}
                    <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#4169e140', color: '#4169e1' }}>
                        PAID
                    </Typography>

                    {/* RECEIVABLE */}
                    {/* <Typography variant='h6' color='text.primary' sx={{ width: '200px', pt: 0.5, pb: 0.5, pl: 3, pr: 3, borderRadius: '8px', bgcolor: '#dc143c40', color: '#dc143c' }}>
                        RECEIVABLE
                    </Typography> */}
                </Stack>
            </Stack>
        </Card>
    );
}