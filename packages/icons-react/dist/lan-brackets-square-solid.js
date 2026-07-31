import React from 'react';

export const LanBracketsSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM64 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v320h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
);

export default LanBracketsSquareSolid;
