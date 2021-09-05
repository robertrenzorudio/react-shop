import React from 'react';
import { Button, HStack, Stack, useMediaQuery, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { MyTextField } from '../Form/MyTextField';
import * as yup from 'yup';

interface PaymentProps {
  onPrev: () => void;
  onNext: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ onNext, onPrev }) => {
  const [isSmall] = useMediaQuery('(max-width: 425px)');

  const paymentSchema = yup.object().shape({
    cardholderName: yup
      .string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Cardholder Name is Required'),

    cardNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Must only contain digits')
      .min(14, 'Invalid Card Number')
      .max(15, 'Invalid Card Number')
      .required('Cardnumber is Required'),

    expirationDate: yup.string().required('Expiration Date is Required'),

    cvv: yup
      .string()
      .matches(/^[0-9]+$/, 'Must only contain digits')
      .min(3, 'Invalid CVV')
      .max(4, 'Invalid CVV')
      .required('CVV  is Required'),
  });

  return (
    <Formik
      initialValues={{
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      }}
      onSubmit={(_, { setSubmitting }) => {
        setTimeout(() => {
          onNext();
          setSubmitting(false);
        }, 1000);
      }}
      validationSchema={paymentSchema}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <VStack spacing={4} mt={isSmall ? 0 : 4} p={1}>
            <MyTextField
              name="cardholderName"
              label="Cardholder Name"
              isRequired={true}
            />
            <Stack
              direction={isSmall ? 'column' : 'row'}
              w="100%"
              spacing={isSmall ? 4 : 10}
            >
              <MyTextField
                name="cardNumber"
                label="Card Number"
                isRequired={true}
              />
              <MyTextField
                type="month"
                name="expirationDate"
                label="Expiration date"
                isRequired={true}
              />
              <MyTextField name="cvv" label="CVV" isRequired={true} />
            </Stack>
            <HStack mt={4} alignSelf="flex-end">
              <Button onClick={onPrev}>Back</Button>
              <Button type="submit" isLoading={isSubmitting}>
                Next
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
