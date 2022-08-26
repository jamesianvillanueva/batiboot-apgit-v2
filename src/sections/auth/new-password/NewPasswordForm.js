import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, OutlinedInput, InputAdornment, FormHelperText, Box} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import jwtDecode from 'jwt-decode';
//
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

import { PATH_AUTH, PATH_BATIBOOT, PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { RequestLinkInvalid } from '../request-link';




// ----------------------------------------------------------------------
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function NewPasswordForm() {
  const [temp, setTemp] = useState([])

  const navigate = useNavigate();

  const { changePassword, checkEmailCode, user } = useAuth()
  
  const { enqueueSnackbar } = useSnackbar();

  const email = useQuery();

  const isMountedRef = useIsMountedRef();
  
  const [showPassword, setShowPassword] = useState(false);

  const emailRecovery = sessionStorage.getItem('email-recovery');

  const VerifyCodeSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  useEffect(() => {
    const target = document.querySelector('input.field-code');
    target?.addEventListener('paste', handlePaste);

    return () => {
      target?.removeEventListener('paste', handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaste = (event) => {
    let data = event.clipboardData.getData('text');

    data = data.split('');

    [].forEach.call(document.querySelectorAll('.field-code'), (node, index) => {
      node.value = data[index];

      const fieldIndex = `code${index + 1}`;

      setValue(fieldIndex, data[index]);
    });

    event.preventDefault();
  };

  const handleChangeWithNextField = async (event, handleChange) => {
    
    const { maxLength, value, name } = event.target;
  
    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
    setTemp([...temp, value])
    if(fieldIntIndex >= 6){
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
       /*  await forgot(data.email); */
        const validate = await checkEmailCode(email, temp.join(""));
     // sessionStorage.setItem('email-recovery', data.email);
        if(!validate){
          reset();
        }
      } catch (error) {   
        reset();/* 
  
        if (isMountedRef.current) {
          setError('afterSubmit', { ...error, message: error.message });
        } */
      }
    }
    handleChange(event);
  };


  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await changePassword(user.email, data.password);

      console.log('data:', {
        email: data.email,
      /*   code: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`, */
        password: data.password,
      });

      sessionStorage.removeItem('email-recovery');

      enqueueSnackbar('Change password success!');

      /* navigate(PATH_DASHBOARD.root, { replace: true }); */
      navigate(PATH_AUTH.login, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {/* <Stack direction="row" spacing={2} justifyContent="center">
              {['code1', 'code2', 'code3', 'code4', 'code5', 'code6'].map((name, index) => (
                <Controller
                  key={name}
                  name={`code${index + 1}`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <OutlinedInput
                      {...field}
                      error={!!error}
                      autoFocus={index === 0}
                      placeholder="-"
                      onChange={(event) => handleChangeWithNextField(event, field.onChange)}
                      inputProps={{
                        className: 'field-code',
                        maxLength: 1,
                        sx: {
                          p: 0,
                          textAlign: 'center',
                          width: { xs: 36, sm: 56 },
                          height: { xs: 36, sm: 56 },
                        },
                      }}
                    />
                  )}
                />
              ))}
            </Stack> */}

          {/*   {(!!errors.code1 || !!errors.code2 || !!errors.code3 || !!errors.code4 || !!errors.code5 || !!errors.code6) && (
              <FormHelperText error sx={{ px: 2 }}>
                Code is required
              </FormHelperText>
            )} */}

            <RHFTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="confirmPassword"
              label="Confirm New Password"
              type={showPassword ? 'text' : 'password'} 
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton fullWidth 
              size="large" 
              type="submit" 
              variant="contained" 
              loading={isSubmitting}  

              sx={{ mt: 3 }}>
              Change password
            </LoadingButton>
          </Stack>
      </FormProvider>
  );
}
