import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import './assets/app.css';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/
const Layout = ({ route }) => (
  <div>
    <Placeholder name="jss-main" rendering={route} />
  </div>
);

export default Layout;
