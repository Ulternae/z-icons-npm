import React from 'react';

export const CorePenLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M389.5 0C457.2 0 512 54.8 512 122.5c0 32.5-12.9 63.7-35.9 86.6L173.2 512H0V338.7L302.9 35.9C325.8 12.9 357 0 389.5 0M576 512H288v-64h288zM389.5 64c-15.5 0-30.4 6.2-41.4 17.1L64 365.3V448h82.8l284.1-284.1c11-11 17.1-25.9 17.1-41.4 0-32.3-26.2-58.5-58.5-58.5"})
);

export default CorePenLine;
