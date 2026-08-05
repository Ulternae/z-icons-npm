import React from 'react';

export function MinaToggleLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a5 5 0 0 0-5-5H8a5 5 0 0 0 0 10h8a5 5 0 0 0 5-5"}), React.createElement("path", {"d":"M5.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"})
  );
}

export default MinaToggleLeft;
