import React from 'react';

export function LanCircle5Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m40-368h-96c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c39.8 0 72-32.2 72-72s-32.2-72-72-72h-40v-32h72c13.3 0 24-10.7 24-24s-10.7-24-24-24"})
  );
}

export default LanCircle5Regular;
