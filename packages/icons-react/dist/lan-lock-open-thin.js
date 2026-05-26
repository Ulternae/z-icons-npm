import React from 'react';

export const LanLockOpenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 96c0-61.9 50.1-112 112-112S560 34.2 560 96v56c0 4.4 3.6 8 8 8s8-3.6 8-8V96c0-70.7-57.3-128-128-128S320 25.3 320 96v64H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-80zm-16 80h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48V224c0-26.5 21.5-48 48-48z"})
);

export default LanLockOpenThin;
