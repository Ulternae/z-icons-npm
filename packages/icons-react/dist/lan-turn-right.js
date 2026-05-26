import React from 'react';

export const LanTurnRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S320 115.1 320 128v64H160C71.6 192 0 263.6 0 352v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32h160v64c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128zM480 256 352 384v-80c0-8.8-7.2-16-16-16H160c-35.3 0-64 28.7-64 64v64H32v-64c0-70.7 57.3-128 128-128h176c8.8 0 16-7.2 16-16v-80z"})
);

export default LanTurnRight;
