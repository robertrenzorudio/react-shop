import React from 'react';
import { Formik, Form } from 'formik';
import { MyTextField } from '../Form/MyTextField';
import { VStack, Stack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';

interface ShippingProps {
  onNext: () => void;
}

export const Shipping: React.FC<ShippingProps> = ({ onNext }) => {
  const [isSmall] = useMediaQuery('(max-width: 425px)');

  return (
    <Stack>
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
        onSubmit={(values) => {}}
      >
        {() => (
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
                <MyTextField name="city" label="City" isRequired={true} />

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
                <MyTextField
                  name="zipCode"
                  label="Zip / Postal Code"
                  isRequired={true}
                />

                <MyTextField name="country" label="Country" isRequired={true} />
              </Stack>
            </VStack>
          </Form>
        )}
      </Formik>

      <Button type="submit" alignSelf="flex-end" onClick={onNext} mt={4}>
        Next
      </Button>
    </Stack>
  );
};
