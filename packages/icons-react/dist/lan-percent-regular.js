import React from 'react';

export const LanPercentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m256 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m89-407c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
);

export default LanPercentRegular;
