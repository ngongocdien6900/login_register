import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import SelectField from 'components/form-controls/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultValues = {
  onSubmit: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    //1 là 8px
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    username: yup.string().required('Không được bỏ trống').min(6, 'Nhập ít nhất 6 kí tự'),
    gender: yup.string().required('Hãy chọn giới tính'),
    password: yup.string().required('Không được bỏ trống').min(6, 'Nhập ít nhất 6 kí tự'),
    retypePassword: yup
      .string()
      .required('Không được bỏ trống.')
      .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp'),
  });

  const form = useForm({
    //liệt kê tất cả các field ở đây
    defaultValues: {
      username: '',
      gender: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (!onSubmit) return;

    onSubmit(values);

    form.reset();
  };

  return (

      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>

        <Typography className={classes.title} component="h3" variant="h5">
          Create An Account
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="username" label="Ex: cobebuoito" form={form} />
          <SelectField name="gender" label="Gender" form={form} />
          <PasswordField name="password" label="Enter password" form={form} />
          <PasswordField name="retypePassword" label="Retype password" form={form} />

          <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            Create an account
          </Button>
        </form>
      </div>
  );
}

export default RegisterForm;
