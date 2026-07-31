import React from 'react';

export const LanTripleChevronsUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.996 320 551.966',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M155.6 353.3c3.1-2 7.3-1.7 10.1 1l152 152 1 1.2c2 3.1 1.7 7.3-1 10.1s-7 3.1-10.1 1l-1.3-1L160 371.3 13.7 517.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152zm0-192c3.1-2 7.3-1.7 10.1 1l152 152 1 1.2c2 3.1 1.7 7.3-1 10.1s-7 3.1-10.1 1l-1.3-1L160 179.3 13.7 325.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152zm0-192c3.1-2 7.3-1.7 10.1 1l152 152 1 1.3c2 3.1 1.7 7.3-1 10.1s-7 3.1-10.1 1l-1.3-1L160-12.6 13.7 133.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152 1.2-1z"})
);

export default LanTripleChevronsUpThin;
