import React from 'react';

export const LanCircleChfRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 144c-22.1 0-40 17.9-40 40v144c0 22.1 17.9 40 40 40s40-17.9 40-40v-8c0-13.3-10.7-24-24-24-2.8 0-5.5.5-8 1.4v-82.7c2.5.9 5.2 1.4 8 1.4 13.3 0 24-10.7 24-24v-8c0-22.1-17.9-40-40-40zm104 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h16v64c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-16zm104-24c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v-40h24c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCircleChfRegular;
