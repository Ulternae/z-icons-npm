import React from 'react';

export const LanAustralianDollarSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M408 16c13.3 0 24 10.7 24 24v24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-53.1c-32.5 0-58.9 26.3-58.9 58.9 0 28.4 20.3 52.8 48.3 57.9l39.9 7.3c50.8 9.2 87.7 53.5 87.7 105.1 0 49.7-34 91.5-80 103.4V472c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24H405c32.5 0 58.9-26.3 58.9-58.9 0-28.4-20.3-52.8-48.3-57.9l-39.9-7.2c-50.8-9.2-87.7-53.5-87.7-105.1 0-55.3 42.1-100.9 96-106.3V40c0-13.3 10.7-24 24-24M144 134.3 93.7 320h100.6zm88.8 328L207.3 368H80.7l-25.5 94.3c-3.5 12.8-16.6 20.4-29.4 16.9s-20.4-16.7-17-29.5L110.7 73.4c4.1-15 17.7-25.4 33.3-25.4s29.2 10.4 33.3 25.4l101.9 376.3c3.5 12.8-4.1 26-16.9 29.4s-26-4.1-29.4-16.9z"})
);

export default LanAustralianDollarSignRegular;
