import React from 'react';

export const LanPercent = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M443.3 36.7c6.2 6.2 6.2 16.4 0 22.6l-416 416c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l416-416c6.2-6.2 16.4-6.2 22.6 0M96 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192m320 352a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
);

export default LanPercent;
