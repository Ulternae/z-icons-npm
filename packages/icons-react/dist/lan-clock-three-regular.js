import React from 'react';

export const LanClockThreeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m232-136v136c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24s-24 10.7-24 24"})
);

export default LanClockThreeRegular;
