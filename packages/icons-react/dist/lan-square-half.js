import React from 'react';

export const LanSquareHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32h160v448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m128 416V64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32z"})
);

export default LanSquareHalf;
