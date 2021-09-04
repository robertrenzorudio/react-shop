import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex } from '@chakra-ui/react';
import { Shipping } from './Shipping';

const content2 = <Flex py={4}>hello world</Flex>;
const content3 = <Flex py={4}>lorem ispum</Flex>;

const steps = [
  { label: 'Payment', content: content2 },
  { label: 'Review', content: content3 },
];

export const Checkout = () => {
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
      <Steps activeStep={activeStep} colorScheme="teal">
        <Step label={'Shipping'} key={'Shipping'}>
          {<Shipping onNext={nextHandler} />}
        </Step>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
    </Flex>
  );
};
