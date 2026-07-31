import React from 'react';

export const LanChevronCircleLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M282.3 130.3l-120 120c-3.1 3.1-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L179.3 256l114.4-114.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z"})
);

export default LanChevronCircleLeftThin;
