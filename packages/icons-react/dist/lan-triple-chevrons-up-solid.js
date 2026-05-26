import React from 'react';

export const LanTripleChevronsUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M140.3 359.2c12.6-10.2 31.1-9.5 42.8 2.2l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8s-30.2 12.4-42.8 2.2l-2.4-2.2-105.4-105.4L55.1 534.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.2l128-128 2.4-2.2zm0-192c12.6-10.3 31.1-9.5 42.8 2.2l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8s-30.2 12.4-42.8 2.2l-2.4-2.2-105.4-105.4L55.1 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.2l128-128 2.4-2.2zm0-192c12.6-10.3 31.1-9.5 42.8 2.2l128 128 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8s-30.2 12.4-42.8 2.2l-2.4-2.2L160.5 45.2 55.1 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.2l128-128 2.4-2.2z"})
);

export default LanTripleChevronsUpSolid;
