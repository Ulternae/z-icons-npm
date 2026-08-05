import React from 'react';

export function LanCircle4Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368c-13.3 0-24 10.7-24 24v96c0 22.1 17.9 40 40 40h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-88c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-48v-88c0-13.3-10.7-24-24-24"})
  );
}

export default LanCircle4Regular;
