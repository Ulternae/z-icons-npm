import React from 'react';

export function MinaLetterUCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9 8v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8"})
  );
}

export default MinaLetterUCircle;
