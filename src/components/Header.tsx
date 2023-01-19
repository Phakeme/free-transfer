import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

import React from 'react';

const Header: React.FC = () => {
  return (
    <Flex as="nav">
      <Box>
        <Heading>Free-Transfer</Heading>
      </Box>
      <Spacer />
      <Box>Navigations</Box>
    </Flex>
  );
};

export default Header;
