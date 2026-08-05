import React from 'react';

export function LanBowlingBallSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanBowlingBallSolid;
