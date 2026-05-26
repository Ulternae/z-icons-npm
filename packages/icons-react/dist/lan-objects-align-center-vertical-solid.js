import React from 'react';

export const LanObjectsAlignCenterVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v144h64v-80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v80h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v80c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-80h-64v144c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64z"})
);

export default LanObjectsAlignCenterVerticalSolid;
