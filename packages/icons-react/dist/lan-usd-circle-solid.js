import React from 'react';

export const LanUsdCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-408c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-61.6c-10.2 0-18.4 8.2-18.4 18.4 0 9.2 6.8 17 16 18.2l54.4 7.2c33 4.4 57.7 32.5 57.7 65.8 0 35.9-28.4 65.1-64 66.3v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h77.6c10.2 0 18.4-8.2 18.4-18.4 0-9.2-6.8-17-16-18.2l-54.4-7.2c-33-4.4-57.7-32.5-57.7-65.8 0-35.9 28.4-65.1 64-66.3v-16c0-13.3 10.7-24 24-24"})
);

export default LanUsdCircleSolid;
