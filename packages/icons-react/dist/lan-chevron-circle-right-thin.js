import React from 'react';

export const LanChevronCircleRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m229.7 125.7 120-120c3.1-3.1 3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L332.7 256 218.3 370.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
);

export default LanChevronCircleRightThin;
