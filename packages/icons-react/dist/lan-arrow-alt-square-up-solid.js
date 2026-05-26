import React from 'react';

export const LanArrowAltSquareUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm171.3 92.7 104 104c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9h-56v96c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-96h-56c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l104-104c6.2-6.2 16.4-6.2 22.6 0"})
);

export default LanArrowAltSquareUpSolid;
