import React from 'react';

export const LanUsdCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384c-4.4 0-8 3.6-8 8v24h-5.3c-28 0-50.7 22.7-50.7 50.7 0 25.4 18.8 46.9 44 50.2l46 6.1c17.2 2.3 30.1 17 30.1 34.4 0 19.1-15.5 34.7-34.7 34.7L208 336c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h13.3c28 0 50.7-22.7 50.7-50.7 0-25.4-18.8-46.9-44-50.2l-46-6.1c-17.2-2.3-30.1-17-30.1-34.4 0-19.1 15.5-34.7 34.7-34.7h61.3c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40v-24c0-4.4-3.6-8-8-8z"})
);

export default LanUsdCircleThin;
