import React from 'react';

export const LanSquareHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h160z"})
);

export default LanSquareHalfSolid;
