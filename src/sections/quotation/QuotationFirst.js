import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Card, Chip, Grid, Stack, TextField, Typography, Autocomplete, InputAdornment, Button } from '@mui/material';

// components
import {
  FormProvider,
  RHFSwitch,
  RHFSelect,
  RHFEditor,
  RHFTextField,
  RHFRadioGroup,
  RHFUploadMultiFile,
} from '../../components/hook-form';

// ----------------------------------------------------------------------

const GENDER_OPTION = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
];

const CATEGORY_OPTION = [
  { group: 'Clothing', classify: ['Shirts', 'T-shirts', 'Jeans', 'Leather'] },
  { group: 'Tailored', classify: ['Suits', 'Blazers', 'Trousers', 'Waistcoats'] },
  { group: 'Accessories', classify: ['Shoes', 'Backpacks and bags', 'Bracelets', 'Face masks'] },
];

const TAGS_OPTION = [
  'Toy Story 3',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  "Singin' in the Rain",
  'Toy Story',
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots',
];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

QuotationFirst.propTypes = {
  isEdit: PropTypes.bool,
  currentProduct: PropTypes.object,
};

export default function QuotationFirst({ isEdit, currentProduct }) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    images: Yup.array().min(1, 'Images is required'),
    price: Yup.number().moreThan(0, 'Price should not be $0.00'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      images: currentProduct?.images || [],
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [TAGS_OPTION[0]],
      inStock: true,
      taxes: true,
      gender: currentProduct?.gender || GENDER_OPTION[2].value,
      category: currentProduct?.category || CATEGORY_OPTION[0].classify[1],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(5, 5, 5, 5),
  }));

  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentProduct) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentProduct]);

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const images = values.images || [];

      setValue('images', [
        ...images,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [setValue, values.images]
  );

  const handleRemoveAll = () => {
    setValue('images', []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.images?.filter((_file) => _file !== file);
    setValue('images', filteredItems);
  };

  return (
    <RootStyle>
      <Typography variant="h3" sx={{ mb: 2}}>
        Get Quotation
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Typography variant="h5">Commodity</Typography>
                <RHFSelect name="commodity" label="Select Commodity">
                  {CATEGORY_OPTION.map((category) => (
                    <optgroup key={category.group} label={category.group}>
                      {category.classify.map((classify) => (
                        <option key={classify} value={classify}>
                          {classify}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </RHFSelect>

                <div>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Box Dimension
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 3 }}
                  >
                    <Grid item xs={6} md={3}>
                      <TextField name="Length" label="Length (cm)" />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField name="Width" label="Width (cm)" />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField name="Height" label="Height (cm)" />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField name="Quantity" label="Quantity" />
                    </Grid>
                  </Grid>

                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Total Cubic Meter
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={10}>
                      <TextField name="CBM" label="Total Cubic Meter" />
                    </Grid>
                  </Grid>

                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Costing
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <TextField name="CostCBM" label="Cost per CBM" />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <TextField name="EST" label="Estimated Costing" />
                    </Grid>
                  </Grid>

                  <Grid container sx={{ mt: 5 }}>
                    <Grid item xs={12} md={2} sx={{mt: 5}}>
                      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
                        {!isEdit ? 'Get Quote' : 'Save Changes'}
                      </LoadingButton>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{mt: 5}}>
                      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
                        {!isEdit ? 'Reset' : 'Save Changes'}
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </div>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3 }}>
                <Typography variant='h6' sx={{mb: 5}}>CBM - cubic meter is calculated by multiplying length, width and height of your packages.</Typography>
                
                
                <Typography variant='h4' sx={{mb: 1}}>For Example: </Typography>
                
                <Typography variant='body1' sx={{mb: 1}}>If the length, height and width of a cargo is 2.3 meters, 1.4 meters and 2 meters respectively, the volume of
                cargo is </Typography>
                
                <Typography variant='h6' sx={{mb: 3}}>2.3 X 1.4 X 2.0 = 6.44 CBM. </Typography>
                
                <Typography variant='body1' sx={{mb: 1}}>If we convert the measurement to cm </Typography>
                
                <Typography variant='h6' sx={{mb: 3}}>230 x 140 x 200 = 6,400,000/1,000,000,</Typography>
                
                <Typography variant='body1' sx={{mb: 1}}>the result is the same </Typography>
                
                <Typography variant='h6'>6.44 CBM</Typography>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>
    </RootStyle>
  );
}
