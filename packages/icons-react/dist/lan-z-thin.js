import React from 'react';

export const LanZThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h368c3.1 0 6 1.8 7.3 4.6s.8 6.2-1.2 8.5L25.3 464H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-3.1 0-6-1.8-7.3-4.6s-.8-6.2 1.2-8.5L358.7 48H8c-4.4 0-8-3.6-8-8"})
);

export default LanZThin;
