import React from 'react';

export function LanCircleHalfHorizontalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M499 256c7.2 0 13 6 12.9 13.2C505 404.4 393.1 512 256.2 512 125.6 512 17.9 414.2 2.1 287.9 0 270.4 14.5 256 32.2 256z"})
  );
}

export default LanCircleHalfHorizontalSolid;
