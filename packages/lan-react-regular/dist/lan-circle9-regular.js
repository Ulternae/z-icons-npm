import React from 'react';

export function LanCircle9Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-168c0 13.3 10.7 24 24 24h48c39.8 0 72-32.2 72-72v-80c0-39.8-32.2-72-72-72h-32c-39.8 0-72 32.2-72 72s32.2 72 72 72h32c8.4 0 16.5-1.4 24-4.1V296c0 13.3-10.7 24-24 24h-48c-13.3 0-24 10.7-24 24m72-152c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
  );
}

export default LanCircle9Regular;
