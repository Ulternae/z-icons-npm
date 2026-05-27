import React from 'react';

export const NeoFireSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M132.6 23.6C148 7.5 168.9 0 189.4 0 221 0 250.8 17.9 264 48.1c8.6 19.7 19.9 47.3 31 79.5 9.1-11.7 17.7-20.6 24.6-26.9 13.5-12.4 30.4-16.8 45.3-16.8 13.2 0 27.9 3.4 40.7 13 29.5 22.3 98.4 87.9 98.4 211 0 74.5-23.8 138.1-68.9 183.1S326.5 560 252 560s-138.1-23.8-183.1-68.9S0 382.5 0 308c0-67.9 24.5-129.6 52.6-178.3 28.2-48.8 61-86.3 80.1-106.1zM252 504a84 84 0 1 0 0-168 84 84 0 1 0 0 168"})
);

export default NeoFireSolid;
