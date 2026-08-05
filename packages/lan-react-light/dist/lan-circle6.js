import React from 'react';

export function LanCircle6({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m40-336c0-8.8-7.2-16-16-16h-32c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h16c35.3 0 64-28.7 64-64s-28.7-64-64-64h-16c-11.7 0-22.6 3.1-32 8.6V224c0-17.7 14.3-32 32-32h32c8.8 0 16-7.2 16-16m-48 144c-17.7 0-32-14.3-32-32s14.3-32 32-32h16c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})
  );
}

export default LanCircle6;
