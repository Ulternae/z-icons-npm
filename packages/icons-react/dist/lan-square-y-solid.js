import React from 'react';

export const LanSquareYSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.3 120.5 69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L248 280.8V344c0 13.3-10.7 24-24 24s-24-10.7-24-24v-63.2l-82.3-97.3c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8"})
);

export default LanSquareYSolid;
