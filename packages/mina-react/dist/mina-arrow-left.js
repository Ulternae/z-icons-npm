import React from 'react';

export function MinaArrowLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19.5 12h-15m0 0 5.625-6M4.5 12l5.625 6"})
  );
}

export default MinaArrowLeft;
