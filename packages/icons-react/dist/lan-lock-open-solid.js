import React from 'react';

export const LanLockOpenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 96c0-35.3 28.7-64 64-64s64 28.7 64 64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-70.7-57.3-128-128-128S320 25.3 320 96v64H160c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-32z"})
);

export default LanLockOpenSolid;
