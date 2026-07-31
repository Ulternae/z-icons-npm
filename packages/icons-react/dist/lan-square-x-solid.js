import React from 'react';

export const LanSquareXSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm106.6 120.8 53.4 65.3 53.4-65.3c8.4-10.3 23.5-11.8 33.8-3.4s11.8 23.5 3.4 33.8L255 256l59.6 72.8c8.4 10.3 6.9 25.4-3.4 33.8s-25.4 6.9-33.8-3.4L224 293.9l-53.4 65.3c-8.4 10.3-23.5 11.8-33.8 3.4s-11.8-23.5-3.4-33.8L193 256l-59.6-72.8c-8.4-10.3-6.9-25.4 3.4-33.8s25.4-6.9 33.8 3.4"})
);

export default LanSquareXSolid;
