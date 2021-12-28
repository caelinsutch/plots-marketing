import React from 'react';
import { PageContainer } from '../Components';
import { Container, Heading, Link, Text } from '@chakra-ui/react';

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Heading size="2xl" textAlign="center" mt={4}>
          Contact
        </Heading>
        <Text textAlign="center" fontSize="lg" mt={2}>
          Questions or comments? Shoot us a message to{' '}
          <Link
            href="nailto:contact@whatsplots.app"
            color="blue.200"
            textDecoration="underline"
          >
            contact@whatsplots.app
          </Link>
        </Text>
      </Container>
    </PageContainer>
  );
};

export default Contact;
