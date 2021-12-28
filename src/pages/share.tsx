import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import { PageContainer } from '../Components';
import { Container, Heading, Text } from '@chakra-ui/react';

const Share: React.FC<PageProps> = ({ location: { search } }) => {
  useEffect(() => {
    const params = new URLSearchParams(search);
    const eventId = params.get('eventId');
    console.log(eventId);
    if (eventId) window.location.href = `plots://event/${eventId}`;
  });

  return (
    <PageContainer>
      <Container>
        <Heading size="2xl" textAlign="center" mt={4}>
          Open in Plots...
        </Heading>
        <Text textAlign="center" fontSize="lg" mt={2}>
          If this doesn't open you probably don't have Plots installed
        </Text>
      </Container>
    </PageContainer>
  );
};

export default Share;
