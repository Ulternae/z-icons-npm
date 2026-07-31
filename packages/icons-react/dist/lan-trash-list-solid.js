import React from 'react';

export const LanTrashListSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M167.1-16H313c13.8 0 26 8.8 30.4 21.9L352 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64l8.7-26.1C141.1-7.2 153.3-16 167.1-16M64 144h352l-21.1 323.1c-1.6 25.3-22.6 44.9-47.9 44.9H133c-25.3 0-46.3-19.6-47.9-44.9zm448-16h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32m-32 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32m32 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanTrashListSolid;
