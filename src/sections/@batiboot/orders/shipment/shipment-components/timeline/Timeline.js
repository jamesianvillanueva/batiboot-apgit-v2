import { Grid, Card, Button, Typography, DialogActions, 
    Box } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Iconify from '../../../../../../components/Iconify';


export default function TrackingTimeLine({props}){

    return(
        <Timeline position="alternate" sx={{ mb: 3}}>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                    9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: 'secondary.main'}} />
                <TimelineDot>
                    <Iconify icon={'carbon:order-details'} width={24} height={24} />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                    </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" color={'black'}>
                    Order Received
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
            10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="primary">
                    <Iconify icon="bi:cart-check" />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" color={'black'}>
                    For Approval
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <Iconify color="black" icon="fluent:money-hand-20-regular" />
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography color={'black'} variant="h6" component="span">
                    For Downpayment
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant='outlined'>
                    <Iconify color="black" icon="emojione-monotone:shopping-bags" />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography color={'black'} variant="h6" component="span">
                    Item Purchased
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>


        {/* ------------------- */}

        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant='outlined'>
                    <Iconify color="black" icon="icon-park-outline:delivery" />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography color={'black'} variant="h6" component="span">
                    Package Received
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant='outlined'>
                    <Iconify color="black" icon="carbon:delivery" />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography color={'black'} variant="h6" component="span">
                    In-Transit to Manila
                </Typography>
                <Typography color="text.secondary">Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant='outlined'>
                    <Iconify color="black" icon="ic:outline-warehouse" />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color={'black'} component="span">
                    Manila Warehouse <Typography fontSize={'small'}>&#40; Auditing & Inventory &#41;</Typography>
                </Typography>
                <Typography color="text.secondary" >Lorem ipsum dolor sit amet</Typography>
            </TimelineContent>
        </TimelineItem>


    </Timeline>
    )
}