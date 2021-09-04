import React, { InputHTMLAttributes } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';

type MyTextFieldProps = {
  name: string;
  label: string;
  isRequired: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const MyTextField: React.FC<MyTextFieldProps> = ({
  name,
  label,
  isRequired,
  size: _,
  ...props
}) => {
  const [field, meta] = useField(name);
  return (
    <FormControl
      isInvalid={!!(meta.touched && meta.error)}
      isRequired={isRequired}
    >
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
