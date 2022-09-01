import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Card, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// Hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
// components
import { FormProvider, RHFTextField } from '../../../../components/hook-form';


// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const { user, accountChangePassword, validateUserPassword } = useAuth();

  const isMountedRef = useIsMountedRef();
  
  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await validateUserPassword(user.email, data.oldPassword);
      accountChangePassword(user.email, data.newPassword)
      reset();

    //  enqueueSnackbar('Update success!');
    } catch (error) {

      reset();

      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        </Stack>
        <Stack spacing={3} alignItems="flex-end" sx={{ mt: 2}}> 
          <RHFTextField name="oldPassword" type="password" label="Old Password" />

          <RHFTextField name="newPassword" type="password" label="New Password" />

          <RHFTextField name="confirmNewPassword" type="password" label="Confirm New Password" />

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Card>
  );
}
