import React from 'react';

export const LanDiscDriveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm192 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"})
);

export default LanDiscDriveSolid;
