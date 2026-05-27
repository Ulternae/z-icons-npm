import React from 'react';

export const CoreShirtSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400.1 0c14.3 0 28.5 2.4 42.1 7.1l168.7 58.7 23.8 8.3-2.5 25.1-16 160-3.4 33.6c-16.6-2.5-50.1-7.7-100.5-15.5V448c0 35.3-28.7 64-64 64h-256c-35.3 0-64-28.7-64-64V277.3C78 285 44.5 290.2 27.9 292.7l-3.4-33.6-16-160L6 74l23.8-8.3L198.5 7c13.5-4.6 27.8-7 42.1-7zM248.3 64c0 39.8 32.2 72 72 72s72-32.2 72-72z"})
);

export default CoreShirtSolid;
