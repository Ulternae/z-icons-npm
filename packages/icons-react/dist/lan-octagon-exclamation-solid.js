import React from 'react';

export const LanOctagonExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M324.2.1c17 0 33.3 6.7 45.3 18.7l124.1 124.1c12 12 18.7 28.3 18.7 45.2v135.6c0 17-6.8 33.2-18.7 45.2L369.5 493.2c-12 12-28.3 18.8-45.3 18.8H188.6c-17 0-33.3-6.8-45.2-18.8L19.3 369C7.3 357 .5 340.8.5 323.8V188.2c0-17 6.8-33.3 18.8-45.2L143.4 18.8c12-12 28.3-18.7 45.2-18.7zM256.4 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"})
);

export default LanOctagonExclamationSolid;
