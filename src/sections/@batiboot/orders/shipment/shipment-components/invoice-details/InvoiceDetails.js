import { useState } from 'react';

import { Grid, Card, Button, Typography, DialogActions, 
    Box, Stack, styled } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import PopUpModal from '../../../../modal/PopupModal';

export default function InvoiceDetails(props){

    const { isIdentifier } = props


    const LabelStyle = styled(Typography)(({ theme }) => ({
        ...theme.typography.subtitle2,
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    }));

    const [ openModal, setOpenModal ] = useState(false)

    const handleOpenModal = () => setOpenModal(!openModal)
    const handleCloseModal = () => setOpenModal(false)



    return(
        <Card>
            <Stack sx={{ py: 2, px: 3}}>
                <Grid  sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}}
                >
                    <LabelStyle variant='h6'>Invoice: INV-17048</LabelStyle>
                    <LoadingButton type='button' onClick={handleOpenModal} size="small" variant='outlined' >
                        View Invoice
                    </LoadingButton>
                </Grid>
                <Box>
                    <PopUpModal
                        open={openModal}
                        onClose={handleCloseModal}
                        isIdentifier={isIdentifier}
                        nameLink={'Invoice'}
                    />
                </Box>
                <div>
                    <LabelStyle>Date: 04-19-2022</LabelStyle>
                </div>
                <Stack sx={{ mt: 3}}>
                    <div>
                        <LabelStyle>From: Johnny Nicoled Sorrane</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>To: Manila Paws</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>Status: Paid</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>Amout: 3000.00</LabelStyle>
                    </div>
                </Stack>












            </Stack>
        </Card>
    )
}