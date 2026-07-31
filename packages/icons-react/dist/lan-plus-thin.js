import React from 'react';

export const LanPlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v208H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h208v208c0 4.4 3.6 8 8 8s8-3.6 8-8V264h208c4.4 0 8-3.6 8-8s-3.6-8-8-8H232z"})
);

export default LanPlusThin;
