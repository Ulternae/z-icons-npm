import React from 'react';

export function MinaLetterX({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m8 7 7.5 10M8 17l7.5-10"})
  );
}

export default MinaLetterX;
