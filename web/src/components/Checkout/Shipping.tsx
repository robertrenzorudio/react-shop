import React from 'react';
import { Formik, Form } from 'formik';
import { MyTextField } from '../Form/MyTextField';
import { VStack, Stack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';
import * as yup from 'yup';
import { MySelectField } from '../Form/MySelectField';

interface ShippingProps {
  onNext: () => void;
}

export const Shipping: React.FC<ShippingProps> = ({ onNext }) => {
  const [isSmall] = useMediaQuery('(max-width: 425px)');

  const shippingSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name is Required'),

    lastName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name is Required'),

    email: yup
      .string()
      .email('Invalid Email Address')
      .required('Email is Required'),

    addressLine1: yup.string().required('Adress is Required'),
    addressLine2: yup.string(),
    city: yup.string().required('City is Required'),
    area: yup.string().required('State/Province/Region is Required'),
    zipCode: yup.string().required('Zip/Postal Code is Required'),
    country: yup.string().required('Country is Required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        area: '',
        zipCode: '',
        country: '',
      }}
      onSubmit={(_, { setSubmitting }) => {
        setTimeout(() => {
          onNext();
          setSubmitting(false);
        }, 1000);
      }}
      validationSchema={shippingSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={4} mt={isSmall ? 0 : 4} p={1}>
            <Stack
              direction={isSmall ? 'column' : 'row'}
              w="100%"
              spacing={isSmall ? 4 : 10}
            >
              <MyTextField
                name="firstName"
                label="First Name"
                isRequired={true}
              />

              <MyTextField
                name="lastName"
                label="Last Name"
                isRequired={true}
              />
            </Stack>

            <MyTextField
              type="email"
              name="email"
              label="Email"
              placeholder="your-name@examle.xyz"
              isRequired={true}
            />

            <MyTextField
              name="addressLine1"
              label="Address line 1"
              isRequired={true}
            />

            <MyTextField
              name="addressLine2"
              label="Address line 2"
              isRequired={false}
            />
            <Stack
              direction={isSmall ? 'column' : 'row'}
              w="100%"
              spacing={isSmall ? 4 : 10}
            >
              <MySelectField
                name="country"
                label="Country"
                isRequired={true}
                options={[
                  { value: 'us', title: 'United States' },
                  { value: 'ph', title: 'Philippines' },
                ]}
                placeholder="Select a country"
              />

              <MyTextField
                name="area"
                label="State/Province/Region"
                isRequired={true}
              />
            </Stack>

            <Stack
              direction={isSmall ? 'column' : 'row'}
              w="100%"
              spacing={isSmall ? 4 : 10}
            >
              <MyTextField name="city" label="City" isRequired={true} />
              <MyTextField
                name="zipCode"
                label="Zip/Postal Code"
                isRequired={true}
              />
            </Stack>
            <Button
              type="submit"
              alignSelf="flex-end"
              mt={4}
              isLoading={isSubmitting}
            >
              Next
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
