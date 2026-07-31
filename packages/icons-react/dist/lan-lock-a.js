import React from 'react';

export const LanLockA = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 0c53 0 96 43 96 96v64H96V96c0-53 43-96 96-96M64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64V96c0-70.7-57.3-128-128-128S64 25.3 64 96m0 96h256c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32m128 48c-6.1 0-11.6 3.4-14.3 8.8l-80 160c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l19.6-39.2h92.2l19.6 39.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-80-160c-2.7-5.4-8.2-8.8-14.3-8.8zm0 51.8 30.1 60.2h-60.2z"})
);

export default LanLockA;
