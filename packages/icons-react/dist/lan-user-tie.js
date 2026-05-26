import React from 'react';

export const LanUserTie = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m128-96a128 128 0 1 1-256 0 128 128 0 1 1 256 0M176 320c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-6.1l27.3 54.6 45.7-66.3c4.3-6.3 12.6-8.7 19.6-5.6 62.1 27.1 105.6 89.2 105.6 161.4v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-54.4-30.1-101.7-74.7-126.2L237.2 505.1c-3 4.3-7.9 6.9-13.2 6.9s-10.2-2.6-13.2-6.9L106.7 353.8C62.1 378.3 32 425.6 32 480v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-72.2 43.5-134.2 105.6-161.3 7-3.1 15.2-.7 19.6 5.6l45.7 66.3 27.3-54.6h-6.1c-8.8 0-16-7.2-16-16zm48 147.8 32.4-47.1-32.4-64.9-32.4 64.9z"})
);

export default LanUserTie;
