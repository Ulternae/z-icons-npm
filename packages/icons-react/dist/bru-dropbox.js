import React from 'react';

export const BruDropbox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 528 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m264.4 116.3-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32zM131.6 395.7l132-84.3 132 84.3-132 84.3zm132.8-111.6 132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3z"})
);

export default BruDropbox;
