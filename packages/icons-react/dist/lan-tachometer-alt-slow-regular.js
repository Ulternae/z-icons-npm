import React from 'react';

export const LanTachometerAltSlowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m32 112a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 296c-30.9 0-56-25.1-56-56 0-14.4 5.4-27.5 14.4-37.5l-60.6-145.3c-5.1-12.2.7-26.3 12.9-31.4s26.3.7 31.4 12.9L258.6 296c29.7 1.4 53.3 25.9 53.3 55.9 0 30.9-25.1 56-56 56zm128-248a32 32 0 1 1-64 0 32 32 0 1 1 64 0m16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-256 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
);

export default LanTachometerAltSlowRegular;
