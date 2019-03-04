// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Grid-1-Column component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Grid-2-Column',
    displayName: 'Grid 2 Column',
    inherits: 'Grid-1-Column',
    fields: [
      {
        name: 'leftWidth',
        displayName: 'Left Width',
        type: CommonFieldTypes.Number
      }
    ],
    placeholders: ['grid-2-column-left', 'grid-2-column-right']
  });
}
