import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Flex, Box } from '@rebass/grid'

const Grid2Column = ({ rendering, fields }) => {
  const leftWidth = (fields.leftWidth && !isNaN(fields.leftWidth.value)) ? fields.leftWidth.value : 0.5;
  const rightWidth = 1 - leftWidth;
  return (<Flex>
    <Box
      width={leftWidth}
      px={fields.paddingX}
      py={fields.paddingY}
      mx={fields.marginX}
      my={fields.marginY}>
      <Placeholder name="grid-2-column-left" rendering={rendering} />
    </Box>
    <Box
      width={rightWidth}
      px={fields.paddingX}
      py={fields.paddingY}
      mx={fields.marginX}
      my={fields.marginY}>
      <Placeholder name="grid-2-column-right" rendering={rendering} />
    </Box>
  </Flex>)
};

export default Grid2Column;
