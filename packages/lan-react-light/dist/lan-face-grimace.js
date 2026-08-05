import React from 'react';

export function LanFaceGrimace({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m256 224a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-336 64c-17.7 0-32 14.3-32 32s14.3 32 32 32zm64 64v-64h-32v64zm64 0v-64h-32v64zm32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-160-96h160c35.3 0 64 28.7 64 64s-28.7 64-64 64H176c-35.3 0-64-28.7-64-64s28.7-64 64-64m0-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
  );
}

export default LanFaceGrimace;
