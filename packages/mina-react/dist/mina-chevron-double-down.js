import React from 'react';

export function MinaChevronDoubleDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m6 6 6 6 6-6M6 12l6 6 6-6"})
  );
}

export default MinaChevronDoubleDown;
