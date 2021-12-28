import React from 'react';
import { PageContainer } from '../Components';
import { Container, Heading, Link, Text } from '@chakra-ui/react';

const Support: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Heading size="2xl" textAlign="center" mt={4}>
          Support
        </Heading>
        <Text textAlign="center" fontSize="lg" mt={2}>
          Something not working right? Shoot us an email at{' '}
          <Link
            href="nailto:support@whatsplots.app"
            color="blue.200"
            textDecoration="underline"
          >
            support@whatsplots.app
          </Link>
        </Text>
      </Container>
    </PageContainer>
  );
};

export default Support;
