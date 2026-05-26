import React from 'react';

export const LanArrowAltSquareLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm92.7 171.3 104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8v-56h96c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-96v-56c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104c-6.2 6.2-6.2 16.4 0 22.6"})
);

export default LanArrowAltSquareLeftSolid;
