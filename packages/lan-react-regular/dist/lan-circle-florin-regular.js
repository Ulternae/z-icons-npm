import React from 'react';

export function LanCircleFlorinRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16.4-355.3L243.6 224H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h39l-27.6 64.4c-2 4.6-6.5 7.6-11.6 7.6H160c-13.3 0-24 10.7-24 24s10.7 24 24 24h23.9c24.2 0 46.1-14.4 55.7-36.7l35.7-83.3H328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32.2l20.7-48.4c2-4.6 6.5-7.6 11.6-7.6H352c13.3 0 24-10.7 24-24s-10.7-24-24-24h-23.9c-24.2 0-46.1 14.4-55.7 36.7"})
  );
}

export default LanCircleFlorinRegular;
