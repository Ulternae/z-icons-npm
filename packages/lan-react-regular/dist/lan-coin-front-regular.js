import React from 'react';

export function LanCoinFrontRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 272a160 160 0 1 0 0-320 160 160 0 1 0 0 320m24-208c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanCoinFrontRegular;
