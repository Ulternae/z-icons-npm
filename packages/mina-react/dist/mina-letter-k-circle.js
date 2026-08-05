import React from 'react';

export function MinaLetterKCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.75 8v4m0 0v4m0-4h.5m0 0 4.5 4m-4.5-4 4.5-4"})
  );
}

export default MinaLetterKCircle;
