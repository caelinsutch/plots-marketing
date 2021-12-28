import React from 'react';
import { Container, Flex, Link } from '@chakra-ui/react';

const Footer: React.FC = () => (
  <Container my={8}>
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-evenly"
      direction="row"
    >
      <Link
        color="gray.500"
        target="_blank"
        href="https://docs.google.com/document/d/1-5jOm6rYPBY7F312OCPgPacxSIeqVDCvj0flDR_16ZQ/edit"
      >
        Privacy Policy
      </Link>
      <Link
        color="gray.500"
        target="_blank"
        href="https://docs.google.com/document/d/1-85l9WvqXqEevTYF3pxaacslgkCCQMo8ddeLsw9Iros/edit"
      >
        Terms of Service
      </Link>
    </Flex>
  </Container>
);

export default Footer;
