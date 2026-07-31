import React from 'react';

export const LanUserHairSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 144c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16h48c20.8 0 41-6.7 57.6-19.2L288 80c10 13.4 16 30 16 48zM224 0C153.3 0 96 57.3 96 128v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16C352 57.3 294.7 0 224 0m-43.4 320C89.7 320 16 393.7 16 484.6c0 15.1 12.3 27.4 27.4 27.4h361.1c15.1 0 27.4-12.3 27.4-27.4 0-90.9-73.7-164.6-164.6-164.6h-86.9z"})
);

export default LanUserHairSolid;
