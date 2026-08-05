import React from 'react';

export function LanCircle1Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-368h40c13.3 0 24 10.7 24 24v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V192h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircle1Solid;
