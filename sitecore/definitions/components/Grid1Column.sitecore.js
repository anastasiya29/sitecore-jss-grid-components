// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Grid1Column component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Grid1Column',
    displayName: 'Grid 1 Column',
    icon: SitecoreIcon.GraphSquare,
    fields: [
      {
        name: 'marginX',
        displayName: 'Hozirontal Margin',
        type: CommonFieldTypes.Number
      },
      {
        name: 'marginY',
        displayName: 'Vertical Margin',
        type: CommonFieldTypes.Number
      },
      {
        name: 'paddingX',
        displayName: 'Hozirontal Padding',
        type: CommonFieldTypes.Number
      },
      {
        name: 'paddingY',
        displayName: 'Vertical Padding',
        type: CommonFieldTypes.Number
      },
    ],
    placeholders: ['grid-1-column']
  });
}
