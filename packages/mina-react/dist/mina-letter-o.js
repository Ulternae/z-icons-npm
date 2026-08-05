import React from 'react';

export function MinaLetterO({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 14.5v-5A2.5 2.5 0 0 1 10.5 7H13a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 13 17h-2.5A2.5 2.5 0 0 1 8 14.5"})
  );
}

export default MinaLetterO;
