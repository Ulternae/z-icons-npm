import React from 'react';

export const LanBallPileSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160M176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-16 104a80 80 0 1 0-160 0 80 80 0 1 0 160 0m128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m288-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0M400 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
);

export default LanBallPileSolid;
