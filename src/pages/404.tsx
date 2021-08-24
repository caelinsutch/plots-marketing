import * as React from 'react';

import PageContainer from '../Components/PageContainer';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <PageContainer>
    <Flex
      height="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">
          404 Not Found
        </Text>
        <ChakraLink textDecoration="underline" fontSize="lg">
          <Link to="/">Go Home</Link>
        </ChakraLink>
      </Box>
    </Flex>
  </PageContainer>
);

export default NotFoundPage;
