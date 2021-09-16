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

const components = {
  Button: {
    variants: {
      solid: {
        color: 'white',
      },
    },
  },
};

const theme = extendTheme({ config, colors, components });

export default theme;
