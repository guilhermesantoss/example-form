import React from 'react';

import Label from './Label';
import Input from './Input';
import Content from './Content';

const Text = ({ label, type, name }) => (
  <Label>
    <Content>{label}</Content>
    <Input type={type} name={name}></Input>
  </Label>
);

const Field = {
  Text,
}

export default Field;
