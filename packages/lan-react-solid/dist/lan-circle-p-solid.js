import React from 'react';

export function LanCirclePSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368h68c46.4 0 84 37.6 84 84s-37.6 84-84 84h-44v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24m68 120c19.9 0 36-16.1 36-36s-16.1-36-36-36h-44v72z"})
  );
}

export default LanCirclePSolid;
