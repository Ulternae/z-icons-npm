import React from 'react';

export const LanDiceFour = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 168a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanDiceFour;
