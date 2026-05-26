import React from 'react';

export const LanCompactDiscThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m80 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-152 0c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-101.6 82.4-184 184-184 4.4 0 8 3.6 8 8s-3.6 8-8 8c-92.8 0-168 75.2-168 168"})
);

export default LanCompactDiscThin;
