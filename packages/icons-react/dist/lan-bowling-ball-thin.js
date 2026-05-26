import React from 'react';

export const LanBowlingBallThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m240-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-144-32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-112a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanBowlingBallThin;
