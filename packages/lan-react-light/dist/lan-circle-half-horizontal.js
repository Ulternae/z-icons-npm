import React from 'react';

export function LanCircleHalfHorizontal({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M2.2 287.9C0 270.4 14.6 256 32.3 256h448c17.7 0 32.2 14.4 30 31.9C494.6 414.2 386.8 512 256.3 512S17.9 414.2 2.2 287.9m32.3.1c15.6 108.5 108.9 192 221.8 192S462.4 396.5 478 288H34.6z"})
  );
}

export default LanCircleHalfHorizontal;
