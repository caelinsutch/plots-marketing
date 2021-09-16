import { ColorMode, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark' as ColorMode,
  useSystemColorMode: false,
};

const colors = {
  blue: {
    200: '#3BA7F5',
  },
};

const theme = extendTheme({ config, colors });

export default theme;
