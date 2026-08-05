import React from 'react';

export function LanCircleVThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80.8-347.6c-2-4-6.8-5.6-10.7-3.6s-5.6 6.8-3.6 10.7l88 176c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l88-176c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6l-81 161.7z"})
  );
}

export default LanCircleVThin;
