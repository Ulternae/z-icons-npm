import React from 'react';

export function LanCircleISolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-368h144c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v128h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V192h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircleISolid;
