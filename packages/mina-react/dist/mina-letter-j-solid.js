import React from 'react';

export function MinaLetterJSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15.25 6a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5 1 1 0 1 0-2 0 3.5 3.5 0 0 0 3.5 3.5h1.25a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 0 0-1-1"})
  );
}

export default MinaLetterJSolid;
