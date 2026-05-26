import React from 'react';

export const LanEllipsisHThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 256a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-208 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32"})
);

export default LanEllipsisHThin;
