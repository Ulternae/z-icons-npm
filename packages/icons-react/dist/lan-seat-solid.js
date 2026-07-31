import React from 'react';

export const LanSeatSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 0C92.7 0 64 28.7 64 64v176h256V64c0-35.3-28.7-64-64-64zM0 320v32c0 17.7 14.3 32 32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h192v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"})
);

export default LanSeatSolid;
