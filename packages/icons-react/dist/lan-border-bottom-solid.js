import React from 'react';

export const LanBorderBottomSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32m-64-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M384 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m192 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
);

export default LanBorderBottomSolid;
