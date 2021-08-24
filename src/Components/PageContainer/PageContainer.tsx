import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import theme from '../../Theme';

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
    <Box>{children}</Box>
  </>
);

export default PageContainer;
