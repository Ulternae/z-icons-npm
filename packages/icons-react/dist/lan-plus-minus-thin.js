import React from 'react';

export const LanPlusMinusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 200v176c0 4.4 3.6 8 8 8s8-3.6 8-8V200h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H200V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v176H8c-4.4 0-8 3.6-8 8s3.6 8 8 8zM0 504c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8"})
);

export default LanPlusMinusThin;
