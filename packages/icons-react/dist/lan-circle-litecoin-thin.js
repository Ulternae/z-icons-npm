import React from 'react';

export const LanCircleLitecoinThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-384c-4.4 0-8 3.6-8 8v95.6l-50.5 16.8c-4.2 1.4-6.5 5.9-5.1 10.1s5.9 6.5 10.1 5.1l45.5-15.2V376c0 2.1.8 4.2 2.3 5.7s3.5 2.3 5.7 2.3h128c4.4 0 8-3.6 8-8s-3.6-8-8-8H224V243.1l82.5-27.5c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1L224 226.2V136c0-4.4-3.6-8-8-8"})
);

export default LanCircleLitecoinThin;
