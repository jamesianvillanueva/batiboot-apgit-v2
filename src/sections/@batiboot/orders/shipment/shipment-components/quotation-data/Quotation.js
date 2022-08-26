import { Grid, Card, Button, Typography, DialogActions, 
    Box, Stack, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import PopUpModal from '../../../../modal/PopupModal';

import { useDispatch, useSelector } from '../../../../../../redux/store';
import { getProduct, addCart, onGotoStep } from '../../../../../../redux/slices/product';

import useSettings from '../../../../../../hooks/useSettings';

import ProductDetailsCarousel from '../slider/ProductDetailsCarousel';



function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
}
export default function QuotationData (props) {

    const { identifier } = props
    const { themeStretch } = useSettings(); 
    const dispatch = useDispatch();
    const [value, setValue] = useState('1');
    const { name = '' } = useParams();
    const { product, error, checkout } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProduct(name));
    }, [dispatch, name]);

    const handleAddCart = (product) => {
        dispatch(addCart(product));
    };

    const handleGotoStep = (step) => {
        dispatch(onGotoStep(step));
    };




    const [ openModal, setOpenModal ] = useState(false)

    const handleOpenModal = () => setOpenModal(!openModal)
    const handleCloseModal = () => setOpenModal(false)


    const LabelStyle = styled(Typography)(({ theme }) => ({
        ...theme.typography.subtitle2,
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    }));

    return(
        <Card>
            <Stack sx={{ py: 2, px: 3}}>
                <Grid sx={{
                    display: 'grid',
                    columnGap: 2,
                    rowGap: 3,
                    gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}}
                >
                    <LabelStyle variant='h6'>Quotation: QN3325</LabelStyle>
                    <LoadingButton type='button' onClick={handleOpenModal} size="small" variant='outlined' >
                        View Quotation
                    </LoadingButton>
                </Grid>

                <Box>
                    <PopUpModal
                        open={openModal}
                        onClose={handleCloseModal}
                        isIdentifier={identifier}
                        nameLink={'Quotation'}
                    />
                </Box>
                <div>
                    <LabelStyle>Date: 04-19-2022</LabelStyle>
                </div>
                <Stack sx={{ mt: 3}}>
                    <div>
                        <LabelStyle>Item Name: Nike</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>Item Description: Shoes</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>Quantity: 3</LabelStyle>
                    </div>
                    <div>
                        <LabelStyle>Amout: 3000.00</LabelStyle>
                    </div>
                </Stack>
            </Stack>  
           {/*  <ProductDetailsCarousel product={itemData} /> */}
            <ImageList
                sx={{ width: 500, height: 175 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </Card>    
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
      title: 'Hats',
      cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1620138546344-7b2c38516edf',
        title: 'Hats',
        cols: 2,
      },
  ];

