import React from 'react';

export const LanMugSaucerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c0-17.7 14.3-32 32-32h352c70.7 0 128 57.3 128 128s-57.3 128-128 128c0 53-43 96-96 96H160c-53 0-96-43-96-96zm448 96c0-35.3-28.7-64-64-64v128c35.3 0 64-28.7 64-64M64 448h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
);

export default LanMugSaucerSolid;
