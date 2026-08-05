import React from 'react';

export function LanCircleHeartRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-6.4-312.5c-11.1-14.8-28.5-23.5-46.9-23.5-32.4 0-58.7 26.3-58.7 58.7v5.3c0 49.1 65.8 98.1 96.5 118.3 9.5 6.2 21.5 6.2 30.9 0 30.7-20.2 96.5-69.3 96.5-118.3v-5.3c0-32.4-26.3-58.7-58.7-58.7-18.5 0-35.9 8.7-46.9 23.5l-6.4 8.5-6.4-8.5z"})
  );
}

export default LanCircleHeartRegular;
