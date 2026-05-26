import React from 'react';

export const Lan4Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v224c0 35.3 28.7 64 64 64h192v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v224H64z"})
);

export default Lan4Solid;
