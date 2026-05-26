import React from 'react';

export const LanCircleSmallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 256a112 112 0 1 0-224 0 112 112 0 1 0 224 0M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0"})
);

export default LanCircleSmallRegular;
