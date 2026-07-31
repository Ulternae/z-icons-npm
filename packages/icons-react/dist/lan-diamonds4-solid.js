import React from 'react';

export const LanDiamonds4Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M166.9 446.9c-18.7-18.7-18.7-49.1 0-67.9l55.1-55.1c18.7-18.7 49.1-18.7 67.9 0l55.2 55.1c18.7 18.7 18.7 49.1 0 67.9L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17zM133 345.1c-18.7 18.7-49.1 18.7-67.9 0L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41l48.1-48.1c18.7-18.7 49.1-18.7 67.9 0l55.1 55.1c18.7 18.7 18.7 49.1 0 67.9zm33.9-280L215 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l48.1 48.1c18.7 18.7 18.7 49.1 0 67.9L290 188.1c-18.7 18.7-49.1 18.7-67.9 0L166.9 133c-18.7-18.7-18.7-49.1 0-67.9m280 101.8L495 215c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41l-48.1 48.1c-18.7 18.7-49.1 18.7-67.9 0L323.9 290c-18.7-18.7-18.7-49.1 0-67.9l55.1-55.2c18.7-18.7 49.1-18.7 67.9 0"})
);

export default LanDiamonds4Solid;
