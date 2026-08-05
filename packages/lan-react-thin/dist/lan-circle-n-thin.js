import React from 'react';

export function LanCircleNThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-65.8-349.1c-2.1-2.6-5.7-3.6-8.9-2.5s-5.3 4.2-5.3 7.5v176c0 4.4 3.6 8 8 8s8-3.6 8-8V190.3L321.8 349c2.1 2.6 5.7 3.6 8.9 2.5s5.3-4.2 5.3-7.5V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v153.6z"})
  );
}

export default LanCircleNThin;
