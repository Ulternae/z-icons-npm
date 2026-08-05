import React from 'react';

export function LanCircleDSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-368h72c61.9 0 112 50.1 112 112s-50.1 112-112 112h-72c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24m72 176c35.3 0 64-28.7 64-64s-28.7-64-64-64h-48v128z"})
  );
}

export default LanCircleDSolid;
