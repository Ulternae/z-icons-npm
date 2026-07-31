import React from 'react';

export const CoreThumbtackSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 64h-32v86.3l42.5 63.7c14 21 21.5 45.7 21.5 71v98.9H224v128h-64v-128H0V285c0-25.3 7.5-50 21.5-71L64 150.3V64H32V0h320z"})
);

export default CoreThumbtackSolid;
