import React from 'react';

export function MinaLetterISolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 6a1 1 0 0 0 0 2h2.125v8H9a1 1 0 1 0 0 2h6.25a1 1 0 1 0 0-2h-2.125V8h2.125a1 1 0 1 0 0-2z"})
  );
}

export default MinaLetterISolid;
