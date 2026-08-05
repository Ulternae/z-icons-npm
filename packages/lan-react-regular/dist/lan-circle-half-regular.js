import React from 'react';

export function LanCircleHalfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 53.6C116.3 75.2 48 157.7 48 256s68.3 180.8 160 202.4V53.5zM224.1 2C241.6-.2 256 14.3 256 32v448c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2"})
  );
}

export default LanCircleHalfRegular;
