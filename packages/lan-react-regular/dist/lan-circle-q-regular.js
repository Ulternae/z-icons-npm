import React from 'react';

export function LanCircleQRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-256c0-39.8 32.2-72 72-72s72 32.2 72 72c0 11.1-2.5 21.6-7 31l-25.9-25.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.8 26c-9.4 4.5-19.9 7-31 7-39.8 0-72-32.2-72-72m192 0c0-66.3-53.7-120-120-120s-120 53.7-120 120 53.7 120 120 120c24.5 0 47.2-7.3 66.2-19.9L335 369c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L356 322.2c12.6-19 19.9-41.7 19.9-66.2z"})
  );
}

export default LanCircleQRegular;
