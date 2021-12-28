import { Flex, Link, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../../Assets/Images/logo.svg';

const Header: React.FC = () => (
  <Flex direction="row" p={4}>
    <GatsbyLink to="/">
      <Flex direction="row" alignItems="center" cursor="pointer">
        <Logo
          style={{
            height: '45px',
            width: 'fit-content',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        />
        <Text fontSize="3xl" color="blue.200" fontWeight="bold" ml={4}>
          Plots
        </Text>
      </Flex>
    </GatsbyLink>

    <Spacer />
    <Flex direction="row" alignItems="center">
      <Link
        as={GatsbyLink}
        to="/support"
        color="gray.400"
        fontWeight="bold"
        mr={4}
        _active={{
          color: 'blue.400',
        }}
      >
        Support
      </Link>
      <Link as={GatsbyLink} to="/contact" color="gray.400" fontWeight="bold">
        Contact
      </Link>
    </Flex>
  </Flex>
);

export default Header;
