import React from 'react';

export const LanRouteInterstateThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M260.2 1c-2.5-1.4-5.5-1.3-7.9.2-39 23.4-81.9 37-121.7 40.9-39.9 3.9-76.1-2-102.3-17-2.3-1.3-5.2-1.4-7.6-.2s-4 3.6-4.3 6.3C4.4 143 7.2 239.6 41.1 319.9c34 80.7 99 144 208.9 190.2 4.1 1.7 8.9 1.6 13-.3 107.7-50.4 172.6-113.5 207.1-193.1 34.4-79.2 38.2-173.6 26.2-285.5-.3-2.7-1.9-5-4.3-6.3s-5.3-1.2-7.6.2C431.9 55.1 347.1 48.4 260.2 1m-128 57c40.8-4 84.5-17.6 124.4-40.8 82.7 44 166.6 54.1 225.1 27.3 4 41.2 5.8 79.7 4.5 115.5H26.3c-1-36.1.9-74.6 4.9-115.6 28.4 12.9 63.8 17.2 101 13.5zM26.9 176h458.4c-3.1 49.6-12.4 94.2-29.9 134.3-32.6 75.1-94.1 135.8-199.2 184.9C149.3 450.3 88 389.7 55.9 313.6c-17.3-41-26.2-86.8-29-137.6"})
);

export default LanRouteInterstateThin;
