import React from 'react';

export const LanUserVneckHairSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 144c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16h48c20.8 0 41-6.7 57.6-19.2L288 80c10 13.4 16 30 16 48zM224 0C153.3 0 96 57.3 96 128v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16C352 57.3 294.7 0 224 0m-81.4 323c-6.5-4.9-15.2-6.2-22.6-2.8-61.4 28.2-104.1 90.2-104.1 162.1 0 16.4 13.3 29.7 29.7 29.7h356.6c16.4 0 29.7-13.3 29.7-29.7 0-72-42.7-134-104.1-162.1-7.4-3.4-16.1-2.1-22.6 2.8l-67 50.2c-8.5 6.4-20.3 6.4-28.8 0l-67-50.2z"})
);

export default LanUserVneckHairSolid;
