import React from 'react';

export const LanIdCardAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240-32h96c17.7 0 32 14.3 32 32v80H208V0c0-17.7 14.3-32 32-32M64 32h96v48H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-96V32h96c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m192 256h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80m-24-96a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanIdCardAltRegular;
