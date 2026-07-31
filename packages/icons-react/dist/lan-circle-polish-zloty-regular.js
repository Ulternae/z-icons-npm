import React from 'react';

export const LanCirclePolishZlotyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m95.4-360c0-13.3-10.7-24-24-24s-24 10.7-24 24v96.6l-21.4 8.6c-8.2 3.3-12.2 12.6-8.9 20.8s12.6 12.2 20.8 8.9l9.5-3.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24v-96.1l22.5-9c8.2-3.3 12.2-12.6 8.9-20.8s-12.6-12.2-20.8-8.9l-10.6 4.2zM128 216c0 13.3 10.7 24 24 24h53.2l-65.7 107.5c-4.5 7.4-4.7 16.7-.5 24.3s12.3 12.2 21 12.2h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-45.2l65.7-107.5c4.5-7.4 4.7-16.7.5-24.3S256.7 192 248 192h-96c-13.3 0-24 10.7-24 24"})
);

export default LanCirclePolishZlotyRegular;
