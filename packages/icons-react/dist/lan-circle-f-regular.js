import React from 'react';

export const LanCircleFRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h72c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72v-48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCircleFRegular;
