import React from 'react';

export const LanCircleAustralianDollarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320-104v9.1c-27.3 5.2-48 29.3-48 58.1 0 28.2 19.9 52.5 47.6 58l23.5 4.7c5.2 1 9 5.6 9 11 0 6.2-5 11.2-11.2 11.2L304 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-9.1c27.3-5.2 48-29.3 48-58.1 0-28.2-19.9-52.5-47.6-58l-23.4-4.7c-5.2-1-9-5.6-9-11 0-6.2 5-11.2 11.2-11.2H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16zm-128 87.4 14.4 48.6h-28.8zm33 111.4c3.8 12.7 17.1 20 29.8 16.2s20-17.1 16.2-29.8l-51-172.3c-3.7-12.4-15.1-20.9-28-20.9s-24.3 8.5-28 20.9l-51 172.3c-3.8 12.7 3.5 26.1 16.2 29.8s26.1-3.5 29.8-16.2l4.4-14.8h57.2z"})
);

export default LanCircleAustralianDollarSolid;
