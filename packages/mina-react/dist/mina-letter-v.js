import React from 'react';

export function MinaLetterV({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m8 7 3.75 10L15.5 7"})
  );
}

export default MinaLetterV;
