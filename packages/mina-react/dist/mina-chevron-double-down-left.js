import React from 'react';

export function MinaChevronDoubleDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6.257 9.257v8.486h8.486"}), React.createElement("path", {"d":"M10.257 5.257v8.486h8.486"})
  );
}

export default MinaChevronDoubleDownLeft;
