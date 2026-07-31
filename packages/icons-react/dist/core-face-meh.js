import React from 'react';

export const CoreFaceMeh = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M192 324h156v56H164v-56z"})
);

export default CoreFaceMeh;
