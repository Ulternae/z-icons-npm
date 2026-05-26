import React from 'react';

export const LanLock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96v64h192V96c0-53-43-96-96-96S96 43 96 96m-32 64V96c0-70.7 57.3-128 128-128S320 25.3 320 96v64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m-32 64v224c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32"})
);

export default LanLock;
