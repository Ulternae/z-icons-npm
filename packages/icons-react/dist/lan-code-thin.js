import React from 'react';

export const LanCodeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M370.5.4c-4.2-1.4-8.7 1-10.1 5.2l-160 496c-1.4 4.2 1 8.7 5.2 10.1s8.7-1 10.1-5.2l160-496c1.4-4.2-1-8.7-5.2-10.1m-236.8 130c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L19.3 256l114.4-114.3c3.1-3.1 3.1-8.2 0-11.3m308.7 11.3L556.7 256 442.3 370.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
);

export default LanCodeThin;
