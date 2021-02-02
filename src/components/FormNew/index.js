import React from 'react';
import { useForm } from 'react-hook-form';

import Form from '../Form';
import Field from '../Field';

const FormNew = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Form>
       <Field.Text
        label="Nome"
        name="name"
        type="text"
        register={register}
      />
      <Field.Text
        label="Email"
        name="email"
        type="email"
        register={register}
      />
    </Form>
  );
};

export default FormNew;