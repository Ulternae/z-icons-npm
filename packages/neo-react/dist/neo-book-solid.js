import React from 'react';

export function NeoBookSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M104.8 7.2C130.1 1.7 160.4 0 196 0h56c35.6 0 65.9 1.7 91.2 7.2 25.6 5.5 47.8 15.2 65.1 32.5s27 39.5 32.5 65.1c5.5 25.3 7.2 55.7 7.2 91.2v141.1c0 53-37.9 100.6-93.5 106-28 2.7-63 4.9-102.5 4.9H138.5c-14.7 0-26.5 11.9-26.5 26.5 0 13 9.4 24 22.2 25.5 16.1 1.9 38.9 4 61.8 4h196c15.5 0 28 12.5 28 28s-12.5 28-28 28H196c-35.6 0-65.9-1.7-91.2-7.2-25.6-5.5-47.8-15.2-65.1-32.5s-27-39.5-32.5-65.1C1.7 429.9 0 399.6 0 364V196c0-35.6 1.7-65.9 7.2-91.2C12.7 79.2 22.4 57 39.7 39.7s39.5-27 65.1-32.5M140 140c-15.5 0-28 12.5-28 28s12.5 28 28 28h168c15.5 0 28-12.5 28-28s-12.5-28-28-28z"})
  );
}

export default NeoBookSolid;
