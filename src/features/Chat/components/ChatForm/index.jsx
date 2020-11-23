import { yupResolver } from 'features/Auth/LoginForm/@hookform/resolvers/yup';
import InputField from 'features/Auth/LoginForm/components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'features/Auth/LoginForm/react-hook-form';
import * as yup from 'yup';

ChatForm.propTypes = {
  onSubmit: PropTypes.func,
};

ChatForm.defaultProps = {
  onSubmit: null,
};

function ChatForm(props) {
  const schema = yup.object().shape({
    message: yup.string().required('Hãy nhập gì đó trước khi gửi'),
  });

  const form = useForm({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const { onSubmit } = props;

  const handleSubmit = (values) => {
    if (!onSubmit) return;

    onSubmit(values);
    
    form.reset();
  };

  return (
    //này của react hook form
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="message" label="Nhập đôi lời muốn tư vấn" form={form} />
    </form>
  );
}

export default ChatForm;
