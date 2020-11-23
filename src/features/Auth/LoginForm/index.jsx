import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultValues = {
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

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    username: yup.string().required('Không được bỏ trống'),
    password: yup.string().required('Không được bỏ trống'),
  });

  const form = useForm({
    //liệt kê tất cả các field ở đây
    defaultValues: {
      username: '',
      password: '',
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
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>

        <Typography className={classes.title} component="h3" variant="h5">
          Sign in
        </Typography>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="username" label="Ex: cobebuoito" form={form} />
          <PasswordField name="password" label="Enter password" form={form} />

          <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            Sign in
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
