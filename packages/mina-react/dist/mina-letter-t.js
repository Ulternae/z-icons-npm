import React from 'react';

export function MinaLetterT({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8 7h3.75m0 0h3.75m-3.75 0v10"})
  );
}

export default MinaLetterT;
