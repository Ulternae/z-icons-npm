import React from 'react';

export const LanCircleaporeDollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m72-392c-8.8 0-16 7.2-16 16v17.9c-27.6 6.9-48 31.9-48 61.6 0 30.3 21.4 56.4 51.1 62.3l16.4 3.3c7.3 1.5 12.5 7.8 12.5 15.3 0 8.6-7 15.6-15.6 15.6H296c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-17.9c27.6-6.9 48-31.9 48-61.6 0-30.3-21.4-56.4-51.1-62.3l-16.4-3.3c-7.3-1.5-12.5-7.8-12.5-15.3 0-8.6 7-15.6 15.6-15.6H352c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-16c0-8.8-7.2-16-16-16m-208 95.6c0 30.3 21.4 56.4 51.1 62.3l16.4 3.3c7.3 1.5 12.5 7.8 12.5 15.3 0 8.6-7 15.6-15.6 15.6L152 312c-13.3 0-24 10.7-24 24s10.7 24 24 24h32.4c35.1 0 63.6-28.5 63.6-63.6 0-30.3-21.4-56.4-51.1-62.3l-16.4-3.3c-7.3-1.5-12.5-7.8-12.5-15.3 0-8.6 7-15.6 15.6-15.6H208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24.4c-35.1 0-63.6 28.5-63.6 63.6z"})
);

export default LanCircleaporeDollarRegular;
