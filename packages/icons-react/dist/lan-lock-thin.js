import React from 'react';

export const LanLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 96v64h224V96c0-61.9-50.1-112-112-112S80 34.2 80 96m-16 64V96c0-70.7 57.3-128 128-128S320 25.3 320 96v64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m0 16c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48z"})
);

export default LanLockThin;
