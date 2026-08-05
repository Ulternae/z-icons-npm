import React from 'react';

export function LanCircleKThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m69.3-338c3.3-2.9 3.6-8 .7-11.3s-8-3.6-11.3-.7L192 270.3V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-52.4l45.3-40 76.4 97.3c2.7 3.5 7.8 4.1 11.2 1.4s4.1-7.8 1.4-11.2L249.4 241z"})
  );
}

export default LanCircleKThin;
