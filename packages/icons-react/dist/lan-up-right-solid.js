import React from 'react';

export const LanUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64H112c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l78.1 78.1L30 334.2c-18.7 18.7-18.7 49.1 0 67.9l48 48c18.7 18.7 49.1 18.7 67.9 0l137.4-137.4 78.1 78.1c9.2 9.2 22.9 11.9 34.9 6.9S416 380.9 416 368V96c0-17.7-14.3-32-32-32"})
);

export default LanUpRightSolid;
