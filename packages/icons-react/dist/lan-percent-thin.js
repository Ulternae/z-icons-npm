import React from 'react';

export const LanPercentThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M445.7 34.3c3.1 3.1 3.1 8.2 0 11.3l-432 432c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l432-432c3.1-3.1 8.2-3.1 11.3 0M96 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192m336 352a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
);

export default LanPercentThin;
