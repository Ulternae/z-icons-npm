import React from 'react';

export const LanSquareKSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm247.4 154.4-67.3 56.1 70.6 86.2c8.4 10.3 6.9 25.4-3.4 33.8s-25.4 6.9-33.8-3.4l-70.3-85.9-31.1 25.9v44.8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-176c0-13.3 10.7-24 24-24s24 10.7 24 24v68.8l104.6-87.2c10.2-8.5 25.3-7.1 33.8 3.1s7.1 25.3-3.1 33.8"})
);

export default LanSquareKSolid;
