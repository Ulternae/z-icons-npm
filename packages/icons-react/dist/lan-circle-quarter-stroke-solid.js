import React from 'react';

export const LanCircleQuarterStrokeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 256h160c17.7 0 32-14.3 32-32V64c106 0 192 86 192 192s-86 192-192 192S64 362 64 256m-64 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0"})
);

export default LanCircleQuarterStrokeSolid;
