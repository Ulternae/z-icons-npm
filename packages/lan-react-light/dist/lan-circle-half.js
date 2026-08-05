import React from 'react';

export function LanCircleHalf({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 34.3C115.5 49.8 32 143.2 32 256s83.5 206.2 192 221.7V34.2zm.1-32.3C241.6-.2 256 14.3 256 32v448c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2"})
  );
}

export default LanCircleHalf;
