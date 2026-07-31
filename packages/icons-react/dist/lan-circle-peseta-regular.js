import React from 'react';

export const LanCirclePesetaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-368v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h8v128c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h40c52 0 95.1-38.2 102.8-88h9.2c8.8 0 16-7.2 16-16s-7.2-16-16-16h-9.2c-7.7-49.8-50.8-88-102.8-88h-64c-13.3 0-24 10.7-24 24m88 24c25.4 0 46.8 16.9 53.7 40H224v-40zm-40 112v-40h93.7c-6.9 23.1-28.3 40-53.7 40z"})
);

export default LanCirclePesetaRegular;
