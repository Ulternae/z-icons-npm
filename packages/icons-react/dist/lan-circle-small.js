import React from 'react';

export const LanCircleSmall = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 256a128 128 0 1 0-256 0 128 128 0 1 0 256 0M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0"})
);

export default LanCircleSmall;
