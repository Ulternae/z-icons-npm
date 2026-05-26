import React from 'react';

export const LanPersonSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0M0 224c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v64c0 23.7-12.9 44.4-32 55.4V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V343.4c-19.1-11-32-31.7-32-55.4z"})
);

export default LanPersonSimpleSolid;
