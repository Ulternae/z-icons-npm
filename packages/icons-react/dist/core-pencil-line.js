import React from 'react';

export const CorePencilLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M389.5 0C457.2 0 512 54.8 512 122.5c0 32.5-12.9 63.7-35.9 86.6L173.2 512H0V338.7L302.9 35.9C325.8 12.9 357 0 389.5 0M576 512H288v-64h288zM64 365.3V448h82.8l210.8-210.8-82.7-82.8L64.1 365.2zM389.5 64c-15.5 0-30.4 6.2-41.4 17.1l-33.7 33.7 82.7 82.8 33.7-33.7c11-11 17.1-25.9 17.1-41.4 0-32.3-26.2-58.5-58.5-58.5z"})
);

export default CorePencilLine;
