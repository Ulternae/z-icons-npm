import React from 'react';

export const CoreFloppyDiskSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M325.5 0c17 0 33.2 6.8 45.2 18.8l122.6 122.4c12 12 18.7 28.3 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM256 272a80 80 0 1 0 0 160 80 80 0 1 0 0-160M96 64v96h224V64z"})
);

export default CoreFloppyDiskSolid;
