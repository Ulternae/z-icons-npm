import React from 'react';

export const LanBinBottlesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 32h64c17.7 0 32 14.3 32 32v32c35.3 0 64 28.7 64 64 0-35.3 28.7-64 64-64V64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32c35.3 0 64 28.7 64 64v16H32v-16c0-35.3 28.7-64 64-64V64c0-17.7 14.3-32 32-32M0 256c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-4l-21 167.9c-4 32-31.2 56.1-63.5 56.1h-335C88.2 512 61 488 57 455.9L36 288h-4c-17.7 0-32-14.3-32-32"})
);

export default LanBinBottlesSolid;
