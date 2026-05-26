import React from 'react';

export const LanSquareQuartersRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M52.7 84.7 224 256 395.3 84.7c-2.9-2.9-6.9-4.7-11.3-4.7H64c-4.4 0-8.4 1.8-11.3 4.7m0 342.6c2.9 2.9 6.9 4.7 11.3 4.7h320c4.4 0 8.4-1.8 11.3-4.7L224 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanSquareQuartersRegular;
