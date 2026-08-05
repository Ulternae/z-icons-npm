import React from 'react';

export function MinaLetterHCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.5 8v4m0 0v4m0-4h5m0-4v4m0 0v4"})
  );
}

export default MinaLetterHCircle;
