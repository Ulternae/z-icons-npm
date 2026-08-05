import React from 'react';

export function LanCircleZThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-352c-4.4 0-8 3.6-8 8s3.6 8 8 8h127.1L177.8 338.9c-2 2.4-2.4 5.7-1 8.5s4.1 4.6 7.2 4.6h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H200.9l133.3-162.9c2-2.4 2.4-5.7 1-8.5s-4.1-4.6-7.2-4.6z"})
  );
}

export default LanCircleZThin;
