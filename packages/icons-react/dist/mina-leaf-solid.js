import React from 'react';

export const MinaLeafSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5.037 17.903c.126.238.514.783 1.06 1.06L4.53 20.53a.75.75 0 1 1-1.06-1.06z"}), React.createElement("path", {"d":"M6.097 18.964c1.828.997 3.611 1.435 5.275 1.326 1.826-.12 3.447-.897 4.758-2.208 2.599-2.599 3.943-7.24 3.555-13.067a.75.75 0 0 0-.699-.699C13.16 3.928 8.517 5.272 5.92 7.87c-1.31 1.311-2.088 2.933-2.208 4.76-.11 1.662.329 3.446 1.326 5.273L9.57 13.37a.75.75 0 1 1 1.06 1.06z"})
);

export default MinaLeafSolid;
