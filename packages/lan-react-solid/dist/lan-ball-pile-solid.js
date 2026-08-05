import React from 'react';

export function LanBallPileSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160M176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-16 104a80 80 0 1 0-160 0 80 80 0 1 0 160 0m128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0M400 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
  );
}

export default LanBallPileSolid;
