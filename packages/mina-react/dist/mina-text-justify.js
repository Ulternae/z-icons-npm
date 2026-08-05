import React from 'react';

export function MinaTextJustify({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 6h15m-15 4h15m-15 4h15m-15 4h15"})
  );
}

export default MinaTextJustify;
