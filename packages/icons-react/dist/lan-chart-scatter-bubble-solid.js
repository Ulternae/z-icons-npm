import React from 'react';

export const LanChartScatterBubbleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32m96 272a48 48 0 1 1 96 0 48 48 0 1 1-96 0m224-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-160-48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M384 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanChartScatterBubbleSolid;
