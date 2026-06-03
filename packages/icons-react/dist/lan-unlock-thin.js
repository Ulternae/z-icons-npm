import React from 'react';

export const LanUnlockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 96c0-61.8 50.1-112 112-112S304 34.2 304 96v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-70.7-57.3-128-128-128S64 25.3 64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H80zm-16 80h256c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48"})
);

export default LanUnlockThin;
