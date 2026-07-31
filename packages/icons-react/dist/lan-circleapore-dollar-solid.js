import React from 'react';

export const LanCircleaporeDollarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m72-392c8.8 0 16 7.2 16 16v16h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24.4c-8.6 0-15.6 7-15.6 15.6 0 7.4 5.2 13.8 12.5 15.3l16.4 3.3c29.7 5.9 51.1 32 51.1 62.3 0 29.7-20.4 54.7-48 61.6V376c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h32.4c8.6 0 15.6-7 15.6-15.6 0-7.4-5.2-13.8-12.5-15.3l-16.4-3.3c-29.7-5.9-51.1-32-51.1-62.3 0-29.7 20.4-54.7 48-61.6V136c0-8.8 7.2-16 16-16m-208 95.6c0-35.1 28.5-63.6 63.6-63.6H208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24.4c-8.6 0-15.6 7-15.6 15.6 0 7.4 5.2 13.8 12.5 15.3l16.4 3.3c29.7 5.9 51.1 32 51.1 62.3 0 35.1-28.5 63.6-63.6 63.6L152 360c-13.3 0-24-10.7-24-24s10.7-24 24-24h32.4c8.6 0 15.6-7 15.6-15.6 0-7.4-5.2-13.8-12.5-15.3l-16.4-3.3c-29.7-5.9-51.1-32-51.1-62.3z"})
);

export default LanCircleaporeDollarSolid;
