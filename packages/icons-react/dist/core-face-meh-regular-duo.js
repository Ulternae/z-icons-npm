import React from 'react';

export const CoreFaceMehRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m144-48a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-44 116h184v56H164zm204-116a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M192 324h156v56H164v-56z"})
);

export default CoreFaceMehRegular-duo;
