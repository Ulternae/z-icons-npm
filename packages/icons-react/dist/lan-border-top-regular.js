import React from 'react';

export const LanBorderTopRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 80 0 69.3 0 56m64 136a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 320a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 448c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m448 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m-320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m192 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32"})
);

export default LanBorderTopRegular;
