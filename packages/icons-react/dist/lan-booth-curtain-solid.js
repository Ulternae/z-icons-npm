import React from 'react';

export const LanBoothCurtainSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v416c0 17.7 14.3 32 32 32s32-14.3 32-32V64h32v336c0 26.5 21.5 48 48 48s48-21.5 48-48c0 26.5 21.5 48 48 48s48-21.5 48-48c0 26.5 21.5 48 48 48s48-21.5 48-48v80c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-35.3-28.7-64-64-64z"})
);

export default LanBoothCurtainSolid;
