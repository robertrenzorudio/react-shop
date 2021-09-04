import React from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, HStack } from '@chakra-ui/react';

const content1 = <Flex py={4}>react + typescript</Flex>;
const content2 = <Flex py={4}>hello world</Flex>;
const content3 = <Flex py={4}>lorem ispum</Flex>;

const steps = [
  { label: 'Shipping', content: content1 },
  { label: 'Payment', content: content2 },
  { label: 'Review', content: content3 },
];

export const Checkout = () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex width="90%" overflow="scroll" direction="column" align="center" p={4}>
      <Steps activeStep={activeStep} colorScheme="teal">
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>

      <HStack alignSelf="flex-end">
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
