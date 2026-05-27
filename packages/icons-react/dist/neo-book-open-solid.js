import React from 'react';

export const NeoBookOpenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M220.7 39.4C240.6 45 252 64.6 252 85.3V336c0 15.5 12.5 28 28 28s28-12.5 28-28V85.3c0-20.7 11.4-40.3 31.3-45.9C367.7 31.4 403.5 28 448 28c28.6 0 54.8 18.3 63 47 14.6 50.8 44.2 166.7 48.4 288.1 1.1 31.9-24.8 57-55.5 57-75.2 0-125.8 10.8-156.7 27.1-16.1 8.5-26.4 18.2-32.4 28.9L504 476c15.5 0 28 12.5 28 28s-12.5 28-28 28H56c-15.5 0-28-12.5-28-28s12.5-28 28-28h189.1c-6-10.7-16.3-20.4-32.4-28.9C181.8 430.8 131.2 420 56 420 25.3 420-.6 394.9.5 363 4.8 241.7 34.3 125.8 48.9 74.9c8.2-28.6 34.4-47 63-47 44.4 0 80.3 3.4 108.7 11.4z"})
);

export default NeoBookOpenSolid;
