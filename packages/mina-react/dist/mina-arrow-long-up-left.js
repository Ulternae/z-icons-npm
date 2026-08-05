import React from 'react';

export function MinaArrowLongUpLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5 11V5m0 0h6M5 5l14 14"})
  );
}

export default MinaArrowLongUpLeft;
