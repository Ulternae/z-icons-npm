import React from 'react';

export const LanCircleHalfStroke = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 479.4V32.5C388.2 40.8 480 137.7 480 256s-91.8 215.2-208 223.4m-32 0C123.8 471.2 32 374.3 32 256S123.8 40.8 240 32.6v446.9zm16 32.6a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanCircleHalfStroke;
