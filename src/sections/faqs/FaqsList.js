import { useState } from 'react';


// @mui
import { styled } from '@mui/material/styles';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock';

// components
import Iconify from '../../components/Iconify';



const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

export default function FaqsList() {
  const [controlled, setControlled] = useState(false);

  const handleChangeControlled = (panel) => (event, isExpanded) => {
    setControlled(isExpanded ? panel : false);
  };
  
  return (
    <RootStyle>
     { _faqs.map((item, index) => (   
                <Accordion
                  key={item.value}
                  expanded={controlled === item.value}
                  onChange={handleChangeControlled(item.value)}
                >
                  <AccordionSummary
                    expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
                  >
                    <Typography variant="subtitle1" sx={{ width: '33%', flexShrink: 0 }}>
                      {item.heading}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.subHeading}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.detail}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
    </RootStyle>
  );
}
