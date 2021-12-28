import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';

type PageContainerProps = {
  name?: string;
};

const PageContainer: React.FC<PageContainerProps> = ({
  name = 'Plots - Whats Plots?',
  children,
}) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{name}</title>
      <link rel="canonical" href="http://whatsplots.app" />
    </Helmet>
    <Flex minHeight="100vh" direction="column">
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  </>
);

export default PageContainer;
