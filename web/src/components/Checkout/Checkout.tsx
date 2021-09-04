import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, HStack } from '@chakra-ui/react';
import { Shipping } from './Shipping';

const content2 = <Flex py={4}>hello world</Flex>;
const content3 = <Flex py={4}>lorem ispum</Flex>;

const steps = [
  { label: 'Shipping', content: <Shipping /> },
  { label: 'Payment', content: content2 },
  { label: 'Review', content: content3 },
];

export const Checkout = () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex
      width={{ sm: '100%', md: '80%', lg: '70%', xl: '60%' }}
      direction="column"
      p={4}
    >
      <Steps activeStep={activeStep} colorScheme="teal">
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>

      <HStack alignSelf="flex-end" mt={4} mr={4}>
        <Button
          onClick={() => {
            prevStep();
          }}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            nextStep();
          }}
          colorScheme={activeStep === 2 ? 'teal' : 'gray'}
          isDisabled={activeStep === 2}
        >
          {activeStep !== 2 ? 'Next' : 'Place your order'}
        </Button>
      </HStack>
    </Flex>
  );
};
