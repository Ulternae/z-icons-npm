import React from 'react';

export const LanUsdCircleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-368c0-13.3-10.7-24-24-24s-24 10.7-24 24v8.3c-31.5 3.3-56 29.9-56 62.2 0 31.1 22.9 57.5 53.7 61.9l45.8 6.5c7.2 1 12.5 7.2 12.5 14.4 0 8-6.5 14.6-14.6 14.6l-65.4.1c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8.3c31.5-3.3 56-29.9 56-62.2 0-31.1-22.9-57.5-53.7-61.9l-45.8-6.6c-7.2-1-12.5-7.2-12.5-14.4 0-8 6.5-14.6 14.6-14.6H296c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16z"})
);

export default LanUsdCircleRegular;
