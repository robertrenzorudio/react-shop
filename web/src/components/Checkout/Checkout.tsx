import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex } from '@chakra-ui/react';
import { Shipping } from './Shipping';
import { Payment } from './Payment';
import { Review } from './Review';

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const prevHandler = () => {
    prevStep();
  };

  const nextHandler = () => {
    nextStep();
  };

  return (
    <Flex
      width={{ sm: '100%', md: '80%', lg: '70%', xl: '50%' }}
      direction="column"
      p={4}
    >
      <Steps
        activeStep={activeStep}
        colorScheme="teal"
        orientation="horizontal"
      >
        <Step label={'Shipping'} key={'Shipping'}>
          {<Shipping onNext={nextHandler} />}
        </Step>
        <Step label={'Payment'} key={'Payment'}>
          {<Payment onPrev={prevHandler} onNext={nextHandler} />}
        </Step>
        <Step label={'Review'} key={'Review'}>
          {<Review onPrev={prevHandler} />}
        </Step>
      </Steps>
    </Flex>
  );
};
