import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Flex, Box } from '@rebass/grid'

const Grid1Column = ({ rendering, fields }) => (
  <Flex>
    <Box
      width={1}
      px={fields.paddingX}
      py={fields.paddingY}
      mx={fields.marginX}
      my={fields.marginY}>
      <Placeholder name="grid-1-column" rendering={rendering} />
    </Box>
  </Flex>
);

export default Grid1Column;
