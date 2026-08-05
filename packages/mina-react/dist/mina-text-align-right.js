import React from 'react';

export function MinaTextAlignRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 6h15m-10 4h10m-15 4h15m-10 4h10"})
  );
}

export default MinaTextAlignRight;
