import React from 'react';

export const NeoGauge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 168a28 28 0 1 0 0-56 28 28 0 1 0 0 56m70 14a28 28 0 1 1 56 0 28 28 0 1 1-56 0M140 294a28 28 0 1 0 0-56 28 28 0 1 0 0 56m14-112a28 28 0 1 1 56 0 28 28 0 1 1-56 0m266 112a28 28 0 1 0 0-56 28 28 0 1 0 0 56M280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560s153.6-26.5 203.5-76.5S560 363 560 280s-26.5-153.6-76.5-203.5S363 0 280 0M56 280c0-71 22.5-126.4 60-164s93-60 164-60 126.4 22.5 164 60 60 93 60 164c0 64.5-18.5 116.1-50.1 153.2-27.8-54.4-79.8-88.3-145.9-95.7V252c0-15.5-12.5-28-28-28s-28 12.5-28 28v85.5c-66.1 7.4-118.1 41.4-145.9 95.7C74.5 396.1 56 344.5 56 280m94.5 191c19-48.9 63.4-79 129.5-79s110.5 30.1 129.5 79c-34.3 21-77.8 33-129.5 33s-95.2-11.9-129.5-33"})
);

export default NeoGauge;
