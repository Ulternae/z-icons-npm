import React from 'react';

export function LanGaugeSimpleMinRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m56-160c0-30.9-25.1-56-56-56-9.4 0-18.3 2.3-26.1 6.4l-87.5-65.6c-10.6-8-25.6-5.8-33.6 4.8s-5.8 25.6 4.8 33.6l87.5 65.6c-.7 3.6-1.1 7.3-1.1 11.2 0 30.9 25.1 56 56 56s56-25.1 56-56"})
  );
}

export default LanGaugeSimpleMinRegular;
