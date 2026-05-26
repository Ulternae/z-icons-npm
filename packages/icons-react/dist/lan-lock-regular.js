import React from 'react';

export const LanLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 96v64h160V96c0-44.2-35.8-80-80-80s-80 35.8-80 80m-48 64V96c0-70.7 57.3-128 128-128S320 25.3 320 96v64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m208 48H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16z"})
);

export default LanLockRegular;
