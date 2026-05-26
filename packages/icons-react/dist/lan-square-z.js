import React from 'react';

export const LanSquareZ = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64h128c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L193.3 320H288c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9l107.2-134H160c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanSquareZ;
