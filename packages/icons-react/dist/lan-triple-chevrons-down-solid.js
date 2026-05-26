import React from 'react';

export const LanTripleChevronsDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M265.9 361.4c12.5-12.5 32.8-12.5 45.2 0s12.5 32.8 0 45.3l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2l-128-128-2.2-2.4c-10.2-12.6-9.5-31.1 2.2-42.8s30.2-12.4 42.8-2.2l2.4 2.2 105.4 105.4 105.4-105.4zm0-192c12.5-12.5 32.8-12.5 45.2 0s12.5 32.8 0 45.3l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2l-128-128-2.2-2.4c-10.2-12.6-9.5-31.1 2.2-42.8s30.2-12.4 42.8-2.2l2.4 2.2 105.4 105.4 105.4-105.4zm0-192c12.5-12.5 32.8-12.5 45.2 0s12.5 32.8 0 45.3l-128 128-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2l-128-128-2.2-2.4C-2.6 7.6-1.8-10.9 9.9-22.6S40.1-35 52.7-24.8l2.4 2.2L160.5 82.8z"})
);

export default LanTripleChevronsDownSolid;
