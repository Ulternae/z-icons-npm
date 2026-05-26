import React from 'react';

export const LanEllipsisH = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-192 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M32 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanEllipsisH;
