import React from 'react';

export const LanSortSizeDownAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m237.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM304 80v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-16 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm16 224v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V304c0-17.7-14.3-32-32-32H336c-17.7 0-32 14.3-32 32m-16 0c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48z"})
);

export default LanSortSizeDownAltThin;
