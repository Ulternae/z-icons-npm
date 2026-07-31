import React from 'react';

export const LanCircleRupiahRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 144c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h12l21.2 63.6c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-19.3-57.8c21.8-12.4 36.5-35.8 36.5-62.6 0-39.8-32.2-72-72-72zm48 96h-24v-48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24m88 8v136c0 13.3 10.7 24 24 24s24-10.7 24-24v-32h16c35.3 0 64-28.7 64-64s-28.7-64-64-64h-40c-13.3 0-24 10.7-24 24m48 56v-32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16z"})
);

export default LanCircleRupiahRegular;
