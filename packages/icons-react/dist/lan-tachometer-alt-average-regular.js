import React from 'react';

export const LanTachometerAltAverageRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m56-160c0-22.3-13.1-41.6-32-50.6V128c0-13.3-10.7-24-24-24s-24 10.7-24 24v173.4c-18.9 9-32 28.3-32 50.6 0 30.9 25.1 56 56 56s56-25.1 56-56M160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanTachometerAltAverageRegular;
