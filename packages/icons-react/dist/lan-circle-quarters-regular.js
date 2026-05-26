import React from 'react';

export const LanCircleQuartersRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M108.9 403.1 256 256l147.1 147.1C440.7 365.4 464 313.4 464 256s-23.3-109.4-60.9-147.1L256 256 108.9 108.9C71.3 146.6 48 198.6 48 256s23.3 109.4 60.9 147.1M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleQuartersRegular;
