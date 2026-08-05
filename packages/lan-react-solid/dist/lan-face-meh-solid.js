import React from 'react';

export function LanFaceMehSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M176 320h160c13.3 0 24 10.7 24 24s-10.7 24-24 24H176c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanFaceMehSolid;
