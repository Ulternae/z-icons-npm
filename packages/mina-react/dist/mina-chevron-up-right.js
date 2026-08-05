import React from 'react';

export function MinaChevronUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16.121 16.364V7.879H7.636"})
  );
}

export default MinaChevronUpRight;
