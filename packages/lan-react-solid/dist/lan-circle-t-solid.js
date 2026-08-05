import React from 'react';

export function LanCircleTSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-368h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircleTSolid;
