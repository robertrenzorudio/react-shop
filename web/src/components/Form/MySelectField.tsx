import React, { SelectHTMLAttributes } from 'react';
import { Select, FormLabel, FormControl } from '@chakra-ui/react';
import { useField } from 'formik';

type Options = {
  value: any;
  title: string;
};

type MySelectFieldProps = {
  name: string;
  label: string;
  isRequired: boolean;
  options: Options | Options[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const MySelectField: React.FC<MySelectFieldProps> = ({
  label,
  options,
  size: _,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  let optionsJSX;
  if (Array.isArray(options)) {
    optionsJSX = options.map(({ value, title }) => (
      <option value={value} key={title}>
        {title}
      </option>
    ));
  } else {
    <option value={options.value} key={options.title}>
      {options.title}
    </option>;
  }
  return (
    <FormControl isInvalid={!!(error && touched)}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Select {...field} {...props} id={field.name}>
        {optionsJSX}
      </Select>
    </FormControl>
  );
};
