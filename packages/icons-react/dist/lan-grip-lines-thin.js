import React from 'react';

export const LanGripLinesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 184c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8m0 144c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8"})
);

export default LanGripLinesThin;
