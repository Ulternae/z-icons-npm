import React from 'react';

export const LanCircleDotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192"})
);

export default LanCircleDotRegular;
