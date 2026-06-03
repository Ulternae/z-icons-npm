import React from 'react';

export const LanExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-4.028 0 72.752 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32.3 448c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32M36.2.2c18.8 2 33.2 18.2 32.5 37.5L56.3 360.9c-.5 12.9-11.1 23.1-24 23.1s-23.5-10.2-24-23.1L-4 37.7C-4.8 17.1 11.7 0 32.3 0l3.8.2z"})
);

export default LanExclamationRegular;
