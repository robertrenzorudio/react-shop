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
  label,
  isRequired,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
