import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }) => (
  <div style={{ backgroundColor: fields.backgroundColor ? fields.backgroundColor.value : null }}>
    <Text tag="h2" className="display-4" field={fields.heading} />
  </div>
);

export default ContentBlock;
