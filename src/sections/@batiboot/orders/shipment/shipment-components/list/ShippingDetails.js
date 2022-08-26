// form
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
// @mui
import { Box, Stack, Button, Divider, Typography, InputAdornment, MenuItem } from '@mui/material';
// utils
import { fNumber } from '../../../../../../utils/formatNumber';
// components
import Iconify from '../../../../../../components/Iconify';
import { RHFSelect, RHFTextField } from '../../../../../../components/hook-form';
import { _invoices } from '../../../../../../_mock/batiboot/invoice_mock/_invoice';
import QuotationData from '../quotation-data/Quotation';
import InvoiceDetails from '../invoice-details/InvoiceDetails';


export default function ShippingDetails({isIdentifier}) {

    const [fields, setFields] = useState(_invoices.filter((key) => key.id === isIdentifier))
   
    return(
        <Box sx={{ p: 3 }}>
            {/* Quotation and Invoice */}
            <Box
                sx={{
                    py: 1, mx: 1,
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}}
                >    
                <QuotationData isIdentifier={isIdentifier} />
                <InvoiceDetails isIdentifier={isIdentifier}/>
            </Box>
        </Box>
    )

}
