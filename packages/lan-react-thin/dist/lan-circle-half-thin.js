import React from 'react';

export function LanCircleHalfThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M226 17.9C107.6 32.6 16 133.6 16 256s91.6 223.4 210 238.2c6.7.8 14-4.7 14-14.2V32c0-9.4-7.3-15-14-14.1M224.1 2C241.6-.2 256 14.3 256 32v448c0 17.7-14.4 32.2-31.9 30C97.8 494.3 0 386.6 0 256S97.8 17.7 224.1 2"})
  );
}

export default LanCircleHalfThin;
