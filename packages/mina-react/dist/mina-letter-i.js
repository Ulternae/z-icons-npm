import React from 'react';

export function MinaLetterI({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 7h3.125m0 0h3.125m-3.125 0v10m3.125 0h-3.125m0 0H9"})
  );
}

export default MinaLetterI;
