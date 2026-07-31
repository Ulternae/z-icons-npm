import React from 'react';

export const LanCircleInfoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-176c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-88c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanCircleInfoRegular;
