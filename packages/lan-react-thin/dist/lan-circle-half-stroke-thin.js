import React from 'react';

export function LanCircleHalfStrokeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264 495.9V16.2c128.8 4.2 232 110 232 239.9S392.8 491.6 264 495.9m-16 0C119.2 491.6 16 385.9 16 256S119.2 20.4 248 16.1v479.7zm8 16.1a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
  );
}

export default LanCircleHalfStrokeThin;
