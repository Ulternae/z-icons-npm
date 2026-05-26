import React from 'react';

export const LanFileCssSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 380c24.3 0 44 19.7 44 44v8c0 11-9 20-20 20s-20-9-20-20v-8c0-2.2-1.8-4-4-4h-16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4v-8c0-11 9-20 20-20s20 9 20 20v8c0 24.3-19.7 44-44 44h-16c-24.3 0-44-19.7-44-44v-80c0-24.3 19.7-44 44-44zm144 0c11 0 20 9 20 20s-9 20-20 20h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12c28.7 0 52 23.3 52 52s-23.3 52-52 52h-32c-11 0-20-9-20-20s9-20 20-20h32c6.6 0 12-5.4 12-12s-5.4-12-12-12c-28.7 0-52-23.3-52-52s23.3-52 52-52zm128 0c11 0 20 9 20 20s-9 20-20 20h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12c28.7 0 52 23.3 52 52s-23.3 52-52 52h-32c-11 0-20-9-20-20s9-20 20-20h32c6.6 0 12-5.4 12-12s-5.4-12-12-12c-28.7 0-52-23.3-52-52s23.3-52 52-52zM245.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2v165.5H240c-35.3 0-64 28.7-64 64v112H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0zM240 152c0 13.3 10.7 24 24 24h93.5L240 58.5z"})
);

export default LanFileCssSolid;
