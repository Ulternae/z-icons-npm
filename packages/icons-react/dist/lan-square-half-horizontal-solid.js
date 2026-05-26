import React from 'react';

export const LanSquareHalfHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 256v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256z"})
);

export default LanSquareHalfHorizontalSolid;
