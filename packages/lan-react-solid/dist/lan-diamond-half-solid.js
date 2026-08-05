import React from 'react';

export function LanDiamondHalfSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 33.9c0-9.7-5.8-18.5-14.8-22.2S221.9 10.1 215 17L17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41l198 198c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.4 14.8-22.1V34z"})
  );
}

export default LanDiamondHalfSolid;
