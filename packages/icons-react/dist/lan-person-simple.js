import React from 'react';

export const LanPersonSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m32 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM0 224c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v64c0 23.7-12.9 44.4-32 55.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H64v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V343.4c-19.1-11-32-31.7-32-55.4z"})
);

export default LanPersonSimple;
