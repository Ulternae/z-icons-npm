import React from 'react';

export function MinaArrowRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6"})
  );
}

export default MinaArrowRight;
